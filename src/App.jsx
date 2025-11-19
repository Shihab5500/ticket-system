
import React, { useState, Suspense } from "react";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/Hero-Section/Hero-section";
import Footer from "./component/Footer-section/Footer-section";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// lazy import
const MainSection = React.lazy(() =>
  import("./component/Main-section/mainsection")
);

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  const handleUpdateCounters = (inProgressChange, resolvedChange) => {
    setInProgress((prev) => Math.max(0, prev + inProgressChange));
    setResolved((prev) => Math.max(0, prev + resolvedChange));
  };

  return (
    <>
      <Navbar></Navbar>
      <HeroSection inProgress={inProgress} resolved={resolved}></HeroSection>
      <Suspense fallback={<div>Data Loading</div>}>
        <MainSection onUpdateCounters={handleUpdateCounters}></MainSection>
      </Suspense>

      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
    </>
  );
}

export default App;

