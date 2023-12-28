import React from 'react';
import { TopBar, Card } from './index';

const Feed = () => {
  return (
    <div>
      <TopBar />
      <main className="feed_center">
        <div className="feed_center-header">
          <h2>My Projects</h2>
        </div>
        <div className="feed_center-body">
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Feed;