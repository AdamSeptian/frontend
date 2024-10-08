import React, { useState, useEffect } from "react";
import BGFAQ from "../assets/bg-faq.png";
import axios from "axios";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const ComFAQ = () => {
  const [faq, setFaq] = useState([]);
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const fetchFaq = async () => {
    try {
      const response = await axios.get("http://localhost:5000/faq");
      setFaq(response.data);
    } catch (error) {
      console.error("Error fetching recent faq:", error);
    }
  };
  useEffect(() => {
    fetchFaq();
  }, []);
  return (
    <div>
      {/* head start  */}
      <Head title={"E-Caku | FAQ"} />
      {/* head end  */}

      {/* <hero start  */}
      <div
        className="hero min-h-screen bg-base-200 text-white"
        style={{
          backgroundImage: `url(${BGFAQ})`,
        }}
      >
        <div className="hero-content text-center block">
          <div className="flex justify-end">
            <button onClick={back}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-x"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg>
            </button>
          </div>
          <div className="max-w-full">
            <h1 className="text-5xl font-bold mb-8">
              Frequently Asked Questions
            </h1>
          </div>
          {faq.map((faq, index) => (
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-white text-black my-4"
            >
              <div className="collapse-title text-xl font-medium">
                {faq.judul}
              </div>

              <div className="collapse-content">
                <p>{faq.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* hero end  */}
    </div>
  );
};

export default ComFAQ;
