import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFilmHot from "./CardFilmHot";

function FilmHot() {
  let dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/filmAll")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "LOAD_FILMHOT", payload: data });
      });
  }, []);
  const filmHot = useSelector((state) => state.filmAll);;
  if (filmHot == []) {
    return <div>dang loaddddddd</div>;
  }
  return (
    <div className="filmHotContainer">
      <br />
      <h5>PHIM LẺ HOT TRONG TUẦN</h5>
      <br />
      {filmHot.map((film) =>
        film.status.hotweek == 1 && film.quantity == 1 ? (
          <CardFilmHot key={film.id} film={film} />
        ) : (
          ""
        )
      )}
      <br />
      <h5>PHIM BỘ HOT TRONG TUẦN</h5>
      <br />
      {filmHot.map((film) =>
        film.status.hotweek == 1 && film.quantity != 1 ? (
          <CardFilmHot key={film.id} film={film} />
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default FilmHot;
