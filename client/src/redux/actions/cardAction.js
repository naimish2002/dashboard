import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData';
import validation from '../../utils/validation';

export const TYPES = {
  ALERT: 'ALERT',
  STATUS: 'STATUS',
  CREATE_PROJECT: 'CREATE_PROJECT',
  GET_PROJECTS: 'GET_PROJECTS',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  DELETE_PROJECT: 'DELETE_PROJECT',
};

export const createProject = (data) => async (dispatch) => {
  //Validation
  const checkData = validation(data);
  if (checkData.errLength > 0) {
    return dispatch({ type: TYPES.ALERT, payload: checkData.errMsg });
  }
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI('createpost', data);
    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });

    dispatch({
      type: TYPES.CREATE_PROJECT,
      payload: res.data.newPost,
    });

    dispatch({
      type: TYPES.STATUS,
      payload: { onCreate: false },
    });

    window.location.reload();

    dispatch({ type: TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const getProject = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await getDataAPI('getposts');

    dispatch({
      type: TYPES.GET_PROJECTS,
      payload: res.data.posts,
    });

    dispatch({ type: TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response?.data.msg },
    });
  }
};

export const updateProject = (data) => async (dispatch) => {
  const checkData = validation(data);
  if (checkData.errLength > 0) {
    return dispatch({ type: TYPES.ALERT, payload: checkData.errMsg });
  }

  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await patchDataAPI(`updatepost/${data?._id}`, data);
    console.log(res);

    dispatch({
      type: TYPES.STATUS,
      payload: { onEdit: false },
    });

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });

    dispatch({
      type: TYPES.UPDATE_PROJECT,
      payload: res.data.newPost,
    });

    dispatch({ type: TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response?.data.msg },
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await deleteDataAPI(`deletepost/${id}`);
    
    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });

    dispatch({
      type: TYPES.DELETE_PROJECT,
      payload: id,
    });

    dispatch({ type: TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response?.data.msg },
    });
  }
};

// Edit project action
export const EditData = (data, id, post) => {
  const newData = data?.map((item) => (item?._id === id ? post : item));
  return newData;
};
