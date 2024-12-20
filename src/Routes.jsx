import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import User from "./pages/User";
import Footer from "./components/Footer";

const AppRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/user"
              element={token ? <User /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
