import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  fetchTasksRequest,
} from "../actions/taskActions";

function* fetchTasks() {
  try {
    const response = yield call(
      fetch,
      // "https://66f38c9f71c84d8058790dec.mockapi.io/crudapi"
      "https://67264846302d03037e6d0712.mockapi.io/redux"
    );
    const data = yield response.json();
    console.log("🚀 ~ function*fetchTasks ~ data:", data);

    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* addTask(action) {
  try {
    yield call(fetch, "https://67264846302d03037e6d0712.mockapi.io/redux", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* updateTask(action) {
  console.log("🚀 ~ function*updateTask ~ action:", action);

  try {
    yield call(
      fetch,
      `https://67264846302d03037e6d0712.mockapi.io/redux/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* deleteTask(action) {
  console.log("🚀 ~ function*deleteTask ~ action:", action);

  try {
    yield call(
      fetch,
      `https://67264846302d03037e6d0712.mockapi.io/redux/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* taskSaga() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeEvery(ADD_TASK, addTask);
  yield takeEvery(UPDATE_TASK, updateTask);
  yield takeEvery(DELETE_TASK, deleteTask);
}

export default taskSaga;
