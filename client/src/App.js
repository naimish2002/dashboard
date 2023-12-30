import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, MenuBar, Feed, NewProject, Notify, DeleteModel, ShowProject } from './components/index';
import { getProject } from './redux/actions/cardAction';

function App() {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);
  return (
    <>
      <Notify />
      <div className='App'>
        {status.loading && <Loader />}
        {status.onCreate && <NewProject />}
        {status.onEdit && <NewProject />}
        {status.onDelete && <DeleteModel />}
        {status.onShow && <ShowProject />}

        <MenuBar />

        <section className='app_section'>
          <Feed />
        </section>
      </div>
    </>
  );
}

export default App;
