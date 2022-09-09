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

// NAVMENU

document.querySelector('body').addEventListener('click', function(e) {
    // NAVBAR HP
    if(e.target.classList.contains('nav-hp')) {
        e.target.classList.toggle('nav-hp-active');
        document.querySelector('body').classList.toggle('blur');
        document.querySelector('.modal').classList.toggle('active');
        document.querySelector('div.nav-menu').classList.toggle('active');
    }
});

document.querySelector('.modal').addEventListener('click', function() {
    document.querySelector('.nav-hp').classList.toggle('nav-hp-active');
    document.querySelector('body').classList.toggle('blur');
    document.querySelector('.modal').classList.toggle('active');
    document.querySelector('div.nav-menu').classList.toggle('active');
});

const closeNavMenu = () => {
    document.querySelector('.nav-hp').classList.toggle('nav-hp-active');
    document.querySelector('body').classList.toggle('blur');
    document.querySelector('.modal').classList.toggle('active');
    document.querySelector('div.nav-menu').classList.toggle('active');
}

// END OF NAVMENU

// ON WINDOW LOAD

window.addEventListener('load', () => {
    
});

// END OF ON WINDOW LOAD