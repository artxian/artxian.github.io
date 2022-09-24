const getMyAge = function (year) {
      let age = new Date().getFullYear() - year;
      return age;
}

const getHoursDay = function () {
      let hours = new Date().getHours();
      let day;

      if(hours >= 1 && hours <= 9) return day = "Good morning!";
      if(hours >= 10 && hours <= 17) return day = "Good afternoon!";
      if(hours >= 18 && hours <= 24) return day = "Good evening!";
}

// SUD
document.querySelector("div.sud-container").addEventListener("click", function() {
      this.remove()
      document.querySelector('body').classList.toggle('blur');
})

// ON WINDOW SCROLL
let lastScroll = 0;
window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const scrollAble = document.documentElement.scrollHeight - window.innerHeight;


      if (currentScroll <= lastScroll) {
            document.querySelector('header').classList.remove('scroll-down');

            document.querySelector('.go2Top').style.opacity = 0;
            setTimeout(() => {
                  document.querySelector('.go2Top').removeAttribute('style');
            }, 300);
      }

      if (currentScroll > lastScroll) {
            document.querySelector('header').classList.add('scroll-down');
      }

      if (currentScroll >= scrollAble) {
            document.querySelector('header').classList.remove('scroll-down');
            document.querySelector('.go2Top').style.display = 'block';
            setTimeout(() => {
                  document.querySelector('.go2Top').style.opacity = 100;
            }, 0);
      }

      if (window.pageYOffset < 10) document.querySelector('header').removeAttribute('style');
      
      if (window.pageYOffset >= 10) document.querySelector('header').style.boxShadow = '0 5px 40px rgba(0, 0, 0, 0.08)';

      

      lastScroll = currentScroll;
});

// ON WINDOW RESIZE
window.addEventListener('resize', () => {

      // NAV-MENU
      if (window.innerWidth > 768 && document.querySelector('.nav-hp').classList.contains('nav-hp-active')) {
            document.querySelector('.nav-hp').classList.toggle('nav-hp-active');
            document.querySelector('body').classList.toggle('blur');
            document.querySelector('.modal').classList.toggle('active');
            document.querySelector('div.nav-menu').classList.toggle('active');
      }
})

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
      if (e.target.classList.contains('nav-hp')) {
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
      document.querySelector('body').classList.toggle('blur');
});

// END OF ON WINDOW LOAD

// SECTION HERO
setInterval(() => {
      document.querySelector('.hero h3 div').innerText = getHoursDay();
}, 1000);

// END OF SECTION HERO