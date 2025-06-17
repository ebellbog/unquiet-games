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
import '../img/bt_logo_horizontal.png';

import CaretDown from '../img/caret_down.svg';

history.scrollRestoration = "manual";

let $body, $gradientBg, $logo, $navbar, $scrollIndicator;

$(document).ready(() => {
    $body = $('body');
    $gradientBg = $('#gradient-bg');
    $logo = $('#logo');
    $navbar = $('#navbar');
    $scrollIndicator = $('#scroll-indicator');

    $body.addClass('animated-transitions page-loaded');
    $(window).on('resize scroll touchmove', (e) => {
        $body.removeClass('animated-transitions');
        if (e.type === 'scroll') {
            onScroll();
        }
    });

    $body.on('click', ({target}) => {
        if (target.tagName === 'A') return;

        const $target = $(target);
        const $modalParent = $target.closest('#mailing-list-modal');
        if ($modalParent.length) return;

        hideModal();
    });

    $('#nav-logo').on('click', () => {
        $body.animate({scrollTop: 0}, 800);
    });

    $('#join-link').on('click', (e) => {
        e.preventDefault();
        $body.addClass('show-modal');
    });
    $('#mc-embedded-subscribe').on('click', () => {
        // Clear any previous response
        $('#mce-responses .response').html('').hide();
    });
    $('#mc-embedded-cancel').on('click', () => {
        hideModal();
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
    $('a').each((idx, a) => $(a).attr('target', '_blank'));
});

function onScroll(scrollAmount) {
    scrollAmount = scrollAmount || $body.scrollTop();

    $gradientBg.css('opacity', Math.max((500 - scrollAmount) / 500, 0));
    $logo.css('opacity', Math.max((1500 - scrollAmount) / 500, 0));
    $navbar.css('opacity', 1 - Math.max(2 * (screen.height - scrollAmount) / screen.height, 0));
    $scrollIndicator.css('opacity', Math.max((100 - scrollAmount) / 100, 0));
}

function hideModal() {
    $body.removeClass('show-modal');

    setTimeout(() => {
        // Clear input fields
        $('.mc-field-group input').val('');

        // Clear response messages
        $('#mce-responses .response').html('').hide();
        $('.mc-field-group div').remove();
        $('.mce_inline_error').removeClass('mce_inline_error');
    }, 500);
}