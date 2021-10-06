//displays a message to the user
function getNumbers() {
    let startValue = 0;
    let endValue = 100;

    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers)


    } else {

    }
}

function generateNumbers(startValue, endValue) {

    //generate the array
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {
        let value = ((index % startValue == 0 ? 'Fizz' : '') + (index % endValue == 0 ? 'Buzz' : '') || index);
        returnArray.push(value);
    }
    return returnArray;
}

function displayNumbers(fbData) {

    //get the Table Body element from the page
    let tableBody = document.getElementById("results");

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(rowTemplate.content, true);

        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i + 1]);
        rowCols[1].textContent = fbData[i + 1];

        rowCols[2].classList.add(fbData[i + 2]);
        rowCols[2].textContent = fbData[i + 2];

        rowCols[3].classList.add(fbData[i + 3]);
        rowCols[3].textContent = fbData[i + 3];

        rowCols[4].classList.add(fbData[i + 4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);

    }

}