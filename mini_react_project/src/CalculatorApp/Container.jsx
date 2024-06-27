import "./CalculatorApp.css"
export default function Container(props){
  return (
    <>
    <div className="calCulator_Box">
      {props.children}
    </div>
    </>
  )
}