import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataFilm, setDataFilm] = useState(undefined);

  const handleNavigateWatch = useCallback((id) => {
    /*     let newData = {
      ...dataFilm,
      view: dataFilm.view + 1,
    };
    fetch(`http://localhost:3000/filmAll/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "NEW_VIEW",
          payload: newData,
        });
        dataFilm.view += 1;
      })
      .catch((err) => {
        console.log(err);
      }); */
    navigate(`/watch/${id}`);
  }, []);

  const filmAll = useSelector((state) => state.filmAll);
  useEffect(() => {
    fetch(`http://localhost:3000/filmAll/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setDataFilm(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (id) {
    //   const filmHihi = filmAll.find((film) => film.id == id);
    //   setDataFilm(filmHihi);
    // }
  }, [id]);

  useEffect(() => {
    console.log(dataFilm);
  }, [dataFilm]);
  if (dataFilm == undefined) {
    console.log("checkdata");
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="detailFilm">
        <div className="inforMore">
          <div className="img_btnWatch">
            <img className="logoFilm" src={dataFilm.imgURL} alt="logoFilm" />
            <button
              className="btnWatch"
              onClick={() => handleNavigateWatch(dataFilm.id)}
            >
              Xem phim
            </button>
          </div>
          <div>
            <p className="filmName">{dataFilm.name}</p>
            <div className="detailInfor">
              <p className="statusFilm">Trạng thái: {dataFilm.status.status}</p>
              <p>
                Rating:{dataFilm.rating.avgRating}
                <span> ({dataFilm.rating.votes} votes) </span>
              </p>
              <p>Tác giả: {dataFilm.author}</p>
              <p>Năm: {dataFilm.year}</p>
              <p>Thời lượng: {dataFilm.time} phút</p>
              {/* <p>số tập</p> */}
              <p>Ngôn ngữ: {dataFilm.language}</p>
              <p>
                Thể loại:
                {dataFilm.categories.map((category, i) => (
                  <span key={i}> {category},</span>
                ))}
              </p>
              <p>Lượt xem {dataFilm.view}</p>
              <p>Diễn viên</p>
            </div>
          </div>
        </div>
        <div className="contentFilm">
          <h4 className="filmName">NỘI DUNG PHIM</h4>
          <p>{dataFilm.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
