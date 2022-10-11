import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react"
import Typewriter from 'typewriter-effect';
import fab from 'src/assets/fab.jpg';

const About__Me: React.FC = () => {

    return (
        <>
            <section
                id="desc"
                className=" relative text-black text-center text-3xl  min-h-[95vh] mb-2"
            >
                <div className="border-2 border-black m-5">
                    <div className="px-6 md:px-0  md:max-w-[1400px] flex flex-col justify-center items-center min-h-[94vh] mt-auto mx-auto">

                        <motion.div className="uppercase text-base max-w-[400px] min-w-[200px] text-black absolute top-[21%] right-[10%]"

                        >
                            <Typewriter
                                onInit={(typewritter) => {
                                    typewritter.changeDelay(10)
                                    typewritter.typeString("I'm a I.T guy, that loves love,     technology, Pokémon, music and food.")
                                        .start();
                                }}
                            />
                        </motion.div>



                        <motion.h1
                            className="max-w-3xl md:text-5xl mb-8  absolute left-1/3 md:left-[15%] top-[15%]"
                            initial={{ x: "-20vw", opacity: 0 }}
                            animate={{ x: "-5vw", opacity: 1 }}
                            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                        >
                            <span className="f font-bold text-[8rem]  font-serif">Projects</span>
                        </motion.h1>

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
