import React, { useState } from "react";
import "./MovieCard.css";
import Modal from "../Modal/Modal";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsopen] = useState(false);

  let title = movie.title;
  const words = movie.title.split(" ");
  if (words.length > 5) {
    const val = words.slice(0, 5);
    title = val.join(" ") + "...";
  }
  const image = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`;

  return (
    <div className="card">
      <div className="image-figure">
        <img className="card-image" src={image} alt={movie.title + "poster"} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>
          <small>Release Date: {movie.release_date}</small>
        </p>
        <p>
          <small>Rating: {movie.vote_average}</small>
        </p>
      </div>
      <div className="button-container">
        <button
          className="details-button"
          onClick={() => {
            setIsopen(true);
          }}
        >
          View details...
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        setIsopen={setIsopen}
        image={image}
        title={movie.title}
        releaseDate={movie.release_date}
        voteAverage={movie.vote_average}
        popularity={movie.popularity}
        overview={movie.overview}
      />
    </div>
  );
};

export default MovieCard;
