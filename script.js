let userInput = document.querySelector("#userInput");
let addBtn = document.querySelector("#addBtn");
let recordsDisplay = document.querySelector("#records");

let userArr = [];

let objStr = localStorage.getItem('id');
if (objStr != null) {
  userArr = JSON.parse(objStr);
}

displayInfo();
addBtn.onclick = () => {
  let value = userInput.value;
  if (value.length != 0) {
    userArr.push({ 'id': value });
  }
  saveInfo(userArr);
  userInput.value = '';
  displayInfo();
}

function saveInfo(arr) {
  let makeString = JSON.stringify(arr);
  localStorage.setItem('id', makeString);
}

function displayInfo() {
  let statement = '';
  userArr.forEach((user, i) => {
    statement += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${user.id}</td>
            <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can"></i></td>
          </tr>`
  })
  recordsDisplay.innerHTML = statement;
}

function editInfo() {

}

function deleteInfo() {

}