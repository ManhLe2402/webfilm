import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import CardFilm from "./CardFilm";
import { useSelector } from "react-redux";

function CategoryPage() {
  const filmAll = useSelector((state) => state.filmAll);
  console.log("category:::", filmAll);
  const { category } = useParams();
  const typeFilm = useMemo(() => {
    let filmList = [];
    if (category == "Bộ") {
      filmAll.forEach((film) => {
        if (film.quantity != 1) {
          filmList = [...filmList, film];
        }
      });
    } else if (category == "Lẻ") {
      filmAll.forEach((film) => {
        if (film.quantity == 1) {
          filmList = [...filmList, film];
        }
      });
    } else {
      filmAll.forEach((film) => {
        if (film.categories.find((categor) => categor === category)) {
          filmList = [...filmList, film];
        }
      });
    }
    return filmList;
  }, [category, filmAll]);

  useEffect(() => {
    console.log("typeFilm", typeFilm);
  }, [typeFilm]);

  return (
    <div>
      <h3 className="filmName">Phim {category}</h3>
      <div className="cardFilms">
        {typeFilm.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
