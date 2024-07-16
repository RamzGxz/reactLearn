import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [view, setView] = useState(false)
    const navigate = useNavigate();

    const displayMenu = () => {
        setView(!view)
    }
    return(
        <div className="w-full max-w-screen-xl mx-auto flex justify-between py-5 sticky top-0  bg-white">
                <div className="w-8 h-8 rounded-md bg-black"></div>
                <div className="lg:inline-flex justify-between gap-5 hidden">
                <Link to='/' className="text-xl">Home</Link>
                <a href="" className="text-xl"
                onClick={()=>navigate('/halaman-2')}
                >Halaman 2</a>
                <a href="" className="text-xl">Galery</a>
                <a href="" className="text-xl">Team</a>
                <a href="" className="text-xl">Contact</a>
                </div>
                <button onClick={displayMenu} className="lg:hidden"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button>
                <div className={`lg:hidden ${view ? 'opacity-100': 'h-0 opacity-0'} z-50 transition-all duration-300 flex flex-col absolute top-20 bg-white w-full justify-between gap-5 `}>
                <a href="" className="text-xl">Home</a>
                <a href="" className="text-xl">About</a>
                <a href="" className="text-xl">Galery</a>
                <a href="" className="text-xl">Team</a>
                <a href="" className="text-xl">Contact</a>
                </div>
            </div>
    )
}
export default Navbar;