import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [song, setSong] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    setLoading(true);
    let { artist, song } = search,
      songURL = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${song} ${artist}&per_page=10&page=1'`,
      songOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1693f38f67mshed9ca24b1b2aec1p1fe1b4jsnd9da89021c3a",
          "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com"
        }
      },
      artistURL = `https://shazam.p.rapidapi.com/search?term=${artist}&locale=en-US&offset=0&limit=1`,
      artistOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0b048e90e6mshcd711004ccd8b43p1c3fbajsnd92706b2c07f",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com"
        }
      };

    const fetchData = async () => {
      let [songRes, artistRes] = await Promise.all([
        helpHttp().get(songURL, songOptions),
        helpHttp().get(artistURL, artistOptions)
      ]);
      console.log(artistRes);
      // console.log("song", songRes);
      // // setSong
      if (songRes.hits.length > 0) {
        let songId = songRes.hits[0].result.id,
          isLyric = songRes.hits[0].result.lyrics_state,
          songData = songRes.hits[0].result;
        // console.log(songData, isLyric, songId);
        setSong(songData);
        // setLyric
        if (isLyric === "complete") {
          let lyricRes = await helpHttp().get(
            `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`,
            songOptions
          );
          if (lyricRes) setLyric(lyricRes.lyrics.lyrics.body.html);
        }
      }
      // setBio
      if (Object.keys(artistRes).length > 0)
        setBio(artistRes.artists.hits[0].artist);
      // Loader off
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => setSearch(data);

  return (
    <div>
      {loading && <Loader />}
      <h2>Song Search</h2>
      <SongForm handleSearch={handleSearch} />
      <article>
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} song={song} />
        )}
      </article>
    </div>
  );
};
export default SongSearch;
