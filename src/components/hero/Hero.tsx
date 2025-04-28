import Navbar from "./navbar/Navbar"
import LadyPink from "../../assets/images/hero/lady_pink.png"
import Brands from "../brands/brands"


const Hero = () => {
    return (
        <>

            <div className="bg-amareloBack h-[100%] w-[100%] flex flex-col justify-between pt-8 pr-12 pl-12">
                <a href="www.nickelfox.com">www.nickelfox.com</a>
                <div className="bg-[#FFFFFF] flex flex-col w-[100%] pb-12 gap-5 mt-4">
                    <div className="bg-[#FFFFFF] pt-8 pr-12 pl-12 flex flex-col justify-evenly">
                        <Navbar />
                        <div className="bg-azulClaro flex justify-center h-90 rounded-2xl a">
                            <div className="w-[50%] flex flex-col justify-around items-center">
                                <h1 className="font-bold text-5xl">
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

                    <Brands />
                </div>
            </div>
        </>
    )
}

export default Hero
