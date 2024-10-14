// day/night mode button functionality
var dayNightMode = document.querySelector(".theme-switch__container");

var body = document.getElementsByTagName("body")[0];
var inputsContainer = document.getElementsByClassName("inputsContainer")[0];
var header = document.getElementsByClassName("header")[0];
var button = document.getElementsByClassName("button")[0];
var footer = document.getElementsByClassName("footer")[0];
var logo = document.getElementsByClassName("logo")[0];

var isNightMode = false;
dayNightMode.addEventListener('click', () => {
    if (!isNightMode) {
        body.style.backgroundColor = "gray";
        inputsContainer.style.backgroundColor = "gray";
        header.style.backgroundColor = "gray";
        button.style.backgroundColor = "gray";
        footer.style.backgroundColor = "gray";

        body.style.color = "white";
        inputsContainer.style.color = "white";
        header.style.color = "white";
        button.style.color = "white";
        footer.style.color = "white";
        logo.style.color = "white";
        isNightMode = true;
    } else {
        body.style.backgroundColor = "";
        inputsContainer.style.backgroundColor = "";
        header.style.backgroundColor = "";
        button.style.backgroundColor = "";
        footer.style.backgroundColor = "";

        body.style.color = "";
        inputsContainer.style.color = "";
        header.style.color = "";
        button.style.color = "";
        footer.style.color = "";
        logo.style.color = "";
        isNightMode = false;
    }
});

// Conditional output onclick of check button 
var checkButton = document.getElementsByClassName("button")[0];

checkButton.addEventListener('click', () => {
    var height = document.getElementById("height").value.trim();
    var weight = document.getElementById("weight").value.trim();
    var age = document.getElementById("age").value.trim();

    // Input validation
    if (!height || !weight || !age) {
        alert('Please enter values in all required input fields.');
        return;
    }

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert('Please enter valid numeric values for height, weight, and age.');
        return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);
    age = parseInt(age);

    if (height <= 0 || weight <= 0 || age <= 0) {
        alert('Please enter positive values for height, weight, and age.');
        return;
    }

    // Convert height from cm to meters (m)
    height = height / 100;

    // Calculate BMI (weight in kg, height in meters)
    var bmi = (weight / (height * height)).toFixed(2);

    // Display appropriate message based on the BMI result
    if (bmi >= 30) {
        alert(`Your BMI is ${bmi} at the age of ${age}, which is considered obesity.`);
    } else if (bmi >= 25 && bmi < 29.9) {
        alert(`Your BMI is ${bmi} at the age of ${age}, which is classified as overweight.`);
    } else if (bmi >= 18.5 && bmi < 24.9) {
        alert(`Your BMI is ${bmi} at the age of ${age}, which is considered normal.`);
    } else if (bmi < 18.5) {
        alert(`Your BMI is ${bmi} at the age of ${age}, which is considered underweight.`);
    } else {
        alert('Error calculating BMI.');
    }
});
