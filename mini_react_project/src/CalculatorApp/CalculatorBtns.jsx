import "./CalculatorBtns.css"

export default function CalculatorBtns({btns, getCalculation}){
  return(
    <>
    <div className="btnBox">
      {btns.map((ele, idx)=> <button style={{fontWeight:"700"}} onClick={()=> getCalculation(ele)} key={idx}>{ele}</button>)}
    </div>
    </>
  )
}