import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="grow-1"> {children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
