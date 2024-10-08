import React, { useState } from 'react';

const FormAlert = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    showAlert && (
      <div role="alert" className="alert alert-error">
        <div className='text-white'>{children}</div>
      </div>
    )
  );
};

export default FormAlert;
