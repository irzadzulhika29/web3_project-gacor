// components/TopBar.jsx
import React from "react";
import logo from "../../assets/ethealth.png"; // Ganti dengan path logo yang benar
import defaultProfile from "../../assets/icons/profile.svg"; // Fallback jika tidak ada profile image

const TopBar = ({ username = "Guest", profile }) => {
  return (
    <div className="w-full bg-[#9BFFF6] items-center justify-between px-6 shadow-sm">
      <div className="mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Kiri Atas */}
        <div className="">
          <img src={logo} alt="Logo" className="w-64" />
        </div>

        {/* Nama dan Foto Profil */}
        <div className="flex items-center gap-7">
          <span className="font-semibold text-black">{username}</span>
          <img
            src={profile || defaultProfile}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
