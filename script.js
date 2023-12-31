const quizDB = [
    {
        question: "Q1: Which type of JavaScript language is ___",

        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },
    {
        question: "Q2:Which one of the following also known as Conditional Expression?",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans2"
    },
    {
        question: "Q3: When interpreter encounters an empty statements, what it will do?",

        a: " Shows a warning",
        b: " Prompts to complete the statement",
        c: " Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    },
    {
        question: "Q4: The function and  var are known as:",

        a: "Keywords",
        b: " Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans3"
    },

    {
        question: "Q5: Which one of the following is the correct way for calling the JavaScript code?",

        a: "Preprocessor",
        b: "Triggering Event",
        c: " RMI",
        d: "Function/Method",
        ans: "ans4"
    },
    {
        question: "Q6: Which of the following type of a variable is volatile?",

        a: " Mutable variable",
        b: " Dynamic variable",
        c: " Volatile variable",
        d: " Immutable variable",
        ans: "ans1"
    },
    {
        question: "Q7: Which of the following keywords is used to define a variable in Javascript?",

        a: " var",
        b: " let",
        c: " Both a & b",
        d: " None",
        ans: "ans3",
        
    },
    {
        question: "Q8: Which one of the following is the correct way for calling the JavaScript code?",

        a: " Preprocessor",
        b: " Triggering Event",
        c: " RMI",
        d: "Function/Method",
        ans: "ans4",
        
    },
    {
        question: "Q9: Which of the following option is used as hexadecimal literal beginning?",

        a: " 00",
        b: " 0x",
        c: " 0X",
        d: " Both 0x and 0X",
        ans: "ans4",
        
    },
    {
        question: "Q10: When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.?",

        a: " Prints an exception error",
        b: " Prints an overflow error",
        c: " Displays Infinity",
        d: " Prints the value as such",
        ans: "ans3",
        
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('.btn');
// multiple classes ko  acces krna hai is lie answers likha hai.aur ismain "queryselectorall" ka use kia hai
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');


let questioncount = 0;
let score = 0;

// simple sare questions ko get kia hai aur show krwaya hai
const loadquiz = () => {
    const questionlist = quizDB[questioncount]
    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;


}
loadquiz();

const getCheckanswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};


// radio button pe auto check na rhe is lie deselectall function use kia hai
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked= false);
}

submit.addEventListener('click', () => {
    const checkedanswer = getCheckanswer();
    console.log(checkedanswer);

    // ye answer check krega aur score main incriment krega
    if (checkedanswer === quizDB[questioncount].ans) {
        score++;
    };

    // is se naye question show honge
    questioncount++;

    deselectAll();

    
    if (questioncount < quizDB.length) {
        loadquiz();
    } else {
        showscore.innerHTML = `
<h3> you score ${score}/${quizDB.length} </h3>
<button class="btn" onclick="location.reload()"> play again</button>
`;

// display none kia tha use hatane ke lie 
        showscore.classList.remove('scorearea');
    }
});