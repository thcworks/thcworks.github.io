$(function() {
  $('.bunner-cookies-close').click(function() {
      $('.bunner-cookies').slideUp(300);
      Cookies.set('cookie-read', '1');
  });
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-82818465-1', 'auto');
ga('send', 'pageview');



$(document).ready(function () {


    $('.bunner-cookies').css('top', $(window).scrollTop() + (window.innerHeight - ($('.bunner-cookies').height() + 50)));
    $(window).scroll(function () {

        $('.bunner-cookies').css('top', $(window).scrollTop() + (window.innerHeight - ($('.bunner-cookies').height() + 50)));
    });

    $(window).resize(function () {
        $('.bunner-cookies').css('top', $(window).scrollTop() + (window.innerHeight - ($('.bunner-cookies').height() + 50)));
    });

    if (Cookies.get('cookie-read') != '1')
    {
        $('.bunner-cookies').show();
    }
    

});