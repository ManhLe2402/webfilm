import { useCallback } from "react";
import { generatePath, useNavigate } from "react-router-dom";

function CardFilmHot({ film }) {
  const navigate = useNavigate();
  const handleNagigateDetail = useCallback((id) => {
    navigate(generatePath("/:id", { id }));
  }, []);

  return (
    <div onClick={() => handleNagigateDetail(film.id)}>
      <div className="cardFilmHot">
        <img className="logoFilmHot" src={film.imgURL} alt="logoFilm" />
        <div className="maskFilmHot"></div>
        <div className="basicInforHot">
          <p className="filmName"> {film.name}</p>
          <p className="filmRating">Rating: {film.rating.avgRating}/10</p>
          <p className="filmview"> Lượt xem: {film.view}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFilmHot;
