
const filterItems = document.querySelectorAll('.filtro-item');
const animais = document.querySelectorAll('.lista-animais .animal');

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active dos filtros
        filterItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const filter = item.getAttribute('data-filter');

        animais.forEach(animal => {
            if(filter === 'todos') {
                animal.style.display = 'block';
            } else {
                animal.style.display = animal.classList.contains(filter) ? 'block' : 'none';
            }
        });
    });
});
