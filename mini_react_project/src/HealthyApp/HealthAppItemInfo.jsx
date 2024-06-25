export default function HealthyAppItemInfo({ItemData, handleOnDeleteItem}){
  return (
    <>
    <div className="ItemBox row col-10 offset-2 mt-3"> 
      {ItemData.map((items)=> {
        return (
          <div className="card me-3 mt-3" key={items.id} style={{width:"18rem"}}>
            <img src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9137.jpg?w=2000" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title">{items.item}</h2>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="card-text">Created At: <i>{items.date}</i></p>
              <a href="#" className="btn btn-primary" onClick={()=> handleOnDeleteItem(items.id)}>RemoveItem</a>
            </div>
        </div>
        )
      })}
    </div>
    </>
  )
}