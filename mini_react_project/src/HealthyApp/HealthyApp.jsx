import { useState } from "react"
import HealthyAppItemInfo from "./HealthAppItemInfo"
import HealthyAppSearchBox from "./HealthAppSearchBox"
import Footer from "./Footer";
import Error from "./Error";
import { v4 as uuidv4 } from 'uuid';

export default function HealthyApp(){
  let [itemInfo, setItemInfo]=useState([
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
    <Error getInfo={itemInfo}></Error>
    <HealthyAppItemInfo ItemData={itemInfo} handleOnDeleteItem={handleOnDeleteItem}></HealthyAppItemInfo>
    <Footer></Footer>
    </>
  )
}