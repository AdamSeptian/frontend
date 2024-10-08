import React from "react";
import BGFooter from "../assets/bg-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        id="kontak"
        className="footer p-10 bg-base-200 text-base-content text-white"
        style={{
          backgroundImage: `url(${BGFooter})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav>
          <h6 className="footer-title text-5xl">E-CAKU</h6>
          <p>E-Caku, Solusi Pencatatan Keuangan Harianmu!</p>
        </nav>
        <nav>
          <h6 className="footer-title">Menu</h6>
          <a href="#" className="link link-hover">
            Beranda
          </a>
          <a href="#tentang" className="link link-hover">
            Tentang
          </a>
          <a href="#fitur" className="link link-hover">
            Fitur
          </a>
          <a href="#tim" className="link link-hover">
            Tim
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/faq" className="link link-hover">
            FAQ
          </Link>
          <Link
            to="/ketentuan-layanan-kebijakan-privasi"
            className="link link-hover"
          >
            Ketentuan Layanan & Kebijakan Privasi
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Kontak</h6>
          <p>
            <span className="font-semibold">Phone:</span> 021 0192 2389
          </p>
          <p>
            <span className="font-semibold">Email:</span> ecaku012@gmail.com
          </p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 bg-purple text-white">
        © Copyright E-Caku. All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;
