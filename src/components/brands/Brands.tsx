import HM from "../../assets/images/hero/marcas/h&m.png"
import Obey from "../../assets/images/hero/marcas/obey.png"
import Shopify from "../../assets/images/hero/marcas/shopify.png"
import Lacoste from "../../assets/images/hero/marcas/lacoste.png"
import Levis from "../../assets/images/hero/marcas/levis.png"
import Amazon from "../../assets/images/hero/marcas/amazon.png"
const Brands = () => {
    return (
        <>
            <div className="bg-[#EBD96B] flex flex-row justify-around">
                <img src={HM} alt="Logo H&M" />
                <img src={Obey} alt="Logo Obey" />
                <img src={Shopify} alt="Logo Shopify" />
                <img src={Lacoste} alt="Logo Lacoste" />
                <img src={Levis} alt="Logo Levis" />
                <img src={Amazon} alt="Logo Amazon" />
            </div>
        </>
    )
}

export default Brands
