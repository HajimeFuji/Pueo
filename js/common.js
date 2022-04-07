$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 8000,
        delay: 8000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 8000,
    slides: [
        { src: "./img_for_Pueo/pueo_front.jpg" },
        { src: "./img_for_Pueo/beach_stone.JPG" },
        { src: "./img_for_Pueo/relax_3_m.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})