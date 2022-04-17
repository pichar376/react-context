import {Link, NavLink} from "react-router-dom"


const MenuConceptos = () => {
  return ( 
    <nav>
      <ol>
        
      <li>
        <span>Enlaces html no recomendados</span>
        <a href="/">Home</a><a href="/acerca">Acerca</a><a href="contacto">Contacto</a>
        <a href="/contenido">Contenido</a>
        </li>
        <li>
        <span>ComponenteslLink</span>
        
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/contenido">Contenido</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink to="/"
className={({isActive})=>(isActive?"nav-bar":"")}>Home</NavLink>   
<NavLink to="/acerca"
activeclassname="active">Acerca</NavLink>     
<NavLink to="/contacto"
activeclassname="active">Contacto</NavLink>     
<NavLink to="/contenido"
activeclassname="active">Contenido</NavLink>    
</li>
<li><span>Parametros:</span>
<Link to="/usuario/jonmircha">jonmircha</Link>
<Link to="/usuario/Kenai">KeNai</Link>
</li>
<li><span>Parametros de consulta</span>
<Link to="/productos">Productos</Link>
</li>
<li>
<span>Redirecciones</span>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</li>
<li>
  <span>React</span>
  <Link to="/react">react</Link>
</li> 
<li>
           <span>Rutas Privadas</span>
           <Link to="/login">login</Link>
           <Link to="/dashboard">Dashboard</Link>
         </li>
      </ol>
    </nav>
   );
}
 
export default MenuConceptos;