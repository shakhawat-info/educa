import React from "react";
import logo from  '../assets/svg/logo.svg';
const Navbar = () => {
  return (
    <nav className="bg-[#F3F8FF] py-[30px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#"><img src={logo} alt="logo" /></a>
          <div className="flex gap-[41px] items-center">
            <ul className="flex capitalize gap-x-9 font-poppins">
              <li><a href="#" className="text-sm text-[#424D65] font-medium">about</a></li>
              <li><a href="#" className="text-sm text-[#424D65] font-medium">courses</a></li>
              <li><a href="#" className="text-sm text-[#424D65] font-medium">teachers</a></li>
              <li><a href="#" className="text-sm text-[#424D65] font-medium">pricing</a></li>
            </ul>
            <div className="flex p-[5px] border-solid border-[#D0E5F2] border-2 rounded-[25px] items-center">
              <button type="button" className="bg-[#FE5600] px-[11px] py-[2px] rounded-[25px] text-white text-[12px] font-medium font-poppins uppercase">new</button>
              <p className="font-poppins text-[12px] font-medium ml-[5px]">Become a business partner on online</p>
            </div>
          </div>
          <div className="flex gap-x-[50px]">
            <a href="#" className="log-sign" >log in</a>
            <a href="#" className="log-sign" >sign in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
