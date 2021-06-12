const todo__list = document.querySelector(".todo__list"),
todo__icon = document.querySelector(".todo__icon span");
const todoform = document.querySelector(".todo__form-js"),
  todoinput = todoform.querySelector(".todo__form__input"),
  pending = document.querySelector(".pending-list"),
  finished = document.querySelector(".finished-list");

const PEND_LI = "PENDING";
const FIN_LI = "FINISHED";

let PENDING_ARR = [];
let FINISHED_ARR = [];

function submitHandle(event) {
  event.preventDefault();
  const inputValue = todoinput.value;
  todoinput.value = "";
  paintPendList(inputValue);
  console.log(hello);
}

function deleteList(delList) {
  if (delList.className === "pending") {
    PENDING_ARR = PENDING_ARR.filter(function (list) {
      return JSON.stringify(list.id) !== delList.id;
    });
    indexSet(PENDING_ARR);
  } else {
    FINISHED_ARR = FINISHED_ARR.filter(function (list) {
      return JSON.stringify(list.id) !== delList.id;
    });
    indexSet(FINISHED_ARR);
  }
  savePEND();
  saveFin();
}
function deleteHandle(event) {
  const delList = event.target.parentNode;
  const section = delList.parentNode;

  section.removeChild(delList);

  deleteList(delList);
}
function finishHandle(event) {
  const finList = event.target.parentNode;

  pending.removeChild(finList);
  deleteList(finList);
  paintFinList(finList.querySelector("span").innerText);
}
function pendHandle(event) {
  const btn = event.target;
  const pendList = btn.parentNode;

  finished.removeChild(pendList);
  deleteList(pendList);
  paintPendList(pendList.querySelector("span").innerText);
}

function indexSet(array) {
  array.forEach(function (list) {
    const index = array.indexOf(list);
    list.id = index + 1;
    if (list.class === "pending") {
      pending.children[index].id = index + 1;
    } else if (list.class === "finished") {
      finished.children[index].id = index + 1;
    }
  });
}

function commonPaint(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text;
  delBtn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(delBtn);

  delBtn.addEventListener("click", deleteHandle);

  return li;
}
function goFinBtn() {
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", finishHandle);

  return button;
}
function paintPendList(text) {
  const li = commonPaint(text);
  const pendID = PENDING_ARR.length + 1;

  li.appendChild(goFinBtn());
  li.id = pendID;
  li.className = "pending";
  pending.append(li);

  const pendObj = {
    text: text,
    id: pendID,
    class: "pending"
  };

  PENDING_ARR.push(pendObj);
  savePEND();
}
function goPendBtn() {
  const button = document.createElement("button");
  button.innerText = "⏪";
  button.addEventListener("click", pendHandle);

  return button;
}
function paintFinList(text) {
  const li = commonPaint(text);
  const finID = FINISHED_ARR.length + 1;

  li.append(goPendBtn());
  li.id = finID;
  li.className = "finished";
  finished.append(li);

  const finObj = {
    text: text,
    id: finID,
    class: "finished"
  };

  FINISHED_ARR.push(finObj);
  saveFin();
}

function savePEND() {
  localStorage.setItem(PEND_LI, JSON.stringify(PENDING_ARR));
}

function saveFin() {
  localStorage.setItem(FIN_LI, JSON.stringify(FINISHED_ARR));
}

function loadList() {
  const loadedPending = localStorage.getItem(PEND_LI);
  const loadedFInished = localStorage.getItem(FIN_LI);

  const PENDING_ARR = JSON.parse(loadedPending);
  PENDING_ARR.forEach(function (list) {
    paintPendList(list.text);
  });

  const FINISHED_ARR = JSON.parse(loadedFInished);
  FINISHED_ARR.forEach(function (list) {
    paintFinList(list.text);
  });
}

function submitLoadTodoList(event) {
    if(todo__list.classList.contains("todo__list__show")) {
        todo__list.classList.add("todo__list__hidden");
        todo__list.classList.remove("todo__list__show");
    } else {
        todo__list.classList.add("todo__list__show");
        todo__list.classList.remove("todo__list__hidden");

    }

}
function init() {
  todo__icon.addEventListener("click", submitLoadTodoList);
  todoform.addEventListener("submit", submitHandle);
  loadList();
}

init();
