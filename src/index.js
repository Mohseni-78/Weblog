import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/css/index.css";
import { theme } from "./mui/theme";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./mui/theme";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_CMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  </ApolloProvider>
);
