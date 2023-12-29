import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, MenuBar, Feed } from './components/index';

function App() {
  const status = useSelector((state) => state.status);
  return (
    <div className='App'>
      {status.loading && <Loader />}

      <MenuBar />

      <section className='app_section'>
        <Feed />
      </section>
    </div>
  );
}

export default App;
