import { useEffect } from "react";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={poppins.className}>
      <Navbar />
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
        }}
      >
        <BsFillArrowUpCircleFill />
      </button>
      <Footer />
    </div>
  );
};

export default Layout;
