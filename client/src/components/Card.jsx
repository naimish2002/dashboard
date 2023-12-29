import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <div className='card_wrapper'>
        <div className='card_wrapper_top-box'>
          <img
            src='/assets/icons/add_plus_new_create_control_icon.svg'
            alt='add'
          />
        </div>
        <div className='card_wrapper-content'>
          <p className='card_content-new-project'>Create a new project</p>
          <p className='card_content-description'>
            or try a <span>sample project</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
