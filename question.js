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
        question: "3) To the question of the Philippian Jailer, ‘Men, what must I do to be saved? Paulreplied,",
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
        b: " was a prudentwarrior",
        c: "had better weapons",
        d: "had faith in God",
        correctAnswer: "had faith in God" 
    }
]
console.log(questionArray[0].question);
// DECLARATION OF VARIABLE
const questionCont = document.getElementById('questionCont')
const questionTag = document.getElementById('questionTag')
const optionTag = document.getElementById('optionTag')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const submitBtn = document.getElementById('submitBtn')
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
                alert(`you score ${score}`)
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
    finalGrade.innerText = `Your Score is ${score} / ${questionArray.length * 5};`
    logOut.style.display = 'block'
}
// ADD EVENT LSITENER TO THE FUNCTION
logOut.addEventListener('click', logOutNow)

function logOutNow() {
    window.location.assign("/index.html")
    
}