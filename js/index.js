var elFizzBuzzForm = document.querySelector(".fizzbuzz-form");
var elFizzBuzzInput = elFizzBuzzForm.querySelector(".fizzbuzz-input");
var elFizzBuzzResult = elFizzBuzzForm.querySelector("#fizzbuzz-result");


elFizzBuzzForm.addEventListener("click", function(evt) {
    evt.preventDefault();

    var a = parseInt(elFizzBuzzInput.value.trim(), 10)

    var message = "";

    if (a % 5 == 0 && a % 3 == 0) {

        message += "FizzBuzz";
    } else if (a % 5 === 0) {

        message += "Buzz";
    } else if (a % 3 === 0) {

        message += "Fizz";
    } else {

        message += a;
    }
    elFizzBuzzResult.textContent = message;
})