import logo from "../assets/logo.jpg"
import { GrLanguage } from "react-icons/gr"
import { FaXmark, FaBars } from 'react-icons/fa6'
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" }
    ]
    return (
        <>
            {/* desktop */}
            <nav className="bg-white md:px-14 p-4 max-w-screen-2x1 mx-auto text-primary fixed top-0 right-0 left-0 border-b">
                <div className="text-1g container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-2x1 font-semibold flex items-center space-x-3 text-primary"><img src={logo} alt="Truck" className="w-10 inline-block items-center" /><span>XYZ</span></a>


                        <ul className="md:flex space-x-12 hidden"> {/* add hidden to make nav disappear*/}
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-300 text-primary">{link}</a>)
                            }
                        </ul>
                    </div>

                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="/" className="hidden lg:flex items-center hover:text-secondary"><GrLanguage className="mr-2" /><span>Language</span></a>
                        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign Up</button>
                    </div>

                    {/* menu button for mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (<FaBars className="w-6 h-6 text-primary" />)
                            }

                        </button>
                    </div>
                </div>
            </nav >

            {/* mobile */}
            <div className={`space-y-4 px-4 pt-5 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                <ul>
                    {
                        navItems.map(({ link, path }) => <li key={link}><a key={link} href={path} className="block hover:text-gray-300 text-primary">{link}</a></li>)
                    }
                </ul>
            </div >
        </>
    )
}

export default Navbar;