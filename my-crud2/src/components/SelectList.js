import React from 'react';
import useFetch from '../hooks/useFetch';
import Loader from "./Loader"
import Mensaje from "./Message"
const SelectList = ({title,url,handleChange}) => {
  const {data,error,loading}=useFetch(url);
 
    if(!data)return null;
    if(error){
      return <Mensaje msg={`Error ${error.status}:${error.statusText}`}/>
    
    }
let label=title.charAt(0).toUpperCase()+title.slice(1);
let options=data.response[title];



   let id=`select-${title}`;
  return (  
    <>
      <label htmlFor={id}>{label}</label>
      {loading&&<Loader/>}
   <select name={id} id={id}onChange={handleChange}>
     <option value="">Elige un {label}</option>
     {data&&options.map((el)=><option value={el}>{el}</option>)}
   </select>

    </>
  );
}
 
export default SelectList;