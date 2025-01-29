var index = 0;

document.getElementById('gallery').addEventListener('click',(event) => {
    if(event.target.tagName == 'IMG'){
        document.getElementById('lightbox').classList.remove('displayLightbox');
        document.getElementById('image').src = event.target.src;
        index = event.target.getAttribute('imagekey');
        console.log(event.target.getAttribute('imagekey'));
    }
    
})

document.getElementById('close').addEventListener('click',() => {
    document.getElementById('lightbox').classList.add('displayLightbox');
})

var images = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'];

var output = '';

images.forEach((v,i) => {
    output += '<img src="images/'+ v +'" imagekey="'+ i +'" alt="">';
})

document.getElementById('gallery').innerHTML = output;



document.getElementById('left').addEventListener('click',() => {
    index--;

    console.log(index);
    if(index < 0){
        index = images.length-1;
    }
    document.getElementById('image').src = 'images/'+images[index];
})

document.getElementById('right').addEventListener('click',() => {
    index++;
    if(index == images.length){
        index = 0;
    }
    document.getElementById('image').src = 'images/'+images[index];
})