import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CmtCard from "./components/CmtCard";

function WatchFilm() {
  const [dataFilm, setDataFilm] = useState(undefined);
  let [tapPhim, setTapPhim] = useState("0");
  let [textCmt, setTextCmt] = useState("");
  let filmAll = useSelector((state) => state.filmAll);
  let dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
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
      // const film = filmAll.find((film) => film.id == id);
      // setDataFilm(film);
    }
  }, [id]);
  if (dataFilm == undefined) {
    // useMemo(() => {
    //   fetch(`http://localhost:3000/filmAll/${id}`)
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log("data", data);
    //       setDataFilm(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    return <p>Loaddingggg</p>;
  }
  const handleChuyenTap = (tapPhim) => {
    setTapPhim(tapPhim);
  };
  const handleChange = (e) => {
    setTextCmt(e.target.value);
    console.log(textCmt);
  };
  const handleSubmitCmt = (e) => {
    let newData = {
      ...dataFilm,
      cmts: [
        ...dataFilm.cmts,
        {
          userId: "user1",
          userName: "Phương Linh",
          userAvt: "/assist/phuonglinh.jpg",
          cmtContent: textCmt,
        },
      ],
    };

    e.preventDefault();
    if (textCmt == "") {
      alert("Nhập cmt đi thằng ngu");
    } else {
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
            type: "NEW_CMT",
            payload: newData,
          });
          dataFilm.cmts = [...newData.cmts];
          setTextCmt("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="watchFilm">
      <h4 className="filmName">{dataFilm.name}</h4>
      <video
        controls
        autoPlay
        width="794"
        height="559"
        src={
          dataFilm.videoURL.length == 1
            ? dataFilm.videoURL
            : dataFilm.videoURL[tapPhim]
        }
      ></video>
      <div className={dataFilm.quantity == 1 ? "phimle" : "chuyenTap"}>
        {dataFilm.videoURL.map((videoURL, index) => (
          <button
            className="btnChuyenTap"
            onClick={() => handleChuyenTap(index)}
          >
            Tập {index + 1}
          </button>
        ))}
      </div>
      <div className="contentFilm">
        <h4 className="filmName">NỘI DUNG PHIM</h4>
        <p>{dataFilm.content}</p>
      </div>
      <div className="cmtReview">
        <h4>Bình luận về phim</h4>
        <p> {dataFilm.cmts.length} bình luận</p>
        <div className="userCmt">
          <img className="avtUser" src="/assist/phuonglinh.jpg" alt="" />
          <form className="inputCmt" onSubmit={handleSubmitCmt}>
            <input
              onChange={handleChange}
              className="inputCmt"
              type="text"
              placeholder="Nhập bình luận..."
              value={textCmt}
            />
          </form>
        </div>
        <div>
          {dataFilm.cmts.map((cmt, i) => (
            <CmtCard key={i} cmt={cmt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchFilm;
