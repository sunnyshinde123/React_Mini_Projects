export default function Error({getInfo}){
  return (
    <>
    {getInfo.length==0 && <h2><i>No Any Items Added</i></h2>}
    </>
  )
}