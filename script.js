// here i declared variable img, then assigned a value to the variable img
var img = document.getElementById('image');
// this part is where I declared my arrays
var slides = ['image4.jpg','image2.jpg','image1.jpg','image3.jpg','image2.webp'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    // console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
    
}
setInterval(slider, 3000);

