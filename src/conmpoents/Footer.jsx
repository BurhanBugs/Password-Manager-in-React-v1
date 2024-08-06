import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-around  bg-red-900 h-8 fixed  bottom-0 w-full '>
            <div className="logo hidden text-xl cursor-pointer sm:block ">
                <span className='text-yellow-600 font-bold'>&lt;</span><span className='text-white font-bold'>Password</span>
                <span className='text-yellow-500 font-semibold underline'>Manager/</span>
                <span className='text-yellow-600 font-bold'>&gt;</span>
            </div>

            <div className=" md:block hidden text-xs py-4 text-white">
                &copy; {new Date().getFullYear()} Password Manager. All rights reserved.
            </div>

            <div className="love flex ">
                <span className='text-yellow-600 font-bold flex items-center'>Made with <span className='flex items-center px-2 cursor-pointer'><lord-icon
                    src="https://cdn.lordicon.com/pzetejwe.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#e83a30"
                >
                </lord-icon></span>  by </span>
                <span className='text-yellow-500 font-semibold flex items-center px-2'>Burhan Ali Baig</span>
            </div>


        </div>
    )
}

export default Footer
