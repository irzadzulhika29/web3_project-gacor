import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import metamaskLogo from "../../assets/icons/metamask-icon.svg";
import ethealth from "../../assets/ethealth.png";

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
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-cyan-200">
      <div className="flex w-[70%] h-[75%] shadow-lg rounded-lg overflow-hidden">
        {/* Kiri: Form */}
        <div className="w-1/2 bg-white/65 backdrop-blur-md p-10 flex flex-col">
          <div>
            <img src={ethealth} alt="Logo" className="w-64" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-black text-center mb-6 text-gray-800">
              Login
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg space-y-6 px-4"
            >
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

              <Button type="submit" size="lg" className="w-full mt-6">
                Login
              </Button>
            </form>

            <div className="mt-6 w-full max-w-lg px-4">
              <div className="text-center text-gray-600 mb-2">atau</div>
              <Button
                onClick={handleMetamaskLogin}
                size="sm"
                className="w-full flex items-center justify-center gap-3 bg-orange-400 text-white hover:bg-orange-500"
              >
                <img
                  src={metamaskLogo}
                  alt="Metamask Logo"
                  className="w-6 h-6"
                />
                Login menggunakan Metamask
              </Button>
            </div>
          </div>
        </div>

        {/* Kanan: Kosong atau Dekorasi */}
        <div className="w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-200"></div>
      </div>
    </div>
  );
};

export default Login;
