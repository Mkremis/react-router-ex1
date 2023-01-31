import React from "react";

const SongInfo = ({ song }) => {
  return (
    <section className="song">
      <h3>{song.full_title}</h3>
      <figure>
        {" "}
        <img src={song.header_image_thumbnail_url} />
        <figcaption>{song.release_date_for_display}</figcaption>
      </figure>
    </section>
  );
};

export default SongInfo;
