import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="container mx-auto px-2 lg:px-4">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
