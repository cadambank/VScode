let addTodoBtn = document.getElementById("addTodoBtn");
let todoContainer = document.getElementById("listTodo");
let inputField = document.getElementById("inputField");
let clearCompletedBtn = document.getElementById("clearTodoBtn");
const taskTemplate = document.getElementById("task-Template");
const LOCAL_STORAGE_LIST_KEY = "list.tasks"


// localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(checkboxArr));
var checkboxArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))||[];
inputField.addEventListener("keydown",function(e){
    if (e.key != "Enter") return ;
    addTask(checkboxArr,'',inputField.value);
    renderTask(checkboxArr);
    saveTasks(checkboxArr);
    inputField.value = '';
})
addTodoBtn.addEventListener("click",function(){
    addTask(checkboxArr,'',inputField.value);
    renderTask(checkboxArr);
    saveTasks(checkboxArr);
    inputField.value = '';
});

clearCompletedBtn.addEventListener("click",function(){
    checkboxArr = deleteTask(checkboxArr);
    saveTasks(checkboxArr);
    renderTask(checkboxArr);
});
function addTask(checkboxArr,id='',name){
    let date = new Date();
    if(id == '') id = date.toString();
    checkboxArr.push({
        id : id,
        name : name,
        checked : false
    });
    
};

function renderTask(checkboxArr){
    todoContainer.innerHTML = "";
    for (var e in checkboxArr) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        let checkboxTask = document.createElement("input");
        checkboxTask.setAttribute("type","checkbox");
        checkboxTask.name = checkboxArr[e].name;
        checkboxTask.id = checkboxArr[e].id;
        checkboxTask.checked = checkboxArr[e].checked;
        let labelTask = document.createElement("label");
        labelTask.htmlFor = checkboxArr[e].id;
        labelTask.innerText = checkboxArr[e].name;
        labelTask.classList.add("taskLabel")
        taskDiv.appendChild(checkboxTask);
        taskDiv.appendChild(labelTask);
        todoContainer.appendChild(taskDiv);
    };
};

function saveTasks(checkboxArr){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(checkboxArr));
};

function deleteTask(checkboxArr){
    checkboxArr = [];
    let pendingTasks = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    pendingTasks.forEach(e=>{
        addTask(checkboxArr,e.id,e.name)
    });
    return checkboxArr;
};

renderTask(checkboxArr);
