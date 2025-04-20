import Navbar from "./navbar/Navbar"
import LadyPink from "../../assets/images/hero/lady_pink.png"
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
                        <img src="/src/assets/images/hero/marcas/h&m.png" alt="Logo H&M" />
                        <img src="/src/assets/images/hero/marcas/obey.png" alt="Logo Obey" />
                        <img src="/src/assets/images/hero/marcas/shopify.png" alt="Logo Shopify" />
                        <img src="/src/assets/images/hero/marcas/lacoste.png" alt="Logo Lacoste" />
                        <img src="/src/assets/images/hero/marcas/levis.png" alt="Logo Levis" />
                        <img src="/src/assets/images/hero/marcas/amazon.png" alt="Logo Amazon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
