document.querySelector('#ref').addEventListener('click', (event) => {
    
    event.preventDefault();
    
    const Input = prompt('Введите текст');

    document.querySelector('#ref').textContent = (Input);

       
});

