import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import FormButton from "./FormButton";
import FormAlert from "./FormAlert";
import Head from "./Head";

const ComBuatBaruPage = () => {
  const [kategori, setKategori] = useState("");
  const [keterangan, setketerangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveCatatan = async (e, shouldAddMore) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/catatan", {
        kategori: kategori,
        keterangan: keterangan,
        jumlah: jumlah,
      });
      if (shouldAddMore) {
        window.location.reload();
      } else {
        navigate("/aktivitas");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const resetForm = () => {
    setKategori("");
    setketerangan("");
    setJumlah("");
  };
  return (
    <div>
      <Head title={"E-Caku | Buat Catatan Baru"} />
      <Sidebar>
        <h1 className="text-5xl font-semibold mb-8">Buat Catatan Baru</h1>
        <form onSubmit={saveCatatan}>
          {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
          <label className="form-control w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Kategori</span>
            </div>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="select select-bordered"
            >
              <option hidden>Kategori</option>
              <option>Pemasukan</option>
              <option>Pengeluaran</option>
            </select>
          </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Keterangan</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Cth. belanja harian"
                value={keterangan}
                required
                onChange={(e) => setketerangan(e.target.value)}
              ></textarea>
            </label>
            <div className="label">
              <span className="label-text">Jumlah</span>
            </div>
            <input
              type="number"
              placeholder="Cth. 200000"
              className="input input-bordered mb-6"
              value={jumlah}
              required
              onChange={(e) => setJumlah(e.target.value)}
            />
            <FormButton resetForm={resetForm}>
            <button
              onClick={(e) => saveCatatan(e, true)}
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

export default ComBuatBaruPage;
