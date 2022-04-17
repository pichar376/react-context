import { useNavigate } from "react-router-dom";

const SongTableRow = ({id,handleDeleteSong,el}) => {
  let navigate=useNavigate()
  
  //let {search}=el;
  
  console.log(el)
  let {search}=el;
  //let avatar=bio.artist[0].stringArtistThumb;
  return ( 
      <div>
    <tr>
      <td>{"img"}
      </td>
      <td >{search.artist}</td>
      <td>{search.song}</td>
      <td><button onClick={()=>navigate(`/canciones/${id}`)}>ver</button>
      <button onClick={()=>handleDeleteSong(id)}>eliminar</button></td>
    </tr>
    </div>
   );
}
 
export default SongTableRow;