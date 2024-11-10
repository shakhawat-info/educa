import React from "react";
import logo from "../assets/svg/logo.svg";
import send from "../assets/svg/send.svg";
const Footer = () => {
  return (
    <footer className="pt-[106px] bg-[#F3F8FF]">
      <div className="container">
        <div className="flex justify-between pb-[46px]">
          <div className="w-5/12">
            <img src={logo} alt="logo" />
            <p className="text-[#594D43] font-poppins font-semibold leading-[14px] tracking-[8.4px] mt-[66px] uppercase">
              contact
            </p>
            <a
              href="mailto:email@gmail.com"
              className="text-[#2A2E36] text-[30px] font-poppins font-bold leading-[40px] tracking-[-0.6px] mt-[8px]"
            >
              email@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-[#3D475E] font-poppins text-[15px] font-semibold leading-normal">
              Navigation
            </h4>
            <ul className="mt-[23px] flex flex-col gap-2.5">
              <li>
                <a href="#" className="paragraph">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="paragraph">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="paragraph">
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" className="paragraph">
                  Prince
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#3D475E] font-poppins text-[15px] font-semibold leading-normal">
            Resources
            </h4>
            <ul className="mt-[23px] flex flex-col gap-2.5">
              <li>
                <a href="#" className="paragraph">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="paragraph">
                  News Updates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#3D475E] font-poppins text-[15px] font-semibold leading-normal">
            Stay up to date
            </h4>
            <ul className="mt-[23px] flex flex-col gap-2.5">
              <li>
                <a href="#" className="paragraph max-w-[225px] inline-block">
                Stay Informed On How You Can Make a Difference
                </a>
              </li>
            </ul>
            <form action="#" className="w-[234px] h-[45px] bg-[#CCDBF1] p-[5px] relative rounded-md mt-[32px] border-solid border-2 border-[#c0c5cd]">
                <input type="email" placeholder="Your email address" className="w-4/5 h-full outline-none bg-transparent text-[#7A8398] text-[14px] font-poppins font-medium "/>
                <img src={send} alt="send" className="absolute right-[5px] top-[5px] p-[12px] bg-button-gradient rounded-[8px]"/>
            </form>
          </div>
        </div>
        <div className="py-[46px] text-center border-t-2 border-t-red-100 border-t-solid">
            <a href="#" className="text-[#4A556D] font-semibold font-poppins text-[14px]">© 2021 All Rights Reserved -  Educa.agency</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
