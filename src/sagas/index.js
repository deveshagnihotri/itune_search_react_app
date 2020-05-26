import { put, takeLatest, all } from "redux-saga/effects";
import {
  GET_SEARCH_RESULT,
  SUCCESS_SEARCH_RESULT,
} from "../constants/ActionTypes";
let URL = "/search?";

function* fetchSearchResult(name) {
  const json = yield fetch(URL + "term=" + `${name.payload}`).then((response) =>
    response.json()
  );
  yield put({ type: SUCCESS_SEARCH_RESULT, payload: json });
}

function* actionWatcher() {
  yield takeLatest(GET_SEARCH_RESULT, fetchSearchResult);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
