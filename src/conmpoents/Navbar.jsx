import React from 'react'

const Navbar = () => {
    return (
        <nav className='  flex justify-between sm:justify-around px-4 sm:px-0   h-16 items-center bg-red-900'>
            <div className="logo text-xl cursor-pointer ">
                <span className='text-yellow-600 font-bold'>&lt;</span><span className='text-white font-bold'>Password</span>
                <span className='text-yellow-500 font-semibold underline'>Manager/</span>
                <span className='text-yellow-600 font-bold'>&gt;</span>
            </div>

            <div className="githubcode flex items-center">

                <button  className='hidden items-center justify-center w-fit sm:flex border border-yellow-600 px-4 cursor-pointer rounded-full bg-yellow-800'>
                    <span className='font-bold text-white  uppercase'>GetCode</span>
                    <span className='cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/uvqdhrsk.json"
                            trigger="hover"
                        >
                        </lord-icon>

                    </span>

                </button>

                

            </div>

            <div className="text-lg text-white font-semibold cursor-pointer sm:hidden ">
                <a href="#" target='_blank'>
                <span>Get</span>
                <span className=' underline text-yellow-500'>Code</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
