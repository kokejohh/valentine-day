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

window.addEventListener('pageshow', e => {
    adjustTextarea();
    if (!tong) cover.src = imgData[selectGif.value];
});

selectGif.addEventListener('change', e => {
    cover.src = imgData[selectGif.value];
});

const textArea = document.querySelector('textarea');

const urlParams = new URLSearchParams(window.location.search);
const tong = urlParams.get('tell')?.replaceAll(' ', '+');

if (!tong) {
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
    const home = document.querySelector('#home');
    home.remove();
} else {
    const actionClass = document.querySelectorAll('.action');
    actionClass.forEach(element => element.remove());

    const decompressed = LZString.decompressFromBase64(tong);
    if (decompressed) {
        const message = decompressed.split(',');
        textArea.value = message[1] || 'I love you';
        textArea.disabled = true;
        cover.src = imgData[message[0]];
    }

    const brs = document.querySelectorAll('br');
    brs.forEach(br => br.remove());
}

textArea.addEventListener('input', adjustTextarea);
window.addEventListener('resize', adjustTextarea);

function adjustTextarea() {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
}

//animation falling down
const duration = 15 * 1000,
  animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  const timeLeft = animationEnd - Date.now(),
    ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
     ticks: ticks,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2,
    },
    colors: ["e7cdce", "eaa8ac", "e1848c", "d05d65", "c00645"],
    shapes: ["heart"],
    gravity: randomInRange(0.4, 1),
    scalar: randomInRange(0.4, 3),
    drift: randomInRange(-0.4, 0.4),
  });

    requestAnimationFrame(frame);
})();