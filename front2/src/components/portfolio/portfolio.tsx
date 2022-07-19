import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiamond, faMars } from '@fortawesome/free-solid-svg-icons'
import bar from '../../assets/bar1.jpg'
import './portfolio.css'



function mouseOver(e: React.MouseEvent<HTMLDivElement>) {
    if (!e?.currentTarget)
        return;

    const card = e.currentTarget;
    if (!card.classList.contains('flip'))
        card.classList.add('flip')
}

function mouseOut(e: React.MouseEvent<HTMLDivElement>) {
    if (!e?.currentTarget)
        return;

    const card = e.currentTarget;
    if (card.classList.contains('flip'))
        card.classList.remove('flip')
}

const Portfolio: React.FC = () => {
    return (
        <>
            <h2 className="font-bold text-4xl my-6 text-gray-700 text-center">My most recent work</h2>
            <div className="under w-28 h-1 bg-gray-800 mt-3 mb-10 mx-auto"></div>

            <div className="wrapper">
                <div className="col_third">
                    <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="hover panel">
                        <div className="front">
                            <div className="box1 bg-port-1 bg-cover shadow-lg">
                                
                            </div>
                        </div>
                        <div className="back">
                            <div className="box2 bg-port-blur bg-cover shadow-lg" >
                                <h3 className="font-bold text-2xl text-gray-700">Portfolio</h3>
                                <p className="text-black">That's the website you're seeing!</p>
                                <button className="py-2 px-5 rounded-sm border-slate-900 border-2 hover:border-nameColor hover:bg-nameColor hover:text-white text-black"> See more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col_third end">
                    <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="hover panel">
                        <div className="front">
                            <div className="box1 bg-port-bar bg-cover ">
                                {/* <img src={bar} alt="barzim" /> */}
                            </div>
                        </div>
                        <div className="back">
                            <div className="box2 bg-port-bar bg-cover blur-sm">
                                <h3>Bar with friends</h3>
                                <p></p>
                                <button className="py-2 px-5 rounded-sm border-slate-900 border-2 hover:bg-nameColor text-black transition-all transitio"> See more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}



export default Portfolio;
