import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

/*
This is the starting point of the whole app.

- `document.getElementById("root")` finds the empty box in `index.html`.
- `createRoot(...).render(...)` tells React to draw our app inside that box.
- `<App />` is the main component, so everything on the screen begins there.
- `React.StrictMode` is a helper for developers. It checks for common mistakes
  while building the app.
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
