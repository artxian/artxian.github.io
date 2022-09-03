const getMyAge = function (year) {
    let age = new Date().getFullYear() - year;
    return age;
}

// SCROLL
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const scrollAble = document.documentElement.scrollHeight - window.innerHeight;


    if(currentScroll <= lastScroll) {
        document.querySelector('header').classList.remove('scroll-down');

        document.querySelector('.go2Top').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.go2Top').removeAttribute('style');
        }, 300);
    }

    if(currentScroll > lastScroll) {
        document.querySelector('header').classList.add('scroll-down');
    }

    if(currentScroll >= scrollAble) {
        document.querySelector('header').classList.remove('scroll-down');
        document.querySelector('.go2Top').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.go2Top').style.opacity = 100;
        }, 0);
    }
    
    lastScroll = currentScroll;
});

// GOTO TOP
document.querySelector('.go2Top').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    
    document.querySelector('.go2Top').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.go2Top').removeAttribute('style');
    }, 300)
});

// HOME

setInterval(() => {
    document.querySelector('.intro_tagline span.age').textContent = getMyAge(2004);
}, 1000);

// END OF HOME

// HEADER

document.querySelector('header').addEventListener('click', function(e) {
    // NAVBAR HP
    if(e.target.classList.contains('nav-hp')) {
        e.target.classList.toggle('nav-hp-active');
    }
});

// END OF HEADER