import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />

        <Routes />
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
