import React, { useState, useEffect } from "react";
import axios from 'axios';

function Predict({Preview, Result}) {
    const [pred, setPred] = useState({
        predict: [0,0,0],
        predictClass: ""
    })
    const [textStyle, setText] = useState("")
    const style = "text-green-600"
    useEffect(() => {
        const fetchResult = async () => {
            let form_data = new FormData()
            form_data.append('img', Result)
            console.log(Result)
            await axios({
                method: 'POST',
                url: 'http://localhost:5000/predict',
                data: form_data,
                headers: {'Content-Type': 'multipart/form-data'}
                })
                .then(function (response) {
                    console.log('res',response)
                    setPred(response.data)
                    if (response.data.predictClass === "No Mask") {
                        setText("text-red-600")
                    } else if(response.data.predictClass === "Mask") {
                        setText("text-green-600")
                    } else {
                        setText("text-yellow-500")
                    }
                })
                .catch(function (response) {
                    console.log(response)
            });
        }
        fetchResult()
    }, [Result])
    if (pred.predictClass === "Undetected") {
        return (
            <div className="flex items-center mt-40 ml-96 md:mx-44">
            <img src={Preview} alt="preview" width="250px" height="250px" className="ml-3"/>
            <div className="flex flex-col space-y-6 ml-32 text-2xl select-none" style={{fontFamily: "Staatliches"}}>
                <h2><b>PREDICT RESULT</b></h2>
                <label>Predict: <span className={textStyle}>Unable to detect the face</span></label>
            </div>
        </div>
        )
    } else{
        return (
            console.log('pred', pred) ||
            <div className="flex items-center mt-40 ml-96 md:mx-44">
                <img src={Preview} alt="preview" width="250px" height="250px" className="ml-3"/>
                <div className="flex flex-col space-y-6 ml-32 text-2xl select-none" style={{fontFamily: "Staatliches"}}>
                    <h2><b>PREDICT RESULT</b></h2>
                    <label>Mask: <span className="text-red-500">{((pred.predict[0][1])*100).toFixed(3)}%</span></label>
                    <label>No Mask: <span className="text-red-500">{((pred.predict[0][2])*100).toFixed(3)}%</span></label>
                    <label>Mask Incorrect: <span className="text-red-500">{((pred.predict[0][0])*100).toFixed(3)}%</span></label>
                    <label>Predict: <span className={textStyle}>{pred.predictClass}</span></label>
                </div>
            </div>
        )
    }
    
}

export default Predict;