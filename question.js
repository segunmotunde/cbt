// declaration of the question
questionArray = [
    {
        question: "1) Before Moses died, God appointed ... to succeed him",
        a: "Joshua",
        b: "Aaron",
        c: "Eleazar",
        d: "Balaam",
        correctAnswer: "Joshua"
    },
    {
        question: "2) When Paul and Barnabas healed a cripple at Lystra, the people named them",
        a: 'Zeus and Hermes',
        b: " Zeus and Apollo",
        c: "Jupiter and Mercury",
        d: "Zeus and Mars",
        correctAnswer: "Zeus and Hermes"
    },
    {
        question: "3) To the question of the Philippian Jailer, ‘Men, what must I do to be saved? Paul replied,",
        a: 'confess your sins and give alms',
        b: "believe in the Lord Jesus",
        c: "release us and wash our wounds",
        d: "trust in God and pray always",
        correctAnswer: "believe in the Lord Jesus"
    },
    {
        question: "4) Jesus pronounced ‘woe’ on the rich during thesermon on the plain because they",
        a: 'loved money more thanGod',
        b: " were oppressive",
        c: "had receive their reward on earth",
        d: "were proud",
        correctAnswer: "were proud",
    },
    {
        question: "5) For offending God, the Israelites were delivered into the power of Midian for",
        a: 'seven years',
        b: " nine years",
        c: "twelve years ",
        d: "fifteen years",
        correctAnswer: "seven years",
    },
    {
        question: " 6) Gideon was able to defeat the Midianites with a reduced number of soldiers because he",
        a: "was a good fighter",
        b: " was a prudent warrior",
        c: "had better weapons",
        d: "had faith in God",
        correctAnswer: "had faith in God" 
    },
    {
        question: "7) Who among the following was sold to the Ishaemlites for twenty shekels because of his dreams?",
        a: "Moses",
        b: "Joseph",
        c: "Jacob",
        d: "Ishmael",
        correctAnswer: "Joseph"
    },
    {
        question: "8) The children of Israel asked Samuel for a king because",
        a: "It was in their constitution",      
        b: "Their former kind was killed in battle ",
        c: "They desired to be like the heathen nations around them",
        d: "They were tired of military regime",
        correctAnswer: "They desired to be like the heathen nations around them"
    },
    {
        question: "9)  He was a king remembered for his erecting a mighty temple for the worship of God:",
        a: "Solomon",
        b: "Josiah",
        c: "Saul",
        d: "David",
        correctAnswer: "Solomon"
    },
    {question: "10) Joseph's brothers hated him more because",
        a: "Of the coat Jacob gave him",
        b: "He was the son of Rachael",
        c: "His father loved him",
        d: "Of his dreams",
        correctAnswer: "Of his dreams"
    }
]


// DECLARATION OF VARIABLE
const questionCont = document.getElementById('questionCont')
const timeUp = document.getElementById("timeUp")
const questionTag = document.getElementById('questionTag')
const optionTag = document.getElementById('optionTag')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const submitBtn = document.getElementById('submitBtn')
const printPaper = document.getElementById('print')
const finalGrade = document.getElementById('finalGrade')
const logOut = document.getElementById('logOut')





// intialize a global variable to zero
questGlobal = 0;
// INTIAL THE SCORE TO ZERO
let score = 0;

// DECLARE A VARIABLE TO CHECK INPUT
const inputCheck = document.querySelector('input[type = radio]:checked')

// HIDE THE SUBMIT BUTTON
submitBtn.style.display ="none"
logOut.style.display = 'none'
printPaper.style.display = 'none'
timeUp.style.display = 'none'

// CREATE A FUNCTION THAT WILL DISPLAY THE QUESTION AND THE OPTION ON THE BROWSER
dispQuestion = () => {
    // DISPLAY THE QUESTION 
    let myQuest = questionArray[questGlobal]
    const getQuestion = myQuest.question;
    questionTag.innerText = getQuestion;
    // DISPLY OPTION TAGS
    let options = `
    A. <input type="radio" name="option" value="${myQuest.a}" id="">${myQuest.a}<br><br>
    B. <input type="radio" name="option" value="${myQuest.b}" id="">${myQuest.b}<br><br>
    C. <input type="radio" name="option" value="${myQuest.c}" id="">${myQuest.c}<br><br>
    D. <input type="radio" name="option" value="${myQuest.d}" id="">${myQuest.d}<br><br>
    `
    optionTag.innerHTML = options
}

dispQuestion ()

// ADD AN EVENT TO THE NEXT BUTTON
next.addEventListener('click', nextBtn)

// CREATE A FUNCION TO nextBtn
function nextBtn () {
    let inputcheck = document.querySelector('input[type = radio]:checked')
    
    // IF STATEMENT TO CHECK IF THE STUDENT CHECK ON NOT
    if(!inputcheck){
        alert('please select the option')
    }
    else{
        if(questGlobal === questionArray.length - 1){
            submitBtn.style.display ="block"
            next.style.display ="none"
        }
    
        if(inputcheck.value === questionArray[questGlobal].correctAnswer){
                score += 5
                // alert(`you score ${score}`)
            } 
        
        questGlobal++
        dispQuestion()
    }
}

// ADD EVENT LSITENER TO THE FUNCTION
submitBtn.addEventListener('click', submitScore)

function submitScore() {
    console.log('it is working');
    // questionCont.style.display = 'none';
    questionTag.style.display = 'none';
    optionTag.style.display = 'none';
    submitBtn.style.display = 'none';
    // next.style.display = 'none';
    finalGrade.innerText = `Your Score is ${score} / ${questionArray.length * 5}`
    logOut.style.display = 'block'
    printPaper.style.display = 'block'
}
// ADD EVENT LSITENER TO THE PRINT  FUNCTION
printPaper.addEventListener('click', printNow)

function printNow() {
    window.print();
    
}

// ADD EVENT LSITENER TO THE FUNCTION
logOut.addEventListener('click', logOutNow)

function logOutNow() {
    window.location.assign("/index.html")
    
}


// Timer functionality

let totalTime = 20;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(myTimer, 1000)

function myTimer(){
    counter++;
    min = Math.floor((totalTime - counter)/60)
    sec = totalTime - min * 60 - counter
    // console.log(sec);

    
// const timerBox = document.getElementById('timerBox')
const timeLeft = document.getElementById('timeLeft')
timeLeft.textContent = min + " : " + sec  
timeLeft.style.fontSize = '1.5rem'
// timerBox.appendChild(timeLeft)

if(counter === totalTime){
    console.log("timer is working")
    clearInterval(timer)
    timeUp.style.display = 'block'
    questionTag.style.display = 'none';
    optionTag.style.display = 'none';
    submitBtn.style.display = 'none';
    next.style.display = 'none'
    finalGrade.innerText = `Your Score is ${score} / ${questionArray.length * 5}`
    logOut.style.display = 'block'
    printPaper.style.display = 'block'
    finalGrade.style.textAlign = 'center'
}
}



// const btnGoto = document.getElementById('btnGoto')

// btnGoto.addEventListener('click', btnGoto)

// function btnGoto(){
//     window.location = '/testing.html'
// }