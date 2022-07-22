import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "containers/Home/Lazy";
import GlobalStyles from "styles/Global";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};
export default App;
