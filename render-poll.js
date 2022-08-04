export function renderPoll(question, optionA, optionB, votesA, votesB) {

    const pollEl = document.createElement('div');
    const questionEl = document.createElement('h3');
    const optionsEl = document.createElement('div');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    
    pollEl.classList.add('poll');
    optionsEl.classList.add('options');

    questionEl.textContent = question;
    optionAEl.textContent = `${optionA} (${votesA} votes)`;
    optionBEl.textContent = `${optionB} (${votesB} votes)`;
    
    pollEl.append(questionEl, optionsEl);
    optionsEl.append(optionAEl, optionBEl);

    return pollEl;
}