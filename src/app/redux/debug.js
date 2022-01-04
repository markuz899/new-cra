import { call, put, takeLatest, all } from 'redux-saga/effects';

const DEBUG = 'DEBUG';
const DEBUG_SUCCESS = 'DEBUG_SUCCESS';
const DEBUG_FAILED = 'DEBUG_FAILED';

const actions = {
  debug(payload) {
    return { type: DEBUG, payload };
  },
};

const initialState = {
  debugger: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEBUG_SUCCESS:
      return { ...state, debugger: action.payload };
    case DEBUG_FAILED:
      return { ...state };
    default:
      return state;
  }
};

function* debuggingWorker(action) {
  try {
    let payload = {};
    if (payload.error) {
      yield put({ type: DEBUG_FAILED });
    } else {
      yield put({ type: DEBUG_SUCCESS, payload: action.payload });
    }
  } catch (err) {
    console.error(err);
  }
}

function* saga() {
  yield all([takeLatest(DEBUG, debuggingWorker)]);
}

const DebugRedux = {
  actions,
  reducer,
  saga,
};

export default DebugRedux;
