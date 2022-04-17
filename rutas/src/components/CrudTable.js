import React, { useState } from 'react';
import CrudTableRow from "./CrudTableRow"

function CrudTable({data,setDataToEdit,deleteData}) {
  return (
    <div>
    <table>

      <thead>
        <tr>
          <th>nombre</th>
          <th>constelacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {data.length>0?
      (data.map(el=><CrudTableRow key={el.id}el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)):(<tr><td colSpan="3">sin datos</td></tr>)}
    </tbody>
    </table>
  </div>
    );
}

export default CrudTable; 