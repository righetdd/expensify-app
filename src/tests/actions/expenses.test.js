import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
//REMOVE_EXPENSE
/*export const removeExpense = ({ id } = {}) => ({
 type: "REMOVE_EXPENSE",
 id,
});*/

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});
/*****************************************************/
//EDIT_EXPENSE
/*export const editExpense = (id, updates) => ({
 type: "EDIT_EXPENSE",
 id,
 updates,
});*/

test("should setup edit expense action object", () => {
  const action = editExpense('123abc', {note:'New note value'});
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: '123abc',
    updates:{
    note:'New note value'
   }
  });
});

// ADD_EXPENSE
/*export const addExpense = (
 {
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
 } = {}
) => ({
 type: 'ADD_EXPENSE',
 expense: {
  id: uuid(),
  description,
  note,
  amount,
  createdAt
 }
});*/

test('should setup add expense action object with provided values', () => {
 const expenseData={
  description:'Rent',
  amount:109500,
  createdAt:1000,
  note:'This was last months rent'
 };
 const action=addExpense(expenseData);
 expect(action).toEqual({
  type:'ADD_EXPENSE',
  expense:{
   ...expenseData,
   id: expect.any(String)
  }
 });
});

test('should setup add expense action object with default value', ()=>{
 const action=addExpense();
 expect(action).toEqual({
  type:'ADD_EXPENSE',
  expense:{
   id:expect.any(String),
   description:'',
   note:'',
   amount:0,
   createdAt:0
  }
 });
});

