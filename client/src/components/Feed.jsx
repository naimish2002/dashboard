import React from 'react';
import { TopBar, Card } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/actions/cardAction';

const Feed = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const handleCreateNewProject = () => {
    dispatch({
      type: TYPES.STATUS,
      payload: { onCreate: true },
    });
  };
  return (
    <div className='feed'>
      <TopBar />
      <main className='feed_center'>
        <div className='feed_center-header'>
          <h2>My Projects</h2>
        </div>
        <div className='feed_center-body'>
          <div className='new_project-card'>
            <div className='new_project-card_wrapper' onClick={handleCreateNewProject}>
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
          {post.result > 0 && (
            <>
              {post?.projects?.map((project) => (
                <Card key={project._id} project={project} />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Feed;
