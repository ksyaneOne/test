import React  from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Modal from "react-modal";

import * as routes from "./config/routes";
import {store, persistor}  from "./store";
import App from './App';

Modal.setAppElement(`#${routes.ROOT}`);

const Loading = props => <div>Loading...</div>;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById(routes.ROOT),
);
