import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [nav]);

  return (
    <div className='overflow-x-hidden'>
      <div className={poppins.className}>
        <Navbar nav={nav} setNav={setNav} />
        <main>{children}</main>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            padding: "",
            fontSize: "50px",
            bottom: "50px",
            right: "40px",
            color: "#111",
            textAlign: "center",
            borderRadius: "50%",
            zIndex: "10",
          }}
        >
          <BsFillArrowUpCircleFill />
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
