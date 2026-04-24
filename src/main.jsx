import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import { NewsContextProvider } from "./NewsProject/context/NewsContext.jsx";
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store.js";

createRoot(document.getElementById("root")).render(
  // <NewsContextProvider>
  //   <App />
  // </NewsContextProvider>,
  <Provider store={store}>
    <App />
  </Provider>,
);
