import { useState } from 'react';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className='flex justify-center w-full flex-col md:flex-row'>
            <div className='flex justify-center items-center w-full'>
                <div className='flex justify-between items-center w-4/5 sm:w-2/3 h-14 lg:h-18 py-10'>
                    <a href="https://www.anove.ai" className='w-[10%] hover:cursor-pointer hidden lg:flex'>
                        <img src='src/assets/Primary Logo on Light BG.svg'/>
                    </a>
                    <a href="https://www.anove.ai" className='w-1/6 md:w-[10%] hover:cursor-pointer lg:hidden mr-6'>
                        <img src='src/assets/symbolic mark.svg'/>
                    </a>
                    <div className='hidden md:flex items-center'>
                        <a href="https://www.anove.ai">
                            <p className='text-md font-medium hover:cursor-pointer mr-10 transition-all duration-300 ease-in-out hover:text-mid-blue-700'>Main Page</p>
                        </a>
                    </div>
                    <img src="src/assets/list.svg" className="md:hidden" onClick={() => setIsDropdownOpen((prevState) => !prevState)} />
                </div>
            </div>
            {
                isDropdownOpen &&
                <div className='flex flex-col items-center bg-white pb-6 pt-2 gap-4 fade-in shadow-lg rounded-b-xl'>
                    <a href="https://www.anove.ai">
                        <p className='text-lg font-medium hover:cursor-pointer transition-all duration-300 ease-in-out'>Main Page</p>
                    </a>
                </div>
            }
        </div>
    )
}

export default Header;