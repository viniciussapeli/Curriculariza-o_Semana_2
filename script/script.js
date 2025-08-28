
const filtros = {
  porte: 'todos',
  idade: 'todos'
};

function aplicarFiltros() {
  const animais = document.querySelectorAll('.lista-animais .animal');
  
  animais.forEach(animal => {
    const matchPorte = filtros.porte === 'todos' || animal.classList.contains(filtros.porte);
    const matchIdade = filtros.idade === 'todos' || animal.classList.contains(filtros.idade);

    animal.style.display = (matchPorte && matchIdade) ? '' : 'none';
  });
}

document.querySelectorAll('.filtro-porte .filtro-item').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.querySelectorAll('.filtro-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    filtros.porte = item.dataset.filter;
    aplicarFiltros();
  });
});

document.querySelectorAll('.filtro-idade .filtro-item').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.querySelectorAll('.filtro-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    filtros.idade = item.dataset.filter;
    aplicarFiltros();
  });
});