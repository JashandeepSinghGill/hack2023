import { useEffect, useState } from "react";
import { useSide } from "../services/useSide";
// import SideNavbar from "./SideNavBar";
import { useRouter } from "next/router";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { expanded } = useSide();
  const [showSidebar, setShowSidebar] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 100) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [clientWindowHeight]);

  return (
    <>
      <NavBar />
      <main style={{ marginLeft: expanded ? "255px" : "75px" }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
function setClientWindowHeight(scrollY: number) {
  throw new Error("Function not implemented.");
}
