// Add the current date and time to the header
// Variable to hold current date
var currentDateTime = moment().format('MMM Do, YYYY');

// display date text on webpage
$('#current-date-time').text(currentDateTime);

// Style date
$('#current-date-time').css('font-weight', 'bold');
$('#current-date-time').css('font-size', '25px')

// Global variables for btns and elements
var addBtn = document.getElementById("add-btn");
var itemList = document.getElementById("inventory-list");

// create input element
var userItem = document.createElement('input');

// create btn elements
var inOutBtn = document.createElement('button');
var saveBtn = document.createElement('button');
var deleteBtn = document.createElement('button');
var lineBreak = document.createElement('br');

// function that generates form for inventory item
function genItemForm() {

    // Original text on buttons
    inOutBtn.textContent = "Out";
    saveBtn.textContent = 'Save';
    deleteBtn.textContent = 'Delete';
    userItem.placeholder = 'Enter inventory item...'

    // $("#inventory-list").addClass()

    // Attach elements to webpage
    itemList.appendChild(inOutBtn);
    itemList.appendChild(userItem);
    itemList.appendChild(saveBtn);
    itemList.appendChild(deleteBtn);
    itemList.appendChild(lineBreak);
    

    userItem.classList.add("col-8");
    inOutBtn.classList.add("col-1");
    saveBtn.classList.add("col-1.5");
    deleteBtn.classList.add("col-1.5");

    userItem.classList.add("col-sm-9");
    inOutBtn.classList.add("col-sm-1");
    saveBtn.classList.add("col-sm-1");
    deleteBtn.classList.add("col-sm-1");

    userItem.classList.add("col-md-9.5");
    inOutBtn.classList.add("col-md-0.5");
    saveBtn.classList.add("col-md-0.5");
    deleteBtn.classList.add("col-md-1");

    userItem.classList.add("col-lg-9.5");
    inOutBtn.classList.add("col-lg-0.5");
    saveBtn.classList.add("col-lg-0.5");
    deleteBtn.classList.add("col-lg-0.75");

    userItem.classList.add("col-xl-9.5");
    inOutBtn.classList.add("col-xl-0.5");
    saveBtn.classList.add("col-xl-0.5");
    deleteBtn.classList.add("col-xl-0.5");
    

    // userItem.classList.add("col-md-8.5");

    // userItem.classList.add("col-sm-8");
    // inOutBtn.classList.add("col-sm-1");
    // saveBtn.classList.add("col-sm-1");
    // deleteBtn.classList.add("col-sm-1");

    // userItem.classList.add("m-1");
    // inOutBtn.classList.add("m-1");
    // saveBtn.classList.add("m-1");
    // deleteBtn.classList.add("m-1");

    // itemList.classList.add("d-flex");
    // itemList.classList.add("justify-content-around");
    userItem.setAttribute("style", "border-radius: 7px");
    inOutBtn.setAttribute("style", "background-color: #ff9604; border-radius: 7px");
    saveBtn.setAttribute("style", "background-color: #33b5e5; border-radius: 7px");
    deleteBtn.setAttribute("style", "background-color: #cc0000; border-radius: 7px");
    
    if(inOutBtn.textContent === "Out") {
        itemList.setAttribute("style", "background-color: green;");
    } else {
        itemList.setAttribute('style', 'background-color: grey;')
    }
}

function genSave() {
    // create variable to hold user input
    var inputItem = userItem.value;

    localStorage.setItem("item", inputItem);
    // userItem.textContent = inputItem;
}

// userItem.textContent = localStorage.getItem("item");
// Add event listener for btns
saveBtn.addEventListener('click', genSave);
addBtn.addEventListener("click", genItemForm);
