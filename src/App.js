import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Announcements from "./Components/Announcements/Announcements";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </>
  );
};
export default App;
