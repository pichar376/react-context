import {useLocation,useNavigate}from "react-router";
import { useSearchParams } from "react-router-dom";

const Productos = () => {
  let navigate=useNavigate();
  
  let location=useLocation();
//  console.log(location)
 let{search}=useLocation();
 let query=new URLSearchParams(search)
const LIMIT=20;
let start=parseInt(query.get("inicio"))||1;
let end=parseInt(query.get("fin"))||LIMIT;

 const handleNext=()=>{
  navigate({search:`?inicio=${start+LIMIT}&fin=${end+LIMIT}`})
 }
const handlePrev=()=>{
navigate({search:`?inicio=${start-LIMIT}&fin=${end-LIMIT}`})


}
  return ( <div>
    <h3>Productos</h3>
    <p>Mostrando Productos del {start} al {end}</p>
    {start>LIMIT&&<button onClick={handlePrev}>atras</button>}<button onClick={handleNext}>adelante</button>
  </div>);
}
 
export default Productos;