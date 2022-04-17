import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from "./SongLyrics";
import Mensaje from "./Message"
const SongDetails = ({search,lyric,bio}) => {
  console.log(search,bio,lyric)
  if(!lyric||!bio)return null;
  return ( <>

  {lyric.err||lyric.name||lyric.error ==="AbortError"?(<Mensaje msg={`no se encontro la cancion ${search.song}`}/>):(<SongLyrics lyric={lyric}title={search.song}/>)}
  {bio.artists?(
    <SongArtist search={search} artists={bio.artists[0]}/>
  ):(<Mensaje msg={`Error en la busqueda de el artista ${search.song}`}/>)}
  
  </> );
}
 
export default SongDetails;