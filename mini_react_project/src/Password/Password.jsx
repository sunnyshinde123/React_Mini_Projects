import { useState } from "react"

export default function Password(){
  let[isPass, setIsPass]=useState(false);

  const handleOnClick=()=>{
    setIsPass(!isPass);
  }

  return (
    <>
    <input type={isPass ? "password" : "text"} />{isPass ? <i className="fa-solid fa-eye" onClick={handleOnClick}></i> :<i class="fa-solid fa-eye-slash" onClick={handleOnClick}></i>}
    </>
  )
}