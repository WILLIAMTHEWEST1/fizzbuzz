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
    for (let index = startValue; index <= endValue; index++) {

        numbers.push(index);
    }
    return numbers;
}
function displayNumbers(numbers) {

    let startValue = numbers[0];
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results");
    tableBody.innerHTML = "";

    for (let index = 0; index < endIndex; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {

            tableRow = `<tr><td class="evenDisplay">${number}</td> </tr>`;

        } else {
            tableRow = `<tr><td>${number}</td></tr>`;
        }
        tableBody.innerHTML += tableRow;
    }

}