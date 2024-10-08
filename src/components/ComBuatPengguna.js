import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Head from "./Head";
import Sidebar from "./Sidebar";
import FormAlert from "./FormAlert";
import FormButton from "./FormButton";

const ComBuatPengguna = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
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
      navigate("/daftar-pengguna");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setRole("");
    setPassword("");
    setConfPassword("");
  };

  return (
    <div>
      <Head title={"E-Caku | Daftar"} />
      <Sidebar>
        <h1 className="text-5xl font-semibold mb-8">Buat Pengguna Baru</h1>
        <form onSubmit={saveUser}>
          {msg && (
            <FormAlert>
              <span>{msg}</span>
            </FormAlert>
          )}
          <label className="form-control w-full">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Role</span>
              </div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="select select-bordered"
              >
                <option hidden>Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
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
            <div className="form-control mb-6">
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
            <FormButton resetForm={resetForm}>
              <button
                onClick={(e) => saveUser(e, true)}
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

export default ComBuatPengguna;
