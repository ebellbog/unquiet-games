import './index.less';
import './bio.less';
import './mobile.less';

import BioTemplate from './templates/bio.handlebars';
import {elanaData, natData} from './data';

import '../img/uqg_logo.png';
import '../img/uqg_logo_bg.png';
import '../img/uqg_logo_joystick.png';
import '../img/uqg_logo_d-pad.png';
import '../img/uqg_logo_path.png';

import '../img/uqg_elana.png';
import '../img/uqg_nat.png';
import '../img/banner_together.jpg';

import CaretDown from '../img/caret_down.svg';

history.scrollRestoration = "manual";

let $body, $gradientBg, $logo, $navbar, $scrollIndicator;

$(document).ready(() => {
    $body = $('body');
    $gradientBg = $('#gradient-bg');
    $logo = $('#logo');
    $navbar = $('#navbar');
    $scrollIndicator = $('#scroll-indicator');

    $body.addClass('animated-transitions');
    $(window).on('resize scroll touchmove', (e) => {
        $body.removeClass('animated-transitions');
        if (e.type === 'scroll') {
            onScroll();
        }
    });

    $('#nav-logo').on('click', () => {
        $body.animate({scrollTop: 0}, 800);
    });

    $scrollIndicator.on('click', () => {
        const offset = parseInt($('#about').offset().top - 25);
        $body.animate({scrollTop: offset}, 1000);
    });
    $scrollIndicator.html(CaretDown);

    setTimeout(() => {
        $body.addClass('show-logo');
    }, 500);

    $('#team-wrapper').html(BioTemplate(elanaData) + BioTemplate(natData));
});

function onScroll(scrollAmount) {
    scrollAmount = scrollAmount || $body.scrollTop();

    $gradientBg.css('opacity', Math.max((500 - scrollAmount) / 500, 0));
    $logo.css('opacity', Math.max((1500 - scrollAmount) / 500, 0));
    $navbar.css('opacity', 1 - Math.max(2 * (screen.height - scrollAmount) / screen.height, 0));
    $scrollIndicator.css('opacity', Math.max((100 - scrollAmount) / 100, 0));
}