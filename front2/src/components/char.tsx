import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faMars } from '@fortawesome/free-solid-svg-icons'

const Char: React.FC = () => {
    return (
        <div className="flex flex-col justify-end items-center md:max-w-lg">
            <img src="src/assets/pikachu_running.gif" width="300px" alt="Pikachu" />
            
            <div className="flex flex-row w-[300px] md:w-[400px] mb-4 px-5 py-1 bg-nameTitle rounded-xl items-center justify-around">

                <div className="flex flex-row justify-start items-center">
                    {/* <FontAwesomeIcon icon={faDiamond} size="1x" className="pr-4"/> */}
                    <img src="src/assets/gs_ball.png" alt="GS Ball" width={"40px"} className="pr-4" />
                    <h1 className="text-lg md:text-xl text-gray-700 font-bold ">Fabrício Bahiense</h1>
                </div>

                <div className="flex flex-row justify-between items-right">
                    <div className="text-bold pr-4"> Lv. 22</div>
                    <div className="items-right">  
                       <FontAwesomeIcon icon={faMars} size="1x" className=""/>
                    </div>
                </div>
                
            </div>
            <p className="pb-10 text-sm md:text-lg text-gray-700 text-center"> I'm a Front-End Developer for <span className="text-nameColor">Hagens</span> in Rio, Brazil. I'm passionate about CSS, animations, UI effects and... Pokémon. </p>
        </div>
    )

}

export default Char;
