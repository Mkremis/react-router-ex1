import React from "react";

const SongLyric = ({ lyric }) => {
  return (
    <div>
      <h3></h3>
      <section dangerouslySetInnerHTML={{ __html: lyric }}></section>
    </div>
  );
};
export default SongLyric;
