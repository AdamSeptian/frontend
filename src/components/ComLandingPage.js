import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../assets/hero.png";
import HeroImage from "../assets/hero-image.png";
import BGFitur from "../assets/bg-fitur.png";
import BGTrynow from "../assets/bg-trynow.png";
import Tentang from "../assets/tentang-image.png";
import "../App.css";
import Head from "./Head";

const ComLandingPage = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching recent teams:", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      {/* head start  */}
      <Head title={"E-Caku | Solusi Pencatatan Keuangan Harian Anda"} />
      {/* head end  */}
      {/* hero start */}
      <div
        className="hero min-h-screen"
        id=""
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroImage} className="md:max-w-lg" alt="Hero" />
          <div>
            <h1 className="text-5xl font-bold capitalize">
              menyediakan bantuan mencatat keuangan harian untuk anda
            </h1>
            <p className="py-6">
              Mencatat Keuangan Harian Lebih Mudah, Lebih Menyenangkan!
            </p>
            <a href="/daftar" className="btn btn-purple">
              Coba Sekarang
            </a>
          </div>
        </div>
      </div>
      {/* hero end  */}
      <div className="p-4">
        {/* about start  */}
        <div id="tentang" class="mx-auto my-8 shadow-md rounded-md p-4">
          <h1 className="text-5xl font-semibold py-4 text-center">Tentang</h1>
          <p className="pb-4 text-3xl text-center">
            Selamat datang di E-Caku - Solusi Pencatatan Keuangan Harian
            Terbaik!
          </p>
          <div className="xl:flex justify-between flex-row-reverse">
            <figure>
              <img className="md:max-w-xs" src={Tentang} alt="Album" />
            </figure>
            <div className="relative xl:w-1/2 text-justify">
              <p className="relative mb-8">
                E-Caku adalah sebuah platform inovatif yang didedikasikan untuk
                membantu Anda mengelola keuangan pribadi Anda dengan lebih
                efisien. Dengan E-Caku, Anda dapat dengan mudah mencatat dan
                melacak setiap transaksi keuangan harian Anda, mengorganisasikan
                pengeluaran, dan memantau arus kas Anda secara real-time. Kami
                percaya bahwa mengelola keuangan haruslah menjadi pengalaman
                yang mudah, transparan, dan terjangkau bagi semua orang. Dengan
                antarmuka yang ramah pengguna dan fitur-fitur yang lengkap,
                E-Caku hadir untuk memberikan solusi praktis bagi kebutuhan
                pencatatan keuangan Anda. E-Caku tidak hanya sekadar sebuah
                aplikasi pencatatan keuangan. Kami adalah mitra Anda dalam
                perjalanan menuju keuangan yang lebih sehat dan teratur. Mari
                bersama-sama membangun masa depan keuangan yang lebih cerah
                dengan E-Caku.
              </p>
            </div>
          </div>
        </div>
        {/* about end  */}
        {/* fitur utama start  */}
        <div
          id="fitur"
          className="mx-auto my-8 px-auto pt-4 pb-8 rounded-lg drop-shadow-xl"
          style={{
            backgroundImage: `url(${BGFitur})`,
          }}
        >
          <h1 className="text-5xl pt-4 pb-8 text-center font-semibold text-white">
            Fitur Utama
          </h1>
          <div className="lg:flex grid gap-6 mx-auto p-8">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body text-center items-center">
                <div class="rounded-full p-4 bg-purple my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-analyze"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
                    <path d="M4 13a8.1 8.1 0 0 0 15 3" />
                    <path d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium">Pemantauan Saldo</h2>
                <p className="text-center">
                  Pantau saldo Anda secara real-time dan dapatkan gambaran jelas
                  tentang kondisi keuangan Anda.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body text-center items-center">
                <div class="rounded-full p-4 bg-purple my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chart-bar"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M4 20l14 0" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium">
                  Pemasukan dan Pengeluaran
                </h2>
                <p>
                  Catat dengan mudah pemasukan dan pengeluaran harian Anda untuk
                  mengelola keuangan secara efisien.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body text-center items-center">
                <div class="rounded-full p-4 bg-purple my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-notes"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                    <path d="M9 7l6 0" />
                    <path d="M9 11l6 0" />
                    <path d="M9 15l4 0" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium">Tampilan Aktivitas</h2>
                <p>
                  Lihat riwayat aktivitas transaksi Anda dalam satu tampilan,
                  memudahkan analisis dan perencanaan keuangan.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body text-center items-center">
                <div class="rounded-full p-4 bg-purple my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-pencil-plus"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                    <path d="M13.5 6.5l4 4" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium">
                  Penambahan Data Melalui Form
                </h2>
                <p>
                  Tambahkan transaksi baru dengan cepat melalui formulir
                  sederhana, meminimalkan kerumitan dalam pencatatan keuangan.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* fitur utama end  */}
        {/* tim kami start  */}
        <div id="tim" class="mx-auto my-8">
          <h1 className="text-5xl font-semibold text-center mb-8">Tim Kami</h1>
          <div className="grid lg:grid-cols-4 gap-8">
            {teams.map((team) => (
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img className="w-40 rounded-md" src={team.url} alt={team.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title capitalize">{team.name}</h2>
                  <p className="font-medium capitalize">{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tim kami end  */}
        {/* coba sekarang start  */}
        <div
          id="fitur"
          class="mx-auto my-8 px-8 pt-4 pb-8 rounded-lg drop-shadow-xl text-white text-center"
          style={{
            backgroundImage: `url(${BGTrynow})`,
          }}
        >
          <h1 className="text-5xl font-semibold mb-8">Coba Sekarang</h1>
          <p className="mb-8">
            Jangan Tunda Lagi, Mulai Catat Keuangan Harianmu Sekarang! E-Caku,
            Solusi Pencatatan Keuangan yang Mudah dan Efisien. Dengan
            Fitur-fitur Terkini dan Antarmuka Intuitif, Pengelolaan Keuanganmu
            Jadi Lebih Ringan. Temukan Ketenangan Finansial dengan E-Caku – Coba
            Sekarang dan Nikmati Kemudahan dalam Setiap Entri!
          </p>
          <a href="/daftar" className="btn btn-white">
            Coba sekarang
          </a>
        </div>
        {/* coba sekarang end  */}
      </div>
      {/* tim kami end  */}
    </div>
  );
};

export default ComLandingPage;
