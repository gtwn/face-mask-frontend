import React, { useState } from 'react';
import Logo from "../assets/icon/face-mask.png"
import SimpleDialog from "./SimpleDialog"

function Nav() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () =>{
        setOpen(false);
    };

    
    console.log(open)

    return (
        <div className="w-full h-60px bg-green-50 ">
            <div className="ml-5 flex items-center flex-row space-y-4  cursor-defualt md:w-auto">
                <img src={Logo} alt="logo" className="ml-3 mt-3 cursor-pointer"style={{borderRadius: "50%", width: "50px"}} onClick={() => {
                    window.location.reload()
                }}></img>
                <div className="w-2px mr-3"></div>
                <label className="text-blue-500 text-2xl select-none" style={{fontFamily: "Staatliches"}}>Face Mask Detection <span className="text-red-600">(Crop before Detect)</span></label>
                <label className="absolute right-8 cursor-pointer text-blue-500 text-2xl " style={{fontFamily: "Staatliches"}} onClick={handleOpen}>Developer</label>
            </div>
            <SimpleDialog open={open} onClose={handleClose} />
        </div >
    )
}

export default Nav;