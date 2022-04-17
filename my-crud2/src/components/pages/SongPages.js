import { useParams } from "react-router-dom";
import SongDetails from "../SongDetails";

const SongPages = ({mySongs}) => {
  let{id}=useParams()
  console.log(id,mySongs)
  let currentSong=mySongs[id];
  let {search,bio,lyric}=currentSong;
  return (  
  //   <div>
    <SongDetails search={search} lyric={lyric} bio={bio}/>
  //   </div>
  );
  
}
 
export default SongPages;