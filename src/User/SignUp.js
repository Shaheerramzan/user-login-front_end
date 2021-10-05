import { AppContainer } from "../App";
import Header from "../Common/Header/Header";
import LoginForm from "../Common/Form";
import { CustomAlert } from "../styled/styledComponents";
import { useState } from "react";
import TokenProfile from "./tokenProfile";
import { Redirect } from "react-router-dom";

const UserSignup = () => {
  const [alert, setAlert] = useState(false);
  if (TokenProfile.getToken()) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <AppContainer>
      <Header title="User Sign Up" />
      {alert && (
        <CustomAlert
          link="http://localhost:3006/login"
          message="Email already registered or password is small. If you are a old user"
        />
      )}
      <LoginForm formType="signup" setAlert={setAlert} />
    </AppContainer>
  );
};

export default UserSignup;
