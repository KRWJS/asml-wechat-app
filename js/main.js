$(function () {

    //Fullpage.js Init
    $('#fullpage').fullpage({
        loopHorizontal: false, // no loop for slider
        slidesNavigation: true, // slider dots navigation
        controlArrows: true, // arrow for the slider
        verticalCentered: false,
        dragAndMove: false,
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            ga('send', 'pageview', '/section' + ASML.section + '/slide-' + (slideIndex + 1 ));
        }

    });

    //Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /**
     * Link tracking
     * -------------------------
     */
    (function () {
        $('.js-application-link').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            var url = $anchor.attr('href');
            var virtualPageUrl = $anchor.data('virtual-page-url');

            // send vitual page view for application link clicks
            // we can make a goal funnel based on this later
            ga('send', 'pageview', virtualPageUrl, {
                'hitCallback': function () {
                    document.location = url;
                }
            });
        });
    })();
});
