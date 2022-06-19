const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'toDos';
let toDos = [];

function savetoDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 뜻
  savetoDos();
}
function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span); //span을 li 안에 집어넣기
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = { text: newToDo, id: Date.now() };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  savetoDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

/*  function sayHello(item) {
  console.log('this is is the turn of', item)} */
/* 둘이 같은거 */
/* parsedToDos.forEach((item) => console.log('this is the turn of', item)); */

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
