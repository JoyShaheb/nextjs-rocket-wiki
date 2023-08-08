import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar>
        {children}
        {/* <Footer /> */}
      </Sidebar>
    </>
  );
};

export default Layout;
