/*
//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
 type: "SET_TEXT_FILTER",
 text,
});

//SORT_BY_DATE
export const sortByDate = () => ({
 type: "SORT_BY_DATE",
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
 type: "SORT_BY_AMOUNT",
});

//SET_START_DATE
export const setStartDate = (startDate) => ({
 type: "SET_START_DATE",
 startDate,
});

//SET_END_DATE
export const setEndDate = (endDate) => ({
 type: "SET_END_DATE",
 endDate,
});
*/

import moment from "moment";
import { setStartDate,
   setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter object text value", () => {
  const text = "Something in";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});
test('Should generate set text filter object with default',()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  });
});
test('should generate an action object for sort by date',() =>{
  expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});
test('shoild generate action object for sort by amount',()=>{
  expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});
