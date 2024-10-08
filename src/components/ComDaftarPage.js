import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Head from "./Head";
import BGDaftar from "../assets/bg-daftar.png";
import Logo from "../assets/purple-black-logo.png";
import FormAlert from "./FormAlert";

const ComDaftarPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role] = useState("user");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/users", {
        username: username,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/masuk");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* head start  */}
      <Head title={"E-Caku | Daftar"} />
      {/* head end  */}

      {/* navbar start  */}
      <div className="navbar bg-transparent fixed">
        <a href="/">
          <img src={Logo} alt="Logo" className="w-44"></img>
        </a>
      </div>
      {/* navbar end  */}

      {/* content start  */}
      <div
        className="hero min-h-screen bg-base-200 bg-white"
        style={{
          backgroundImage: `url(${BGDaftar})`,
        }}
      >
        <div className="hero-content block">
          <div className="card shrink-0 w-full shadow-md bg-base-100">
            <form className="card-body" onSubmit={saveUser}>
              {msg && (
                <FormAlert>
                  <span>{msg}</span>
                </FormAlert>
              )}
              <h1 className="text-5xl font-semibold text-center">Daftar</h1>
              <p className="text-xl text-center">
                Hei, masukkan detail Anda untuk membuat akun baru
              </p>
              <div className="md:flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="md:flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-eye"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#000000"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-eye-closed"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#000000"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                          <path d="M3 15l2.5 -3.8" />
                          <path d="M21 14.976l-2.492 -3.776" />
                          <path d="M9 17l.5 -4" />
                          <path d="M15 17l-.5 -4" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Konfirmasi Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="konfirmasi password"
                      className="input input-bordered w-full"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-eye"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#000000"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-eye-closed"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#000000"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                          <path d="M3 15l2.5 -3.8" />
                          <path d="M21 14.976l-2.492 -3.776" />
                          <path d="M9 17l.5 -4" />
                          <path d="M15 17l-.5 -4" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-purple">
                  Daftar
                </button>
              </div>
              <p className="text-center">
                Sudah punya akun?{" "}
                <a href="/masuk" className="link link-primary">
                  Masuk
                </a>
              </p>
            </form>
          </div>
          <p className="text-center pt-8 mt-2">
            © Copyright E-Caku. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComDaftarPage;
