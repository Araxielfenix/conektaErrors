/**
 * It takes a string, turns it into an object, then searches for the string in the object, and returns
 * the error message.
 * @param errorInput - The error message that you want to search for.
 * @returns The error message.
 */
function getError(errorInput){
    // Turn JSON string into object.
    var errorObject = JSON.parse(errorInput);
    // Foreach error in the object.
    for (var i = 0; i < errorObject.errors.length; i++) {
        //Search for errorInput in errorObject.errors[i].message.
        if (errorObject.errors[i].message.indexOf(errorInput) > -1) {
            // Return the error message.
            return errorObject.errors[i].message;
            console.log(errorObject.errors[i].message);
        }
    }
}
// e.keypress in the css-input field.
document.getElementById("css-input").addEventListener("keypress", function(e){
    var errorInput = document.getElementById("css-input").value;
    getError(errorInput);
});

document.getElementById("demo").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}