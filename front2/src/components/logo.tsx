import React, { useCallback, useState, useMemo } from "react"
import { motion } from "framer-motion"

const white = "src/assets/fb-white.png";
const colored = "src/assets/fb-colored.png";

const images = { white, colored };

const Logo: React.FC = () => {

    const [selected, setSelected] = useState(images.white);
    const [open, setOpen] = useState(false);


    return (
        <>
            <motion.img className="cursor-pointer" src={selected}

                onMouseOver={() => setSelected(images.colored)}

                onMouseLeave={() => setSelected(images.white)} width={70} height={70} alt="Fabrício Bahiense"


                initial={{ opacity: 0, position: "absolute", top: "50%", left: "50%" }}
                animate={{ opacity: 1, position: "absolute", top: "5%", left: "6%", cx: [null, 100, 200] }}
                transition={{ delay: 1 }}

                whileHover={{
                    transition: { duration: 0.2, type: "spring", stiffness: 100 },
                }}

                viewport={{ once: true }}
            >

            </motion.img>


        </>
    )


}

export default Logo;