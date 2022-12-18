$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.navbar,.header,.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});