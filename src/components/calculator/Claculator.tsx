import React, { useState } from "react";

const Calculator : React.FC = () =>{
   const [input,setInput] = useState <string> ("");
   console.log(input)
   const handleClick = ( value :string) =>{
    setInput((prev)=> prev + value);
   }
   const handleClear = () =>{
    setInput("")
   }
   const handleEquals = () =>{
    try {
        const result = eval(input)
        setInput(result.toString());
        console.log(result)
    } catch (error) {
        setInput("error")
    }
   }
   return(
    <>
  <div className="calculator">
  <input type="text" value={input} readOnly />
  <div className="buttons">
    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "AC", "="].map((btn) => (
      <button
        key={btn}
        onClick={() =>
          btn === "AC"
            ? handleClear()
            : btn === "="
            ? handleEquals()
            : handleClick(btn)
        }
        className={btn === "=" ? "equal" : ""}
      >
        {btn}
      </button>
    ))}
  </div>
</div>

    </>
   )
}
export default Calculator;