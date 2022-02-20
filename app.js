
let currentQuestion = 0;
let rightAnswer = 0;

//loadWeb function is the Start function Onload function in HTML Body.
function loadWeb() {
    showcontents();
    //Showcontents();   loading the Questions from questions.js.

    showQuestionsNumber();
    //function to load the hole questions number and current number.
}

function showcontents() {
    let question = questions[currentQuestion];
    // saving the Questions Object value in the qustion variabel

    if (currentQuestion == questions.length) {
        // if it is true call the showAndHide function
        showAndHide();
    } else {
        // if false keep showing next qustion
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

/* answer() function is a function resevices the HTML items id as a Parameter to regognizing
*/

function answer(selector) {
    let question = questions[currentQuestion];
    let selectedQustionNumber = selector.slice(-1);
    // .slice() to chose spacific letter or Postion in the id and store it in selectedQustionNumber
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    // answer_${question['right_answer'] is the ID of the right chosen Answer = stored in IdOfRightAnswer
    if (selectedQustionNumber == question['right_answer']) {
        // if true give the selected right answer the green color
        document.getElementById(selector).classList.add('right-answer-myStyle');
        rightAnswer++;
        // rightAnswer ++ to count how many right Answer has been chosen
    } else {
        document.getElementById(selector).classList.add('wrong-answer-myStyle');
        document.getElementById(idOfRightAnswer).classList.add('right-answer-myStyle');
        // if it is false give the chosen Answer red color and show also the right Answer throw the green color.

    }

    document.getElementById('answer_1').classList.remove('removing-question-style'); //removing-question to remove Hover style
    document.getElementById('answer_2').classList.remove('removing-question-style');
    document.getElementById('answer_3').classList.remove('removing-question-style');
    document.getElementById('answer_4').classList.remove('removing-question-style');
    document.getElementById('button-next').disabled = false;
    // disapling the Button
}


function showQuestionsNumber() {
    document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
    document.getElementById('qustions-number').innerHTML = questions.length;
    // showQuestionsNumber() will be called in Line 10 in loadPage() and in Line 70
}

function nextQuestion() {
    currentQuestion++;
    showcontents();
    showQuestionsNumber();
    resetAnswer();
    document.getElementById('button-next').disabled = true;

    // nextQuestion() Button Nex Onload function to show the next Question
}

function resetAnswer() {
    // restAnswer is a function to remove the Style Colors of Chosen Answers
    // Removing CSS 
    document.getElementById('answer_1').classList.remove('right-answer-myStyle');
    document.getElementById('answer_1').classList.remove('wrong-answer-myStyle');

    document.getElementById('answer_2').classList.remove('right-answer-myStyle');
    document.getElementById('answer_2').classList.remove('wrong-answer-myStyle');

    document.getElementById('answer_3').classList.remove('right-answer-myStyle');
    document.getElementById('answer_3').classList.remove('wrong-answer-myStyle');

    document.getElementById('answer_4').classList.remove('right-answer-myStyle');
    document.getElementById('answer_4').classList.remove('wrong-answer-myStyle');

}

function showAndHide() {
    if (rightAnswer == 26) {
        document.getElementById('content-section').style = 'display: none';
        // to Hide the Question Section
        // document.getElementById('winner-screen').classList.remove('d-none');
        document.getElementById('winner-screen').classList.remove('d-none');
        document.getElementById('current-question-number-winner-screen').innerHTML = rightAnswer;
        document.getElementById('qustions-number-winner-screen').innerHTML = questions.length;
    } else {
        document.getElementById('content-section').style = 'display: none';
        // document.getElementById('winner-screen').classList.remove('d-none');
        document.getElementById('failer-screen').classList.remove('d-none');
        document.getElementById('current-question-number-failer-screen').innerHTML = rightAnswer;
        document.getElementById('qustions-numberfailer-screen').innerHTML = questions.length;
    }
}

function restart() { // to load the Page new.
    location.reload();

}
