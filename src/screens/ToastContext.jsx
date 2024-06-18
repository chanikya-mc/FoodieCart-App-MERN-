import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);
const toastStyles = {
    background: 'white',
    color: 'green',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '16px'
  };
export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    toast(message,{style: toastStyles,
        icon: false,});
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer position="top-center" style={{color:"green"}} />
    </ToastContext.Provider>
  );
};
