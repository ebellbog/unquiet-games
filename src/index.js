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

$(document).ready(() => {
    const $body = $('body');

    $body.addClass('animated-transitions');
    $(window).on('resize scroll', (e) => {
        $body.removeClass('animated-transitions');
        if (e.type === 'scroll') {
            onScroll();
            $('#scroll-indicator').css({
                transition: 'opacity 2s',
                opacity: 0,
            });
        }
    });

    $('#nav-logo').on('click', () => {
        $body.animate({scrollTop: 0}, 800);
    });

    setTimeout(() => {
        $body.addClass('show-logo');
    }, 500);

    $('#scroll-indicator').html(CaretDown);

    const elanaData = {
        imgSrc: 'uqg_elana.png',
        name: 'Elana Bell Bogdan',
        pronouns: 'she/her',
        personalUrl: 'https://elana.games',
        description: `Elana is a queer game designer and UI engineer with a passion for crafting accessible, immersive experiences to help make the world a better place. After nearly a decade in the tech industry, she now works as a Technical Designer at Bolero Game Studio. Along the way, she has also consulted for a women-owned escape room; volunteered with Games For Change; built an immersive multimedia archive to collect & preserve player stories from the <i>Myst</i> franchise; and exhibited games at Wonderville, Waffle Games, and Playcrafting NYC.`
        //`Elana is a UI engineer & game designer, with a focus on social impact, accessibility, and queer narratives. Her career path began in the tech industry, where she worked in web development for nearly a decade. However, her creative passion has always taken her back to games - from interning for Scopely during her college years, to , to developing an arcade game for Wonderville in Queens, NY. She now works as a Technical Designer at Bolero Game Studio and Unquiet Games.`
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
    scrollAmount = scrollAmount || $('body').scrollTop();

    // $('#logo').css('width', Math.max(700 - scrollAmount * 1.1, 160));
    $('#gradient-bg').css('opacity', Math.max((500 - scrollAmount) / 500, 0));
    $('#navbar').css('opacity', 1 - Math.max((900 - scrollAmount) / 500, 0));
    // $('#wasi-name').css({
    //     opacity: Math.max(140 - scrollAmount, 0) / 140,
    //     height: Math.max(106 - scrollAmount * .3, 0),
    // });
    // $('#welcome-text').css({
    //     opacity: Math.max(440 - scrollAmount, 0) / 175,
    // });
    // $('#navbar').css('opacity', Math.min(1, (scrollAmount - 200) / 100));
}