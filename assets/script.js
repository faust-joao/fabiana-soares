// Menu

// Carrosel
const content = document.querySelectorAll('.content > *');
let currentIndex = 0;

document.querySelector('#next').addEventListener('click', () => {
    currentIndex++;

    if (currentIndex === content.length) {
        currentIndex = 0;
        content[content.length - 1].style.display = 'none';
    } else {
        content[currentIndex - 1].style.display = 'none';
    }

    content[currentIndex].style.display = 'block';
});

document.querySelector('#previous').addEventListener('click', () => {
    if (currentIndex === 0) {
        content[currentIndex].style.display = 'none';
        content[content.length - 1].style.display = 'block';
        currentIndex = content.length - 1;
        return;
    }
    
    content[currentIndex].style.display = 'none';
    currentIndex--;
    content[currentIndex].style.display = 'block';
});