import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    secondary: {
      300: "#3333dd",
      400: "#d84646",
      500: "#b92121"
    }
  }
};

ReactDOM.render ( <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>, document.getElementById( "root" ) );
