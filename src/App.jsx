import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Register from "./components/pages/register";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-white">
      <Register />
    </div>
  );
}

export default App;
