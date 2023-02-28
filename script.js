//seleção de elementos
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

//funções
// segundo: addTask cria os elementos de forma dinâmica e já mostra na tela as tarefas a fazer;
const addTask = (task) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTask = document.createElement("p");
    todoTask.innerText = task;
    todo.appendChild(todoTask);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

//eventos
//primeiro: valida o formulário, quando submitado executa a função de adicionar a tarefa
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        addTask(inputValue);
    }
});

//terceiro: identificar o click nos botoes no documento todo com base no evento
document.addEventListener("click", (e) => {

    const targetElement = e.target;
    if (targetElement.classList.contains("finish-todo")) {
        console.log("clicou");
    }
})