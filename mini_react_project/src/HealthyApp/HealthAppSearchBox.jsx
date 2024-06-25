import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function HealthyAppSearchBox({getItemsInfo}){
  let[getInfo, setGetInfo]=useState({
    item:"",
    date:"",
    id:uuidv4()
  })

  let handleOnChange=(event)=>{
    setGetInfo((prev)=>{
      return ({...prev, [event.target.name]:event.target.value})
    })
  }

  let handleOnSubmit=(event)=>{
    event.preventDefault();
    console.log(getInfo);
    getItemsInfo(getInfo);
    setGetInfo({
      item:"",
      date:"",
      id:uuidv4()
    })
  }

  return (
    <>

    <div className="mb-3">
      <form action="/" onSubmit={handleOnSubmit} className="row offset-3">
        <input type="text" className="col-3 me-3" placeholder="Add Healthy Items"  name="item" onChange={handleOnChange} value={getInfo.item}/>
        <input type="date" className="col-3 me-3"  name="date" onChange={handleOnChange} value={getInfo.date}/>
        <button className="btn btn-success col-2">Add Item</button>
      </form>
      <hr />
    </div>
   
    </>
  )
}