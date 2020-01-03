import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Modal from "react-modal";
import store from "./store";

import * as routes from "./config/routes";
import App from "./App";

Modal.setAppElement(`#${routes.ROOT}`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(routes.ROOT),
);
