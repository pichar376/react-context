import SongTableRow from "./SongTableRow";

const SongTable = ({mySongs,handleDeleteSong}) => {
  console.log(mySongs)
  return ( 
    <div>
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
        <tr>
          <th>Artista</th>
          <th>Cancion</th>
          <th>Acciones</th>
        </tr>
      </thead>
    <tbody>
   {mySongs.length>0?(mySongs.map((el,index)=><SongTableRow key={index} el={el}id={index}handleDeleteSong={handleDeleteSong}/>)):(<tr><td colSpan="4">sin canciones favoritas</td></tr>)}
    </tbody>
      </table>
    </div>   );
}
 
export default SongTable;