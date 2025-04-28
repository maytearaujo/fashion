import MulherBlusaAmarela from "../../assets/images/banner/mulher_blusa_amarela.png"
const Banner = () => {
  return (
    <>
      <div className="bg-amarelo flex h-screen border border-4 border-amber-950">
        <div className="w-[50%]">
          <img src={MulherBlusaAmarela} alt="Mulher com Blusa Amarela" />
        </div>

        <div className="w-[100%] border border-4 border-blue-950">
          <div className="h-[80%] ">
            <h3 className="font-black text-8xl">
              <span className="bg-branco">
                PAYDAY<br></br>
              </span>
              SALE NOW</h3>
            <p>Spend minimal $100 get 30% off</p>
            <p>voucher code for your next purchase</p>
            <p className="font-bold">1 June - 10 June 2021</p>
            <p>*Terms & Conditions apply</p>
          </div>
            <button className="bg-preto">SHOP NOW</button>

        </div>
      </div>
      <div></div>
    </>
  )
}

export default Banner
