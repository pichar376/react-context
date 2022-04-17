import ReactDom from "react-dom";
import {BrowserRouter as Router, Route, Routes,Link, HashRouter, NavLink, Navigate} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Contenido from "../pages/Contenido";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";


// const ConceptosBasicos = () => {
//   return ( 
//     <div>
// <h1>Conceptos Basicos</h1>
// <HashRouter>
//   <Link to="">home</Link>
//   <Link to="acerca">acerca</Link>  
// <Link to="contacto">contacto</Link>
// <Link to="contenido">contenido</Link>
// <Routes>
//   <Route exact path="/" element={<Home/>}/>
//   <Route exact path="/acerca" element={<Acerca/>}/>
// <Route exact path="/contacto"element={<Contacto/>}/>
// <Route exact path="/contenido"element={<Contenido/>}/>
// </Routes>
//    </HashRouter>



    
//     </div>
//    );
// }
 
// export default ConceptosBasicos;

const ConceptosBasicos = () => {
  return ( 
    <div>
<h1>Conceptos Basicos</h1>
<Router>
  <MenuConceptos/>
  <Routes>
<Route exact path="/" element={<Home/>}/>
  <Route exact path="/acerca" element={<Acerca/>}/>
<Route exact path="/contacto"element={<Contacto/>}/>
<Route exact path="/contenido"element={<Contenido/>}/>
<Route exact path="/usuario/:username"element={<Usuario/>}/>
 <Route exact path="/about" element={<Navigate  to="/acerca"/>}/> 
<Route exact path="/contact"element={<Navigate to="/contacto"/>}/>

<Route exact path="/react/*"element={<ReactTopics/>}>
  <Route path="jsx"element={<h2>JSX</h2>}/>
  <Route path="props"element={<h2>Props</h2>}/>
  <Route path="estado"element={<h2>Estado</h2>}/>
  <Route path="componente"element={<h2>Componente</h2>}/>
</Route>
<Route path="/login"element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/> 
{/* <PrivateRoute  path="/dashboard"element={<Dashboard/>}/> */}
<Route  path="*"element={<Error404/>}/>
</Routes>
   </Router>
   



    
    </div>
   );
}
 
export default ConceptosBasicos;