import React from "react";
import { useNavigate } from "react-router-dom";

const FormButtonEdit = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="grid md:flex gap-2">
      <button className="btn btn-purple" type="submit">
        Edit
      </button>
      <button onClick={back} className="btn btn-error" type="submit">
        Batal
      </button>
    </div>
  );
};

export default FormButtonEdit;
