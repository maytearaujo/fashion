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

            <div className="bg-amareloBack h-[100%] w-[100%] flex flex-col justify-between pt-8 pr-12 pl-12">

                <a href="www.nickelfox.com" className=" font-poppins-regular">www.nickelfox.com</a>
                <div className="bg-[#FFFFFF] flex flex-col w-[100%] pb-12 gap-5 mt-4">
                    <div className="bg-[#FFFFFF] pt-8 pr-12 pl-12 flex flex-col justify-evenly">
                        <Navbar />
                        <div className="bg-azulClaro flex justify-center h-90 rounded-2xl a">
                            <div className="w-[50%] flex flex-col justify-around items-center">
                                <h1 className="font-poppins font-bold text-5xl">
                                    <p className="p-1">LET’S</p>
                                    <p className="p-1">EXPLORE</p>
                                    <p className="bg-amarelo p-1">UNIQUE</p>
                                    <p className="p-1">CLOTHES.</p>
                                </h1>

                                <p className="text-2xl text-[#191818]">Live for Influential and Innovative fashion!</p>

                                <button className="text-branco bg-preto p-4 rounded-lg cursor-pointer">SHOP NOW</button>
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
