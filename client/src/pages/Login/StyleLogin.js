import styled from '@emotion/styled';

export const LoginBtn = styled.button`
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom: ${props => (props.isLoginForm ? '1px solid #fff;' : '1px solid rgba(0, 0, 0, 0);')}
  color: white;
  background: rgba(0, 0, 0, 0);
`;
export const RegistrationBtn = styled(LoginBtn)`
  border-bottom: ${props =>
    !props.isLoginForm ? '1px solid #fff;' : '1px solid rgba(0, 0, 0, 0);'};
`;
export const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10vh;
  margin-bottom: 20px;
`;
export const Div = styled.div`
  height: 100vh;
  background: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${`${process.env.PUBLIC_URL}/static/img/bg/bg1.jpeg`});
`;
export const WrapperForm = styled.div`
  width: 400px;
  margin: 0 auto;
`;
