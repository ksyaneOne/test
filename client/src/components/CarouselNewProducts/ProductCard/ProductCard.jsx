import React from 'react'
import { Card, Image, Button, Label } from 'semantic-ui-react'

class CardExampleCard extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <Card>
                <Image src="https://motokvartal.com.ua/images/28/diski_stsepleniya_jr_ebs2255-18758095883660_small4.webp" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two'>
                        <Label color='red'>
                            {product.previousPrice}$
            </Label>
                        <Button basic color='red'>
                            Buy
            </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default CardExampleCard