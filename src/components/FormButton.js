import React from "react";
import { useNavigate } from "react-router-dom";

const FormButton = ({ children, resetForm }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    resetForm();
    window.location.reload();
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="grid gap-2 md:flex">
        <button className="btn btn-accent" type="submit">
          Buat
        </button>
        {children}
        <button onClick={refreshPage} className="btn btn-warning">
          Reset
        </button>
        <button onClick={back} className="btn btn-error">
          Batal
        </button>
      </div>
    </div>
  );
};

export default FormButton;
