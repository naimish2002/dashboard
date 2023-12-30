import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/actions/cardAction';
// import moment from 'moment';

const ShowProject = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const [projectData, setProjectData] = useState({});
  const { projectName, description, projectlink, image } = projectData;

  useEffect(() => {
    if (status?.onShow) {
      setProjectData(status?.project);
    }
  }, [status]);
  console.log(status);

  const handleClose = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: {
        onShow: false,
      },
    });
    setProjectData({});
  };
  return (
    <div className='showproject'>
      <div className='showproject_wrappper'>
        <div className='showproject-top'>
          <h2>Project details</h2>
          <span onClick={handleClose}>&times;</span>
        </div>
        <div className='showproject-content'>
          <div className='showproject_item'>
            <label htmlFor=''>Project name</label>
            <input
              type='text'
              name='projectName'
              value={projectName}
              disabled
            />
          </div>

          <div className='showproject_item'>
            <label htmlFor=''>Project description</label>
            <textarea name='description' value={description} disabled />
          </div>

          {projectlink && (
            <div className='showproject_item'>
              <label htmlFor=''>Project link</label>
              <input type='text' name='link' value={projectlink} disabled />
            </div>
          )}

          <div className='showproject_item'>
            <label htmlFor=''>Project image</label>
            <img src={image} alt={projectName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
