import React from "react";
import { Container , Header, Grid , Message } from "semantic-ui-react";

const Help = () => {
	return(
		<Container >
			<Header textAlign="center" as='h2'>FAQ</Header>
			<Grid columns={2}>
				<Grid.Row>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: How can I order</Message.Header>
   							 <p>A: You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account.</p>
  						</Message>
					</Grid.Column>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: Why should I buy online?</Message.Header>
   							 <p>A: You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account.</p>
  						</Message>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: How can I order</Message.Header>
   							 <p>A: Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time.</p>
  						</Message>
					</Grid.Column>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: What payment methods can I use?</Message.Header>
   							 <p>A: You can use all the major credit cards.</p>
  						</Message>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: How can I change delivery address?</Message.Header>
   							 <p>A: Sign in to your account and go to “my account”. On “my account” you can change all your contact information.</p>
  						</Message>
					</Grid.Column>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: What are the delivery charges?</Message.Header>
   							 <p>A: Delivery charges are dependent on the shipment requirements. If the products on your order are due to special requirements (for example dry ice) extra fee will be added to the shipment charges. You can see the shipping fees on the checkout process before the payment is made.</p>
  						</Message>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: Shipping time?</Message.Header>
   							 <p>A: Shipping time will be confirmed on the order confirmation document.</p>
  						</Message>
					</Grid.Column>
					<Grid.Column>
						  <Message>
    						<Message.Header>Q: Shipping cost?</Message.Header>
   							 <p>A: Shipping costs are dependent on your location and products on your order. Some products need to be shipped in dry ice. These dry ice shipments have a slightly higher shipping fee. Our online store shows the shipping fee and shipping cost automatically on the checkout.</p>
  						</Message>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Header textAlign="center"  as='h2'>Contacts</Header>
				<p>For general questions and issues</p>
				<p>Phone: +38063 *** ** **</p>
				<p>(8:00 a.m. - 5 p.m. CET)</p>
		</Container>
	)
};

export default Help;