import { Navigate,Route } from "react-router";

/* const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

//Simular Autenticación
let auth;
auth = null;
auth = true;

const PrivateRoute = () => {
  return (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
