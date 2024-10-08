import React, { useEffect } from "react";
import ComAktivitasPage from '../components/ComAktivitasPage'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GetMe } from "../features/authSlice";
const AktivitasPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/masuk");
    }
  }, [isError, navigate]);
  return (
    <div>
      <ComAktivitasPage/>
    </div>
  )
}

export default AktivitasPage
