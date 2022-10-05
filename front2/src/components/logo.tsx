import React, { useCallback, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"

const white = "src/assets/fb-white.png";
const colored = "src/assets/fb-colored.png";
// const poke = "src/assets/gs_ball.png";

const images = { white, colored,  };

// interface FiberNode {
//     memoizedProps: {
//         style: {
//             top: string,
//             left: string,
//         }
//     }
// }

const Logo: React.FC = () => {

<<<<<<< HEAD
    const [selected, setSelected] = useState(images.colored);
    // const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
    // const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight);
    // const test = useRef<HTMLImageElement>(null);
=======
    const [selected, setSelected] = useState(images.poke);
    // const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
    // const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight);
    const test = useRef<HTMLImageElement>(null);
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5


    // addEventListener("resize", () =>{

<<<<<<< HEAD
    //     if (test.current)
    //         test.current.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)'
=======
    //     // debugger
    //     // if (test.current) {
    //     //     debugger
    //     //     const node: FiberNode = Object.values(test.current).filter(n => n.constructor.name == 'FiberNode').at(0);
    //     //     node.memoizedProps.style.top = node.memoizedProps.style.left = '0%';
    //     //     test.current.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)'
    //     // }
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5
    //     setClientWidth (document.documentElement.clientWidth)
    //     setClientHeight (document.documentElement.clientHeight)    
    
    // })
<<<<<<< HEAD
=======

    const constraintsRef = useRef(null);
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5


    return (
        <>
<<<<<<< HEAD
            <motion.img className="logo cursor-pointer" src={selected}
                // ref={test}

                // drag
=======
            <motion.div className="drag-area" ref={constraintsRef} style={{width: "90vw",height: "99vh",position: "absolute",top: "0",margin: "0 5vw",zIndex: -1,backgroundColor: "red"}} />
            <motion.img className="cursor-pointer" src={selected}
                ref={test}

                drag
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5
                // dragConstraints={{
                //     top: 10,
                //     left: 10,
                //     right: clientWidth - 250,
                //     bottom: clientHeight - 130,
                // }}
<<<<<<< HEAD
                // dragElastic={0.2}
                // dragTransition={{ bounceStiffness: 1000, bounceDamping: 80 }}
=======
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 80 }}
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5
                
                onMouseOver={() => setSelected(images.colored)}

                onMouseLeave={() => setSelected(images.colored)} width={35} height={35} alt="Fabrício Bahiense"


<<<<<<< HEAD
                initial={{ opacity: 0, position: "absolute", top: "5%", left: "50%" }}
                animate={{ opacity: 1, position: "absolute", top: "5%" }}
                transition={{ delay: 1 }}
=======
                initial={{ opacity: 1, position: "absolute", top: "2vh", left: "5vw" }}
                // animate={{ opacity: 1, position: "absolute", top: "5%", left: "6%", cx: [null, 100, 200] }}
                // transition={{ delay: 1 }}
>>>>>>> e87d048bf7e35e4f7a1435382809ee3a8a8a3ef5

                // whileHover={{
                //     transition: { duration: 0.2, type: "spring", stiffness: 100 },
                // }}

                viewport={{ once: true }}
            />

        </>
    )


}





export default Logo;