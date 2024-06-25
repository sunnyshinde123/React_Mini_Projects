import { useState } from "react"
import HealthyAppItemInfo from "./HealthAppItemInfo"
import HealthyAppSearchBox from "./HealthAppSearchBox"
import Footer from "./Footer";
import { v4 as uuidv4 } from 'uuid';

export default function HealthyApp(){
  let [itemInfo, setItemInfo]=useState([
    {
      item:"",
      date:"",
      id:uuidv4()
    }
  ]);

  let getItemsInfo=(data)=>{
    setItemInfo((prev)=>{
      return ([...prev, data]);
    })
  }

  let handleOnDeleteItem=(id)=>{
    setItemInfo((prev)=>{
      return (
        prev.filter((ele)=> ele.id!=id)
      )
    })
  }
  return (
    <>
    <h1 className="mb-3">Healthy App</h1>
    <HealthyAppSearchBox getItemsInfo={getItemsInfo}></HealthyAppSearchBox>
    <HealthyAppItemInfo ItemData={itemInfo} handleOnDeleteItem={handleOnDeleteItem}></HealthyAppItemInfo>
    <Footer></Footer>
    </>
  )
}