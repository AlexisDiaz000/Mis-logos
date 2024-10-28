const images = ['img/AD1.jpg','img/AD2.jpg','img/AD4.jpg','img/AD3.jpg',]
   
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
