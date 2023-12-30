import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { TYPES } from '../redux/actions/cardAction';

const Card = ({ project }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnEdit = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: {
        onEdit: true,
        project: project,
      },
    });
    setShowDropdown(false);
  };

  const handleOnDelete = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: {
        onDelete: true,
        project: project,
      },
    });
    setShowDropdown(false);
  };

  const handleShowProject = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: {
        onShow: true,
        project: project,
      },
    });
  };

  return (
    <div className='card'>
      <div className='card_wrapper'>
        <div className='card_wrapper-top' onClick={handleShowProject}>
          <img src={project?.image} alt='' />
        </div>
        <div className='card_wrapper-body'>
          <div className='card_body-info'>
            <h3>{project.projectName}</h3>
            {project?.updatedAt !== project?.createdAt ? (
              <span>{moment(project?.updatedAt).fromNow()}</span>
            ) : (
              <span>{moment(project?.createdAt).fromNow()}</span>
            )}
          </div>
          <div className='card_body-right'>
            <img
              src='/assets/icons/more_icon.svg'
              alt='more'
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <>
                <div className='showdropdown'>
                  <button
                    className='showdropdown-btn showdropdown-edit-btn'
                    onClick={handleOnEdit}>
                    Edit
                  </button>
                  <button
                    className='showdropdown-btn showdropdown-delete-btn'
                    onClick={handleOnDelete}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Card;
