$(document).ready(function() {
    // Accordion in FAQ
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.info__item-toggle');
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        };

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle(200);
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.info__item-inner').not($next).slideUp(200).parent().removeClass('open');
            };
        };
        var accordion = new Accordion($('.info__list'), false);
    });

});
