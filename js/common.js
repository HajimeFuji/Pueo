$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 2000,
        delay: 10000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 10000,
    slides: [
        { src: "./img_for_Pueo/relax_3.jpg" },
        { src: "./img_for_Pueo/hawaii_beach_3.jpg" },
        { src: "./img_for_Pueo/relax_1.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})