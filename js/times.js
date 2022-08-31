function addZero(i) {
    if(i < 10) {i = "0" + i}
    return i;
}

const getTimeEx = function() {
    const fDate = new Date();
    let fH = addZero(fDate.getHours());
    let fM = addZero(fDate.getMinutes());
    let fS = addZero(fDate.getSeconds());
    let fY = addZero(fDate.getFullYear());
    let time = `${fH}  :  ${fM}  :  ${fS}  :  ${fY}`;
    return time;
}

const getTimeHoursEx = function () {
    const hours = new Date().getHours();
    let hour;

    if(hours >= 0) hour = 'Morning';
    if(hours >= 10) hour = 'Afternoon';
    if(hours >= 15) hour = 'Evening';
    if(hours >= 18) hour = 'Night';

    return hour;
}

// BODY
document.getElementById('times').innerHTML = getTimeEx();
document.querySelector('.name-times').innerHTML = getTimeHoursEx();

setInterval(function() {
    document.getElementById('times').innerHTML = getTimeEx();
    document.querySelector('.name-times').innerHTML = getTimeHoursEx();
    
    if(new Date().getHours() == 12 && new Date().getMinutes() == 0 && new Date().getSeconds() == 0) alert('Selamat Siang Semunya!!');
    if(new Date().getHours() == 11 && new Date().getMinutes() == 10 && new Date().getSeconds() == 0) alert('Selamat Siang Semunya!!');
    if(new Date().getHours() == 18 && new Date().getMinutes() == 0 && new Date().getSeconds() == 0) alert('Selamat Malam Semunya!!');
}, 1000);

// Window

// KETIKA JAM DICLICK
document.getElementById('times').addEventListener('click', function () {
    let ucapan = 'Selamat Pagi';

    if(new Date().getHours() >= 10) ucapan = 'Selamat Siang';
    if(new Date().getHours() >= 15) ucapan = 'Selamat Sore';
    if(new Date().getHours() >= 18) ucapan = 'Selamat Malam';

    alert(ucapan)
});

// KETIKA TOMBOL DITEKAN
window.addEventListener('keypress', function (event) {
    let ucapan = 'Selamat Pagi';

    if(new Date().getHours() >= 10) ucapan = 'Selamat Siang';
    if(new Date().getHours() >= 15) ucapan = 'Selamat Sore';
    if(new Date().getHours() >= 18) ucapan = 'Selamat Malam';

    if(event.code === 'KeyW' && document.querySelector('.signupModal').style.display === '') {
       alert(ucapan)
    } 
});

let lastScroll2 = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= lastScroll2) {
        document.querySelector('.times-container').classList.remove('scroll-down');
    }

    if(currentScroll > lastScroll2) {
        document.querySelector('.times-container').classList.add('scroll-down');
    }
    
    lastScroll2 = currentScroll;
});