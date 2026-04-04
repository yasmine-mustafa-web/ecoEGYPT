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
document.addEventListener('click', (e) => {

  if (!e.target.closest('.btnQ') && !e.target.closest('.btnA')) {

    document.querySelectorAll('.btnA').forEach(a => {
      a.classList.remove('show');
    });

  }

});
});
const menuBtn = document.getElementById('menu');
const ul = document.getElementById('ul');
const li=document.querySelectorAll(".liMenu");
li.forEach((item) =>{
item.addEventListener("click",()=>{
  ul.classList.remove("show");
})
})

menuBtn.addEventListener('click', (e) => {
    ul.classList.toggle('show');
    e.stopPropagation();
});
document.addEventListener('click', (e) => {
  if (!ul.contains(e.target) && !menuBtn.contains(e.target)) {
    ul.classList.remove('show');
  }
});
const video=document.querySelector('video');
video.muted=true;
video.volume=0;
