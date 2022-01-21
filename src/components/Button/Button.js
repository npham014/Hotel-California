import React from 'react';
import "./Button.scss";
import {Link} from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--large', 'btn--medium'];

function Button({children, type, onClick, btnStyle, btnSize}) {
    const buttonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const buttonSize = STYLES.includes(btnSize) ? btnSize : SIZES[0];
    return(
        <div>
            <Link to="/" className="btn-mobile">
                <button 
                    className={`btn ${buttonStyle} ${buttonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        </div>
    );
}

export default Button;
