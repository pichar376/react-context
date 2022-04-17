import { useParams } from "react-router-dom";

const Usuario = () => {
  let params =useParams()
  let  {username}=useParams()
  console.log(params)
  return ( <div>
    <h3>Perfil de Usuario </h3>
    <p>Nombre de Usuario: {username}</p>
  </div> );
}
 
export default Usuario;