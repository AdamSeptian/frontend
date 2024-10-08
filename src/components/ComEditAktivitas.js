import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";
import FormButtonEdit from "./FormButtonEdit";
import FormAlert from "./FormAlert";

const ComEditAktivitas = () => {
  const [kategori, setKategori] = useState("");
  const [keterangan, setketerangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getAktivitasById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/catatan/${id}`);
        setKategori(response.data.kategori);
        setketerangan(response.data.keterangan);
        setJumlah(response.data.jumlah);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getAktivitasById();
  }, [id]);

  const updateAktivitas = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/catatan/${id}`, {
        kategori: kategori,
        keterangan: keterangan,
        jumlah: jumlah,
      });
      navigate("/aktivitas");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const back = () => {
    navigate("/aktivitas");
  };

  return (
    <div>
      <Head title={"E-Caku | Edit Aktivitas"} />
      <div>
        <Sidebar>
          <h1 className="text-5xl font-semibold mb-8">Edit Aktivitas</h1>
          {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
          <form onSubmit={updateAktivitas}>
            <label className="form-control w-full">
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
              <div className="label">
                <span className="label-text">Jumlah</span>
              </div>
              <input
                type="number"
                placeholder="Cth. 200000"
                className="input input-bordered w-full"
                required
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
              <div className="label">
                <span className="label-text">Keterangan</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 mb-8"
                required
                placeholder="Cth. belanja harian"
                value={keterangan}
                onChange={(e) => setketerangan(e.target.value)}
              ></textarea>
              <FormButtonEdit />
            </label>
          </form>
        </Sidebar>
      </div>
    </div>
  );
};

export default ComEditAktivitas;
