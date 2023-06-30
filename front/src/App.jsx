import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes";
import authReducer from "./store";


import "./App.css";

function App() {
  const store = createStore(authReducer);

  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
