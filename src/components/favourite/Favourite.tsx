import YoungsFavourite from '../youngsFavourite/YoungsFavourite'
import Vouchers from '../vouchers/Vouchers'

const Favourite = () => {
    return (
        <>
            <div className="bg-amareloBack h-[100%] w-[100%] flex justify-between pt-8 pr-12 pl-12">
                <div className="flex flex-col justify-between items-center
w-[25%]">
                    <a href="www.nickelfox.com">www.nickelfox.com</a>
                    <div className="flex flex-col w-[100%] h-[85%] justify-evenly items-center">
                        <p className="uppercase font-bold text-8xl text-letrasAmarelo">y</p>
                        <p className="uppercase font-bold text-8xl text-letrasAmarelo">o</p>
                        <p className="uppercase font-bold text-8xl text-letrasAmarelo">u</p>
                        <p className="uppercase font-bold text-8xl text-letrasAmarelo">n</p>
                        <p className="uppercase font-bold text-8xl text-letrasAmarelo">g</p>
                    </div>
                </div>
                <div className="w-screen flex flex-col justify-evenly">
                    <YoungsFavourite />

                    <Vouchers />
                </div>
            </div >
        </>
    )
}

export default Favourite
