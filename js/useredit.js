window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    const eth = localStorage.getItem('eth');
    const icon = localStorage.getItem('icon');
    const login = localStorage.getItem('login');

    if(!login) return;

    // HEADER
    document.querySelector('header h3.username').textContent = name;
    document.querySelector('header h4.eth').textContent = eth + '.eth';

    if(icon) {
        document.querySelector('header img.user-icon').setAttribute('src', icon);
    }
});

// SINGUP
document.querySelector('header img.user-icon').addEventListener('click', function() {
    const login = localStorage.getItem('login');
    
    if(login) {
        document.querySelector('.userEdit-modal').style.display = 'block';
    }

});


// CLOSE SIGNUP
window.addEventListener('click', function(event) {
    if(event.target.className == 'userEdit-modal' || event.target.className == 'userEdit-close') {
        document.querySelector('.userEdit-box').style.opacity = 0;
        setTimeout(function() {
            document.querySelector('.userEdit-box').removeAttribute('style');
            document.querySelector('.userEdit-modal').removeAttribute('style');
            document.querySelector('.userEdit-modal p.success').removeAttribute('style');
            document.querySelector('.userEdit-modal p.failed').removeAttribute('style');
        }, 300)
    }
});
// CLOSE SIGNUP END

// APPLY
document.querySelector('.userEdit-form button[type=submit]').addEventListener('click', (event) => {
    event.preventDefault();
    input = document.querySelector('input#uimg').value;
    localStorage.setItem('icon', input);

    if(!input) {
        document.querySelector('.userEdit-modal p.success').removeAttribute('style');
        return document.querySelector('.userEdit-modal p.failed').style.display = 'block';
    }

    document.querySelector('.userEdit-modal p.failed').removeAttribute('style');
    document.querySelector('.userEdit-modal p.success').style.display = 'block';
    document.querySelector('header .user-icon').src = localStorage.getItem('icon');
}),


// LOGOUT
document.querySelector('.userEdit-form button.logout').addEventListener('click',(event) => {
    event.preventDefault();
    document.querySelector('.userEdit-box').style.opacity = 0;


    setTimeout(() => {
        // LOCAL STORAGE
        localStorage.removeItem('name');
        localStorage.removeItem('eth');
        localStorage.removeItem('icon');
        localStorage.removeItem('login')

        // USER EDIT
        document.querySelector('.userEdit-box').removeAttribute('style');
        document.querySelector('.userEdit-modal').removeAttribute('style');
        document.querySelector('.userEdit-modal p.success').removeAttribute('style');
        document.querySelector('.userEdit-modal p.failed').removeAttribute('style');

        // HEADER
        document.querySelector('header .username').textContent = '';
        document.querySelector('header .eth').textContent = '';
        document.querySelector('header .user-icon').src = '../images/user-photo.png';

    }, 300)
});
