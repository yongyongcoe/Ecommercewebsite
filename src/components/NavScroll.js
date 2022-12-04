import { BsSearch, BsBasket3Fill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function NavScroll() {
  return (
    <div className="nav-header">
      <div className="nav-container">
        <div className="nav-link">
          <a href="https://www.google.co.th/">ช้อปคุ้มกว่าเดิมบนแอป</a>
          <a href="https://www.google.co.th/">ขายสินค้ากับลาซาด้า</a>
          <a href="https://www.google.co.th/">ช่วยเหลือ</a>
          <a href="https://www.google.co.th/">ติดตามสินค้า</a>
          <a href="https://www.google.co.th/">ลงชื่อเข้าใช้</a>
          <a href="https://www.google.co.th/">สมัครสมาชิก</a>
        </div>
        <div className="nav-search">
          <img className="logo" src="https://images.freeimages.com/images/large-previews/d85/eccommerce-concept-1-1057097.jpg"></img>
            <form>
              <label>
                <input className="input-form" type="text" name="search" placeholder="ค้นหาสินค้า" />
              </label>
              <button
                style={{
                  width: "45px",
                  height: "45px",
                  border: "none",
                  borderRadius: "0 2px 2px 0",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#f57224",
                  color: "#ffff",
                  alignItems: "center"

                }}
                type="submit">
                <BsSearch size={20} />
              </button>
            </form>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <a href="https://www.google.co.th/"><BsBasket3Fill size={40} /></a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center"
            }}>
            <a href="https://www.google.co.th/"> 
            <img className="logo" src="https://images.freeimages.com/images/large-previews/d85/eccommerce-concept-1-1057097.jpg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

