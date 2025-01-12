document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items'); // исправлено


    function hideTabContent() {
        tabsContent.forEach( i => {
            i.style.display = 'none'
        })
        
        tabs.forEach( i => {
            i.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(el = 0) {
        // tabs[el].hidden = false
        tabsContent[el].style.display = 'block'
        tabs[el].classList.add('tabheader__item_active')
    }
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((el, i) => {
                if (target == el) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })


    // Timer

    const deadline = '2025-01-15'

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / 1000 * 60 * 60) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60)

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(time) {
        if (time>=0 && time <10) {
            return `0${time}`
        } else if (time<0) {
            return 0
        }
        else {
            return time
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock,1000)        

        updateClock()
        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval)
            } 
        }

    }

    setClock('.timer', deadline)
    // console.log(getTimeRemaining(deadline))


    //Modal

    const open = document.querySelectorAll('[data-modal]'),
        close = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal')
    
    function openModal() {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
        window.removeEventListener('scroll', showModalBtScroll)
    }

    open.forEach(item => {
        item.addEventListener('click', () => {
            openModal()
        });
    });

    function closeModal() {
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    close.addEventListener('click',closeModal)

    // Закрытие модального окна при клике вне его области
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal()
        }
    });

    // Закрытие модального окна по нажатию клавиши Esc
    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display == 'block') {
            closeModal()
            
        }
    });

    const modalTimerId = setTimeout(openModal,3000)

    function showModalBtScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        // Если пользователь достиг конца страницы, показываем модальное окно
        if (scrollPosition >= pageHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalBtScroll)
        }
    }

    // Проверка, достиг ли пользователь конца страницы
    window.addEventListener("scroll",showModalBtScroll);
    
})