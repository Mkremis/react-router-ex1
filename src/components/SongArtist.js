import React from "react";

const SongArtist = ({ bio }) => {
  return (
    <section className="bio">
      <h3>{bio.name}</h3>
      <a href={bio.weburl}>
        <figure>
          <img src={bio.avatar} />
          <figcaption>..mas en Music Apple</figcaption>
        </figure>
      </a>
    </section>
  );
};
export default SongArtist;
