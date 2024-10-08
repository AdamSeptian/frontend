import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate
import { GetMe } from "../features/authSlice";
import ComEditAktivitas from "../components/ComEditAktivitas";
const EditAktivitasPage = () => {
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
      <ComEditAktivitas />
    </div>
  );
};

export default EditAktivitasPage;
