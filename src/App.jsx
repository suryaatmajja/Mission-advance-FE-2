import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Beranda from "./pages/Beranda";
import Series from "./pages/series";
import Profil from "./pages/profilSaya";
import DaftarSaya from "./pages/daftarSaya";
import ListView from "./pages/listView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/series" element={<Series />} />
        <Route path="/profile/:Id" element={<Profil />} />
        <Route path="/daftar-saya" element={<DaftarSaya />} />
        <Route path="/list-view" element={<ListView />} />
      </Routes>
    </Router>
  );
}
