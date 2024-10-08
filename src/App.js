import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DaftarPage from "./pages/DaftarPage";
import MasukPage from "./pages/MasukPage";
import Dashboard from "./pages/Dashboard";
import AktivitasPage from "./pages/AktivitasPage";
import BuatBaruPage from "./pages/BuatBaruPage";
import FAQPage from "./pages/FAQPage";
import KetentuanKebijakanPage from "./pages/KetentuanKebijakanPage";
import UsersPage from "./pages/UsersPage";
import DaftarFaq from "./pages/DaftarFaq";
import BuatFaq from "./pages/BuatFaq";
import EditFaqPage from "./pages/EditFaqPage";
import EditAktivitasPage from "./pages/EditAktivitasPage";
import EditPenggunaPage from "./pages/EditPenggunaPAge";
import DaftarTim from "./pages/DaftarTim";
import EditTimPage from "./pages/EditTimPage";
import BuatTimPage from "./pages/BuatTimPage";
import BuatPenggunaPage from "./pages/BuatPenggunaPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/daftar" element={<DaftarPage />}></Route>
          <Route path="/masuk" element={<MasukPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/aktivitas" element={<AktivitasPage />}></Route>
          <Route
            path="/aktivitas/edit/:id"
            element={<EditAktivitasPage />}
          ></Route>
          <Route path="/buat-baru" element={<BuatBaruPage />}></Route>
          <Route path="/faq" element={<FAQPage />}></Route>
          <Route
            path="/ketentuan-layanan-kebijakan-privasi"
            element={<KetentuanKebijakanPage />}
          ></Route>
          <Route path="/daftar-pengguna" element={<UsersPage />}></Route>
          <Route
            path="/daftar-pengguna/edit/:id"
            element={<EditPenggunaPage />}
          ></Route>
          <Route path="/daftar-faq" element={<DaftarFaq />}></Route>
          <Route path="/buat-faq" element={<BuatFaq />}></Route>
          <Route path="/daftar-faq/edit/:id" element={<EditFaqPage />}></Route>
          <Route path="/daftar-tim" element={<DaftarTim />}></Route>
          <Route path="/daftar-tim/edit/:id" element={<EditTimPage />}></Route>
          <Route path="/buat-tim" element={<BuatTimPage />}></Route>
          <Route path="/buat-pengguna" element={<BuatPenggunaPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
