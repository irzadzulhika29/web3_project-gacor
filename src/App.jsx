import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import SideBar from "./components/atoms/SideBar";
import TopBar from "./components/atoms/TopBar";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-white font-montserrat">
      <Homepage />
    </div>
  );
}

export default App;
