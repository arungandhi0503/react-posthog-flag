// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ENV from "./env";
import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: ENV.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={ENV.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
