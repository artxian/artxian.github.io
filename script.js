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

        document.querySelector('button.go2Top').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('button.go2Top').removeAttribute('style');
        }, 300);
    }

    if(currentScroll > lastScroll) {
        document.querySelector('header').classList.add('scroll-down');
    }

    if(currentScroll >= scrollAble) {
        document.querySelector('header').classList.remove('scroll-down');
        document.querySelector('button.go2Top').style.display = 'block';
        setTimeout(() => {
            document.querySelector('button.go2Top').style.opacity = 100;
        }, 0);
    }
    
    lastScroll = currentScroll;
});

// GOTO TOP
document.querySelector('button.go2Top').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    
    document.querySelector('button.go2Top').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('button.go2Top').removeAttribute('style');
    }, 300)
});

// HOME

document.querySelector('.wmi1 span.age').textContent = getMyAge(2004);

// END OF HOME