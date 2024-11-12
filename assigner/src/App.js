import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./assets/container.png";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-auto font-robot">
      <div className="bg-customPurple flex flex-row-reverse items-center">
        <img
          className="w-274 h-38.22 py-[5px] px-3"
          src={Container}
          alt="above the nav"
        />
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
