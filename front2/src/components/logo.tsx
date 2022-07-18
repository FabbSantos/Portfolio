import React, { useCallback, useState, useMemo } from "react"
import { motion } from "framer-motion"


const white = "src/assets/fb-white.png";
const colored = "src/assets/fb-colored.png";
const poke = "src/assets/gs_ball.png";

const images = { white, colored, poke };

const Logo: React.FC = () => {

    const [selected, setSelected] = useState(images.poke);
    const [open, setOpen] = useState(false);


    return (
        <>
            <motion.img className="cursor-pointer" src={selected}


                drag
                dragConstraints={{
                    top: 0,
                    left: -10,
                    right: 1630,
                    bottom: 800,
                }}
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