import CalculatorDisplay from "./CalculatorDisplay"
import CalculatorBtns from "./CalculatorBtns"
import Container from "./Container";
import "./CalculatorApp.css"

import { useState } from "react";

export default function CalculatorApp(){
  let [value, setValue]=useState("");
  let btns=["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

  let getCalculation=(data)=>{
    setValue(data);
  }
  return (
    <>
    <Container>
    <CalculatorDisplay value={value}></CalculatorDisplay>
    <CalculatorBtns btns={btns} getCalculation={getCalculation}></CalculatorBtns>
    </Container>
    </>
  )
}