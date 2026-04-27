import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import { NewsContextProvider } from "./NewsProject/context/NewsContext.jsx";
import { Provider } from "react-redux";
//import store from "./ReduxToolkit/store/store.js";
import store from "./EmployeeSystem/store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
