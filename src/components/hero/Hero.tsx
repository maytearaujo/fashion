import Navbar from "./navbar/Navbar"
import LadyPink from "../../assets/images/hero/lady_pink.png"
import HM from "../../assets/images/hero/marcas/h&m.png"
import Obey from "../../assets/images/hero/marcas/obey.png"
import Shopify from "../../assets/images/hero/marcas/shopify.png"
import Lacoste from "../../assets/images/hero/marcas/lacoste.png"
import Levis from "../../assets/images/hero/marcas/levis.png"
import Amazon from "../../assets/images/hero/marcas/amazon.png"
const Hero = () => {
    return (
        <>
            <div className="bg-[#FBECA3] opacity-100 h-dvh flex flex-col justify-center pt-8 pr-12 pl-12">
                <a href="www.nickelfox.com" className="pb-12">www.nickelfox.com</a>
                <div className="bg-[#FFFFFF] flex flex-col w-[100%] h-[100%] justify-between ">
                    <div className="bg-[#FFFFFF] pt-8 pr-12 pl-12 pb-3 flex flex-col justify-evenly">
                        <Navbar />
                        <div className="bg-[#C2C8DA] flex justify-center h-90 rounded-2xl">
                            <div className="w-[50%] flex flex-col justify-center items-center">
                                <h1>LET’S EXPLORE
                                    <span>
                                        UNIQUE
                                    </span>
                                    CLOTHES.
                                </h1>

                                <p>Live for Influential and Innovative fashion!</p>

                                <button>SHOP NOW</button>
                            </div>

                            <div className="w-[50%] flex justify-center">
                                <img src={LadyPink} alt="Lady Pink" className="w-[50%]" />

                            </div>
                        </div>
                    </div>

                    <div className="bg-[#EBD96B] flex flex-row justify-around">
                        <img src={HM} alt="Logo H&M" />
                        <img src={Obey} alt="Logo Obey" />
                        <img src={Shopify} alt="Logo Shopify" />
                        <img src={Lacoste} alt="Logo Lacoste" />
                        <img src={Levis} alt="Logo Levis" />
                        <img src={Amazon} alt="Logo Amazon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
