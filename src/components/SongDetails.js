import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongInfo from "./SongInfo";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio, song }) => {
  if (!lyric && !bio && !song) return null;
  return (
    <div>
      <article className="grid-1-3">
        {bio ? (
          <SongArtist bio={bio} />
        ) : (
          <Message
            msg={`Error: sin datos de la Bio de "${search.artist}"`}
            bgColor="#dc3545"
          />
        )}
        {song ? (
          <SongInfo song={song} />
        ) : (
          <Message
            msg={`Error: sin datos de la cancion "${search.song}"`}
            bgColor="#dc3545"
          />
        )}
        {lyric ? (
          <SongLyric lyric={lyric} />
        ) : (
          <Message
            msg={`Error: sin datos de la letra de "${search.song}"`}
            bgColor="#dc3545"
          />
        )}
      </article>
    </div>
  );
};
export default SongDetails;
