const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = '#1A1923'; // Change the color to your desired color
    } else {
        nav.style.backgroundColor =  '#1F222C '; // Reset the color when scrolled back to the top
    }
});

