import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Checkbox, Item, Accordion, Icon, Header } from "semantic-ui-react";
import { changeFilterQuery } from "../../actions/filterProducts";
import filter from "./filter";

const MenuItem = props => {
  const { onChangeFilterQuery, filterQuery } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterParams, setFilterParams] = useState({});
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const getQueryString = filterObj => {
    let str = "";

    for (const property in filterObj) {
      str += property + "=";
      filterObj[property].map(elem => {
        str += elem + ",";
      });
      str = str.slice(0, -1) + "&";
    }
    return str.slice(0, -1);
  };

  const handleChange = (e, data) => {
    console.log(data);
    if (data.checked) {
      const param = data.className;
      const value = data.label;
      if (filterParams[param] === undefined) {
        filterParams[param] = [value];
      } else {
        const isEqual = element => element === value;
        let index = filterParams[param].findIndex(isEqual);
        if (index > -1) {
          filterParams[param].splice(index, 1);
        } else {
          filterParams[param].push(value);
        }
      }
    } else {
    }
    onChangeFilterQuery(getQueryString(filterParams));
    console.log(filterParams);
  };

  return (
    <Accordion>
      {Object.keys(filter).map((key, index) => (
        <div key={key}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={handleClick}
          >
            <Header as="h3" block>
              <Icon name="dropdown" />
              {key.toUpperCase()}
            </Header>
          </Accordion.Title>

          <Accordion.Content active={activeIndex === index} index={index}>
            <Item.Group divided>
              {filter[key].map(i => (
                <Item key={i}>
                  <Item.Content verticalAlign="middle">
                    <Checkbox
                      toggle
                      defaultChecked={filterQuery.includes(i) || false}
                      className={key}
                      label={i}
                      onChange={handleChange}
                    />
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
};

const mapStateToProps = state => ({
  filterQuery: state.changeFilterQuery.query,
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilterQuery: queryString =>
      dispatch(changeFilterQuery(queryString)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
