$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = $(this).data('include') + '.html';
        $(this).load(file);
    });
});

// $(function() {
//     $("#top").on('click', function() {
//         var position = $("#image").offset().top;
//         $("HTML, BODY").animate({
//             scrollTop: position
//         }, 1000);
//     });
// });

$(document).ready(function () {
    $(window).scroll(function () {
        $('.collection').addClass('.fade');
        // let currentLog = $(this).scrollTop();
        // console.log(currentLog);
        // if (currentLog < 100) {

        // } else {
        //     $('.collection').removeClass('.fade');
        // }
    });
});