import { all } from 'redux-saga/effects';
import dataWatcher from './task.saga';

export default function* rootSaga() {
    yield all([
        dataWatcher()
    ]);
}
