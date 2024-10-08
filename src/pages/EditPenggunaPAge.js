import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate
import { GetMe } from "../features/authSlice";
import ComEditPengguna from "../components/ComEditPengguna";

const EditPenggunaPage = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(GetMe());
    }, [dispatch]);
    
    useEffect(() => {
        if(isError) {
            navigate('/');
        }
        if(user && user.role !== 'admin') {
            navigate(-1)
        }
    },[isError, user, navigate]);
  return (
    <div>
      <ComEditPengguna/>
    </div>
  )
}

export default EditPenggunaPage
