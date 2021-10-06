import { Button, Form } from "react-bootstrap";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { USER_LOGIN, USER_SIGNUP } from "../../graphql/mutations";
import TokenProfile from "../../User/tokenProfile";
import {
  LoginFormContainer,
  LoginFormHeading,
} from "../../styled/styledComponents";
import { Redirect } from "react-router-dom";

function LoginForm({ formType, setAlert }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(TokenProfile.getToken());
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userLogin, { data: loginData, loading: loginLoading }] =
    useMutation(USER_LOGIN);
  const [userSignUp, { data: signUpData, loading: signUpLoading }] =
    useMutation(USER_SIGNUP);

  useEffect(() => {
    setAlert(false);
  }, [email, password, setAlert]);

  const handleResult = () => {
    if (formType === "login") {
      if (loginData) {
        const { userLogin } = loginData;
        // setToken(userLogin ?  : userLogin);
        if (userLogin) {
          const { token: userToken } = userLogin;
          console.log(userToken);
          TokenProfile.setToken(userToken);
          setToken(userToken);
          setAlert(false);
        } else {
          setAlert(true);
        }
      }
    } else if (formType === "signup") {
      if (signUpData) {
        const { userSignUp } = signUpData;
        const token = userSignUp ? userSignUp.token : userSignUp;
        if (token) {
          console.log(signUpData);
          setAlert(false);
        } else {
          setAlert(true);
        }
      }
    }
  };

  useEffect(handleResult, [
    signUpData,
    signUpLoading,
    loginData,
    loginLoading,
    formType,
    setAlert,
  ]);

  if (TokenProfile.getToken()) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === "login") {
      userLogin({
        variables: {
          email: email,
          password: password,
        },
      }).then(({ data }) => console.log(data));
    } else if (formType === "signup") {
      console.log("what are we getting", email, password, name);
      userSignUp({
        variables: {
          email: email,
          password: password,
          name: name,
        },
      }).then((r) => console.log(r));
    }
  };
  return (
    <LoginFormContainer>
      <LoginFormHeading>User Login</LoginFormHeading>
      <Form onSubmit={handleSubmit}>
        {formType === "signup" && (
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={loginLoading || signUpLoading}
        >
          Submit
        </Button>
      </Form>
    </LoginFormContainer>
  );
}

LoginForm.defaultProps = {
  formType: "",
  setAlert: PropTypes.func,
};

export default LoginForm;
