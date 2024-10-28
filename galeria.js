const images = [
    'img/AD1.JPG',
    'img/AD2.JPG',
    'img/AD4.JPG',
    'img/AD3.JPG',]
   
let currentIndex = 0;

function changeImage(direction) {
    const img = document.getElementById('galleryImage');
    img.style.opacity = 0;
    img.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        img.src = images[currentIndex];
        img.style.opacity = 1;
        img.style.transform = 'scale(1)';
    }, 300);
}