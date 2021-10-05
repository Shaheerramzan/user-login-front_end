import styled from "styled-components";
import { Alert } from "react-bootstrap";

export const LoginFormContainer = styled.div`
  padding: 10px;
  background: #375657ff;
  width: 30%;
  margin: 10vh 35% 0;
`;
export const LoginFormHeading = styled.h3`
  padding: 5vh 0;
`;
export const CustomAlert = ({ message, link }) => {
  return (
    <Alert variant="danger">
      {`${message} `}
      <Alert.Link href={link}>click here</Alert.Link>.
    </Alert>
  );
};
