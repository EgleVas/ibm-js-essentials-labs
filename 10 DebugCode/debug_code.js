function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let results = [                     // Updated for Practice Task
            ['Addition', add(num1, num2)],
            ['Multiplication', multiply(num1, num2)],
            ['Division', divide(num1, num2)]
        ];

        // Display the result
        displayResult(results);
    } else {
        displayResult('Please enter valid numbers');
    }
}

// Practice Task
function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}
// Practice Task end

function multiply(a, b) {    
    // Multiply the numbers
    return a * b;
}

// Practice Task
function divide(a, b) {    
    // Divide the numbers
    return a / b;
}
// Practice Task end

function displayResult(results) {                       // Updated for Practice Task
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    if (typeof(results) === "string") {
        resultElement.innerHTML = results;
    }
    else {        
        const displayResults = results.map((result, index) => `<p>${result[0]} result is: ${result[1]}</p>`).join('');
        resultElement.innerHTML = displayResults;
    }
    
};