import React, { useState, useEffect } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongPages from "./pages/SongPages";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import SongTable from "./SongTable";

let mySongsInit=JSON.parse(localStorage.getItem("mySongs"))||[];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMysongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl =`http:// theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
    localStorage.setItem("mySongs",JSON.stringify(mySongs));
  }, [search,mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };
const handleSaveSong=()=>{
  alert("salvando cancion")
   let currentSong={
     search,
     lyric,
     bio
   }
   setMysongs((mySongs)=>[...mySongs,currentSong])
   setSearch(null)
localStorage.setItem("mySongs",JSON.stringify(mySongs))
}
const handleDeleteSong=(id)=>{
let isDelete=window.confirm(`estas seguro de eliminar la cancion conm el id ${id}`)
if(isDelete){
 let songs = mySongs.filter((el,index)=>index!==id);
 setMysongs(songs)
 localStorage.setItem("mySongs",JSON.stringify(songs));
}

}
  return (
    <div>
      
      
      <HashRouter>
        <header>
     <h2>Song Search</h2>
     <Link to="/">Home</Link>
        </header>
        <article className="grid-1-2">
    <Routes>
      <Route path="/"element={<><SongForm handleSearch={handleSearch}handleSaveSong={handleSaveSong}/>
        {loading && <Loader />}
        <SongTable mySongs={mySongs}handleDeleteSong={handleDeleteSong}/>
       </>}/>
        <Route path="/canciones/:id" element={<SongPages lyric={lyric}bio={bio}search={search} mySongs={mySongs}/>}/>
        <Route path="*"element={<h1>Error 404</h1>}/>
    </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
