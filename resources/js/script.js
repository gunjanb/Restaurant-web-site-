// JavaScript source code
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 2 seconds
}


var menuRestaurant = $('.menu-restaurant');
menuRestaurant.hide();
$('.menulinks li a').click(function () {
    var category = $(this).data('filter');
    console.log(category);
    menuRestaurant.hide();
    console.log('.' + category);
    console.log(category.length);
    $('.' + category).show();
    category.length = 0;

});

