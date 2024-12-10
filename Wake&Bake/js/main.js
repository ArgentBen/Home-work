(function () {

    // Плавный скрол

    const smoothLinks = document.querySelectorAll("a[href^='#']");
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener("click", function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute("href");

            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };

    // burger modal>>>>>>>>>>>>>>>>>>>>>>>>>>

    const navItemsItem = document.querySelector('.nav-list')
    const burgerItem = document.querySelector('.burger-item')
    const body = document.body

    burgerItem.addEventListener('click', (event) => {
        body.classList.toggle('body--burger-open')
    })
    navItemsItem.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            if (body.classList.contains('body--burger-open')) {
                body.classList.remove('body--burger-open')
            }
        }
    })

    // Open Modal and close modal >>>>>>>>>>>>>>>>>>>

    const modalOpen = document.querySelector('.modal_open')
    const closeModal = document.querySelector('.close-modal')
    const modal = document.querySelector('.modal')
    const modalWrapper = document.querySelector('.modal_wrapper') + document.getElementsByClassName('modal_wrapper').children


    modalOpen.addEventListener('click', event => {
        body.classList.add('body--modal-open')
    })
    modal.addEventListener('click', ClosestModal)

    function ClosestModal(event) {
        if (event.target.classList.contains('modal') || event.target.className == 'close-modal') {
            body.classList.remove('body--modal-open')
        }
    }


    // Tab active>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const tabsList = document.querySelector('.tabs_weeks-list')
    tabsList.addEventListener('click', tabsToggle)

    function tabsToggle(event) {
        const tabsLink = event.target.closest('.tabs_weeks-link')

        if (!tabsLink) return
        event.preventDefault()

        const tabsLinkiD = tabsLink.getAttribute('href')

        document.querySelectorAll('.accordion-items_content').forEach(
            elem => {
                elem.style.maxHeight = null
                const accordionItem = elem.closest('.accordion-items')
                accordionItem.classList.remove('accordion-open')
            }
        )
        document.querySelector('.accordion-visible').classList.remove('accordion-visible')
        document.querySelector(tabsLinkiD).classList.add('accordion-visible')

        document.querySelector('.tabs_weeks-link-active').classList.remove('tabs_weeks-link-active')
        tabsLink.classList.add('tabs_weeks-link-active')
    }




    // open accordion>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const trainingAccordion = document.querySelectorAll('.training-accordion')

    trainingAccordion.forEach(elem => {

        elem.addEventListener('click', event => {
            const accordionItem = event.target.closest('.accordion-items')
            const accordionContent = accordionItem.lastElementChild

            accordionItem.classList.toggle('accordion-open')
            if (accordionItem.classList.contains('accordion-open')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
            else {
                accordionContent.style.maxHeight = null
            }
        })

    })

    // slider<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    new Swiper('.gallery-swiper', {


        // If we need pagination
        pagination: {
            el: '.number-slide',
            type: "fraction",
        },
        spaceBetween: 24,
        slidesPerView: 4,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

        breakpoints: {
            200: {
                spaceBetween: 24,
                slidesPerView: 1,
            },
            440: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            768: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
            1181: {
                spaceBetween: 24,
                slidesPerView: 4,
            },
        },
    });

    // feedback slid
    new Swiper('.Feedback-swiper', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
            nextEl: '.Feedback-next',
            prevEl: '.Feedback-prev',
        },
        scrollbar: {
            el: ".Feedback-scrollbar",
            draggable: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 1.5,
            },
            1181: {
                slidesPerView: 2.1,
            },
        },
    });

})()



