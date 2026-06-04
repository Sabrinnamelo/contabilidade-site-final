$(document).ready(function () {
    $("#banners ul").bxSlider({
        auto: true,
        speed: 1000, // 1000milisegundos
         //mode: 'fade' //aparece
        // pager: false //pontinhos
        // mode: 'vertical' //de cima para baixo
    });

    $('#fotos #galeria').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });
});

