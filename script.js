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

var emp = document.getElementById('emp')
var nurse = document.getElementById('nurse')

let showEmployer = () => {
    forEmployer.style.display = 'block'
    forNurse.style.display = 'none'
    emp.classList.add('active')
    nurse.classList.remove('active')
}

let showNurse = () => {
    forNurse.style.display = 'block'
    forEmployer.style.display = 'none'
    nurse.classList.add('active')
    emp.classList.remove('active')
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
    clientItemToShow = 1.3
} else {
    clientItemToShow
}

var swiper = new Swiper(".clientSwiper", {
    slidesPerView: clientItemToShow,
    spaceBetween: windowWidth > 600 ? 30 : 10,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});


let slidesToShow = 3
if (windowWidth > 1300) {
    slidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    slidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    slidesToShow = 1.3
} else {
    slidesToShow
}
// jobHiringSwiper
var swiper = new Swiper(".jobHiringSwiper", {
    slidesPerView: slidesToShow,
    spaceBetween: windowWidth > 600 ? 30 : 10,
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
    candidateSlidesToShow = 1.3
} else {
    candidateSlidesToShow
}
var swiper = new Swiper(".candidatesSwiper", {
    slidesPerView: candidateSlidesToShow,
    spaceBetween: windowWidth > 600 ? 30 : 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    //  loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});




// blog slider

let blogSlidesToShow = 3
if (windowWidth > 1300) {
    blogSlidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    blogSlidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    blogSlidesToShow = 1.3
} else {
    blogSlidesToShow
}
var swiper = new Swiper(".blogSlider", {
    slidesPerView: blogSlidesToShow,
    spaceBetween: windowWidth > 600 ? 30 : 10,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});





let nursingResourcesSlidesToShow = 3
if (windowWidth > 1300) {
    nursingResourcesSlidesToShow = 3
} else if (windowWidth > 900 && windowWidth < 1300) {
    nursingResourcesSlidesToShow = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    nursingResourcesSlidesToShow = 1.3
} else {
    nursingResourcesSlidesToShow
}
var swiper = new Swiper(".nursingResourcesSwiper", {
    slidesPerView: nursingResourcesSlidesToShow,
    spaceBetween: windowWidth > 600 ? 30 : 10,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});


let twoCOlSliderSwiperCount = 2
if (windowWidth > 1300) {
    twoCOlSliderSwiperCount = 2
} else if (windowWidth > 900 && windowWidth < 1300) {
    twoCOlSliderSwiperCount = 2
} else if (windowWidth > 300 && windowWidth < 900) {
    twoCOlSliderSwiperCount = 1.3
} else {
    twoCOlSliderSwiperCount
}
var swiper = new Swiper(".twoCOlSliderSwiper", {
    slidesPerView: twoCOlSliderSwiperCount,
    spaceBetween: windowWidth > 600 ? 30 : 10,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});


