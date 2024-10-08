import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import FormButton from "./FormButton";
import FormAlert from "./FormAlert";
import Head from "./Head";

const ComBuatFaq = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveFaq = async (e, shouldAddMore) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/faq", {
        judul: judul,
        deskripsi: deskripsi,
      });
      if (shouldAddMore) {
        window.location.reload();
      } else {
        navigate("/daftar-faq");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const resetForm = () => {
    setJudul = "";
    setDeskripsi = "";
  };

  return (
    <div>
      <Head title={"E-Caku | Buat FAQ Baru"} />
      <Sidebar>
        <h1 className="text-5xl font-semibold mb-8">Buat FAQ Baru</h1>
        <form onSubmit={saveFaq}>
          {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Judul</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            ></textarea>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 mb-6"
                placeholder="Deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </label>
            <FormButton resetForm={resetForm}>
              <button
                onClick={(e) => saveFaq(e, true)}
                className="btn btn-active btn-accent"
              >
                Buat lagi
              </button>
            </FormButton>
          </label>
        </form>
      </Sidebar>
    </div>
  );
};

export default ComBuatFaq;
