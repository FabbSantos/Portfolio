import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faMars } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';


const Char: React.FC = () => {
    return (
        <div className="flex flex-col justify-end items-center md:max-w-lg">
            <img src="src/assets/pikachu_running.gif" width="300px" alt="Pikachu" />
            
            <div className="flex flex-row w-[300px] md:w-[400px] mb-4 px-5 py-1 bg-nameTitle rounded-xl items-center justify-around">

                <div className="flex flex-row justify-start items-center">
                    <img src="src/assets/gs_ball.png" alt="GS Ball" width={"40px"} className="pr-4" />
                    <h1 className="text-lg md:text-xl text-gray-700 font-bold ">Fabrício Bahiense</h1>
                </div>

                <div className="flex flex-row justify-between items-right">
                    <div className="text-bold pr-4 text-[.8em]"> Lv. 22</div>
                    <div className="items-right">  
                       <FontAwesomeIcon icon={faMars}  className=""/>
                    </div>
                </div>
                
            </div>
            <div className="type">

                <Typewriter
                    onInit={(typewritter) => {
                        typewritter.changeDelay(10)
                        typewritter.typeString("I'm an I.T guy, that loves love, technology, Pokémon, music and food.")
                            .start();
                    }}
                />

            </div>
        </div>
    )

}

export default Char;
