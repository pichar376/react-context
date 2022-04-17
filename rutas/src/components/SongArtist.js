import React from 'react';


const SongArtist = ({artists}) => {
  return ( <section>
  <h3>Nombre:{artists.strArtist}</h3>
  <img src={artists.strArtistThumb} alt={artists.srtArtist}/>
  <h3>Fecha de Nacimiento:{artists.intBornYear}</h3>
  <h3>Genero{artists.strGenre}</h3>
  <a href={`https://${artists.strWebsite}`}tarjet="_blank"rel="noreferrer"
  >Sitio Web</a>
  </section> );
}
 
export default SongArtist;