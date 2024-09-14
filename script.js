const slideshowsProjects = {
    1: {
        title: "My Journey",
        thumbnail: "https://imgur.com/fINt0h8.png",
        iframeSrc: "https://docs.google.com/presentation/d/1xIuSAjDo6AU5qGjhWt2uXhb1WjfbdN7xdqYGr-hpdjw/embed?start=false&loop=false&delayms=3000"
    },
    2: {
        title: "CWEM",
        thumbnail: "https://imgur.com/ZKy96ts.png",
        iframeSrc: "https://docs.google.com/presentation/d/1bTUlQlKTaOQhnb1TO9JAZFt5LBOrAv20PRcgaSZEW94/embed?start=false&loop=false&delayms=3000"
    },
    3: {
        title: "Datamigrato",
        thumbnail: "https://imgur.com/DNTfwcY.png",
        iframeSrc: "https://docs.google.com/presentation/d/1vEOZ5ihHrLx99rIIbu46UuKc7FOAkMhS3DlzECoDIkQ/embed?start=false&loop=false&delayms=3000"
    },
    4: {
        title: "Interview Ready",
        thumbnail: "https://imgur.com/852GKEj.png",
        iframeSrc: "https://docs.google.com/presentation/d/1fqAoQrxB96RO9t_8xdFXW2guJn_rx-aurvpUnPNrQPs/embed?start=false&loop=false&delayms=3000"
    }
};

const slideshowsBusinessReports = {
    5: {
        title: "Truck Delivery Report",
        thumbnail: "https://imgur.com/Ack4rc9.png",
        iframeSrc: "https://docs.google.com/presentation/d/1xIuSAjDo6AU5qGjhWt2uXhb1WjfbdN7xdqYGr-hpdjw/embed?start=false&loop=false&delayms=3000"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const gridProjects = document.getElementById('grid-projects');
    const gridBusinessReports = document.getElementById('grid-business-reports');

    // Generate Myself and Projects thumbnails
    Object.keys(slideshowsProjects).forEach((id) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.setAttribute('onclick', `openSlideshow(${id}, 'projects')`);
        const img = document.createElement('img');
        img.src = slideshowsProjects[id].thumbnail;
        img.alt = slideshowsProjects[id].title;
        thumbnail.appendChild(img);
        const p = document.createElement('p');
        p.textContent = slideshowsProjects[id].title;
        thumbnail.appendChild(p);
        gridProjects.appendChild(thumbnail);
    });

    // Generate Business Reports thumbnails
    Object.keys(slideshowsBusinessReports).forEach((id) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.setAttribute('onclick', `openSlideshow(${id}, 'business')`);
        const img = document.createElement('img');
        img.src = slideshowsBusinessReports[id].thumbnail;
        img.alt = slideshowsBusinessReports[id].title;
        thumbnail.appendChild(img);
        const p = document.createElement('p');
        p.textContent = slideshowsBusinessReports[id].title;
        thumbnail.appendChild(p);
        gridBusinessReports.appendChild(thumbnail);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const slideId = urlParams.get('slide');
    const section = urlParams.get('section');

    if (slideId && section) {
        openSlideshow(slideId, section);
    }
});

function openSlideshow(id, section) {
    let slideshow;
    if (section === 'projects') {
        slideshow = slideshowsProjects[id];
    } else if (section === 'business') {
        slideshow = slideshowsBusinessReports[id];
    }

    const slideshowContainer = document.getElementById('slideshow-container');
    const slideshowContent = document.getElementById('slideshow-content');

    // Clear previous content
    slideshowContent.innerHTML = '';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = slideshow.iframeSrc;
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    slideshowContent.appendChild(iframe);

    // Show the slideshow container
    slideshowContainer.style.display = 'flex';
}

function closeSlideshow() {
    document.getElementById('slideshow-container').style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (document.getElementById('slideshow-container').style.display === 'flex') {
        if (e.key === 'Escape') {
            closeSlideshow();
        }
    }
});
