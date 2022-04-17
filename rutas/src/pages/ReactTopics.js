import { Link, Outlet, Route, Routes, useMatch } from "react-router-dom";


const ReactTopics = () => {
  return (  
    <div>
      <Outlet/>
      <h3>
       Temas de  React 
      </h3>
      
       <ul>
         <li>
           <Link to="/react/jsx">JSX</Link>
         </li>
         <li>
           <Link to="/react/props">Props</Link>
         </li>
         <li>
           <Link to="/react/estado">Estado</Link>
         </li>
         <li>
           <Link to="/react/componente">Componente</Link>
         </li>
        
        
       </ul>
    
         
    </div>
  );
}
 
export default ReactTopics;