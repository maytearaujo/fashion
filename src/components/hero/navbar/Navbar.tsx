import Logo from "../../../assets/images/logo.png"
const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between pb-6">
            <div className="flex flex-row justify-between w-[8%]">
                <img src={Logo} alt="Logotipo" />
                <a href="/home" target="_blank" rel="noopener noreferrer">FASHION</a>
            </div>

            <div className="flex flex-row justify-between w-[40%]">
                <a href="#">CATALOGUE</a>
                <a href="#">FASHION</a>
                <a href="#">FAVOURITE</a>
                <a href="#">LIFESTYLE</a>
            </div>
        </nav>
    )
}

export default Navbar
