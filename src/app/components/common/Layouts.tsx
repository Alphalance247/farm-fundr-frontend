import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const LayOuts = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayOuts;
