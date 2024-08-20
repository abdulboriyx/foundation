function answerQuizz() {

  // Quiz 1

  const inputElementZero = document.querySelector('.place-values-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === 'Tens' || valueInputZero === 'tens') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  // Quiz 2
  const inputElementOne = document.querySelector('.place-values-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === 'Thousands' || valueInputOne === 'thousands') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  // Quiz 3

  const inputElementTwo = document.querySelector('.place-values-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === '8' || valueInputTwo === 'eight') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  // Quiz 4
  const inputElementThree = document.querySelector('.place-values-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '5,000 + 300 + 6') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  // Quiz 5
  const inputElementFour = document.querySelector('.place-values-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === 'Thousands') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};