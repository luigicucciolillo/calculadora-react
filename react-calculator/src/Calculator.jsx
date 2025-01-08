import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Calculator.css";

const Calculator = () => {
    const [display, setDisplay] = useState(""); // Estado de la pantalla
    const [operand, setOperand] = useState(null); // Primer número
    const [operation, setOperation] = useState(null); // Operación seleccionada

    const handleButtonClick = (value) => {
        if (!isNaN(value)) {
            // Si es un número
            setDisplay((prev) => prev + value);
        } else if (value === "C") {
            clear();
        } else if (value === "=") {
            if (operand !== null && operation) {
                calculateResult();
            }
        } else {
            // Es una operación (+, -, *, /)
            setOperand(parseFloat(display));
            setOperation(value);
            setDisplay("");
        }
    };

    const calculateResult = () => {
        const secondOperand = parseFloat(display);
        let result;

        switch (operation) {
            case "+":
                result = operand + secondOperand;
                break;
            case "-":
                result = operand - secondOperand;
                break;
            case "*":
                result = operand * secondOperand;
                break;
            case "/":
                result = secondOperand !== 0 ? operand / secondOperand : "Error";
                break;
            default:
                result = "Error";
        }

        setDisplay(result.toString());
        setOperand(null);
        setOperation(null);
    };

    const clear = () => {
        setDisplay("");
        setOperand(null);
        setOperation(null);
    };

    return (
        <div className="calculator">
            <Display value={display || "0"} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
