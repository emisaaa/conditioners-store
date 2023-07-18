$('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">‹</button>',
    nextArrow: '<button type="button" class="slick-next">›</button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

function changeBC() {
    let body = document.getElementsByTagName("body")[0];
    let currentBC = body.style.backgroundColor;

    if (currentBC === 'rgb(37, 35, 35)') {
        body.style.backgroundColor = 'rgb(207, 207, 207)';
    } else {
        body.style.backgroundColor = 'rgb(37, 35, 35)';
    }
}

AOS.init({
    duration: 1200,
})

function submitForm(event) {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Форма успешно отправлена!',
        text: 'Ожидайте, с вами свяжутся',
        showConfirmButton: false,
      })
}