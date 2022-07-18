import React, { useCallback, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"

const white = "src/assets/fb-white.png";
const colored = "src/assets/fb-colored.png";
const poke = "src/assets/gs_ball.png";

const images = { white, colored, poke };



const Logo: React.FC = () => {

    const [selected, setSelected] = useState(images.poke);
    const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
    const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight);
    const test = useRef<HTMLImageElement>(null);


    addEventListener("resize", () =>{

        if (test.current)
            test.current.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)'
        setClientWidth (document.documentElement.clientWidth)
        setClientHeight (document.documentElement.clientHeight)    
    
    })


    return (
        <>
            <motion.img className="cursor-pointer" src={selected}
                ref={test}

                drag
                dragConstraints={{
                    top: 10,
                    left: 10,
                    right: clientWidth - 250,
                    bottom: clientHeight - 130,
                }}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 80 }}
                
                onMouseOver={() => setSelected(images.poke)}

                onMouseLeave={() => setSelected(images.poke)} width={70} height={70} alt="Fabrício Bahiense"


                initial={{ opacity: 1, position: "absolute", top: "5%", left: "5%" }}
                // animate={{ opacity: 1, position: "absolute", top: "5%", left: "6%", cx: [null, 100, 200] }}
                // transition={{ delay: 1 }}

                // whileHover={{
                //     transition: { duration: 0.2, type: "spring", stiffness: 100 },
                // }}

                viewport={{ once: true }}
            >

            </motion.img>


        </>
    )


}





export default Logo;