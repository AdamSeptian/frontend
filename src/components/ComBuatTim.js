import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import FormButton from "./FormButton";
import FormAlert from "./FormAlert";
import Head from "./Head";

const ComBuatTim = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveTim = async (e, shouldAddMore) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);
    try {
      await axios.post("http://localhost:5000/teams", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      if (shouldAddMore) {
        window.location.reload();
      } else {
        navigate("/daftar-tim");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const resetForm = () => {
    setName("");
    setFile("");
    setPreview("");
    setDescription("");
  };

  return (
    <div>
      <Head title={"E-Caku | Buat Tim Baru"} />
      <Sidebar>
        <h1 className="text-5xl font-semibold mb-8">Buat Tim Baru</h1>
        {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
        <form onSubmit={saveTim} className="md:flex md:justify-between gap-4">
          
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Nama"
              className="input input-bordered w-full"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                type="file"
                onChange={loadImage}
                className="file-input file-input-bordered w-full"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 mb-6"
                required
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <FormButton resetForm={resetForm}>
              <button
                onClick={(e) => saveTim(e, true)}
                className="btn btn-active btn-accent"
              >
                Buat lagi
              </button>
            </FormButton>
          </label>
          <label>
            {preview ? (
              <>
                <div className="label">
                  <span className="label-text">Preview</span>
                </div>
                <figure className="w-full md:w-96 mb-6">
                  <img src={preview} alt="Preview Image" />
                </figure>
              </>
            ) : (
              ""
            )}
          </label>
        </form>
      </Sidebar>
    </div>
  );
};

export default ComBuatTim;
