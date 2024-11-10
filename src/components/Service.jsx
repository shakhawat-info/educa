import React from "react";
import pen from '../assets/svg/pen.svg';
import layer from '../assets/svg/layer.svg';
import code from '../assets/svg/coding.svg';
const Service = () => {
  return (
    <section className="mt-[160px] mb-[200px]">
      <div className="container">
        <div className="text-center">
            <h2 className="head">Services</h2>
        </div>
        <div className="flex justify-between gap-x-[40px] mt-[120px]">
            <div className="p-[45px] grow bg-[#FBFBFB] rounded-[8px]">
                <div className="w-[88px] h-[88px] rounded-full bg-[#F3EBFF] grid place-items-center" ><img className="mt-[15px]" src={pen} alt="pen" /></div>
                <h3 className="text-[24px] font-bold font-poppins leading-[132.5%] text-[#2A2E36] mt-[80px]">Graphic Design</h3>
                <p className="paragraph mt-[18px]">Graphic design is a craft where professionals create visual content to communicate and the messages. By applying visual hierarchy and page layout techniques</p>
            </div>
            <div className="p-[45px] grow bg-[#FBFBFB] rounded-[8px]">
                <div className="w-[88px] h-[88px] rounded-full bg-[#E5FCFF] grid place-items-center" ><img className="mt-[15px]" src={layer} alt="layer" /></div>
                <h3 className="text-[24px] font-bold font-poppins leading-[132.5%] text-[#2A2E36] mt-[80px]">Graphic Design</h3>
                <p className="paragraph mt-[18px]">Graphic design is a craft where professionals create visual content to communicate and the messages. By applying visual hierarchy and page layout techniques</p>
            </div>
            <div className="p-[45px] grow bg-[#FBFBFB] rounded-[8px]">
                <div className="w-[88px] h-[88px] rounded-full bg-[#FFEEE5] grid place-items-center" ><img className="mt-[15px]" src={code} alt="code" /></div>
                <h3 className="text-[24px] font-bold font-poppins leading-[132.5%] text-[#2A2E36] mt-[80px]">Graphic Design</h3>
                <p className="paragraph mt-[18px]">Graphic design is a craft where professionals create visual content to communicate and the messages. By applying visual hierarchy and page layout techniques</p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Service;