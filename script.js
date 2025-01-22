const urlParams = new URLSearchParams(window.location.search);
const tong = urlParams.get('tell')?.replaceAll(' ', '+');

const imgData = {
    1: 'https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif',
    2: 'https://media.tenor.com/v63_brUy45wAAAAi/peach-goma-love-peach-cat.gif',
    3: 'https://media.tenor.com/IHTj_lZgxMMAAAAj/peach-and-goma-peach-cat.gif',
    4: 'https://media.tenor.com/S9DsS00RdGkAAAAj/peach-goma.gif',
    5: 'https://media.tenor.com/9X_EXRhnImUAAAAj/love-ilu.gif',
    6: 'https://media.tenor.com/9Y-eDAjvU1sAAAAj/love-you.gif',
    7: 'https://media.tenor.com/PxdfxnHoxAAAAAAj/peach-goma.gif',
    8: 'https://media.tenor.com/dBuCk1xnXj8AAAAj/peach-and-goma-love-lift-up.gif',
    9: 'https://media.tenor.com/A6cT9DU8u6EAAAAj/peach-and-goma-goma.gif',
    10: 'https://media.tenor.com/s0UUW0sKVFoAAAAj/tkthao219-peach.gif',
    11: 'https://media.tenor.com/SiqVtvrB0PwAAAAj/mochi-cat.gif',
    12: 'https://media.tenor.com/MeZYpkc_q-oAAAAj/catkiss.gif',
    13: 'https://media.tenor.com/Bju_BD_V71cAAAAj/mochi-peach.gif',
    14: 'https://media.tenor.com/pqx__VdGqfYAAAAj/yelynn-yelynn-hun-hun.gif',
    15: 'https://media.tenor.com/Esi-teXJmyUAAAAj/laphie.gif',
    16: 'https://media.tenor.com/xiudsmyTjAAAAAAj/tkthao219-peach.gif',
    17: 'https://media.tenor.com/kWlwZ9Hy6TAAAAAj/peach-goma-goma.gif',
    18: 'https://media.tenor.com/1dlc3t638nUAAAAj/tkthao219-peach.gif',
    19: 'https://media.tenor.com/ydlLIEPYiyIAAAAj/peach-goma-love.gif',
    20: 'https://media.tenor.com/ONx_IN1MwtEAAAAj/mochi.gif',
    21: 'https://media.tenor.com/ieGsbU8n9J4AAAAj/peach-goma-peach-and-goma.gif',
    22: 'https://media.tenor.com/r46xx12x1gMAAAAj/peach-goma-love-head-pat.gif',
    23: 'https://media.tenor.com/t1IetEb5Bh0AAAAj/mine.gif',
    24: 'https://media.tenor.com/AQ8I3RASlLcAAAAj/mochi-love-you.gif',
    25: 'https://media.tenor.com/8Lmtj1XdD20AAAAj/peach-goma.gif',
    26: 'https://media.tenor.com/7EKMYRWPcBkAAAAj/peach-goma.gif',
    27: 'https://media.tenor.com/28CE0PKDnHsAAAAj/laphie.gif',
    28: 'https://media.tenor.com/VDMk4K-ZC5kAAAAj/mochipeachcat-mochi-cat.gif',
}


const selectGif = document.querySelector('#selectGif');
const cover = document.querySelector('#cover');

cover.src = imgData[selectGif.value];
selectGif.addEventListener('change', e => {
    const value = e.currentTarget?.value;
    cover.src = imgData[value];
});

const inputTxts = document.querySelectorAll('input[type=text]');

inputTxts.forEach((inputTxt, index) => {
    if (index === 0) return;
    inputTxt.disabled = true;
    inputTxt.style.display = 'none';

    inputTxt.addEventListener("animationend", () => {
        if (inputTxt.classList.contains('animate__bounceOut')) {
            inputTxt.disabled = true;
            inputTxt.style.display = 'none';
        }
    });
});


if (!tong) {
    const myForm = document.querySelector('#myForm');

    myForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        const formArray = Object.values(formObj).map(data => data.trim().replaceAll(',', '-'));
        const formTxt = formArray.join(',');

        let compressed = LZString.compressToBase64(formTxt);

        const action = e.submitter.name;
        if (action == 'open') {
            window.open('?tell=' + compressed, '_blank').focus();
        } else if (action == 'copy') {
            navigator.clipboard.writeText(window.location.href + '?tell=' + compressed);

            const formElement = e.target;
            const copyBtn = formElement.lastElementChild;
            copyBtn.value = 'copied';

            setTimeout(() => {
                copyBtn.value = 'copy link';
            }, 500);
        } else {
            console.error('Not action!');
        }
    });

    const plus = document.querySelector('#plus');
    const minus = document.querySelector('#minus');

    plus.addEventListener('click', async e => {
        for (let i = 0; i < inputTxts.length; i++) {
            if (inputTxts[i].style.display !== '') {
                inputTxts[i].style.display = '';
                inputTxts[i].disabled = false;
                inputTxts[i].classList.remove('animate__bounceOut');
                return;
            }
        }
    });

    minus.addEventListener('click', e => {
        for (let i = inputTxts.length - 1; i > 0; i--) {
            if (inputTxts[i].style.display === '') {
                inputTxts[i].classList.add('animate__bounceOut');
                return;
            }
        }
    });

} else {
    const actionClass = document.querySelectorAll('.action');
    actionClass.forEach(element => element.remove());

    const decompressed = LZString.decompressFromBase64(tong);
    if (decompressed) {
        const message = decompressed.split(',');

        for (let i = 0; i < message.length - 1; i++) {
            inputTxts[i].value = message[i].trim() || inputTxts[i].placeholder;
            inputTxts[i].disabled = true;
            inputTxts[i].style.display = '';
        }
        cover.src = imgData[message[message.length - 1]];
    }

}

