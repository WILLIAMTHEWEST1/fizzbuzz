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
    let numbers = [];

    for (let index = 1; index <= 100; index++) {
        let Value = ((index % val1 == 0 ? 'Fizz' : '') + (index % val2 == 0 ? 'Buzz' : '') || index);
        returnArray.push(value);
    }
    return returnArray;
}

function displayData(fbData) {

    //get the Table Body element from the page
    let tableBody = document.getElementById("results");

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbData.length; index += 5) {
        const tableRow = documnet.importNode(rowTemplate.content, true);

        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[0].classList.add(fbData[i+1]);
        rowCols[0].textContent = fbData[i+1];

        rowCols[0].classList.add(fbData[i+2]);
        rowCols[0].textContent = fbData[i+2];

        rowCols[0].classList.add(fbData[i+3]);
        rowCols[0].textContent = fbData[i+3];

        rowCols[0].classList.add(fbData[i+4]);
        rowCols[0].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);

    }

}