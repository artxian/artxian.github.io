window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    const eth = localStorage.getItem('eth');
});

// SINGUP
document.querySelector('header img.user-icon').addEventListener('click', function() {
    const login = localStorage.getItem('login');

    if(!login) {
        document.querySelector('.signup-modal').style.display = 'block';
    }
});


// CLOSE SIGNUP
window.addEventListener('click', function(event) {
    if(event.target.className == 'signup-modal' || event.target.className == 'signup-close') {
        document.querySelector('.signup-box').style.opacity = 0;
        setTimeout(function() {
            document.querySelector('.signup-box').style.opacity = '';
            document.querySelector('.signup-modal').style.display = ''; 
            document.querySelector('input#uname').value = '';
            document.querySelector('input#uname').classList.remove('msg-error');
            document.querySelector('.signup-box p.signup-error').style.display = '';
        }, 300)
    }
});
// CLOSE SIGNUP END

// LOGIN
document.querySelector('.signup-form button[type=submit]').addEventListener('click', function(event) {
    const uname = document.querySelector('input#uname').value;
    
    if(uname === '') return;
    if(uname.length > 23) {
        document.querySelector('.signup-box p.signup-error').style.display = 'block';
        document.querySelector('input#uname').classList.add('msg-error');
        return event.preventDefault();
    }
    
    document.querySelector('.signup-box').style.opacity = 0;
    setTimeout(function() {
        // LOCAL STORAGE
        localStorage.setItem('name', uname);
        localStorage.setItem('eth', Math.ceil(Math.random() * 999999) + 50);
        localStorage.setItem('login', 1);
        
        // SIGNUP
        document.querySelector('.signup-modal').removeAttribute('style');
        document.querySelector('.signup-box').removeAttribute('style');
        document.querySelector('p.signup-error').removeAttribute('style');
        document.querySelector('input#uname').classList.remove('msg-error');

        // HEADER
        document.querySelector('header h3.username').textContent = localStorage.getItem('name');
        document.querySelector('header h4.eth').textContent = localStorage.getItem('eth') + '.eth';
    }, 300);

    event.preventDefault();
});
// LOGIN END