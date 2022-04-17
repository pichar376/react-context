import React from 'react';
const SongLyrics = ({lyric,title}) => {
  return ( 
    <section>
    <h2>{title}</h2>
    <bloquot style={{whiteSpace:"pre-wrap"}}>{lyric.lyrics}</bloquot>
    </section>
   );
}
 
export default SongLyrics;