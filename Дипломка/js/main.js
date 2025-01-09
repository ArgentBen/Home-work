(function () {

    // burger modal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const burgerOpen = document.querySelector('.burger-item')
    const headerNav = document.querySelector('.header-nav')
    const body = document.body

    burgerOpen.addEventListener('click', event => {
        body.classList.toggle('body--modal-open')
    })
    headerNav.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            if (body.classList.contains('body--modal-open')) {
                body.classList.remove('body--modal-open')
            }
        }
    })



    const accordionItems = document.querySelectorAll('.accordion-item')
    const accordionList = document.querySelector('.accordion-list')
    const contentsItems = document.querySelectorAll('.accordion-items_content')

    accordionList.addEventListener('click', (event) => {
        let target = event.target
        const accordionItem = target.closest('.accordion-item')
        const accordionContent = accordionItem.lastElementChild

        if (accordionItem.classList.contains('accordion-visible')) {
            accordionItem.classList.remove('accordion-visible')
        } else {
            for (let i = 0; i < accordionItems.length; i++) {
                accordionItems[i].classList.remove('accordion-visible')
                contentsItems[i].style.maxHeight = null
            }
            accordionItem.classList.add('accordion-visible')
        }
        if (accordionItem.classList.contains('accordion-visible')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else {
            accordionContent.style.maxHeight = null
        }


    })


    // team-btn>>>>>>>>>>>>>>>>>>>>

    const TeamBtn = document.querySelector('.Team-btn')
    TeamBtn.addEventListener('click', event => {
        const TeamPersonHidden = document.querySelector('.Team-person-hidden ')
        TeamPersonHidden.classList.toggle('hidden-visible')
        const contentBtn = document.querySelector('.content-btn')
        if (TeamPersonHidden.classList.contains('hidden-visible')) {
            TeamPersonHidden.style.maxHeight = TeamPersonHidden.scrollHeight + 'px';
            contentBtn.textContent = 'Hide all team'
        }
        else {
            TeamPersonHidden.style.maxHeight = null
            contentBtn.textContent = 'See all team'
        }
    });



    new Swiper('.Testimonials-swiper', {

        spaceBetween: 110,
        slidesPerView: 1.1,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
            nextEl: '.Arrow-next',
            prevEl: '.Arrow-prev',
        },
        pagination: {
            el: ".Testimonials-pagination ",
            clickable: true,
        },
        breakpoints: {
            700:{
                slidesPerView: 1.2,
                spaceBetween: 110,
            },
            800:{
                slidesPerView: 1.5,
                spaceBetween: 50,
            },
            1100: {
                slidesPerView: 2,
            },
        },
    });

    

    // окрышивание стрелок если в конце или в начале>>>
    const parentsPagination = document.querySelector('.Testimonials-pagination');
    const firstChildPagination = parentsPagination.firstElementChild;
    const lastChildPagination = parentsPagination.lastElementChild;
    const TestimonialsSwiper = document.querySelector('.Testimonials-swiper')

    paginationfirstLast()


    TestimonialsSwiper.addEventListener('mousemove', paginationfirstLast)
    TestimonialsSwiper.addEventListener('click', paginationfirstLast)

    function paginationfirstLast () {
        if(firstChildPagination.classList.contains('swiper-pagination-bullet-active')) {
            document.querySelector('.Arrow-prev').classList.add('arrow-activ')
        }else {
            document.querySelector('.Arrow-prev').classList.remove('arrow-activ')
        }
        if(lastChildPagination.classList.contains('swiper-pagination-bullet-active')) {
            document.querySelector('.Arrow-next').classList.add('arrow-activ')
        }else {
            document.querySelector('.Arrow-next').classList.remove('arrow-activ')
        }
    };




    const SwitchHello = document.querySelector('#hello')
    const SwitchPrice = document.querySelector('#price')
    const ContactFormOne = document.querySelector('.Contact-form-hi')
    const ContactFormTwo = document.querySelector('.Contact-form-price')
    const ContactSwitch = document.querySelector('.Contact-content_Switch')
    ContactFormTwo.hidden = true;
    ContactSwitch.addEventListener('click', event => {
        if (SwitchHello.checked) {
            togleForm(ContactFormOne)
        }else {
            ContactFormOne.hidden = true;
            setTimeout(function(){
                ContactFormOne.classList.remove('form-visible')
            },200)
            
        }
        if (SwitchPrice.checked) {
            togleForm(ContactFormTwo)
        }else {
            ContactFormTwo.hidden = true;
            setTimeout(function(){
                ContactFormTwo.classList.remove('form-visible')
            },200)
        }


        function togleForm (form) {
            if(form.classList.contains('form-visible')){
                return
            } else {
                form.hidden = false;
                setTimeout(function(){
                    form.classList.add('form-visible')
                },200)
            }        

        }
    })






})()


