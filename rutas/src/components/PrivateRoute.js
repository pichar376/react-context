import { Navigate, Route } from "react-router-dom";
const PrivateRoute = ({element,...rest}) => {
  return <Route {...rest}>{auth?<component/>:<Navigate to="/login"/>}</Route>
  
};
let auth;
auth=true;
auth=null;


export default PrivateRoute;
