import React from 'react';

import Input from '../CustomComponents/Input';
import { Label, ButtonIn, Div } from './StyleRegistrationForm';

const RegistrationForm = () => {
  return (
    <form>
      <Label>
        FIRST NAME
        <Input type="text" placeholder="Your first name" />
      </Label>
      <Label>
        LAST NAME
        <Input type="text" placeholder="Your last name" />
      </Label>
      <Label>
        EMAIL ADRESS
        <Input type="email" placeholder="Email" />
      </Label>
      <Label>
        PASSWORD
        <Input type="password" placeholder="Password" />
      </Label>
      <Input type="password" placeholder="Confirm password" />
      <Div>
        <ButtonIn type="button" content="REGISTER" />
      </Div>
    </form>
  );
};
export default RegistrationForm;
