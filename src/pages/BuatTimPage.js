import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/authSlice";
import ComBuatTim from '../components/ComBuatTim'

const BuatTimPage = () => {
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
      <ComBuatTim/>
    </div>
  )
}

export default BuatTimPage
