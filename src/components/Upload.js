import React, { useState } from "react";
import Cloud from "../assets/icon/upload.png"
import Predict from "./Predict"

function Upload() {
    const [image, setImage] = useState({
        preview:"",
        raw:""
    });
    const [rawImage, setRaw] = useState({raw:""})
    const [pre, setPre] = useState({
        preview:""
    })

    const checkExtension = (name) => {
        let ext = name.split('.');
        let extend = ext[ext.length - 1]
        switch (extend.toLowerCase()) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                return true;
        }
        return false;
    }

    const handleChange = (e) => {
        const fact = checkExtension(e.target.files[0].name)
        
        if (fact) {
            if (e.target.files.length) {
                setImage({
                  preview: URL.createObjectURL(e.target.files[0]),
                  raw: ""
                });
                setRaw({raw: e.target.files[0]})
                setPre({pre: image.preview})
                
            }
        } else {
            alert('Support file type .jpg or .png only!')
        }
        
    }
    if (pre.preview !== "") {
        return (
            <div>
                <Predict Preview={image.preview} Result={rawImage.raw}/>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col items-center mt-14 w-full  border-dashed border-4 border-blue-500 " style={{height: "400px"}}>
                <div className="mt-32">
                    <label htmlFor="upload-btn" className="cursor-pointer" >
                        <img src={Cloud} alt="upload-icon" width="100px" height="100px"/>
                        <h5 className="mt-3 text-xl" style={{ fontFamily: "Staatliches"}}><b>UPLOAD IMAGE</b></h5>
                        <p className="ml-1">(.jpg / .jpeg)</p>
                    </label>
                </div>
                
                <input type="file" id="upload-btn" style={{ display: "none" }} accept=".jpeg, .jpg" onChange={handleChange}/>
                
            </div>
        )
    }
    
}

export default Upload;