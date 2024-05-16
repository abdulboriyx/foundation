function answerQuizz() {
  const inputElementZero = document.querySelector('.fraction-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === '3/8') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  const inputElementOne = document.querySelector('.fraction-input-one');
  const valueInputOne = document.querySelector('.fraction-input-one').value;

  if (valueInputOne === '1/4') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  const inputElementTwo = document.querySelector('.fraction-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === '3') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  const inputElementThree = document.querySelector('.fraction-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '1/3' || valueInputThree === '3/6') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  const inputElementFour = document.querySelector('.fraction-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === '5/8') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};