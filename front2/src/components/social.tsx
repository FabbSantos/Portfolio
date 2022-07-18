import React, { useCallback, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Social: React.FC = () => {

    return (
        <>
            <motion.nav id="menu" className="circle-menu absolute h-20 w-[200px] bottom-[5%] left-[4%]">
                    initial={{ opacity: 0, position: "relative" }}
                    animate={{ opacity: 1, cx: [null, 100, 200] }}
                    transition={{ delay: 1 }}
                <menu className="relative w-full h-full flex flex-row">

                        <a href="#">
                            <li className="twitter"> <FontAwesomeIcon icon={faTwitter}  className="text-white" /> </li>
                        </a>

                </menu>
                
            </motion.nav>
        </>
    )


}

export default Social;