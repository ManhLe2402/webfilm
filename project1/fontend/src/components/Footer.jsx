import { Link, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function Footer() {
  const navigate = useNavigate();
  // const { category } = useParams();
  const handleNavigateWatch = useCallback((category) => {
    navigate(`/category/${category}`);
    console.log(category);
  }, []);
  return (
    <div className="footerCategory">
      <div className="footerItems">
        <h3 className="filmName">Phim Mới</h3>
        <div className="footerItem" onClick={() => handleNavigateWatch("Lẻ")}>
          Phim lẻ
        </div>

        <div className="footerItem" onClick={() => handleNavigateWatch("Bộ")}>
          Phim bộ
        </div>
        <div
          className="footerItem"
          onClick={() => handleNavigateWatch("Hoạt hình")}
        >
          Hoạt hình
        </div>
      </div>
      <div className="footerItems">
        <h3 className="filmName">Thể Loại</h3>
        <div
          onClick={() => handleNavigateWatch("Hành động")}
          className="footerItem"
        >
          Hành động
        </div>

        <div
          onClick={() => handleNavigateWatch("Kiếm hiệp")}
          className="footerItem"
        >
          Kiếm hiệp
        </div>
        <div
          onClick={() => handleNavigateWatch("Cổ trang")}
          className="footerItem"
        >
          Cổ trang
        </div>
        <div
          onClick={() => handleNavigateWatch("Phiêu lưu")}
          className="footerItem"
        >
          Phiêu lưu
        </div>
      </div>
      <div className="footerItems">
        <h3 className="filmName">Quốc gia</h3>
        <div
          className="footerItem"
          onClick={() => handleNavigateWatch("Quốc gia")}
        >
          Trung Quốc
        </div>
        <div
          className="footerItem"
          onClick={() => handleNavigateWatch("Quốc gia")}
        >
          Hàn
        </div>
        <div
          className="footerItem"
          onClick={() => handleNavigateWatch("Quốc gia")}
        >
          Nhật
        </div>
      </div>
    </div>
  );
}

export default Footer;
