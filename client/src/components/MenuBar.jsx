import React from 'react';

const MenuBar = () => {
  return (
    <div
      className='menubar'
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <div className='menubar_top'>
        <div className='menubar_logo'>
          <img
            src='/assets/icons/Group5.svg'
            alt='logo'
            className='menubar_logo-img'
          />
        </div>
        <div className='menubar_top-content'>
          <img
            src='/assets/icons/Line.svg'
            alt='line'
            className='menubar_top-line-1'
          />
          <div className='menubar_top_item my-projects'>
            <img src='/assets/icons/bxs_coin_stack_icon.svg' alt='coin' />
            <span>My Projects</span>
          </div>

          <div className='menubar_top_item' style={{ gap: '0.625rem' }}>
            <img src='/assets/icons/Group4.svg' alt='group' />
            <span>Sample Projects</span>
          </div>

          <img
            src='/assets/icons/Line.svg'
            alt='line'
            className='menubar_top-line-2'
          />

          <div className='menubar_top_item' style={{ gap: '0.625rem' }}>
            <img
              src='/assets/icons/ic_fluent_apps_regular_icon.svg'
              alt='apps'
            />
            <span>Apps</span>
          </div>

          <div className='menubar_top_item' style={{ gap: '0.625rem' }}>
            <img
              src='/assets/icons/multimedia_music_play_player_video_icon.svg'
              alt='apps'
            />
            <span>Intro to Necleo</span>
          </div>
        </div>
      </div>
      <div className='menubar_bottom'>
        <div className='menubar_bootom-item'>
          <img src='/assets/icons/help_circled_icon.svg' alt='help' />
          <span>Help & Support</span>
        </div>

        <div className='menubar_bootom-item'>
          <img src='/assets/icons/feedback_ic_icon.svg' alt='feedback' />
          <span>Feedback</span>
        </div>

        <div className='menubar_bootom-item collapse'>
          <img
            src='/assets/icons/ic_fluent_panel_right_expand_icon.svg'
            alt='expand'
          />
          <span>Collapse</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
