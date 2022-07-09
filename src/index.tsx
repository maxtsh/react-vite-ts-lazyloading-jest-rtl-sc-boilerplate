import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app") || createAppWrapper());
root.render(<App />);

function createAppWrapper() {
  const appDiv = document.createElement("div");
  appDiv.setAttribute("id", "app");
  document.body.appendChild(appDiv);
  return appDiv;
}
