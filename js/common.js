$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 10000,
        delay: 10000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 10000,
    slides: [
        { src: "./img_for_Pueo/Pueo_main_1-1.jpg" },
        { src: "./img_for_Pueo/relax_3.jpg" },
        { src: "./img_for_Pueo/beach_stone.JPG" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})