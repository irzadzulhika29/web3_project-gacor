import React from "react";

// Import ikon dari assets lokal
import HomeIcon from "../../assets/icons/home.svg";
import MedicalIcon from "../../assets/icons/medical.svg";
import MessageIcon from "../../assets/icons/message.svg";
import UserIcon from "../../assets/icons/user.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

const Sidebar = () => {
  return (
    <div className="w-24 bg-[#8CEDE5] flex flex-col items-center py-4 shadow-md">
      {/* Navigasi Ikon */}
      <div className="flex flex-col gap-10 items-center w-full mt-5">
        <img
          src={HomeIcon}
          alt="Home"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
        <img
          src={MedicalIcon}
          alt="Medical"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
        <img
          src={MessageIcon}
          alt="Message"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
        <img
          src={UserIcon}
          alt="User"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
        <hr className="w-18 border-red-600 my-2" />
        <img
          src={SettingsIcon}
          alt="Settings"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
      </div>
    </div>
  );
};

export default Sidebar;
