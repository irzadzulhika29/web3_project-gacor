import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import metamaskLogo from "../../assets/metamask-icon.svg"; // pastikan path ini sesuai

const Login = () => {
  const [metamask, setMetamask] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login manual:", metamask, password);
  };

  const handleMetamaskLogin = () => {
    console.log("Login menggunakan Metamask");
    // Tambahkan logika Web3 di sini
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Metamask Address"
            name="metamask"
            size="md"
            placeholder="Masukkan alamat Metamask"
            value={metamask}
            onChange={(e) => setMetamask(e.target.value)}
          />

          <Input
            label="Password"
            name="password"
            size="md"
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" size="lg" className="mx-auto block">
            Login
          </Button>
        </form>

        <div className="mt-6">
          <div className="text-center text-gray-600 mb-2">atau</div>

          <Button
            onClick={handleMetamaskLogin}
            size="sm"
            className="w-full flex items-center justify-center gap-3 bg-orange-400 text-white"
          >
            <img src={metamaskLogo} alt="Metamask Logo" className="w-6 h-6" />
            Login menggunakan Metamask
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
