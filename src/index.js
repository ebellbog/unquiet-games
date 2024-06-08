import './index.less';
import './bio.less';
import './mobile.less';

import BioTemplate from './templates/bio.handlebars';

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
    $(window).on('resize scroll', (e) => {
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


    const elanaData = {
        imgSrc: 'uqg_elana.png',
        name: 'Elana Bell Bogdan',
        pronouns: 'she/her',
        personalUrl: 'https://elana.games',
        description: `Elana is a queer game designer and UI engineer with a passion for crafting accessible, immersive experiences to help make the world a better place. After nearly a decade in the tech industry, she now works as a Technical Designer at Bolero Game Studio. Along the way, she has also consulted for a women-owned escape room; volunteered with Games For Change; built an immersive multimedia archive to collect & preserve player stories from the <i>Myst</i> franchise; and exhibited games at Wonderville, Waffle Games, and Playcrafting NYC.`
    };
    const natData = {
        imgSrc: 'uqg_nat.png',
        name: 'Nat Mesnard',
        pronouns: 'they/them',
        personalUrl: 'https://natmesnard.com',
        description: `Nat writes fiction, teaches storytelling, and designs games. They are faculty at Pratt Institute and School of Visual Arts, and co-founded Scryptid Games. Nat has published poetry, fiction, and nonfiction in Vol. 1 Brooklyn, Cartridge Lit, Autostraddle, Bodega, Blackbird, Kenyon Review Online, The Gettysburg Review, Ninth Letter, The Journal, Green Mountains Review and elsewhere. New games include a tabletop RPG, Ball of the Wild, funded on Kickstarter, and a short RPG titled Adventurer’s Respite forthcoming in the 2023 Level 1 Anthology.`
    };

    $('#team-wrapper').html(BioTemplate(elanaData) + BioTemplate(natData));
});

function onScroll(scrollAmount) {
    scrollAmount = scrollAmount || $body.scrollTop();

    $gradientBg.css('opacity', Math.max((500 - scrollAmount) / 500, 0));
    $logo.css('opacity', Math.max((1500 - scrollAmount) / 500, 0));
    $navbar.css('opacity', 1 - Math.max((900 - scrollAmount) / 500, 0));
    $scrollIndicator.css('opacity', Math.max((100 - scrollAmount) / 100, 0));
}