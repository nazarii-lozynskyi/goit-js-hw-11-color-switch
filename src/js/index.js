const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"'),
  stopButton: document.querySelector('button[data-action="stop"'),
};

/* Добавление слушателя на кнопки "startButton" и "stopButton"*/
refs.startButton.addEventListener('click', onStartBtnClick);
refs.stopButton.addEventListener('click', onStopBtnClick);

/* Для генерации случайного числа (индекс элемента массива цветов) */
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* Присвоение случайного цвета для "body" */
function colorSwitchForBackground(color) {
  refs.body.style.backgroundColor = color;

  console.log(color);
}

let intervalColorSwitchForBackground = null;

function onStartBtnClick() {
  /* После нажатия кнопки ""startButton", с интервалом раз в секунду меняет цвет фона "body" на случайное значение 
  из массива используя инлайн-стиль */
  intervalColorSwitchForBackground = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, colors.length - 1);
    colorSwitchForBackground(colors[randomNumber]);

    console.log(randomNumber);
  }, 1000);

  /* Кнопка "stopButton" активна */
  refs.stopButton.removeAttribute('disabled');

  /* Кнопка "startButton" неактивна */
  refs.startButton.setAttribute('disabled', true);
}

function onStopBtnClick() {
  /* После нажатия кнопки ""stopButton" интервал очищается */
  clearInterval(intervalColorSwitchForBackground);

  /* Кнопка "startButton" активна */
  refs.startButton.removeAttribute('disabled');
  /* Кнопка "stopButton" неактивна */
  refs.stopButton.setAttribute('disabled', true);
}
