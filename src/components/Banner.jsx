import React from "react";
import elearning from "../assets/svg/elearning.svg";
import laptop from "../assets/images/bannerlaptop.png"

const Banner = ()=>{
    return(
        <section id="banner" className="bg-[#F3F8FF] pt-[70px] pb-[150px] relative">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        <img src={elearning} alt="elearning" />
                        <h1 className="head max-w-[460px] mt-[16px]">Dream big Do right.</h1>
                        <p className="paragraph mt-[40px] max-w-[388px]">Slite helps remote teams share ideas, save knowledge, and work together anytime, any place.</p>
                        <div className="flex pt-[40px]">
                            <a href="#" className="button">Get Started Now</a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={laptop} alt="laptop" className="absolute top-[8%] right-0"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;