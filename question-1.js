// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

let newTodo = { id: 5, todo: "Walk the dog" };
myTodo.push(newTodo);

myTodo.forEach((item) => {
  if (item.id === 4) {
    item.todo = "Go to the gym";
  }
});

let deleteTodo = myTodo.splice(4, 1);

let lastTodo = myTodo[myTodo.length - 1];
console.log(`To-do id: ${lastTodo.id}, ${lastTodo.todo}`);
