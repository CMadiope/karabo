import { Poppins } from "next/font/google";
import Navbar from "./Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div className={poppins.className}>
    <Navbar/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
