import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
