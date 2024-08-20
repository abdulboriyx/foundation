function answerQuiz() {
  const inputElementZero = document.querySelector('.inequalities-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === 'less or equal than 30') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  const inputElementOne = document.querySelector('.inequalities-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === 'more than 32') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  const inputElementTwo = document.querySelector('.inequalities-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === 'C = 50 + 0.25m') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  const inputElementThree = document.querySelector('.inequalities-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '30') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  const inputElementFour = document.querySelector('.inequalities-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === '24') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};