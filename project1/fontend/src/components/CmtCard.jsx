function CmtCard({ cmt }) {
  return (
    <div className="cmtCard">
      <img className="avtUser" src={cmt.userAvt} alt="avt" />
      <p className="userName">{cmt.userName}:</p>
      <p className="cmtContent">{cmt.cmtContent}</p>
    </div>
  );
}

export default CmtCard;
