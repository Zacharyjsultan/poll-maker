// import functions and grab DOM elements
import { renderPoll } from './render-poll.js';

const optionAYesEl = document.getElementById('option-a-yes');
const optionBYesEl = document.getElementById('option-b-yes');

const optionANoEl = document.getElementById('option-a-no');
const optionBNoEl = document.getElementById('option-b-no');

const addPollEl = document.getElementById('add-poll');
const archivePollEl = document.getElementById('archive-poll');
const currentPollEl = document.getElementById('newest-poll');
const pastPollEl = document.getElementById('past-polls');

const pollForm = document.getElementById('poll-form');
// let state
let pastPolls = [];

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
pollForm.addEventListener('submit', (event) => {
    currentPollEl.textContent = '';
    event.preventDefault();
    votesA = 0;
    votesB = 0;
    const data = new FormData(pollForm);

    const userQuestion = data.get('question');
    const userOptionA = data.get('option-a');
    const userOptionB = data.get('option-b');

    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;

  
    displayCurrentPoll(); 
});

optionAYesEl.addEventListener('click', () => {
    votesA++;
    renderPoll();
    displayCurrentPoll();
});
optionBYesEl.addEventListener('click', () => {
    votesB++;
    renderPoll();
    displayCurrentPoll();
});
optionANoEl.addEventListener('click', () => {
    votesA--;
    renderPoll();
    displayCurrentPoll();
});
optionBNoEl.addEventListener('click', () => {
    votesB--;
    renderPoll();
    displayCurrentPoll();
});

archivePollEl.addEventListener('click', () => {

    const currentPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };

  
    pastPolls.push(currentPoll);
    DisplayAllPolls(pastPolls);

});

function displayCurrentPoll() {
    currentPollEl.textContent = '';

    const pollEl = renderPoll(question, optionA, optionB, votesA, votesB);
    currentPollEl.append(pollEl);
}

function DisplayAllPolls() {

    pastPollEl.textContent = '';


    for (let poll of pastPolls) {

        const pollEl = renderPoll(poll.question, poll.votesA, poll.votesB, poll.optionA, poll.optionB);

        pastPollEl.append(pollEl);
    }

}

