let userInput = document.querySelector("#userInput");
let addBtn = document.querySelector("#addBtn");
let btnText = addBtn.innerText;
let recordsDisplay = document.querySelector("#records");

let userArr = [];
let edit_id = null;

let objStr = localStorage.getItem('id');
if (objStr != null) {
  userArr = JSON.parse(objStr);
}

displayInfo();
addBtn.onclick = () => {
  let value = userInput.value;
  if (value.length != 0) {
    if (edit_id != null) {
      userArr.splice(edit_id, 1, { 'id': value });
      edit_id = null;
    }
    else {
      userArr.push({ 'id': value });
    }
  }

  saveInfo(userArr);
  userInput.value = '';
  addBtn.innerText = btnText;
}

function saveInfo(userArr) {
  let makeString = JSON.stringify(userArr);
  localStorage.setItem('id', makeString);
  displayInfo();
}

function displayInfo() {
  let statement = '';
  userArr.forEach((user, i) => {
    statement += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${user.id}</td>
            <td><i onclick="editInfo(${i})" class="fa-solid fa-pen-to-square"></i> <i onclick="deleteInfo(${i})" class="fa-solid fa-trash-can"></i></td>
          </tr>`
  })
  recordsDisplay.innerHTML = statement;
}

function editInfo(i) {
  edit_id = i;
  userInput.value = userArr[edit_id].id;
  addBtn.innerText = 'Save changes';
}

function deleteInfo(i) {
  userArr.splice(i, 1);
  saveInfo(userArr);
}


let allTr = document.querySelectorAll("#records tr")
let searchInput = document.querySelector("#search");


searchInput.addEventListener('input', function(e) {
  let searchStr = e.target.value.toLowerCase();
  recordsDisplay.innerHTML = '';

  allTr.forEach(tr => {
    let tdAll = tr.querySelectorAll("td");
    let tdStr = tdAll[0].innerText.toLowerCase();
    if (tdStr.indexOf(searchStr) > -1) {
      recordsDisplay.appendChild(tr);
    }
  });
  if (recordsDisplay.innerHTML == '') {
    recordsDisplay.innerHTML = "No Records Found";
  }


})