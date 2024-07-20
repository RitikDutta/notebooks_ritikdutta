const slideshows = {
    1: {
        title: "My Journey",
        images: [
            "https://imgur.com/fINt0h8.png",
            "https://imgur.com/q2hLYh6.png",
            "https://imgur.com/CjofeFV.png",
            "https://imgur.com/Nck5Sjs.png",
            "https://imgur.com/MQSVLYl.png",
            "https://imgur.com/TyUa2ae.png",
            "https://imgur.com/8rYwCgs.png",
            "https://imgur.com/spKjGyp.png",
            "https://imgur.com/dl1XkV4.png",
            "https://imgur.com/i5vA1zb.png",
            "https://imgur.com/fgremCF.png",
            "https://imgur.com/Xs2bSfo.png",
            "https://imgur.com/257rDbn.png",
            "https://imgur.com/YswQBJs.png",
            "https://imgur.com/RFIy6ou.png",
            "https://imgur.com/zeNWr6y.png",
        ]
    },
    2: {
        title: "CWEM",
        images: [
            "https://imgur.com/ZKy96ts.png",
            "https://imgur.com/mTGhSMu.png",
            "https://imgur.com/NpjSDdb.png",
            "https://imgur.com/H2dvf5V.png",
            "https://imgur.com/1nwm2NX.png",
            "https://imgur.com/EraSS4Q.png",
            "https://imgur.com/fsAWe5U.png",
            "https://imgur.com/ARwFdOg.png",
            "https://imgur.com/wn3mRj0.png",
            "https://imgur.com/mlye1Bf.png",
            "https://imgur.com/pVat7fe.png",
            "https://imgur.com/N1WjPEM.png",
            "https://imgur.com/4qmKoqr.png",
            "https://imgur.com/fvIvRqu.png",
            "https://imgur.com/r8Keo2W.png",
            "https://imgur.com/sQdaiZy.png",
            "https://imgur.com/Va1ENBK.png",
            "https://imgur.com/VHlS1gi.png",
            "https://imgur.com/GMmIbWn.png",
            "https://imgur.com/YNQogr6.png",
            "https://imgur.com/c0Lt9tt.png"
        ]
    },
    3: {
        title: "Datamigrato",
        images: [
            "https://imgur.com/DNTfwcY.png",
            "https://imgur.com/sSjoNHA.png",
            "https://imgur.com/HU1Nb6U.png",
            "https://imgur.com/Otd9FYf.png",
            "https://imgur.com/f1j0D0t.png",
            "https://imgur.com/ToZZrZi.png",
            "https://imgur.com/Twi69WY.png",
            "https://imgur.com/RjQOryR.png",
            "https://imgur.com/AwEGTpS.png",
            "https://imgur.com/wpcOOIS.png",
            "https://imgur.com/tHc9Hyl.png",
            "https://imgur.com/xiaE5XX.png",
            "https://imgur.com/wZ5a7z5.png",
            "https://imgur.com/u2Acf93.png",
            "https://imgur.com/gR7zgeJ.png",
            "https://imgur.com/Dqgj7sZ.png",
            "https://imgur.com/Nb9YynR.png",
            "https://imgur.com/KgmKm5B.png",
        ]
    },
    4: {
        title: "Interview Ready",
        images: [
            "https://imgur.com/852GKEj",
            "https://imgur.com/1ouVHNs",
            "https://imgur.com/JBtag32",
            "https://imgur.com/zD4d91L",
            "https://imgur.com/iYcwxdQ",
            "https://imgur.com/kbhrpC1",
            "https://imgur.com/tOya4Nl",
            "https://imgur.com/QjcMskq",
            "https://imgur.com/Z9fPcq8",
            "https://imgur.com/1evtp0C",
            "https://imgur.com/MEAH6oq",
            "https://imgur.com/OgXOVOb",
            "https://imgur.com/0ueBJuM",
            "https://imgur.com/3QiZLEk",
            "https://imgur.com/q84eV6T",
            "https://imgur.com/KimoTql",
            "https://imgur.com/qAYusDa",
            "https://imgur.com/NGkm1C8",
            "https://imgur.com/RUBLZc2",
            "https://imgur.com/QTIpVZa",
            "https://imgur.com/TdNF69I",
            "https://imgur.com/C75md2q",
            "https://imgur.com/mm8Ykt2",
            "https://imgur.com/G5SjQET",
            "https://imgur.com/EmA9qHt",
        ]
    }

};


document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    Object.keys(slideshows).forEach((id) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.setAttribute('onclick', `openSlideshow(${id})`);
        const img = document.createElement('img');
        img.src = slideshows[id].images[0];
        img.alt = slideshows[id].title;
        thumbnail.appendChild(img);
        const p = document.createElement('p');
        p.textContent = slideshows[id].title;
        thumbnail.appendChild(p);
        grid.appendChild(thumbnail);
    });
});

let currentSlideIndex = 0;
let currentSlideshow = [];

function openSlideshow(id) {
    currentSlideshow = slideshows[id].images;
    currentSlideIndex = 0;
    const slideshowContainer = document.getElementById('slideshow-container');
    const slideshowContent = document.getElementById('slideshow-content');

    // Clear previous content
    slideshowContent.innerHTML = '';

    // Insert new slides
    currentSlideshow.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide', 'hidden');
        if (index === 0) {
            slide.classList.remove('hidden');
            slide.classList.add('pop-in');
        }
        const img = document.createElement('img');
        img.src = imageSrc;
        slide.appendChild(img);
        slideshowContent.appendChild(slide);
    });

    // Show the slideshow container
    slideshowContainer.style.display = 'flex';
}

function closeSlideshow() {
    document.getElementById('slideshow-container').style.display = 'none';
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('pop-in', 'fade');
        slide.classList.add('hidden');
        if (i === index) {
            slide.classList.remove('hidden');
            slide.classList.add('fade');
        }
    });
}

function changeSlide(step) {
    currentSlideIndex = (currentSlideIndex + step + currentSlideshow.length) % currentSlideshow.length;
    showSlide(currentSlideIndex);
}

document.addEventListener('keydown', (e) => {
    if (document.getElementById('slideshow-container').style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'Escape') {
            closeSlideshow();
        }
    }
});
