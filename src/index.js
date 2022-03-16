document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', initTodoForm);
});

function initTodoForm(e){
  e.preventDefault();
  // console.log(e[target][`new-task-description`]);
  const newTodoValue = `${e.target.querySelector('#new-task-description').value} `; // <<< get the value of the input field
  
  // set up the list items
  const listItem = document.createElement('li')
  listItem.innerHTML = newTodoValue;
  // set up the delete buttom
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'x/FINISH/x'
  deleteButton.addEventListener('click', function (e){
    listItem.remove();
  });
  //

  const subTarg = document.querySelector('#tasks'); // <<< this is where we want to put our list items
  subTarg.appendChild(listItem);
  listItem.appendChild(deleteButton);
  
  // code here
}