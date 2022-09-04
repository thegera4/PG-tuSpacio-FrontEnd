import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL =
  process.env.REACT_APP_API || "http://localhost:3001/api";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="radrianquinana.us.auth0.com"
      clientId="AkuBbPJy68IUxJWGDCp9OpsbbDqEsEro"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
