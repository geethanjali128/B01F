import "./App.css";
import Container from "./assets/container.png";
import LOGO from "./assets/logo.png";
import Poster from "./assets/poster.png";

function App() {
  return (
    <div className="w-full h-auto">
      <div className="bg-customPurple flex flex-row-reverse items-center">
        <img
          className="w-274 h-38.22 py-[5px] px-3"
          src={Container}
          alt="above the nav"
        />
      </div>
      <nav className="flex justify-center items-center gap-14 ">
        <img className="w-249 h-96" src={LOGO} alt="logo" />
        <ul className="shadow-customLight flex items-center  font-medium gap-[63px]  py-[14px] px-[35px] bg-customGrey font-robot  text-16 leading-19.38">
          <li className="font-bold cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Our Services</li>
          <li className="cursor-pointer">IELTS & PTE</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <button className="w-139.6 h-40.24  rounded-[4.72px] bg-customPurple1 text-customWhite font-semibold text-15 leading-18.17">
          Login
        </button>
      </nav>
      <div>
        <img
          className="w-[1440px] h-503 border-[0.82px] border-solid border-customGray"
          src={Poster}
          alt="poster"
        />
      </div>
    </div>
  );
}

export default App;
