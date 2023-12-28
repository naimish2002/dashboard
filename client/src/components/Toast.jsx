import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ msg, bgcolor }) => {
  switch (bgcolor) {
  case 'success':
    toast.success(msg, {
      toastId: bgcolor,
    });
    break;
  case 'error':
    toast.error(msg, {
      toastId: bgcolor,
    });
    break;
  default:
    toast(msg, {
      toastId: bgcolor,
    });
    break;
  }
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        transition={Zoom}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

Toast.propTypes = {
  msg: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
};

export default Toast;
