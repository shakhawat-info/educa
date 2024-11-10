import React from "react";
import knowledge from '../assets/svg/knowledge.svg';
import featuresimg from '../assets/images/features.png';
import featuresimgtwo from '../assets/images/featuretwo.png';
import point from '../assets/svg/pint.svg';
import toolss from '../assets/svg/tools.svg';
import tolsimg from '../assets/images/tools.png'
const Features = ()=>{
    return(
        <section className="pt-[106px]">
            <div className="container">
                <div className="max-w-[580px] text-center mx-auto">
                    <h2 className="heading">Educa Studya Features</h2>
                </div>
                <div className="mt-[200px] flex justify-around items-center">
                    <div className="w-1/2">
                        <div className="w-[65px] h-[65px] bg-[#00D9FF] rounded-full grid place-items-center"><img src={knowledge} alt="knowledge" /></div>
                        <h2 className="mt-[16px] heading max-w-[545px]">Where collaboration meets knowledge</h2>
                        <p className="paragraph mt-[22px] max-w-[435px]">Dive into a doc together and express your first ideas, get feedback, map out a plan or write up the final documentation. Compose your most important work, together— no matter where you are in the world.</p>
                    </div>
                    <img src={featuresimg} alt="featuresimg"/>
                </div>
                <div className="mt-[100px] flex gap-x-[130px] items-center">
                    <img src={featuresimgtwo} alt="featuresimgtwo"/>
                    <div className="w-1/2">
                        <div className="w-[65px] h-[65px] bg-[#001CAF] rounded-full grid place-items-center"><img src={point} alt="point" /></div>
                        <h2 className="mt-[16px] heading max-w-[440px]">Get Started With Our Basic plan</h2>
                        <p className="paragraph mt-[22px] max-w-[425px]">This A-Z guide offers a series of simple, bite-sized explainers to help anyone understand what AI is, how it works and how it’s changing the world around us.</p>
                        <div className="overflow-hidden flex mt-[45px] w-[365px] h-[96px] justify-around items-center bg-[#F5F7FF] rounded-[25px]">
                            <button type="button" className="planbtn">Monthly</button>
                            <button type="button" className="planbtn planactive">Yearly</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[200px] flex justify-around items-center">
                    <div className="w-1/2">
                        <div className="w-[65px] h-[65px] bg-[#7118EF] rounded-full grid place-items-center"><img src={toolss} alt="toolss" /></div>
                        <h2 className="mt-[16px] heading max-w-[545px]">Integrate with your favorite tools.</h2>
                        <p className="paragraph mt-[22px] max-w-[435px]">t's a best-in-class product that isn't trying to replace the rest of your stack. That's why it integrates with everything else, including your spreadsheets, slide decks, flowcharts, task managers, and much more.</p>
                    </div>
                    <img src={tolsimg} alt="tolsimg"/>
                </div>
            </div>
        </section>
    )
}

export default Features;