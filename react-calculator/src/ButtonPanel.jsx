import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

const ButtonPanel = ({ onButtonClick }) => {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "C", "0", "=", "+"
    ];

    return (
        <div className="button-panel">
            {buttons.map((btn) => (
                <Button key={btn} value={btn} onClick={onButtonClick} />
            ))}
        </div>
    );
};

export default ButtonPanel;