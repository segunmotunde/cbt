// DECLARATON OF VARIBALE
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submitBtn')
const myForm = document.getElementById('myForm')
const errorMessage = document.getElementById('errorMessage')

console.log(password.value);
// CREATE A FUNCTION TO MOVE TO THE QUIZ PAGE
function moveToNextPage() {
    window.location.assign("/question.html")
    
}

// CREATE AN EVENT LSITENER TO THE CODE
myForm.addEventListener('submit', formValid)


// CREATE A FUNCTION FOR FORM VALIDATION
function formValid(e) {
    e.preventDefault()
    console.log("it is working");
    // DECLARE A VARIABLE FOR AN ERROR MESSAGE
    let message =[]
    console.log(e.password);
    
    //CHECK FOR ERROR
    if (password.value === "") {
        message.push('kindly insert your password')
    }
    if (password.value.length < 6) {
        message.push('insert more than 6 character')
    }
    if (message.length > 0) {
        errorMessage.innerText = message.join(",")
        
    }

    else {
        moveToNextPage()
    }
 
}