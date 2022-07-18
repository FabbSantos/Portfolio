import React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Social from './social'

function scroll() {
    const about = document.getElementById("about") as HTMLElement
    about.scrollIntoView({ block: "start", behavior: "smooth" })
}



const Masthead: React.FC = () => {
    return (
        <section id="home" className="bg-black text-white text-center text-3xl  min-h-[100vh] bg-all-black bg-cover bg-no-repeat">
            <div className="px-6 md:px-0  md:max-w-[1400px] flex flex-col justify-center items-center min-h-[90vh] mt-0 mx-auto">

                <motion.h1 className="max-w-3xl text-xm md:text-5xl mb-8"
                    initial={{ x: '-20vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                >
                    Hello, I'm <span className="text-nameColor font-semibold">Fabrício Bahiense</span>. A Web Developer that likes CSS stuff and is a Pokémon lover.
                </motion.h1>

                <motion.button onClick={() => { scroll() }} className="px-6 mt-6 py-2 border-2 border-white hover:border-nameColor hover:bg-nameColor hover:duration-300 transition ease-in-out"

                    initial={{ x: '-20vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                >
                    My Work <FontAwesomeIcon icon={faArrowDown} size="xs" bounce />
                </motion.button>


            </div>

            {/* < Social/> */}


        </section>
    )

}



export default Masthead;

// animate-appear