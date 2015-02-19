$('.product-caption').hover(on, off);

function on() {
    $(this).find('.product-name').css('display', 'none');
    $(this).find('.product-menu').css('display', 'block');
    $(this).find('.price').addClass('active');
};

function off() {
    $(this).find('.product-name').css('display', 'block');
    $(this).find('.product-menu').css('display', 'none');
    $(this).find('.price').removeClass('active');
};
