function answerQuizz() {

  // Quiz 1

  const inputElementZero = document.querySelector('.absolute-value-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === '12') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  // Quiz 2
  const inputElementOne = document.querySelector('.absolute-value-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === '5') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  // Quiz 3

  const inputElementTwo = document.querySelector('.absolute-value-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === '250') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  // Quiz 4
  const inputElementThree = document.querySelector('.absolute-value-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '350') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  // Quiz 5
  const inputElementFour = document.querySelector('.absolute-value-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === '50') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};