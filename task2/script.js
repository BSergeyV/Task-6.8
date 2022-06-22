const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообшением и кнопкой OK');
})


const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})