import { generatePath, Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
function Header() {
  const navigate = useNavigate();
  // const { category } = useParams();
  const handleNavigateWatch = useCallback((category) => {
    navigate(generatePath(`/category/${category}`));
  }, []);
  const handleNavigateSearch = useCallback((searchText) => {
    navigate(generatePath(`/search/${searchText}`));
  }, []);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNavigateSearch(searchInput);
    setSearchInput("");
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img id="logo" src="/assist/header-logo.png" alt="logo" />
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            className="search"
            placeholder="Tìm kiếm phim..."
            onChange={handleChange}
            value={searchInput}
          />
        </form>
      </div>
      <div className="navbar">
        <Link className="navbarItem" to="/">
          TRANG CHỦ
        </Link>
        <li className="categoryFilm">
          THỂ LOẠI
          <div className="categoryFilmItem">
            <span
              onClick={() => handleNavigateWatch("Hành động")}
              className="navbarItem"
            >
              Hành động
            </span>

            <span
              onClick={() => handleNavigateWatch("Kiếm hiệp")}
              className="navbarItem"
            >
              Kiếm hiệp
            </span>
            <span
              onClick={() => handleNavigateWatch("Cổ trang")}
              className="navbarItem"
            >
              Cổ trang
            </span>
            <span
              onClick={() => handleNavigateWatch("Phiêu lưu")}
              className="navbarItem"
            >
              Phiêu lưu
            </span>
          </div>
        </li>
        <span
          className="navbarItem"
          onClick={() => handleNavigateWatch("Quốc gia")}
        >
          QUỐC GIA
        </span>
        <span className="navbarItem" onClick={() => handleNavigateWatch("Lẻ")}>
          PHIM LẺ
        </span>
        <span className="navbarItem" onClick={() => handleNavigateWatch("Bộ")}>
          PHIM BỘ
        </span>
        <span
          className="navbarItem"
          onClick={() => handleNavigateWatch("Hoạt hình")}
        >
          HOẠT HÌNH
        </span>
      </div>
    </div>
     
  );
}
export default Header;
