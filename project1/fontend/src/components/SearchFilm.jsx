import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CardFilm from "./CardFilm";

function SearchFilm() {
  const filmAll = useSelector((state) => state.filmAll);
  const { search } = useParams();
  function toLowerCaseNonAccentVietnamese(str) {
    str = str.toLowerCase();

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  }
  function searchInDb(str, para) {
    const regex = new RegExp(str, "ig");
    console.log(regex);
    const found = para.match(regex);

    if (found) {
      return true;
    }
    return false;
  }
  const listFilmSearch = useMemo(() => {
    let filmList = [];
    filmAll.forEach((film) => {
      if (
        searchInDb(
          toLowerCaseNonAccentVietnamese(search),
          toLowerCaseNonAccentVietnamese(film.name)
        )
      ) {
        filmList = [...filmList, film];
      }
    });

    return filmList;
  }, [search, filmAll]);
  console.log("SearchFilm", search);
  console.log("phim search", listFilmSearch);
  return (
    <div className="searchFilm">
      <h4 className="filmName">Tìm kiếm phim {search}</h4>
      <div className="showSearchFilm">
        {listFilmSearch.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
export default SearchFilm;
