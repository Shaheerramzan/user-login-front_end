import { gql } from "@apollo/client";

export const GET_USER = gql`
  query UserByToken($token: String!) {
    userByToken(token: $token) {
      name
    }
  }
`;
