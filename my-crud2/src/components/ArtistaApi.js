import React from 'react';
import {getArtists} from "../helpers/getArtists"

const ArtistaApi = () => {
  return (  
<>
<h2>api artista</h2>
<h3>{getArtists()}</h3>

</>

  );
}
 
export default ArtistaApi;