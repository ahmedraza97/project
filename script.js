// tootle Header

let MobileDD = document.getElementById('mobileDD')
let toogle = true
let showMobileDD = () => {

    if (toogle) {
        MobileDD.style.display = 'block'
        toogle = false
    } else {
        MobileDD.style.display = 'none'
        toogle = true
    }
}


let mobileDrawer = document.getElementById('mobileDrawer')
let toogleMobileDrawer = true
let showDrawer = () => {
    if (toogle) {
        mobileDrawer.style.left = '0px'
        toogle = false
    } else {
        mobileDrawer.style.left = '-120%'
        toogle = true
    }
}





let forEmployer = document.getElementById('forEmployer')
let forNurse = document.getElementById('forNurse')

let showEmployer = () => {
    forEmployer.style.display = 'block'
    forNurse.style.display = 'none'
}

let showNurse = () => {
    forNurse.style.display = 'block'
    forEmployer.style.display = 'none'
}



// Clients Swiper
let clientItemToShow = 5
let windowWidth = window.screen.width
console.log(windowWidth)
if (windowWidth > 1300) {
    clientItemToShow = 5
} else if (windowWidth > 900 && windowWidth < 1300) {
    clientItemToShow = 3
} else if (windowWidth > 300 && windowWidth < 900) {
    clientItemToShow = 1
} else {
    clientItemToShow
}

var swiper = new Swiper(".clientSwiper", {
    slidesPerView: clientItemToShow,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


let slidesToShow = 3
if (windowWidth > 1300) {
    slidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    slidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    slidesToShow = 1
} else {
    slidesToShow
}
// jobHiringSwiper
var swiper = new Swiper(".jobHiringSwiper", {
    slidesPerView: slidesToShow,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// jobHiringSwiper




// <!-- Meet the candidates -->


let candidateSlidesToShow = 3
if (windowWidth > 1300) {
    candidateSlidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    candidateSlidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    candidateSlidesToShow = 1
} else {
    candidateSlidesToShow
}
var swiper = new Swiper(".candidatesSwiper", {
    slidesPerView: candidateSlidesToShow,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});




// blog slider

let blogSlidesToShow = 3
if (windowWidth > 1300) {
    blogSlidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    blogSlidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    blogSlidesToShow = 1
} else {
    blogSlidesToShow
}
var swiper = new Swiper(".blogSlider", {
    slidesPerView: blogSlidesToShow,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});





let nursingResourcesSlidesToShow = 3
if (windowWidth > 1300) {
    nursingResourcesSlidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    nursingResourcesSlidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    nursingResourcesSlidesToShow = 1
} else {
    nursingResourcesSlidesToShow
}
var swiper = new Swiper(".nursingResourcesSwiper", {
    slidesPerView: nursingResourcesSlidesToShow,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


let twoCOlSliderSwiperCount = 2
if (windowWidth > 1300) {
    twoCOlSliderSwiperCount = 2
} else if (windowWidth > 900 && windowWidth < 1300) {
    twoCOlSliderSwiperCount = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    twoCOlSliderSwiperCount = 1
} else {
    twoCOlSliderSwiperCount
}
var swiper = new Swiper(".twoCOlSliderSwiper", {
    slidesPerView: twoCOlSliderSwiperCount,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


