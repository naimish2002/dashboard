import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES, deleteProject } from '../redux/actions/cardAction';

const DeleteModel = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  console.log(status);

  const handleClose = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: { onDelete: false },
    });
  };

  const handleDelete = () => {
    dispatch(deleteProject(status?.project?._id));
    handleClose();
    window.location.reload();
  };
  return (
    <div className='deletemodel'>
      <div className='deletemodel_wrapper'>
        <div className='deletemodel_wrapper-top'>
          <h3>Are you sure?</h3>
        </div>
        <div className='deletemodel_wrapper-bottom'>
          <button
            className='deletemodel_wrapper-bottom-btn delete-btn'
            onClick={handleDelete}>
            Delete
          </button>
          <button
            className='deletemodel_wrapper-bottom-btn'
            onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
