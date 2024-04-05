import { useCallback } from "react";
import { generatePath, useNavigate } from "react-router-dom";

function CardFilm({ film }) {
  const navigate = useNavigate();
  const handleNagigateDetail = useCallback((id) => {
    navigate(generatePath("/:id", { id }));
  }, []);

  return (
    <div onClick={() => handleNagigateDetail(film.id)}>
      <div className="cardFilm">
        <img className="logoFilm" src={film.imgURL} alt="logoFilm" />
        <div className="mask"></div>
        <div className="tagFilm">
          {film.quantity == 1 ? (
            <p>{film.time} phút</p>
          ) : (
            <p>
              {film.videoURL.length}/{film.quantity}tập
            </p>
          )}
        </div>
        <div className="basicInfor">
          <p className="filmName"> {film.name}</p>
          <p className="filmYear"> {film.year}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
