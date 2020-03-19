import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
