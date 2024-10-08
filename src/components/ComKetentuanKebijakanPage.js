import React from "react";
import BGPrivacy from "../assets/bg-privacy-terms.png";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const ComKetentuanKebijakanPage = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      {/* head start  */}
      <Head title={"E-Caku | Ketentuan Layanan dan Kebijakan Privasi"} />
      {/* head end  */}

      {/* hero start  */}
      <div
        id="fitur"
        class="mx-auto p-8 text-white"
        style={{
          backgroundImage: `url(${BGPrivacy})`,
        }}
      >
        <div className="flex justify-end">
          <button onClick={back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-x"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </button>
        </div>
        <p className="mb-4">Kamu sedang berada di</p>
        <h1 className="text-5xl font-bold uppercase">
          Ketentuan Layanan dan Kebijakan Privasi
        </h1>
      </div>
      {/* hero end  */}
      <div className="p-8">
        {/* ketentuan layanan start  */}
        <div className="mx-auto my-8">
          <h1 className="text-4xl font-semibold underline underline-offset-8 mb-8">
            Ketentuan Layanan
          </h1>
          <p>
            Selamat datang di E-Caku! Harap baca dengan cermat ketentuan layanan
            kami sebelum menggunakan layanan kami.
          </p>
          <br />
          <ol className="list-decimal list-outside px-4">
            <li>
              <section className="font-medium">Penerimaan Ketentuan</section>
              Dengan mengakses atau menggunakan layanan E-Caku, Anda dianggap
              menerima dan menyetujui semua ketentuan yang tercantum di sini.
              Jika Anda tidak setuju dengan salah satu bagian dari ketentuan
              ini, harap tidak melanjutkan penggunaan layanan kami.
            </li>
            <li>
              <section className="font-medium">Penggunaan Layanan</section>
              Anda diizinkan menggunakan layanan E-Caku sesuai dengan ketentuan
              ini. Anda setuju untuk tidak melakukan tindakan yang dapat merusak
              layanan atau melanggar hak atau kebijakan kami.
            </li>
            <li>
              <section className="font-medium">Privasi</section>
              Privasi Anda penting bagi kami. Harap baca Kebijakan Privasi kami
              untuk memahami bagaimana kami mengumpulkan, menggunakan, dan
              melindungi informasi pribadi Anda.
            </li>
            <li>
              <section className="font-medium">Akurasi Informasi</section>
              Kami berusaha memberikan informasi yang akurat, tetapi tidak
              menjamin keakuratan, kelengkapan, atau ketersediaan informasi di
              layanan kami. Kami tidak bertanggung jawab atas kerugian yang
              timbul akibat ketergantungan pada informasi yang disediakan.
            </li>
            <li>
              <section className="font-medium">Penghentian Layanan</section>
              Kami berhak untuk menghentikan atau membatasi akses Anda ke
              layanan kami tanpa pemberitahuan jika kami menganggap ada
              pelanggaran terhadap ketentuan ini.
            </li>
            <li>
              <section className="font-medium">Perubahan Ketentuan</section>
              Kami dapat mengubah ketentuan ini dari waktu ke waktu. Perubahan
              tersebut akan efektif segera setelah diterbitkan di situs web
              kami. Anda dianggap menyetujui perubahan tersebut dengan terus
              menggunakan layanan kami.
            </li>
            <li>
              <section className="font-medium">Penggunaan Layanan</section>
              Anda diizinkan menggunakan layanan E-Caku sesuai dengan ketentuan
              ini. Anda setuju untuk tidak melakukan tindakan yang dapat merusak
              layanan atau melanggar hak atau kebijakan kami.
            </li>
            <li>
              <section className="font-medium">Hukum yang Berlaku</section>
              Ketentuan ini diatur oleh hukum yang berlaku di yurisdiksi kami.
            </li>
          </ol>
          <br />
        </div>
        {/* ketentuan layanan end  */}
        {/* kebijakan privasi start  */}
        <div className="mx-auto my-8">
          <h1 className="text-4xl font-semibold underline underline-offset-8 mb-8">
            Kebijakan Privasi
          </h1>
          <p>
            Selamat datang di Kebijakan Privasi E-Caku. Kebijakan ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            informasi pribadi Anda saat menggunakan layanan kami.
          </p>
          <br />
          <ol className="list-decimal list-outside px-4">
            <li>
              <section className="font-medium">
                Informasi yang Kami Kumpulkan
              </section>
              <ul className="list-disc list-outside px-4">
                <li>
                  <section className="font-medium">Informasi Pribadi:</section>{" "}
                  Kami dapat mengumpulkan informasi pribadi seperti nama, alamat
                  email, dan informasi kontak lainnya saat Anda mendaftar atau
                  berinteraksi dengan layanan kami.
                </li>
                <li>
                  <section className="font-medium">
                    Informasi Penggunaan:
                  </section>{" "}
                  Kami dapat mengumpulkan informasi tentang cara Anda
                  menggunakan layanan kami, termasuk data transaksi, log
                  aktivitas, dan preferensi pengguna.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">Penggunaan Informasi</section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Kami menggunakan informasi pribadi Anda untuk menyediakan
                  layanan, mengelola akun pengguna, dan berkomunikasi dengan
                  Anda.
                </li>
                <li>
                  Informasi penggunaan digunakan untuk analisis, pemeliharaan,
                  dan peningkatan layanan kami.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">Berbagi Informasi</section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Kami tidak akan menyewakan, menjual, atau membagikan informasi
                  pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali
                  diperlukan untuk menyediakan layanan atau dipersyaratkan oleh
                  hukum.
                </li>
                <li>
                  Kami dapat berbagi informasi non-pribadi atau anonim untuk
                  tujuan analisis atau pemasaran.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">Keamanan Informasi</section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Kami berkomitmen untuk melindungi informasi Anda. Kami
                  menggunakan langkah-langkah keamanan teknis dan organisasi
                  untuk mencegah akses yang tidak sah atau penggunaan yang tidak
                  sah.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">Akses dan Kontrol</section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
                  informasi pribadi Anda. Hubungi kami untuk meminta akses atau
                  melakukan perubahan pada data Anda.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">
                Perubahan pada Kebijakan Privasi
              </section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu.
                  Perubahan tersebut akan diinformasikan melalui situs web kami.
                </li>
              </ul>
            </li>
            <li>
              <section className="font-medium">Hubungi Kami</section>
              <ul className="list-disc list-outside px-4">
                <li>
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang
                  Kebijakan Privasi ini, silakan hubungi kami melalui
                  [ecaku12@gmail.com]
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/* kebijakan privasi end  */}
      </div>
    </div>
  );
};

export default ComKetentuanKebijakanPage;
