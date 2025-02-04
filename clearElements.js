const urlParams = new URLSearchParams(window.location.search);
const tong = urlParams.get('tell')?.replaceAll(' ', '+');

if (tong) {
    const actionClass = document.querySelectorAll('.action');
    actionClass.forEach(element => element.remove());

    const brs = document.querySelectorAll('br');
    brs.forEach(br => br.remove());
} else {
    const home = document.querySelector('#home');
    home.remove();
}