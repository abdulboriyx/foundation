function answerQuizz() {

  // Quiz 1

  const inputElementZero = document.querySelector('.math-system-equations-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === '7') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  // Quiz 2
  const inputElementOne = document.querySelector('.math-system-equations-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === '25') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  // Quiz 3

  const inputElementTwo = document.querySelector('.math-system-equations-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === '50') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  // Quiz 4
  const inputElementThree = document.querySelector('.math-system-equations-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '1900') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  // Quiz 5
  const inputElementFour = document.querySelector('.math-system-equations-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === '101.4 meters') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};