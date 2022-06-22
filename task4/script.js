document.querySelector('#link'), link.addEventListener('click',(event) => {
    const pr = prompt('Измените текст ссылки');
    link.textContent = pr;
    event.preventDefault();
})