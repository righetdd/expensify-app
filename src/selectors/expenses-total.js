/*export default ()=>{
 return 0;
};*/

/*export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
   return expenses
    .map((expense)=> expense.amount)
    .reduce((sum,value)=> sum + value, 0);
  }
};*/

export default(expenses)=>{
 return expenses
 .map((expenses)=> expenses.amount)
 .reduce((sum,value)=> sum + value, 0);
};
