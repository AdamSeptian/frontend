import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";
import FormButtonEdit from "./FormButtonEdit";
import FormAlert from "./FormAlert";

const ComEditTim = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getTimById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/teams/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
        setDescription(response.data.description);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getTimById();
  }, [id]);

  const updateTim = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    try {
      await axios.patch(`http://localhost:5000/teams/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/daftar-tim");
    } catch (error) {
      console.log(error);
    }
  };
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
  return (
    <div>
      <Head title={"E-Caku | Edit Tim"}/>
      <Sidebar>
        <h1 className="text-5xl font-semibold mb-8">Buat Tim Baru</h1>
        <form onSubmit={updateTim} className="md:flex md:justify-between gap-4">
          {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Nama"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                type="file"
                onChange={loadImage}
                className="file-input file-input-bordered w-full"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 mb-6"
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <FormButtonEdit/>
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

export default ComEditTim;
