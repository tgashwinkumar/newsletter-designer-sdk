import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/tailwind.output.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
