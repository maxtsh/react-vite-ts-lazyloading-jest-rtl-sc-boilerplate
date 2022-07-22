import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app") || createAppWrapper());

if (process.env.NODE_ENV === "production") {
  root.render(<App />);
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

function createAppWrapper() {
  const appDiv = document.createElement("div");
  appDiv.setAttribute("id", "app");
  document.body.appendChild(appDiv);
  return appDiv;
}
