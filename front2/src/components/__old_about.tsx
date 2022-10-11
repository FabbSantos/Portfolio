import React from "react"
import Char from "./char";
import Motives from "./motives";
import Portfolio from "./portfolio/portfolio";
import Skills from "./skills";


const About: React.FC = () => {
    return (
        <section id="about" className="pb-20 px-10 md:max-w-[1400px] my-0 mx-auto">
            <Motives />
            <div className="flex flex-col md:flex-row justify-evenly md:pb-10">
                <Char />
                <div className="md:h-[500px] md:w-[500px] md:max-h-[500px] md:max-w-[500px]">
                    <Skills />
                </div>
            </div>

            <Portfolio />

        </section>
    )

}

export default About;
