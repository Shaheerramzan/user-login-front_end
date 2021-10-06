import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;
export const USER_LOGOUT = gql`
  mutation UserLogout($token: String!) {
    userLogout(token: $token) {
      status
    }
  }
`;
export const USER_SIGNUP = gql`
  mutation UserSignUp($email: String!, $password: String!, $name: String!) {
    userSignUp(email: $email, password: $password, name: $name) {
      token
    }
  }
`;
