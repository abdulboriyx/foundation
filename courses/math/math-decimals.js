function answerQuiz() {
  const inputElementZero = document.querySelector('.decimal-input-zero');
  const valueInputZero = inputElementZero.value;

  if (valueInputZero === '6.86') {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Correct!';

  } else {
    document.querySelector('.quizz-answer-first').classList.add('input-css');
    document.querySelector('.quizz-answer-first').innerHTML = 'Incorrect!';
  };

  const inputElementOne = document.querySelector('.decimal-input-one');
  const valueInputOne = inputElementOne.value;

  if (valueInputOne === '5.25') {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-second').classList.add('input-css');
    document.querySelector('.quizz-answer-second').innerHTML = 'Incorrect!';
  };

  const inputElementTwo = document.querySelector('.decimal-input-two');
  const valueInputTwo = inputElementTwo.value;

  if (valueInputTwo === '4.25') {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-third').classList.add('input-css');
    document.querySelector('.quizz-answer-third').innerHTML = 'Incorrect!';
  }

  const inputElementThree = document.querySelector('.decimal-input-three');
  const valueInputThree = inputElementThree.value;

  if (valueInputThree === '1.4') {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fourth').classList.add('input-css');
    document.querySelector('.quizz-answer-fourth').innerHTML = 'Incorrect!';
  }

  const inputElementFour = document.querySelector('.decimal-input-four');
  const valueInputFour = inputElementFour.value;

  if (valueInputFour === 'Seven thousandths') {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Correct!';
  } else {
    document.querySelector('.quizz-answer-fifth').classList.add('input-css');
    document.querySelector('.quizz-answer-fifth').innerHTML = 'Incorrect!';
  }
};