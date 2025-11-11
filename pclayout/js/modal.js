const modalBtn = document.querySelector ('.modal__button')
const modal = document.querySelector ('.modal')

modalBtn.addEventListener ('click', () => {
modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    console.log(modalContent);
    if (!modalContent) {
        modal.style.display = ''
    } 
})

const closeButton = document.createElement('span');
closeButton.innerHTML = '×'; // Символ "X"
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Добавляем крестик в модальное окно
modal.appendChild(closeButton);

// Функция открытия модального окна
function openModal() {
  modal.style.display = 'block';
}

// Функция закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Добавляем обработчик события на кнопку "Заказать"
orderButton.addEventListener('click', openModal);

// Добавляем обработчик события на крестик
closeButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его области (опционально)
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});