const quizDB = [
    {
        question: "Q1:How can we describe an array in the best possible way? ",

        a: "The Array shows a hierarchical structure.",
        b: "Arrays are immutable.",
        c: "Container that stores the elements of similar types",
        d: "The Array is not a data structure",
        ans: "ans3"
    },
    {
        question: "Q2:Which of the following is the correct way of declaring an array?",
        a: "int javatpoint[10];",
        b: "int javatpoint;",
        c: "javatpoint{20};",
        d: "array javatpoint[10];",
        ans: "ans1"
    },
    {
        question: "Q3: How can we initialize an array in C language?",

        a: " int arr[2]=(10, 20)",
        b: " int arr(2)={10, 20}",
        c: " int arr[2] = {10, 20}",
        d: "int arr(2) = (10, 20)",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following highly uses the concept of an array?",

        a: "Binary Search tree",
        b: "Caching",
        c: "Spatial locality",
        d: "Scheduling of Processes",
        ans: "ans3"
    },

    {
        question: "Q5:  Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",

        a: "9",
        b: "36",
        c: " 35",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q6:Which one of the following is the process of inserting an element in the stack?",

        a: " Insert",
        b: " Add",
        c: "Push",
        d: " None",
        ans: "ans3"
    },
    {
        question: "Q7: When the user tries to delete the element from the empty stack then the condition is said to be a ____",

        a: " Underflow",
        b: " Garbage collection",
        c: " Overflow",
        d: " None",
        ans: "ans1",
        
    },
    {
        question: "Q8: Which one of the following is not the application of the stack data structure",

        a: " String reversal",
        b: " Recursion",
        c: " Backtracking",
        d: " Asynchronous data transfer",
        ans: "ans4",
        
    },
    {
        question: "Q9:Which data structure is required to convert the infix to prefix notation?",

        a: " Stack",
        b: " Linked list",
        c: " Binary tree",
        d: " None",
        ans: "ans1",
        
    },
    {
        question: "Q10:Which of the following is the infix expression?",

        a: " A+B*C",
        b: " +A*BC",
        c: " ABC+*",
        d: " None",
        ans: "ans1",
        
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