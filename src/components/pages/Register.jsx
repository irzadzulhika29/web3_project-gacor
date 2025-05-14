import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";

const Register = () => {
  const [role, setRole] = useState("");
  const [metamask, setMetamask] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleChange = (e, selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role:", role);
    console.log("Metamask:", metamask);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Daftar Sebagai</h2>

        <div className="mb-6">
          <label className="font-montserrat text-gray-700 block mb-2">
            Pilih Role
          </label>
          <div className="flex space-x-4">
            <Button
              onClick={(e) => handleRoleChange(e, "Pasien")}
              size="sm"
              className={`${
                role === "Pasien"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Pasien
            </Button>
            <Button
              onClick={(e) => handleRoleChange(e, "Dokter")}
              size="sm"
              className={`${
                role === "Dokter"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Dokter
            </Button>
          </div>
        </div>

        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Metamask Address"
              name="metamask"
              size="sm"
              placeholder="Masukkan alamat Metamask"
              value={metamask}
              onChange={(e) => setMetamask(e.target.value)}
            />

            <Input
              label="Password"
              name="password"
              size="sm"
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleSubmit} size="md" className="mx-auto block">
              Daftar
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
