import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  Route,
 Routes,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
//import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/acerca" component={Acerca} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/usuario/:username" component={Usuario} />
          <Route path="/productos" component={Productos} />
          <Route path="/about" element=
            {<Navigate to="/acerca" />}/>
          <Route  path="/contact" element=
            {<Navigate to="/contacto" />}/>
          <Route path="/react" component={ReactTopics} />
          <Route  path="/login" component={Login} />
          {/* <Route  path="/dashboard" component={Dashboard} /> */}
         {/* <PrivateRoute  path="/dashboard" component={Dashboard} /> */}
          <Route path="*" component={Error404} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route  path="/" component={Home} />
          <Route  path="/acerca" component={Acerca} />
          <Route  path="/contacto" component={Contacto} />
          <Route  path="/usuario/:username" component={Usuario} />
          <Route  path="/productos" component={Productos} />
          <Route  path="/about" element=
{          <Navigate to="/acerca" />}/>
      
          <Route  path="/contact"element=
            {<Navigate to="/contacto" />}/>
      
          <Route path="/react" component={ReactTopics} />
          <Route  path="/login" component={Login} />
          {/* <Route  path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute  path="/dashboard" component={Dashboard} /> */}
          <Route path="*" component={Error404} />
        </Routes>
      </Router>
    </div>
  );
};

/* const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route  path="/">
            <h3>Home</h3>
            <p>Bienvenid@s al tema de las Rutas en React</p>
          </Route>
          <Route  path="/acerca">
            <Acerca />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              error explicabo hic sapiente facilis vel, at, ipsam ratione
              voluptates consectetur optio eum totam, repellat sit doloribus
              iure officia nihil libero!
            </p>
          </Route>
          <Route  path="/contacto" component={Contacto} />
          <Route
            
            path="/contacto"
            children={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  aliquid officiis dolorum, nobis vel maxime possimus. Eos,
                  nulla cupiditate magni hic ratione aliquam, magnam dignissimos
                  rem natus quia nemo possimus.
                </p>
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}; */

export default ConceptosBasicos;
