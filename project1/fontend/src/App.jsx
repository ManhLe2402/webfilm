import { Route, Routes } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import FilmHot from "./components/FilmHot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailPage from "./DetailPage";
import IndexPage from "./IndexPage";
import WatchFilm from "./WatchFilm";
import SearchFilm from "./components/SearchFilm";
import NominatedMovie from "./components/NominatedMovie";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <NominatedMovie /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/watch/:id" element={<WatchFilm />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search/:search" element={<SearchFilm />} />
        </Routes>
        <div className="filmHot">
          <FilmHot></FilmHot>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
