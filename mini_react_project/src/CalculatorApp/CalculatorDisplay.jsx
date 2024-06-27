import { useState } from "react"
import "./CalculatorDisaply.css"
export default function CalculatorDisplay({value}){
  return (
    <>
    <input type="text" className="displayInput" value={value}/>
    </>
  )
}