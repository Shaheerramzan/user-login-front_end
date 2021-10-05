import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import UserLogin from "./User/login";
import UserSignup from "./User/SignUp";
import NamePage from "./User/namePage";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/login" component={UserLogin} />
      <Route path="/signup" component={UserSignup} />
      <Route path="/dashboard" component={NamePage} />
    </BrowserRouter>
  );
}

export default Routes;
