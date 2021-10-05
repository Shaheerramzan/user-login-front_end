import "./App.css";
import Header from "./Common/Header/Header";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import TokenProfile from "./User/tokenProfile";

export const AppContainer = styled.div`
  text-align: center;
  max-height: 100vh;
`;

const CustomButton = styled(Link)`
  padding: 40vh 25vw;
`;

const ButtonText = styled.div`
  font-size: 30px;
`;

function App() {
  if (TokenProfile.getToken()) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <AppContainer>
      <Header title="User Login App" />
      <Row>
        <Col>
          <CustomButton to="/login">
            <ButtonText>Login</ButtonText>
          </CustomButton>
        </Col>
        <Col>
          <CustomButton to="/signup">
            <ButtonText>SignUp</ButtonText>
          </CustomButton>
        </Col>
      </Row>
    </AppContainer>
  );
}

export default App;
