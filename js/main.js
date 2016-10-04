// require('bootstrap-sass/assets/javascripts/bootstrap/affix.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/alert.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/button.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/carousel.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/collapse.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/dropdown.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/modal.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/popover.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/tab.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/tooltip.js');
// require('bootstrap-sass/assets/javascripts/bootstrap/transition.js');

window.onload = function () {
    const togglers = document.querySelectorAll('.toggler');
    for (var i = 0; i < togglers.length; i++) {
        togglers[i].onclick = (event) => {
            var target = event.target;
            while (!target.classList.contains('toggler')) {
                target = target.parentNode;
            }
            if (!target.classList.contains('open')) {
                target.classList.add('open');
            } else {
                target.classList.remove('open');
            }
        };
    }
}