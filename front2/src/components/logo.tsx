import React, { useCallback, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const white = "src/assets/fb-white.png";
const colored = "src/assets/fb-colored.png";
// const poke = "src/assets/gs_ball.png";

const images = { white, colored, };

// interface FiberNode {
//     memoizedProps: {
//         style: {
//             top: string,
//             left: string,
//         }
//     }
// }

const Logo: React.FC = () => {

    const [selected, setSelected] = useState(images.colored);
    // const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
    // const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight);
    // const test = useRef<HTMLImageElement>(null);


    // addEventListener("resize", () =>{

    //     if (test.current)
    //         test.current.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)'
    //     setClientWidth (document.documentElement.clientWidth)
    //     setClientHeight (document.documentElement.clientHeight)    

    // })


    return (
        <>
            <Link to="/">
                <motion.img className="logo cursor-pointer sticky" src={selected}



                    onMouseOver={() => setSelected(images.colored)}

                    onMouseLeave={() => setSelected(images.colored)} width={35} height={35} alt="Fabrício Bahiense"


                    initial={{ opacity: 0, position: "absolute", top: "5%", left: "50%" }}
                    animate={{ opacity: 1, position: "absolute", top: "5%" }}
                    transition={{ delay: 1 }}

                    viewport={{ once: true }}
                />
            </Link>

        </>
    )


}





export default Logo;