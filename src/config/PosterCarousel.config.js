const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive : [
        {
         breakpoints: 1024,
         settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                InitialSlide: 2,
            },
        },
        {
            breakpoints: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};

export default settings;