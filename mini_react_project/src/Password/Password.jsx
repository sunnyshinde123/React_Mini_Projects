import { useState } from "react"

export default function Password(){
  let[isPass, setIsPass]=useState(true);

  const handleOnClick=()=>{
    setIsPass(!isPass);
  }

  return (
    <>
    <div>
    <input type={isPass ? "password" : "text"}  style={{borderRight:"none"}}/>{isPass ? <i className="fa-solid fa-eye" onClick={handleOnClick} style={{border:"2px solid black"}}></i> :<i class="fa-solid fa-eye-slash" onClick={handleOnClick} style={{border:"2px solid black"}}></i>}
    </div>
    </>
  )
}