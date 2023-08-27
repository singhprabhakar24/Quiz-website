const quizDB = [
    {
        question: "Q1: What is Inheritance in Java programming? ",

        a: "It's a process where one class acquires the properties (fields) and behaviors (methods) of another class.",
        b: " It's a process of creating a new class using the main() method. ",
        c: "It's a technique to create objects in Java. ",
        d: "It's a Java-specific term for importing packages.",
        ans: "ans1"
    },
    {
        question: "Q2:Which keyword is used for inheritance in Java?",
        a: "extends ",
        b: "new",
        c: "super",
        d: " this",
        ans: "ans1"
    },
    {
        question: "Q3: What is a subclass in Java inheritance?",

        a: " The class that inherits from another class ",
        b: "  The class that is inherited from",
        c: " The final class in the inheritance chain",
        d: " None of the above",
        ans: "ans1"
    },
    {
        question: "Q4: What is the parent class of all classes in Java?",

        a: "Object",
        b: " String",
        c: "Class ",
        d: "System",
        ans: "ans1"
    },

    {
        question: "Q5:What is the purpose of the 'super' keyword in Java?",

        a: "To call the constructor of the parent class ",
        b: "To call a method of the child class",
        c: "To create a new instance of a class ",
        d: "To define a static method",
        ans: "ans1"
    },
    {
        question: "Q6: What is a multilevel inheritance in Java?",

        a: " A class extends two or more classes ",
        b: " Two or more classes extend the same class ",
        c: " A class extends another class which also extends another class",
        d: " All of the above",
        ans: "ans3"
    },
    {
        question: "Q7:In Java, is it possible to override a static method?",

        a: " Yes, we can override a static method just like we do with instance methods.",
        b: " No, static methods cannot be overridden because they belong to the class, not the object. ",
        c: " It depends on whether the static method is declared as final or not",
        d: "  It depends on the access modifier of the static method",
        ans: "ans2",

    },
    {
        question: "Q8: Select the packages in which JDBC classes are defined?",

        a: "jdbc and javax.jdbc",
        b: " rdb and javax.rdb ",
        c: "jdbc and java.jdbc.sql",
        d: " sql and javax.sql",
        ans: "ans4",

    },
    {
        question: "Q9: How many transaction isolation levels provide the JDBC through the Connection interface?",

        a: " 3",
        b: "4 ",
        c: " 7",
        d: "  2",
        ans: "ans2",

    },
    {
        question: "Q10:Which methods are required to load a database driver in JDBC?",

        a: "getConnection() ",
        b: " registerDriver()",
        c: "  forName()",
        d:"Both b and c",
        ans: "ans4",

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
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
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