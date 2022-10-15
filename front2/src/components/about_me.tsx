import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react"
import fab from 'src/assets/fab.jpg';
import Char from "./char";
import Skills from "./skills";

const About__Me: React.FC = () => {

    return (
        <>
            <section
                id="desc"
                className=" relative text-black text-center text-3xl  min-h-[95vh] mb-2"
            >
                <div className="border-2 border-black m-5">
                    <div className="px-6 md:px-0  md:max-w-[1400px] flex flex-col justify-center items-center min-h-[94vh] mt-auto mx-auto">

                        <div className="w-full flex justify-around items-center">
                            < Char />
                            <div className="md:max-w-[400px]">
                                <Skills />
                            </div>
                        </div>

                        <div className="bottom-row absolute bottom-[15%]  ">
                            <motion.h2
                                className="max-w-3xl md:text-5xl   "
                                initial={{ x: "+40vw", opacity: 0 }}
                                animate={{ x: "40vw", opacity: 1 }}
                                transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                            >

                                <span className="font-bold text-[3rem]  italic">2022</span>
                            </motion.h2>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );

}



export default About__Me;
