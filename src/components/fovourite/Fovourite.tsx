import Mulher from "../../assets/images/fovourite/mulher_blusa_branca.png"
import Mulheres from "../../assets/images/fovourite/mulheres_blusa_branca.png"
import Seta from "../../assets/images/fovourite/arrow.png"
import GooglePlay from "../../assets/images/fovourite/google_play.png"
import ApleStore from "../../assets/images/fovourite/apple_store.png"
import Aplicativos from "../../assets/images/fovourite/mobile_app/Apps.png"
import Usuario from "../../assets/images/fovourite/mobile_app/usuario.png"
import MulherVermelho from "../../assets/images/fovourite/mobile_app/mulher_vestido_vermelho.png"
import MulherVestidoRosa from "../../assets/images/fovourite/mobile_app/mulher_vestido_rosa.png"
import MulherSaiaRodada from "../../assets/images/fovourite/mobile_app/mulher_saia_rodada.png"
import MulherVerde from "../../assets/images/fovourite/mobile_app/mulher_saia_verde.png"
import BotaoUsuario from "../../assets/images/fovourite/mobile_app/botao_usuario.png"
import CarrinhoCompras from "../../assets/images/fovourite/mobile_app/carrinho_compras.png"
import BotaoMenu from "../../assets/images/fovourite/mobile_app/botao_menu.png"
import BotaoHome from "../../assets/images/fovourite/mobile_app/botao_home.png"


const Fovourite = () => {
    return (
        <>
            <div className="bg-amareloBack h-[100%] w-[100%] flex flex-col justify-between pt-8 pr-12 pl-12">
                <a href="www.nickelfox.com" className=" font-poppins-regular">www.nickelfox.com</a>
                <div className="flex flex-row">
                    <div className="w-[10%]">
                        <p className="uppercase font-poppins font-bold text-9xl text-letrasAmarelo">y</p>
                        <p className="uppercase font-poppins font-bold text-9xl text-letrasAmarelo">o</p>
                        <p className="uppercase font-poppins font-bold text-9xl text-letrasAmarelo">u</p>
                        <p className="uppercase font-poppins font-bold text-9xl text-letrasAmarelo">n</p>
                        <p className="uppercase font-poppins font-bold text-9xl text-letrasAmarelo">g</p>
                    </div>

                    <div className="w-screen flex flex-col justify-evenly">
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


                        <div className="flex justify-around items-center">
                            <div>
                                <h3 className="font-bold">DOWNLOAD APP & GET THE VOUCHER!</h3>
                                <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>

                                <div className="flex flex-row">
                                    <img src={ApleStore} alt="Apple Store" />
                                    <img src={GooglePlay} alt="Google Play" />
                                </div>
                            </div>

                            <div className="bg-[#DDDDDD] w-[25%] shadow-lg shadow-cyan-500/50 rounded-b-xl">
                                <div className="flex flex-row justify-between">
                                    <img src={Aplicativos} alt="Ícone de aplicativos" />
                                    <img src={Usuario} alt="Foto do usuário" />
                                </div>

                                <p className="font-bold">Match your style</p>

                                <input type="search" name="search" placeholder="Search" />

                                <div className="flex justify-around ">
                                    <button className="cursor-pointer w-[67] h-[15] bg-[#EBD96B] p-2.5 rounded-xl">Trending Now</button>
                                    <button className="cursor-pointer w-[35] h-[10] bg-[#A5A5A5] p-2.5 rounded-xl">All</button>
                                    <button className="cursor-pointer w-[35] h-[10] bg-[#A5A5A5] p-2.5 rounded-xl">New</button>
                                </div>

                                <div className="flex flex-row justify-around">
                                    <div>
                                        <img src={MulherVermelho} alt="Mulher Vestido Vermelho" />
                                        <div>
                                            <p>Polkadot Red Dress</p>
                                            <p>Rs.  1,499.00</p>
                                        </div>
                                    </div>

                                    <div>
                                        <img src={MulherVestidoRosa} alt="Mulher Vestido Rosa" />
                                        <div>
                                            <p>Polkadot Red Dress</p>
                                            <p>Rs.  1,499.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-around">
                                    <img src={MulherSaiaRodada} alt="Mulher Saia Rodada" />
                                    <img src={MulherVerde} alt="Mulher Saia Verde" />
                                </div>

                                <div className="flex flex-row justify-around">
                                    <img src={BotaoHome} alt="Botao Home" />
                                    <img src={BotaoMenu} alt="Botao Menu" />
                                    <img src={CarrinhoCompras} alt="Botao Carrinho" />
                                    <img src={BotaoUsuario} alt="Botao Usuario" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Fovourite
