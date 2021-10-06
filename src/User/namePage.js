import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { Redirect } from "react-router-dom";
import TokenProfile from "./tokenProfile";
import { Button } from "react-bootstrap";
import { USER_LOGOUT } from "../graphql/mutations";

const NamePage = () => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(TokenProfile.getToken());
  const { data, loading } = useQuery(GET_USER, {
    variables: { token: token },
  });
  const [userLogout, { data: logoutData, loading: logoutLoading }] =
    useMutation(USER_LOGOUT);

  useEffect(() => {
    if (data) {
      const { userByToken } = data;
      setUserName(userByToken.name);
    }
  }, [data, loading]);

  useEffect(() => {
    if (logoutData) {
      const { userLogout } = logoutData;
      if (userLogout.status) {
        TokenProfile.removeToken();
        setToken("");
      }
    }
  }, [logoutLoading, logoutData]);

  const handleLogout = () => {
    userLogout({
      variables: {
        token,
      },
    }).then((r) => console.log(r));
  };

  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h1>HI {userName}</h1>
      <Button variant="primary" onClick={() => handleLogout()}>
        Logout
      </Button>
    </>
  );
};

export default NamePage;
