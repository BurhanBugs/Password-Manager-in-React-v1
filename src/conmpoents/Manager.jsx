import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { MdOutlineCopyAll } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manger = () => {
    const buttonRef = useRef(null);
    const [form, setform] = useState({ site: "", username: "", Password: '' })
    const [passwordArrays, setpasswordArrays] = useState([]);
    const [password, setPassword] = useState('password')
    const [modifybutton, setModifybutton] = useState("Save Password")

    const getpasswords = async () => {

        let DBreq = await fetch("http://localhost:3000/");
        let DBpasswords = await DBreq.json()
        setpasswordArrays(DBpasswords)
        console.log(DBpasswords)


    }


    useEffect(() => {
        getpasswords()




    }, [])









    const showpassword = () => {

        setPassword("text")
    }
    const handleMouseLeave = () => {
        setPassword('password');
    };

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }




    const savePassword = async () => {



        if (modifybutton === "Modify Password") {


            toast.success('Password Modify Succesfuly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });



        }


        if (form.site.length <= 3 || form.Password.length <= 3) {
            toast.error('Site name and Password should be at least 4 characters long', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;

        }

        else {



            await fetch("http://localhost:3000/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, id: uuidv4() })
            })

            toast.success('Password Saved Succesfuly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setpasswordArrays([...passwordArrays, { ...form, id: uuidv4() }])
            setform({ site: "", username: "", Password: '' })
            console.log(passwordArrays, form.id)

        }

        setModifybutton("Save Password")




    }

    const handlecopy = (text) => {

        toast.success('Copy to Clipboard succesfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)

    }

    const editpassword = async (id) => {


        await fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })

        setform({ ...passwordArrays.filter(item => item.id === id)[0], id: id })
        setpasswordArrays(passwordArrays.filter(item => item.id !== id));
        setModifybutton("Modify Password")
    }






    const deletepassword = async (id) => {

        let c = confirm('Do You Really want to Delete the password?')
        if (c) {

            setpasswordArrays(passwordArrays.filter(item => item.id !== id));
            let res = await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            })


            toast.success('Password deleting successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            buttonRef.current.click();
        }
    };



    
    








    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-[0%] top- h-[500px] w-full -translate-x-[0%] translate-y-[20%] rounded-full bg-yellow-600 opacity-20 blur-[80px]"></div></div>

            <div className="cantainer  pt-4 mx-auto w-10/12">

                <div className="flex flex-col items-center justify-center w-full">
                    <div className='flex items-center'>
                        <span className='text-yellow-600 font-bold'>&lt;</span><span className='text-black font-bold text-xl'>Password</span>
                        <span className='text-yellow-500 font-semibold underline text-xl'>Manager/</span>
                        <span className='text-yellow-600 font-bold'>&gt;</span>
                    </div>
                    <p className='text-slate-600 uppercase text-sm  sm:text-base'>Enjoy you own Password Manager</p>
                </div>

                <input name='site' value={form.site} onKeyDown={handleKeyDown} onChange={handlechange} placeholder='Enter Web URL' className=' text-black mt-6 w-full py-1 border-red-900 border shadow-md  px-4 rounded-xl outline-yellow-600 bg-transparent  ' type="text" />

                <div className=" flex sm:flex-row  flex-col sm:mb-10 mb-4 gap-0 sm:gap-9  items-center w-full  ">

                    <input name='username' value={form.username} onKeyDown={handleKeyDown} onChange={handlechange} placeholder='Enter Username' className=' mt-2 sm:mt-4 w-full sm:w-[65%] border  px-4 py-1 rounded-xl outline-yellow-600 bg-transparent border-red-900 shadow-md' type="text" />

                    <input name='Password' value={form.Password} onKeyDown={handleKeyDown} onChange={handlechange} placeholder='Enter Password' className=' w-full sm:w-[30%] sm:mt-4 mt-2   border  px-4 py-1 rounded-xl outline-yellow-600 bg-transparent border-red-900 shadow-md' type={password} />

                    <span onMouseLeave={handleMouseLeave} onMouseOver={showpassword} className='absolute flex items-center right-[9%] top-[34%] sm:top-[30%] sm:right-[10%] xl:right-[11%] 2xl:right-[12%]  cursor-pointer '>
                        <lord-icon
                            src="https://cdn.lordicon.com/hbtheitu.json"
                            trigger="hover"
                            stroke="bold"
                        >
                        </lord-icon>
                    </span>



                </div>

                <div className="flex justify-center">
                    <button ref={buttonRef} onClick={() => { savePassword(); }} className='flex items-center justify-center w-fit py-0 border border-yellow-600 px-4 cursor-pointer rounded-full bg-yellow-800'>

                        <span className='font-bold text-white uppercase'>{modifybutton}</span>
                        <span className='cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ghhwiltn.json"
                                trigger="hover"
                                stroke="bold"
                            >
                            </lord-icon>

                        </span>

                    </button>
                </div>

                <div className="text-xl m-2 font-semibold">
                    Your Passwords :
                </div>


                {passwordArrays.length === 0 && <div className='font-semibold uppercase text-sm sm:my-9 mx-auto text-center text-slate-500'>you have not save Password yet <div><lord-icon
                    src="https://cdn.lordicon.com/taymdfsf.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#545454,secondary:#c67d53"
                >
                </lord-icon></div></div>}



                {passwordArrays.length !== 0 &&



                    <div className="w-full h-[40vh] overflow-scroll custom-scrollbar">

                        



                        <table className="table-auto w-10/12  mx-auto rounded-lg overflow-hidden mt-3">
                            <thead>
                                <tr className='bg-red-800 text-white '>
                                    <th className='py-1'>Website</th>
                                    <th className='py-1'>Username</th>
                                    <th className='py-1'>Passwords</th>
                                    <th className='py-1'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-yellow-900 bg-opacity-5'>

                                {passwordArrays.map((items, index) => {
                                    return <tr key={index} >
                                        <td className='border border-yellow-800 border-opacity-15 p-2'> <div className='flex items-center justify-between'><a target='_blank' href={items.site}>{items.site}</a> <span className='cursor-pointer' onClick={() => { handlecopy(items.site) }}><MdOutlineCopyAll /></span> </div> </td>
                                        
                                        <td className='border border-yellow-800 border-opacity-15 p-2'><div className="flex  justify-between items-center select-none ">{items.username}<span className='cursor-pointer' onClick={() => { handlecopy(items.username) }}><MdOutlineCopyAll /></span></div></td>
                                        <td className='border border-yellow-800 border-opacity-15 p-2'><div className='flex items-center justify-between select-none '> <div className='blur-sm'>{items.Password}</div>
                                            <span className='cursor-pointer' onClick={() => { handlecopy(items.Password) }}><MdOutlineCopyAll /></span></div></td>
                                        <td className='border border-yellow-800 border-opacity-15 p-2'><div className='flex items-center justify-between cursor-pointer'>
                                            <span onClick={() => { editpassword(items.id) }} className=' cursor-pointer'><lord-icon
                                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#545454,secondary:#c67d53"
                                            >

                                            </lord-icon></span>
                                            <span onClick={() => { deletepassword(items.id) }} className='cursor-pointer' ><lord-icon
                                                src="https://cdn.lordicon.com/drxwpfop.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#545454,secondary:#c67d53"
                                            >
                                            </lord-icon></span></div></td>
                                    </tr>

                                }
                                )}








                            </tbody>
                        </table> </div>}




            </div>
        </>

    )
}

export default Manger
