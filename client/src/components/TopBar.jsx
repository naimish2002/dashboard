import React from 'react';

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbar_content'>
        <div className='topbar_content-left'>
          <div className='topbar_left-content'>
            <p className='topbar_left-content-trial'>
              Free Trial
              <span className='topbar_left-content-trial-separator'>|</span>
              <span className='topbar_left-content-trial-days'>2days left</span>
            </p>
            <p className='topbar_left-content-extend'>Extend free trail</p>
          </div>
          <div className='topbar_left-user'>
            <img
              src='/assets/user-image.jpg'
              alt='user'
              className='topbar_left-user-img'
            />
          </div>
        </div>
        <div className='topbar_content-right'>
          <img src='/assets/icons/Page-1.svg' alt='Dropdown' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
