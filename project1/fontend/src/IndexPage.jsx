import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFilm from "./components/CardFilm";
import NewUpdate from "./components/NewUpdate";

const IndexPage = () => {
  let dispatch = useDispatch();
  let [pageFilm, setPageFilm] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3000/filmAll?_page=${pageFilm}&_limit=3`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "LOAD_DATA", payload: data });
      });
  }, [pageFilm]);
  let filmList = useSelector((state) => state.filmList);

  let handleNavigatePage = (page) => {
    setPageFilm(page);
  };
  if (filmList.length == 0) {
    <p>Loadding....</p>;
  }
  return (
    <div>
      <div className="c">
        <div className="cardFilms">
          {filmList.map((film) => (
            <CardFilm key={film.id} film={film} />
          ))}
        </div>

        <nav aria-label="Page navigation example">
          <div class="pagination">
            <div
              class="page-item"
              onClick={() => handleNavigatePage(pageFilm - 1)}
            >
              <div class="page-link">Previous</div>
            </div>
            <div class="page-item" onClick={() => handleNavigatePage(1)}>
              <a class="page-link">1</a>
            </div>
            <div class="page-item" onClick={() => handleNavigatePage(2)}>
              <a class="page-link">2</a>
            </div>
            <div class="page-item" onClick={() => handleNavigatePage(3)}>
              <a class="page-link">3</a>
            </div>

            <div
              class="page-item"
              onClick={() => handleNavigatePage(pageFilm + 1)}
            >
              <a class="page-link">Next</a>
            </div>
          </div>
        </nav>
      </div>
      <NewUpdate />
    </div>
  );
};

export default IndexPage;
