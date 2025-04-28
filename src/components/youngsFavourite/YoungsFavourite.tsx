import Mulher from "../../assets/images/fovourite/mulher_blusa_branca.png"
import Mulheres from "../../assets/images/fovourite/mulheres_blusa_branca.png"
import Seta from "../../assets/images/fovourite/arrow.png"

const YoungsFavourite = () => {
    return (
        <>
            <h2 className="font-black text-3xl">Youngs Favourite</h2>

            <div className="w-[100%] flex justify-around">
                <div>

                    <img src={Mulheres} alt="Mulheres blusa branca" className="w-[474.4px] h-[325.51]" />


                    <div className="flex justify-between">
                        <div>
                            <p>Trending on instagram</p>
                            <p>Explore Now!</p>
                        </div>

                        <div>
                            <img src={Seta} alt="Seta direita" />
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Mulher} alt="Mulher blusa branca" className="w-[474.4px] h-[325.51]" />

                    <div className="flex justify-between">
                        <div>
                            <p>All Under $40</p>
                            <p>Explore Now!</p>
                        </div>

                        <div>
                            <img src={Seta} alt="Seta direita" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoungsFavourite
