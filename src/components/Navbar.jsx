import React from "react";

export function Navbar({setCurQues}) {
    const handleButtonClick = (buttonNumber) => {
        setCurQues(buttonNumber-1);
    };

    return (
        <div className="navbar">
            {Array(15).fill().map((_, index) => (
                <button
                    className="nav-button"
                    key={index + 1}
                    onClick={() => handleButtonClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

