function answerQuiz() {
  const inputElementZero = document.querySelector('.equation-one-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === '2') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  const inputElementOne = document.querySelector('.equation-one-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === 'x - 5') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  const inputElementTwo = document.querySelector('.equation-one-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === 'C = 50 + 0.25m') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  const inputElementThree = document.querySelector('.equation-one-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '30') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  const inputElementFour = document.querySelector('.equation-one-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === '24') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};