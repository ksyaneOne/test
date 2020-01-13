import React, { useState } from "react";
import { connect } from "react-redux";
import { Checkbox, Item, Accordion, Icon, Header } from "semantic-ui-react";
import filter from "./filter";

const MenuItem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const handleChange = (e, data) => {
    console.log(e, "e");
    console.log(data, "data");
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
                      label={i.toUpperCase()}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
