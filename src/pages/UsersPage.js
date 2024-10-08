import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate
import { GetMe } from "../features/authSlice";
import ComDaftarPengguna from "../components/ComDaftarPengguna";

const UsersPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Gunakan useNavigate
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
            <ComDaftarPengguna />
        </div>
    );
};

export default UsersPage;
