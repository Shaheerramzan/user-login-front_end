import { AppContainer } from "../App";
import Header from "../Common/Header/Header";
import LoginForm from "../Common/Form";
import { useState } from "react";
import { CustomAlert } from "../styled/styledComponents";
import TokenProfile from "./tokenProfile";
import { Redirect } from "react-router-dom";

const UserLogin = () => {
  const [alert, setAlert] = useState(false);

  if (TokenProfile.getToken()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <AppContainer>
      <Header title="User Login" />
      {alert && (
        <CustomAlert
          link="http://localhost:3006/signup"
          message="Email or password is incorrect. If you are a new user"
        />
      )}
      <LoginForm formType="login" setAlert={setAlert} />
    </AppContainer>
  );
};

export default UserLogin;
