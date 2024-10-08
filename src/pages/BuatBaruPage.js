import React, { useEffect } from "react";
import ComBuatBaruPage from '../components/ComBuatBaruPage'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GetMe } from "../features/authSlice";

const BuatBaruPage = () => {
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
      <ComBuatBaruPage/>
    </div>
  )
}

export default BuatBaruPage
