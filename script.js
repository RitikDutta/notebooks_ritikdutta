const slideshows = {
    1: {
        title: "First Collection",
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
        title: "Datamigrato",
        images: [
            "http://stuckincustoms.smugmug.com/Portfolio/i-KscS8CF/0/X3/Burning-Man-Day-1%20%281006%20of%201210%29-X3.jpg",
            "http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg",
            "http://stuckincustoms.smugmug.com/Portfolio/i-JSxf5Nm/0/X3/Burning-Man-Day-6%20%28202%20of%201606%29-X3.jpg"
        ]
    },
    3: {
        title: "CWEM",
        images: [
            "http://stuckincustoms.smugmug.com/Portfolio/i-KscS8CF/0/X3/Burning-Man-Day-1%20%281006%20of%201210%29-X3.jpg",
            "http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg",
            "http://stuckincustoms.smugmug.com/Portfolio/i-JSxf5Nm/0/X3/Burning-Man-Day-6%20%28202%20of%201606%29-X3.jpg"
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
            slide.classList.add('slide');
            if (index === 0) {
                slide.classList.add('active');
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
            slide.classList.toggle('active', i === index);
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
