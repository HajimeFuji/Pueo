$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 4000,
        delay: 4000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 4000,
    slides: [
        { src: "./img_for_Pueo/Pueo_main_1.jpg" },
        { src: "./img_for_Pueo/relax_3.jpg" },
        { src: "./img_for_Pueo/beach_stone.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})