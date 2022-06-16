import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import UserState from "./auth/UserState";

function App() {
  return (
    <>
      <UserState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserState>
    </>
  );
}

export default App;
