import React from 'react';
import './displayTime.scss'

interface props {
    lastClicked: Date
}

const DisplayTime: React.FC<props> = ({ lastClicked }) => {
    return (
        <>
            <div className=" TimeItem flex text-center p-6 mr-3 bg-slate-300 font-serif shadow-xl">
                Local time:{" "}
                {lastClicked !== undefined ? lastClicked.toString() : "Never"}
            </div>
        </>
    );
}

export default DisplayTime;