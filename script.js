// gif
const imgData = {
    1: 'https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif',
    2: 'https://media.tenor.com/s4ijU4nUxEUAAAAj/peach-goma.gif',
    3: 'https://media.tenor.com/AQ8I3RASlLcAAAAj/mochi-love-you.gif',
    4: 'https://media.tenor.com/OYyi9RiocJMAAAAj/cute.gif',
    5: 'https://media.tenor.com/kWlwZ9Hy6TAAAAAj/peach-goma-goma.gif',
    6: 'https://media.tenor.com/S9DsS00RdGkAAAAj/peach-goma.gif',
    7: 'https://media.tenor.com/PxdfxnHoxAAAAAAj/peach-goma.gif',
    8: 'https://media.tenor.com/dBuCk1xnXj8AAAAj/peach-and-goma-love-lift-up.gif',
    9: 'https://media.tenor.com/A6cT9DU8u6EAAAAj/peach-and-goma-goma.gif',
    10: 'https://media.tenor.com/s0UUW0sKVFoAAAAj/tkthao219-peach.gif',
    11: 'https://media.tenor.com/SiqVtvrB0PwAAAAj/mochi-cat.gif',
    12: 'https://media.tenor.com/bn2-TutT5kIAAAAj/peach-goma-spin.gif',
    13: 'https://media.tenor.com/Bju_BD_V71cAAAAj/mochi-peach.gif',
    14: 'https://media.tenor.com/pqx__VdGqfYAAAAj/yelynn-yelynn-hun-hun.gif',
    15: 'https://media.tenor.com/Esi-teXJmyUAAAAj/laphie.gif',
    16: 'https://media.tenor.com/xiudsmyTjAAAAAAj/tkthao219-peach.gif',
    17: 'https://media.tenor.com/IHTj_lZgxMMAAAAj/peach-and-goma-peach-cat.gif',
    18: 'https://media.tenor.com/1dlc3t638nUAAAAj/tkthao219-peach.gif',
    19: 'https://media.tenor.com/ydlLIEPYiyIAAAAj/peach-goma-love.gif',
    20: 'https://media.tenor.com/ONx_IN1MwtEAAAAj/mochi.gif',
    21: 'https://media.tenor.com/ieGsbU8n9J4AAAAj/peach-goma-peach-and-goma.gif',
    22: 'https://media.tenor.com/r46xx12x1gMAAAAj/peach-goma-love-head-pat.gif',
    23: 'https://media.tenor.com/t1IetEb5Bh0AAAAj/mine.gif',
    24: 'https://media.tenor.com/9Y-eDAjvU1sAAAAj/love-you.gif',
    25: 'https://media.tenor.com/8Lmtj1XdD20AAAAj/peach-goma.gif',
    26: 'https://media.tenor.com/7EKMYRWPcBkAAAAj/peach-goma.gif',
    27: 'https://media.tenor.com/28CE0PKDnHsAAAAj/laphie.gif',
    28: 'https://media.tenor.com/VDMk4K-ZC5kAAAAj/mochipeachcat-mochi-cat.gif',
    29: 'https://media.tenor.com/W2DS2FXWRKIAAAAj/goma-peach.gif',
    30: 'https://media.tenor.com/JhVlbsQoCboAAAAj/cute-dancing.gif',
    31: 'https://media.tenor.com/hwOfjVqL7e4AAAAj/peach-goma.gif',
    32: 'https://media.tenor.com/yYMBG6rBUh4AAAAj/mochi-mochi-peach-cat-gif.gif',
    33: 'https://media.tenor.com/IviqlJKGm1AAAAAj/peach-and-goma-peach-goma.gif',
    34: 'https://media.tenor.com/EKG5LEC54YEAAAAj/tkthao219-peach.gif',
    35: 'https://media.tenor.com/wa9joT3KeXUAAAAj/peach-and-goma-peach-goma.gif',
    36: 'https://media.tenor.com/YDns1kCTW5sAAAAj/peahc-and-goma-hug.gif',
    37: 'https://media.tenor.com/PzbxypI4VSAAAAAj/cat.gif',
    38: 'https://media.tenor.com/mfmIXiRnJOkAAAAj/peach-and-goma-peach-goma.gif',
    39: 'https://media.tenor.com/KTx1WW-lmfUAAAAj/peach-and-goma-peach-goma.gif',
    40: 'https://media.tenor.com/4hgpytd5UAYAAAAj/peach-goma-waving.gif',
    41: 'https://media.tenor.com/eMd6i40gETcAAAAj/peach-cat-sad-peach-cry.gif',
    42: 'https://media.tenor.com/BEBopBnhjVEAAAAj/peach-and-goma-peach-goma.gif',
    43: 'https://media.tenor.com/cVpgryPSNwUAAAAj/peach-goma.gif',
    44: 'https://media.tenor.com/EjH1sk7bSv4AAAAj/peach-goma-hearts-bucket.gif',
    45: 'https://media.tenor.com/L0pNsP12XHYAAAAj/khofar-me-and-melissa.gif'
}

const selectGif = document.querySelector('#selectGif');
const cover = document.querySelector('#cover');
const textArea = document.querySelector('textarea');

if (!tong) {
    const loader = document.querySelector('.loader');
    const decrement = document.querySelector('#decrement');
    const increment = document.querySelector('#increment');

    const maxImage = Object.keys(imgData).length;
    decrement.addEventListener('click', () => {
        if (selectGif.value <= 1) selectGif.value = maxImage;
        else selectGif.value--;
        cover.src = imgData[selectGif.value];

        cover.style.display = 'none';
        loader.style.display = 'inline';
    });
    increment.addEventListener('click', () => {
        if (selectGif.value >= maxImage) selectGif.value = 1;
        else selectGif.value++;
        cover.src = imgData[selectGif.value];

        cover.style.display = 'none';
        loader.style.display = 'inline';
    });

    cover.addEventListener('load', () => {
        cover.style.display = 'inline';
        loader.style.display = 'none';
    });

    const myForm = document.querySelector('#myForm');
    myForm.addEventListener('submit', e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData);
        const formArray = Object.values(formObj).map(data => data.replaceAll(',', '-'));
        const formTxt = formArray.join(',');

        const compressed = LZString.compressToBase64(formTxt);

        const action = e.submitter.name;
        if (action == 'open') {
            window.open('?tell=' + compressed, '_blank').focus();
        } else if (action == 'copy') {
            const copy = document.querySelector('input[name=copy]');
            const { origin, pathname } = new URL(window.location.href);
            navigator.clipboard.writeText(origin + pathname + '?tell=' + compressed);
            copy.value = 'Copied';
            setTimeout(() => {
                copy.value = 'Get link';
            }, 500);
        } else {
            console.error('Not action!');
        }
    });
} else {
    const decompressed = LZString.decompressFromBase64(tong);
    if (decompressed) {
        const message = decompressed.split(',');
        textArea.value = message[1] || 'I love you';
        textArea.disabled = true;
        cover.src = imgData[message[0]];
    }
}

window.addEventListener('pageshow', e => {
    adjustTextarea();
    if (!tong) cover.src = imgData[selectGif.value];
});

textArea.addEventListener('input', adjustTextarea);
window.addEventListener('resize', adjustTextarea);

function adjustTextarea() {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
}