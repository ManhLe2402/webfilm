import { useMemo } from "react";
import { useSelector } from "react-redux";
import { films } from "../constaint";
import CardFilm from "./CardFilm";

function NewUpdate() {
  const filmAll = useSelector((state) => state.filmAll);
  const listFilmLe = useMemo(() => {
    let listOnlyFilm = [];
    filmAll.forEach((film) => {
      if (film.status.new == 1 && film.quantity == 1) {
        listOnlyFilm = [...listOnlyFilm, film];
      }
    });
    return listOnlyFilm;
  }, [filmAll]);
  const listSeriFilm = useMemo(() => {
    let listSeriFilm = [];
    filmAll.forEach((film) => {
      if (film.status.new == 1 && film.quantity != 1) {
        listSeriFilm = [...listSeriFilm, film];
      }
    });
    return listSeriFilm;
  }, [filmAll]);

  return (
    <div>
      <h3 className="filmName">Phim Lẻ Mới Cập Nhập</h3>
      <div className="cardFilms">
        {listFilmLe.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </div>
      <h3 className="filmName">Phim Bộ Mới Cập Nhập</h3>
      <div className="cardFilms">
        {listSeriFilm.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default NewUpdate;
