$(document).ready(function () {
    var index = 0;
    var cards = $('.card');
    cards.hide();
    cards.eq(index).show();

    function slide() {
        cards.eq(index).fadeOut(1000, function () {
            index++;
            if (index >= cards.length) {
                index = 0;
            }
            cards.eq(index).fadeIn(1000);
        });
    }

    setInterval(slide, 800);
});