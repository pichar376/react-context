
 import React from "react"
const CrudTableRow = ({ el, setDataToEdit, deleteData}) => {
  let { name, constelacion, id } = el;
  
const handleEdit = () => {

  console.log("hola")
  setDataToEdit(el)
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{constelacion}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>


        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
