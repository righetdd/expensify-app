const add=(a,b)=> a+b;
const generateGreeting=(name='Anonymous')=> `Hello ${name}!`;

test('Should add two numbers', () => {
 const result=add(3,4);
 /*if (result !==7){
  throw new Error(`You adder 4 and 3. The result was ${result}. Expect 7`);
 }*/
 expect(result).toBe(7);
});

 test('should generate greeting from name', ()=>{
  const result=generateGreeting('Mike');
  expect(result).toBe('Hello Mike!');

});
test('should generate greeting for no name', ()=>{
 const result=generateGreeting();
 expect(result).toBe('Hello Anonymous!')
})