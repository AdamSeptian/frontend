import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import Head from "./Head";

const ComDaftarTim = () => {
  const [teams, setTeams] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [searchOption, setSearchOption] = useState("name");

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const sortedteams = teams.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  const confirmDelete = async (timId) => {
    const isConfirmed = window.confirm("Anda yakin ingin menghapus data ini?");
    if (isConfirmed) {
      await deleteTeams(timId);
    }
  };

  const deleteTeams = async (timId) => {
    try {
      await axios.delete(`http://localhost:5000/teams/${timId}`);
      fetchTeams();
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    setSearchPage(1);
  };

  const handleSearchOption = (option) => {
    setSearchOption(option);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchItem]);

  const filterSearch = sortedteams.filter((item) => {
    return item[searchOption].toLowerCase().includes(searchItem.toLowerCase());
  });

  const perPage = 10;
  const indexOfLastPost = (searchItem ? searchPage : currentPage) * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;

  const currentPosts = filterSearch.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    if (searchItem) {
      setSearchPage(pageNumber);
    } else {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div>
      <Head title={"E-Caku | Daftar Tim"} />
      <Sidebar>
        <div className="md:flex gap-2 mb-4">
          <h1 className="text-5xl font-semibold mb-4 md:mb-0 w-full">Daftar Tim</h1>
          <label className="input input-bordered flex items-center w-full mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari..."
              value={searchItem}
              onChange={handleSearch}
              className="grow w-full"
            />
          </label>
          <select
            value={searchOption}
            onChange={(e) => handleSearchOption(e.target.value)}
            className="select select-bordered w-full md:max-w-44"
          >
            <option value="name">Nama</option>
            <option value="description">Deskripsi</option>
          </select>
        </div>
        <Link to="/buat-tim" className="btn btn-purple mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pencil-plus"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
          </svg>
          Buat Tim Baru
        </Link>
        <div className="overflow-x-auto mb-4">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Image</th>
                <th>Deskripsi</th>
                <th>Tanggal Dibuat</th>
                <th>Tanggal Diubah</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((team, index) => (
                <tr key={index} className="text-center text-wrap">
                  <td>{index + 1}</td>
                  <td>{team.name}</td>
                  <td>
                    <img className="w-24" src={team.url}></img>
                  </td>
                  <td>{team.description}</td>
                  <td>{formatDate(team.createdAt)}</td>
                  <td>{formatDate(team.updatedAt)}</td>
                  <td className="flex justify-center gap-2">
                    <div className="tooltip" data-tip="Edit">
                      <Link
                        to={`/daftar-tim/edit/${team.id}`}
                        className="btn btn-square btn-purple"
                      >
                        <p className="text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                            <path d="M16 5l3 3" />
                          </svg>
                        </p>
                      </Link>
                    </div>
                    <div className=" tooltip" data-tip="Hapus">
                      <button
                        onClick={() => confirmDelete(team.id)}
                        className="btn btn-square btn-error"
                      >
                        <p className="text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center bg-white rounded-lg drop-shadow-lg p-2">
          {filterSearch.length > 0 ? (
            <ul className="join font-medium">
            {Array.from({
              length: Math.ceil(filterSearch.length / perPage),
            }).map((_, index) => (
              <li key={index} className="page-item">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`btn-square rounded-lg ${
                    (searchItem ? searchPage : currentPage) === index + 1
                      ? "btn-purple"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          ) : (
            <div role="alert" className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Data tidak tersedia.</span>
            </div>
          )}
          
        </div>
      </Sidebar>
    </div>
  );
};

export default ComDaftarTim;
