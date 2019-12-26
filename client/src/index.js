import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Modal from "react-modal";

import * as routes from "./config/routes";
import store from "./store";
import App from "./App";

Modal.setAppElement(`#${routes.ROOT}`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(routes.ROOT)
);
