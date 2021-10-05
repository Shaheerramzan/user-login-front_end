import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #282c34;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function Header({ title }) {
  return <AppHeader>{title}</AppHeader>;
}

export default Header;
