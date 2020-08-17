import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView10037Reducer from '../features/CalendarView10037/redux/reducers';
import CalendarView410036Reducer from '../features/CalendarView410036/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView10037: CalendarView10037Reducer,
CalendarView410036: CalendarView410036Reducer,

});