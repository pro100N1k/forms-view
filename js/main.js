$(document).ready(function() {
    $('.js-popup').on('click',function(){
        $.fancybox.defaults.closeExisting = true;
        $.fancybox.open({
            src: $(this).attr('href'),
            type: 'inline'
        });
    });

    $('.js-toggle-password').on('click', function() {
        const _this = $(this);
        const wrapper = _this.closest('.input-wrapper');
        const input = wrapper.find('input');

        _this.toggleClass('icon-eye-blocked');
        _this.toggleClass('icon-eye');

        if (input.attr("type") === "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
    });


})