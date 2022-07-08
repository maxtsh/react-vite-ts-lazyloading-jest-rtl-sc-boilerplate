import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "containers/Home/Lazy";
import GlobalStyles from "styles/Global";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </React.StrictMode>
  );
};
export default App;
