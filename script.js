const btn=document.getElementsByClassName('btn')[0]
const navbarlinks=document.getElementsByClassName('navbarlinks')[0]

btn.addEventListener('click',()=>{
    navbarlinks.classList.toggle('active');
})
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === 'block';
      
      // Hide all answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
      });
      
      // Toggle the clicked answer
      answer.style.display = isVisible ? 'none' : 'block';
    });})