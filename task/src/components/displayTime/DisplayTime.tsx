import React from 'react';
import './displayTime.scss'

interface props {
    lastClicked?: string
}

const DisplayTime: React.FC<props> = ({ lastClicked }) => {
    return (
        <>
            {!lastClicked ? <div className='TimeItem'> 
                Please click on the button to get local time 
                </div>
                 :
                <div className=" TimeItem flex text-center p-6 mr-3 bg-slate-300 font-serif shadow-xl">
                    Local time:{" "}
                    {lastClicked !== undefined ? lastClicked.toString() : "Never"}
                </div>
            }
        </>
    );
}

export default DisplayTime;