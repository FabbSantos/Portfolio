import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faGaugeHigh, faArrowsToEye, faAtom } from '@fortawesome/free-solid-svg-icons'

const Motives: React.FC = () => {
    return (
        <div id="motives">
            <div className="container flex flex-col items-center justify-center my-0 mx-auto min-h-[60vh]">
                <div className="header font-bold text-4xl mt-6 text-gray-700 text-center"> ABOUT MY WORK</div>
                <div className="under w-28 h-1 bg-gray-800 mt-3 mb-10 mx-auto"></div>

                <div className="about-row flex flex-row items-center justify-center">

                    <div className="first-two flex flex-col md:flex-row px-4 py-0 gap-4">
                        <div className="flex flex-col justify-start text-center items-center h-[230px] md:w-[230px]">
                            <div className="h-[100px] w-[100px] inline-block text-center relative flex-shrink-0">
                                <div className="hexagon h-full inline-block w-[calc(100%*0.57735)] bg-hexagon  px-4">
                                    <i className="text-white absolute right-[21%] top-[21%] z-[1]" >
                                        <FontAwesomeIcon icon={faGaugeHigh} size="3x" />
                                    </i>
                                </div>
                            </div>
                            <div className="description">
                                <h2 className="text-gray-700 font-bold text-2xl p-3">Fast</h2>
                                <p className="text-gray-700 text-sm md:text-base">Fast load times and lag free interaction, that's my goal. </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start text-center items-center h-[230px] md:w-[230px]">
                            <div className="h-[100px] w-[100px] inline-block text-center relative flex-shrink-0">
                                <div className="hexagon h-full inline-block w-[calc(100%*0.57735)] bg-hexagon">
                                    <i className="text-white absolute right-[26.5%] top-[25%] z-[1]">
                                        <FontAwesomeIcon icon={faMobileAlt} size="3x" />
                                    </i>
                                </div>
                            </div>
                            <div className="description">
                                <h2 className="text-gray-700 font-bold text-2xl p-3"> Responsive</h2>
                                <p className="text-gray-700 text-sm md:text-base">My highest priority. Always mobile first. </p>
                            </div>
                        </div>
                    </div>


                    <div className="second-two flex flex-col md:flex-row px-4 py-0 gap-4" >
                        <div className="flex flex-col justify-start text-center items-center h-[230px] md:w-[230px] ">
                            <div className="h-[100px] w-[100px] inline-block text-center relative flex-shrink-0">
                                <div className="hexagon h-full inline-block w-[calc(100%*0.57735)] bg-hexagon  px-4">
                                    <i className="text-white absolute right-[14%] top-[25%] z-[1]" >
                                        <FontAwesomeIcon icon={faArrowsToEye} size="3x" />
                                    </i>
                                </div>
                            </div>
                            <div className="description">
                                <h2 className="text-gray-700 font-bold text-2xl p-3"> Attractive</h2>
                                <p className="text-gray-700 text-sm md:text-base"> Layouts based in UX/UI concepts, well balanced. </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start text-center items-center h-[230px] md:w-[230px]">
                            <div className="h-[100px] w-[100px] inline-block text-center relative flex-shrink-0">
                                <div className="hexagon h-full inline-block w-[calc(100%*0.57735)] bg-hexagon">
                                    <i className="text-white absolute right-[10%] top-[11%] z-[1]">
                                        <FontAwesomeIcon icon={faAtom} size="4x" />
                                    </i>
                                </div>
                            </div>
                            <div className="description">
                                <h2 className="text-gray-700 font-bold text-2xl p-3"> Dynamic</h2>
                                <p className="text-gray-700 text-sm md:text-base"> Using animations, I make pages come to life!</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default Motives;