import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView10037Saga from '../features/CalendarView10037/redux/sagas';
import CalendarView410036Saga from '../features/CalendarView410036/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView10037Saga,
CalendarView410036Saga,
    
  ]);
}