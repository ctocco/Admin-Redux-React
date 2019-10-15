import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import App from "./App.js";
import "./styles.scss";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
