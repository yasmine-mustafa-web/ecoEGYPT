const questions = document.querySelectorAll('.btnQ');

questions.forEach(q => {
    q.addEventListener('click', () => {

        const btnA = q.nextElementSibling;

        const isOpen = btnA.classList.contains('show');

        document.querySelectorAll('.btnA').forEach(a => {
            a.classList.remove('show');
        });

        if (!isOpen) {
            btnA.classList.add('show');
        }
    });
});
const menuBtn = document.getElementById('menu');
const ul = document.getElementById('ul');

menuBtn.addEventListener('click', (e) => {
    ul.classList.toggle('show');
    e.stopPropagation();
});
document.addEventListener('click', (e) => {
  if (!ul.contains(e.target) && !menuBtn.contains(e.target)) {
    ul.classList.remove('show');
  }
});