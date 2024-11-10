import React from "react";
import viewall from "../assets/svg/viewall.svg";
import faster from "../assets/svg/faster.svg";
import cheaper from "../assets/svg/cheaper.svg";
import message from "../assets/svg/message.svg";
import aboutitemoutline from "../assets/svg/aboutbgoutlines.svg"
const About = () => {
  return (
    <section className="pt-[200px] pb-[94px]">
      <div className="container">
        <div className="flex justify-between items-end">
          <div className="left">
            <span className="uppercase text-[#10ADFF] text-[20px] font-poppins font-semibold leading-[160.9%] tracking-[2.5px]">
              about us
            </span>
            <h2 className="heading">Get Started With Educa Studya.</h2>
          </div>
          <div className="right">
            <a href="#">
              <img src={viewall} alt="viewall" />
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-[120px]">
          <div className="flex items-center gap-x-[30px] px-[46px] py-[34px] relative group">
            <img src={aboutitemoutline} alt="aboutitemoutline" className="duration-[.4s] absolute top-[5%] left-0 opacity-0 group-hover:opacity-100"/>
            <div className="bg-[#00D9FF] w-[100px] h-[100px] rounded-full grid place-items-center">
              <img src={faster} alt="faster" />
            </div>
            <h3 className="head3">Faster</h3>
          </div>
          <div className="flex items-center gap-x-[30px] px-[46px] py-[34px] relative group">
            <img src={aboutitemoutline} alt="aboutitemoutline" className="duration-[.4s] absolute top-[-3%] left-0 opacity-0 group-hover:opacity-100"/>
            <div className="bg-[#FF5600] w-[100px] h-[100px] rounded-full grid place-items-center">
              <img src={cheaper} alt="cheaper" />
            </div>
            <h3 className="head3">Cheaper</h3>
          </div>
          <div className="flex items-center gap-x-[30px] px-[46px] py-[34px] relative group">
            <img src={aboutitemoutline} alt="aboutitemoutline" className="duration-[.4s] absolute top-[2%] left-0 opacity-0 group-hover:opacity-100"/>
            <div className="bg-[#FFC700] w-[100px] h-[100px] rounded-full grid place-items-center">
              <img src={faster} alt="faster" />
            </div>
            <h3 className="head3">At hand</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
