import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import 'animate.css'

function HeaderTransparent() {
    const [openDropdown, setOpenDropdown] = useState("");
    const [hoveredDropdown, setHoveredDropdown] = useState("");
    const [hoveredText, setHoveredText] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (hoveredDropdown == 'anove' || hoveredText == 'anove') {
            setOpenDropdown('anove');
        } else if (hoveredDropdown == 'about' || hoveredText == 'about') {
            setOpenDropdown('about');
        } else if (hoveredDropdown == 'resources' || hoveredText == 'resources') {
            setOpenDropdown('resources');
        } else if (hoveredDropdown == 'solutions' || hoveredText == 'solutions') {
            setOpenDropdown('solutions');
        } else {
            setOpenDropdown('');
        }
    }, [hoveredText, hoveredDropdown])


    console.log(openDropdown)

    function toggleDropdown(name) {
        if (openDropdown === name) {
            setOpenDropdown('')
        } else {
            setOpenDropdown(name);
        }
    }

    return (
        <div className="w-[95vw] md:w-5/6 xl:w-2/3 flex flex-col text-white">
            <div className="flex justify-between items-center py-6">
                <img onClick={() => navigate("/")} src="/Primary Logo White.svg" className="w-[25vw] sm:w-[18vw] md:w-[12vw] xl:w-[7vw] cursor-pointer"/>
                <div className="hidden lg:flex gap-3 justify-between min-w-[30vw] text-lg text-nowrap">
                    <div>
                        <div className="flex cursor-pointer" onMouseEnter={() => setHoveredText('anove')} onMouseLeave={() => setHoveredText('')}>
                            <p>Anove™</p>
                            <img
                                className={`transform transition duration-500 ease-in-out ${openDropdown === 'anove' ? 'rotate-180' : 'rotate-0'}`}
                                src="/arrow_down (2).svg"
                            />
                        </div>
                        {
                            (openDropdown === 'anove') &&
                            <div onMouseLeave={() => setHoveredDropdown('')} onMouseEnter={() => setHoveredDropdown('anove')}>
                                <div className="z-10 absolute transform -translate-x-10 bg-white text-black p-4 rounded-lg shadow-lg w-48 divide-y animate__animated animate__fadeIn">
                                    <a href="#option1" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Product</a>
                                    <a href="#option2" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Pricing</a>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="flex cursor-pointer" onMouseEnter={() => setHoveredText('about')} onMouseLeave={() => setHoveredText('')}>
                            <p>About us</p>
                            <img
                                className={`transform transition duration-500 ease-in-out ${openDropdown === 'about' ? 'rotate-180' : 'rotate-0'}`}
                                src="/arrow_down (2).svg"
                            />
                        </div>
                        {
                            (openDropdown === 'about') &&
                            <div onMouseLeave={() => setHoveredDropdown('')} onMouseEnter={() => setHoveredDropdown('about')}>
                                <div className="z-10 absolute transform -translate-x-10 bg-white text-black p-4 rounded-lg shadow-lg w-48 divide-y animate__animated animate__fadeIn">
                                    <a href="#option1" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Who we are</a>
                                    <a href="#option2" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">What we did</a>
                                    <a href="#option3" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Vacancies</a>
                                    <a href="#option4" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Contact us</a>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="flex cursor-pointer" onMouseEnter={() => setHoveredText('resources')} onMouseLeave={() => setHoveredText('')}>
                            <p>Resources</p>
                            <img
                                className={`transform transition duration-500 ease-in-out ${openDropdown === 'resources' ? 'rotate-180' : 'rotate-0'}`}
                                src="/arrow_down (2).svg"
                            />
                        </div>
                        {
                            (openDropdown === 'resources') &&
                            <div onMouseLeave={() => setHoveredDropdown('')} onMouseEnter={() => setHoveredDropdown('resources')}>
                                <div className="z-10 absolute transform -translate-x-10 bg-white text-black p-4 rounded-lg shadow-lg w-48 divide-y animate__animated animate__fadeIn">
                                    <a href="#option1" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Blogs & Articles</a>
                                    <a href="#option2" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">News</a>
                                    <a href="#option3" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Whitepapers</a>
                                    <a href="#option4" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Events</a>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="flex cursor-pointer" onMouseEnter={() => setHoveredText('solutions')} onMouseLeave={() => setHoveredText('')}>
                            <p>Solutions</p>
                            <img
                                className={`transform transition duration-500 ease-in-out ${openDropdown === 'solutions' ? 'rotate-180' : 'rotate-0'}`}
                                src="/arrow_down (2).svg"
                            />
                        </div>
                        {
                            (openDropdown === 'solutions') &&
                            <div onMouseLeave={() => setHoveredDropdown('')} onMouseEnter={() => setHoveredDropdown('solutions')}>
                                <div className="z-10 absolute transform -translate-x-10 bg-white text-black p-4 rounded-lg shadow-lg w-48 divide-y animate__animated animate__fadeIn">
                                    <a href="#option1" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Industry</a>
                                    <a href="#option2" className="block hover:text-midblue transition-colors duration-300 ease-in-out p-2">Roles</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="hidden lg:flex gap-5 justify-between items-center">
                    <p className="cursor-pointer text-lg">Log in</p>
                    <button
                        type="button"
                        className="flex gap-2 rounded-xl bg-white bg-opacity-25 bg-tra px-7 py-3 text-lg font-semibold shadow-sm ring-1 ring-inset ring-white group"
                    >
                        Get Anove
                        <img className='-rotate-90 transform translate-x-0 group-hover:translate-x-2 transition duration-500 ease-in-out'src="/arrow_down (2).svg" />
                    </button>
                </div>
                <img onClick={() => toggleDropdown('burger')} className="flex lg:hidden w-[8vw]" src="/menu_burger.svg"/>
                {openDropdown === 'burger' && <div className="absolute top-24 left-0 bg-white w-full text-black p-4">
                    <div className="flex flex-col text-lg">
                        <div className="flex justify-between">
                            <p>Anove™</p>
                            <img
                                src="/arrow_down (2) - Copy.svg"
                            />
                        </div>
                    </div>
                </div>}
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default HeaderTransparent;