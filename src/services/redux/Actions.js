export const deleteTodoAction = (dispatch, id) =>
  dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });

export const deleteTaskAction = (dispatch, id) =>
  dispatch({
    type: 'DELETE_TASK',
    payload: id,
  });
