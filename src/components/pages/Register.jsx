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
    console.log("Metamask:", metamask);
    console.log("Password:", password);
    console.log("Role:", role);
  };

  const isFormFilled = metamask && password;

  return (
    <div className="relative flex items-center justify-center bg-gray-100 w-screen h-screen mx-auto">
      <div className="flex w-[60%] h-[70%] shadow-lg rounded-lg overflow-hidden bg-white/50 backdrop-blur-lg">
        {/* Kiri: Form */}
        <div className="w-3/4 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Daftar Akun
          </h2>

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

            {isFormFilled && (
              <div className="mt-6">
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
            )}

            {role && (
              <Button type="submit" size="md" className="mx-auto block mt-6">
                Daftar
              </Button>
            )}
          </form>
        </div>

        {/* Kanan: Box Tambahan */}
        <div className="w-1/2 bg-gray-200 p-12 flex items-center justify-center">
          <p className="text-center text-gray-600 text-sm">
            Konten tambahan di sini (gambar, info, atau dekorasi).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
