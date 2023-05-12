import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// components
import Header from "./components/header/header";
import HomePage from "./components/HomePage/HomePage";
import GoTop from "./components/go top/GoTop";
import Footer from "./components/Footer/Footer";
import Course from "./components/course/Course";
import AboutUs from "./components/aboutUs/AboutUS";

let App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/Home" />} />
        <Route path="courses/:id" element={<Course />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/AboutUS" element={<AboutUs/>}/>
      </Routes>
      <GoTop />
      <Footer />
    </>
  );
};
export default App;
