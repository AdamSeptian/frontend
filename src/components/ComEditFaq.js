import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";
import FormButtonEdit from "./FormButtonEdit";

const ComEditFaq = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getFaqById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/faq/${id}`);
        setJudul(response.data.judul);
        setDeskripsi(response.data.deskripsi);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getFaqById();
  }, [id]);

  const updateFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/faq/${id}`, {
        judul: judul,
        deskripsi: deskripsi,
      });
      navigate("/daftar-faq");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <Head title={"E-Caku | Edit FAQ"} />
      <div>
        <Sidebar>
          <h1 className="text-5xl font-semibold mb-8">Edit FAQ</h1>
          <form onSubmit={updateFaq}>
            <p className="text-center">{msg}</p>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Judul</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              ></textarea>
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full mb-6"
                placeholder="Deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </label>
            <FormButtonEdit />
          </form>
        </Sidebar>
      </div>
    </div>
  );
};

export default ComEditFaq;
