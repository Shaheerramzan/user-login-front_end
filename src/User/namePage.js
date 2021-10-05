import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { Redirect } from "react-router-dom";
import TokenProfile from "./tokenProfile";

const NamePage = () => {
  const { data, loading } = useQuery(GET_USER, {
    variables: { token: TokenProfile.getToken() },
  });
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (data) {
      const { userByToken } = data;
      setUserName(userByToken.name);
    }
  }, [data, loading]);

  console.log(data);
  if (!TokenProfile.getToken()) {
    return <Redirect to="/" />;
  }
  return <h1>HI {userName}</h1>;
};

export default NamePage;
