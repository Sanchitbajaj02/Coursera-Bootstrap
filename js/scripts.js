// $(document).ready(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });

// carousel play and pause
$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

// login modal appear
$('#myModal').click(function () {
    $('#loginModal').modal('toggle');
});

// reservation table appear
$('#reserveModal').click(function () {
    $('#reservation').modal('toggle');       
});