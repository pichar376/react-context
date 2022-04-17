import React, { useState } from 'react';
import SongTableRow from './SongTableRow';
const initialForm={
  artist:"",
  song:"",
}

const SongForm = ({handleSearch,handleSaveSong}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })

  }
  const handleSubmit=(e)=>{
e.preventDefault();
if(!form.artist||!form.song){
  alert("datos incompletos")
return
}
handleSearch(form);
setForm(initialForm)
  }
  return(
<div>
  <form onSubmit={handleSubmit}>
    <input type="text"name="artist"placeholder="Nombre del Interprete"onChange={handleChange}
    value={form.artist}/>
    <input type="text"name="song"placeholder="Nombre de la Cancion"onChange={handleChange}
    value={form.song}/>
    <input type="submit"value="enviar"/>
  </form>
  <button onClick={handleSaveSong}>guardar</button>
</div>


  );
}
 
export default SongForm;