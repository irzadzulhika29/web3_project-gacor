import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-white">
      <Login />
    </div>
  );
}

export default App;
