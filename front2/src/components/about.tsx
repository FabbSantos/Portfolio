import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Logo from "./logo";
import Typewriter from 'typewriter-effect';
import Portfolio from "./portfolio/portfolio";
import { Link } from "react-router-dom";

function scroll() {
    const about = document.getElementById("portfolio") as HTMLElement;
    about.scrollIntoView({ block: "start", behavior: "smooth" });
}

const About: React.FC = () => {

    const variants: Variants = {
        open: { width: "90vw", opacity: 1, height: "18vh", visibility: "visible", color: "white" },
        closed: { width: 0 }
    };

    const [current, setCurrent] = useState<number | null>(null);

    return (
        <>
            <section
                id="about"
                className=" text-black text-center text-3xl  min-h-[95vh] mb-2"
            >
                <div className="border-2 border-black m-5">
                    <Logo />
                    <div className="px-6 md:px-0  md:max-w-[1400px] flex flex-col justify-center items-center min-h-[94vh] mt-auto mx-auto">

                        <motion.div className="uppercase text-base max-w-[400px] min-w-[200px] text-black absolute top-[21%] right-[10%]">
                            <Typewriter
                                onInit={(typewritter) => {
                                    typewritter.changeDelay(10)
                                    typewritter.typeString("So, I understand. You want to know about me. That's awkward. ")
                                        .start();
                                }}
                            />
                        </motion.div>



                        <motion.h2
                            className="max-w-3xl md:text-5xl mb-8  absolute left-1/3 md:left-[15%] top-[15%]"
                            initial={{ x: "-20vw", opacity: 0 }}
                            animate={{ x: "-5vw", opacity: 1 }}
                            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                        >
                            <span className="f font-bold text-[8rem]  font-serif">About</span>
                        </motion.h2>

                        <div className="menu-wrapper">
                            <motion.ul className="menu inline"
                            >
                                <li
                                    className="menu_item"
                                    onMouseEnter={() => {
                                        setCurrent(1);
                                    }}
                                    onMouseLeave={() => {
                                        setCurrent(null);
                                    }}
                                >
                                    <div className="item_wrapper">
                                        <span className="num z-20">01</span>
                                        <span className="name z-20">work</span>
                                    </div>

                                    <motion.div
                                        className=" bg "
                                        animate={current == 1 ? "open" : "closed"}
                                        variants={variants}
                                    >
                                        <span className="num z-20">01</span>
                                        <span className="name z-20"> <Link to="/work">work</Link></span>
                                    </motion.div>
                                </li>

                                <li
                                    className="menu_item"
                                    onMouseEnter={() => {
                                        setCurrent(2);
                                    }}
                                    onMouseLeave={() => {
                                        setCurrent(null);
                                    }}
                                >
                                    <div className="item_wrapper">
                                        <span className="num">02</span>
                                        <span className="name">about</span>
                                    </div>
                                    <motion.div
                                        className=" bg "
                                        animate={current == 2 ? "open" : "closed"}
                                        variants={variants}
                                    >
                                        <span className="num z-20">02</span>
                                        <span className="name z-20"><Link to="/about">about</Link></span>
                                    </motion.div>
                                </li>

                                <li
                                    className="menu_item"
                                    onMouseEnter={() => {
                                        setCurrent(3);
                                    }}
                                    onMouseLeave={() => {
                                        setCurrent(null);
                                    }}
                                >
                                    <div className="item_wrapper">
                                        <span className="num">03</span>
                                        <span className="name">contact</span>
                                    </div>
                                    <motion.div
                                        className=" bg"
                                        animate={current == 3 ? "open" : "closed"}
                                        variants={variants}
                                    >
                                        <span className="num z-20">03</span>
                                        <span className="name z-20">contact</span>
                                    </motion.div>
                                </li>

                                <li
                                    className="menu_item"
                                    onMouseEnter={() => {
                                        setCurrent(4);
                                    }}
                                    onMouseLeave={() => {
                                        setCurrent(null);
                                    }}
                                >
                                    <div className="item_wrapper">
                                        <span className="num">04</span>
                                        <span className="name">fun</span>
                                    </div>
                                    <motion.div
                                        className=" bg "
                                        animate={current == 4 ? "open" : "closed"}
                                        variants={variants}
                                    >
                                        <span className="num">04</span>
                                        <span className="name">fun</span>
                                    </motion.div>
                                </li>
                            </motion.ul>
                        </div>

                        <div className="bottom-row absolute bottom-[15%]">

                            <div className="uppercase text-base max-w-[250px] min-w-[200px] text-black">
                                <Typewriter
                                    onInit={(typewritter) => {
                                        typewritter.changeDelay(10)
                                        typewritter.typeString("Let me take you into a story... ")
                                            .start();
                                    }}
                                />
                            </div>

                            <div className="flex flex-row justify-evenly">
                                <Link to="/">
                                    <motion.button className="goto relative flex flex-row border-2 border-black px-10 py-4"
                                        initial = {{ opacity: 0 }}
                                        animate = {{ opacity: 1 }}
                                        transition = {{ delay: 2 }}
                                    >
                                        take me
                                    </motion.button>
                                </Link>
                            </div>

                            <motion.h2
                                className="max-w-3xl md:text-5xl   "
                                initial={{ x: "+40vw", opacity: 0 }}
                                animate={{ x: "0vw", opacity: 1 }}
                                transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                            >

                                <span className="font-bold text-[8rem]  font-serif">Me</span>
                            </motion.h2>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;