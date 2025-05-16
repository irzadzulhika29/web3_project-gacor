import React, { useState } from "react";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import ethealth from "../../assets/ethealth.png";

const Register = () => {
  const [name, setName] = useState("");
  const [metamask, setMetamask] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!name || !metamask) {
      setError("Name and Metamask are required.");
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role before continuing.");
    } else {
      setError("");
      console.log("Name:", name);
      console.log("Metamask:", metamask);
      console.log("Role:", role);
      // Lanjutkan ke halaman berikutnya atau kirim data ke backend
    }
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setError(""); // Bersihkan error saat memilih role
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-cyan-200">
      <div className="flex w-[70%] h-[75%] shadow-lg rounded-lg overflow-hidden">
        {/* Kiri: Form */}
        <div className="w-1/2 bg-white/65 backdrop-blur-md p-10 flex flex-col">
          <div className="">
            <img src={ethealth} alt="Logo" className="w-64" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-black text-center mb-6 text-gray-800">
              Registration
            </h2>

            {error && (
              <p className="text-red-600 font-medium mb-4 text-center">
                {error}
              </p>
            )}

            {!submitted ? (
              <form
                onSubmit={handleInitialSubmit}
                className="w-full max-w-lg space-y-6 px-4"
              >
                <Input
                  label="Name"
                  name="name"
                  size="md"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Metamask"
                  name="metamask"
                  size="md"
                  placeholder="Enter Metamask address"
                  value={metamask}
                  onChange={(e) => setMetamask(e.target.value)}
                />
                <Button type="submit" size="lg" className="w-full mt-6">
                  Registration
                </Button>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className="w-full px-4">
                <p className="text-center font-semibold text-xl text-gray-700 mb-4">
                  Choose your role:
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <Button
                    type="button"
                    onClick={() => handleRoleChange("Patient")}
                    size="sm"
                    className={`rounded-md px-4 py-2 transition-colors duration-200 focus:outline-none ${
                      role === "Patient"
                        ? "bg-[#42E8E0] text-white hover:bg-[#3cd7d1]"
                        : "bg-gray-500 text-gray-700 hover:bg-[#3cd7d1]"
                    }`}
                  >
                    Patient
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleRoleChange("Doctor")}
                    size="sm"
                    className={`rounded-md px-4 py-2 transition-colors duration-200 focus:outline-none ${
                      role === "Doctor"
                        ? "bg-[#42E8E0] text-white hover:bg-[#3cd7d1]"
                        : "bg-gray-500 text-gray-700 hover:bg-[#3cd7d1]"
                    }`}
                  >
                    Doctor
                  </Button>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full px-4 py-2 transition-colors duration-200 ${
                    role
                      ? "text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                  } focus:outline-none`}
                  disabled={!role}
                >
                  Submit Role
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Kanan: Kosong atau Dekorasi */}
        <div className="w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-200"></div>
      </div>
    </div>
  );
};

export default Register;
