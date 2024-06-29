import React from 'react';
import './button.scss'

interface props {
    onClick(): any,
    buttonColor: string,
    title: string,
}

const Button: React.FC<props> = ({ onClick, buttonColor, title }) => {

    return (
        <div className="button-container">
            <button onClick={onClick} className={`button ${buttonColor}`}>
                {title}
            </button>
        </div>
    )

}
export default Button;