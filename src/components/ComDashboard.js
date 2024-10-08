import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import axios from "axios";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { useSelector } from "react-redux";
import BGTrynow from "../assets/bg-trynow.png";
import BGPemasukan from "../assets/bg-pemasukan.png";
import BGPengeluaran from "../assets/bg-pengeluaran.png";
import BGBalance from "../assets/bg-balance.png";
import BGCurrentUser from "../assets/bg-current-user.png";
import BGCurrentData from "../assets/bg-current-data.png";

const ComDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [recentActivities, setRecentActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [dailyData, setDailyData] = useState([]);

  const fetchRecentActivities = async () => {
    try {
      const response = await axios.get("http://localhost:5000/catatan");
      setRecentActivities(response.data);
      const dailySummary = calculateDailySummary(response.data);
      setDailyData(dailySummary);
    } catch (error) {
      console.error("Error fetching recent activities:", error);
    }
  };

  const daftarPengguna = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchRecentActivities();
    daftarPengguna();
  }, []);

  const calculateDailySummary = (activities) => {
    const dailySummary = {};
    activities.forEach((activity) => {
      const date = formatDate(activity.createdAt);
      if (!dailySummary[date]) {
        dailySummary[date] = { income: 0, expense: 0 };
      }
      if (activity.kategori === "Pemasukan") {
        dailySummary[date].income += activity.jumlah;
      } else if (activity.kategori === "Pengeluaran") {
        dailySummary[date].expense += activity.jumlah;
      }
    });
    return dailySummary;
  };

  const latestThreeActivities = recentActivities
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const totalPemasukan = recentActivities.reduce((total, activity) => {
    if (activity.kategori === "Pemasukan") {
      return total + activity.jumlah;
    }
    return total;
  }, 0);

  const totalPengeluaran = recentActivities.reduce((total, activity) => {
    if (activity.kategori === "Pengeluaran") {
      return total + activity.jumlah;
    }
    return total;
  }, 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Overview",
    },
    xAxis: {
      categories: Object.keys(dailyData),
    },
    yAxis: {
      title: {
        text: "Total",
      },
    },
    series: [
      {
        name: "Pemasukan",
        data: Object.values(dailyData).map((data) => data.income),
      },
      {
        name: "Pengeluaran",
        data: Object.values(dailyData).map((data) => data.expense),
      },
    ],
  };

  return (
    <div>
      <Head title={"E-Caku | Dashboard"} />
      <Sidebar>
        <div
          id="fitur"
          className="w-full rounded-lg drop-shadow-xl text-white p-8 mb-8"
          style={{
            backgroundImage: `url(${BGTrynow})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-5xl font-semibold capitalize mb-6">
            Selamat Datang, {user && user.username}
          </h1>
          <p className="text-2xl mb-6">
            Ayo Mulai Hari Anda dengan Bersemangat!
            {user && user.role === "user" && (
              <span> Catat dan Kelola Keuangan Anda di Sini.</span>
            )}
          </p>
          {user && user.role === "user" && (
            <a href="/buat-baru" className="btn btn-transparent">
              Buat catatan baru
            </a>
          )}
        </div>
        {user && user.role === "user" && (
          <div className="md:flex grid my-8 gap-4">
            <div
              className="card w-full bg-purple text-primary-content drop-shadow-xl"
              style={{
                backgroundImage: `url(${BGBalance})`,
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-xl">Balance</h2>
                <p className="font-semibold text-3xl">{totalSaldo.toLocaleString().replace(/,/g, ".")}</p>
              </div>
            </div>
            <div
              className="card w-full bg-green text-primary-content drop-shadow-xl"
              style={{
                backgroundImage: `url(${BGPemasukan})`,
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-xl">Pemasukan</h2>
                <p className="font-semibold text-3xl">{totalPemasukan.toLocaleString().replace(/,/g, ".")} </p>
              </div>
            </div>
            <div
              className="card w-full bg-red text-primary-content drop-shadow-xl"
              style={{
                backgroundImage: `url(${BGPengeluaran})`,
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-xl">Pengeluaran</h2>
                <p className="font-semibold text-3xl">{totalPengeluaran.toLocaleString().replace(/,/g, ".")} </p>
              </div>
            </div>
          </div>
        )}
        {user && user.role === "admin" && (
          <div className="md:flex grid my-8 gap-4 capitalize">
            <div
              className="card w-full bg-purple text-primary-content drop-shadow-xl"
              style={{
                backgroundImage: `url(${BGCurrentUser})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-xl mb-6">Pengguna</h2>
                <p className="font-semibold text-3xl">{users.length}</p>
                <div className="card-actions justify-end">
                  <a href="/daftar-pengguna" className="btn btn-transparent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card w-full bg-green text-primary-content drop-shadow-xl"
              style={{
                backgroundImage: `url(${BGCurrentData})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-xl mb-6">Data</h2>
                <p className="font-semibold text-3xl">
                  {recentActivities.length}{" "}
                </p>
                <div className="card-actions justify-end">
                  <a href="/aktivitas" className="btn btn-transparent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="2xl:flex 2xl:gap-4">
          <div className="card bg-whitesmoke drop-shadow-md w-full">
            <div className="card-body bg-white/30 rounded-lg">
              <div className="md:flex justify-between my-4">
                <h1 className="text-5xl font-semibold mb-4 md:mb-0">
                  Aktivitas terkini
                </h1>
                <a href="/aktivitas" className="btn btn-purple">
                  Lihat Lengkap
                </a>
              </div>
              {latestThreeActivities == 0 ? (
                <div role="alert" className="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Belum ada aktivitas terkini.</span>
                </div>
              ) : (
                <p></p>
              )}
              <div className="overflow-x-auto my-8">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th className="w-32">Kategori</th>
                      <th>Keterangan</th>
                      <th>Jumlah</th>
                      {user && user.role === "admin" && <th>Pengguna</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {latestThreeActivities.map((activity, index) => (
                      <tr key={index} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                          <span
                            className="grid p-2 w-32 rounded-full font-medium"
                            style={{
                              backgroundColor:
                                activity.kategori === "Pemasukan"
                                  ? "#E7FAE7"
                                  : activity.kategori === "Pengeluaran"
                                  ? "#FDE8E7"
                                  : "inherit",
                              color:
                                activity.kategori === "Pemasukan"
                                  ? "#709E6F"
                                  : activity.kategori === "Pengeluaran"
                                  ? "#C36163"
                                  : "inherit",
                            }}
                          >
                            {activity.kategori}
                          </span>
                        </td>
                        <td>{activity.keterangan}</td>
                        <td>{activity.jumlah.toLocaleString().replace(/,/g, ".")}</td>
                        {user && user.role === "admin" && (
                          <td>{activity.user.username}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {latestThreeActivities.length > 0 ? (
            <div>
              {user && user.role === "user" && (
                  <div className="my-8 2xl:w-full">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="text-center font-bold text-xl my-8 2xl:w-96 min-h-fit">Overview</h1>
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
                <span>Overview tidak tersedia</span>
              </div>
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default ComDashboard;
