const quizDB = [
    {
        question: "Q1:  Which of the following is not a valid SQL type?",

        a: "FLOAT",
        b: "NUMERIC",
        c: "DECIMAL",
        d: "CHARACTER",
        ans: "ans3"
    },
    {
        question: "Q2:Which of the following is not a DDL command?",
        a: "TRUNCATE",
        b: "ALTER",
        c: "CREATE",
        d: "UPDATE",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following are TCL commands?",

        a: " COMMIT and ROLLBACK",
        b: " UPDATE and TRUNCATE",
        c: " SELECT and INSERT",
        d: "GRANT and REVOKE",
        ans: "ans1"
    },
    {
        question: "Q4: Which datatype can store unstructured data in a column?",

        a: "CHAR",
        b: " RAW",
        c: "NUMERIC",
        d: "VARCHAR",
        ans: "ans2"
    },

    {
        question: "Q5:Which of the following is not Constraint in SQL?",

        a: "Primary Key",
        b: "Not Null",
        c: " Check",
        d: "Union",
        ans: "ans4"
    },
    {
        question: "Q6:Which of the following is not a valid aggregate function?",

        a: " COUNT",
        b: " COMPUTE",
        c: " SUM",
        d: "MAX",
        ans: "ans2"
    },
    {
        question: "Q7: Which data manipulation command is used to combines the records from one or more tables?",

        a: " SELECT",
        b: " PROJECT",
        c: " JOIN",
        d: " PRODUCT",
        ans: "ans3",
        
    },
    {
        question: "Q8: Which operator is used to compare a value to a specified list of values?",

        a: "ANY",
        b: " BETWEEN",
        c: " ALL",
        d: "IN",
        ans: "ans4",
        
    },
    {
        question: "Q9: What operator tests column for absence of data?",

        a: " NOT Operator",
        b: " Exists Operator",
        c: " IS NULL Operator",
        d: " None of the above",
        ans: "ans3",
        
    },
    {
        question: "Q10: In which of the following cases a DML statement is not executed?",

        a: " When existing rows are modified.",
        b: " When a table is deleted.",
        c: " When some rows are deleted.",
        d: " All of the above",
        ans: "ans2",
        
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