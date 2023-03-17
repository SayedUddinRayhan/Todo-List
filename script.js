let userInput = document.querySelector("#userInput");
let addBtn = document.querySelector("#addBtn");

let userArr = [];

let objStr = localStorage.getItem('id');
userArr = JSON.parse(objStr);
addBtn.onclick = () => {
  let value = userInput.value;
  userArr.push({'id':value});
  saveInfo(userArr);
}

function saveInfo(arr){
  let makeString = JSON.stringify(arr);
  localStorage.setItem('id',makeString);
}

function displayInfo(){
  
}

function editInfo(){
  
}

function deleteInfo(){
  
}