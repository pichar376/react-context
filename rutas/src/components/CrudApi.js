import React, { useEffect, useState } from "react";
import { HashRouter, Navigate, NavLink, Route, Routes, useParams } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import CrudPages from "../pages/CrudPages";
import CrudForm from "./CrudForm";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";



  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };


  
  
  
  return (
  
    <div>
      <HashRouter>
        
        
        <header>
          <h2>Crud Api con rutas</h2>
          <nav>
            <NavLink to="/santos"className ={({isActive})=>(isActive?"active":"")}>Santos</NavLink>
            <NavLink to="santos/agregar"className ={({isActive})=>(isActive?"active":"")}>Agregar</NavLink>
      

         </nav>
        </header>
        <Routes>
        
        
          <Route path="/santos"element={<CrudPages db={db}dataToEdit={dataToEdit}deleteData={deleteData}loading={loading}error={error}/>}/>
          <Route path="santos/agregar" element={
          <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />}/>
        
        
          <Route path="/santos/editar/:id" element={
          <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />}/>
         <Route path="/santos/agregar/5"  element={<h1>Hola mundo</h1>}/>

          <Route path="*" element={
          <h1>Error</h1>}/>
          {/* <Route path="/editar/:id" element={}/> */}
          </Routes>
      </HashRouter>
        
        
        
        
    </div>
  );
};

export default CrudApi;
