const slideshowsProjects = {
    1: {
        title: "My Journey",
        slug: "my_journey",
        thumbnail: "https://i.imgur.com/fINt0h8.png",
        iframeSrc: "https://docs.google.com/presentation/d/1VBVok0t7ldnVEjWNeTI_LhpW1itW85IfBMoydv5mAdY/embed?start=false&loop=false&delayms=3000"
    },
    2: {
        title: "CWEM",
        slug: "cwem",
        thumbnail: "https://i.imgur.com/ZKy96ts.png",
        iframeSrc: "https://docs.google.com/presentation/d/1bTUlQlKTaOQhnb1TO9JAZFt5LBOrAv20PRcgaSZEW94/embed?start=false&loop=false&delayms=3000"
    },
    3: {
        title: "Datamigrato",
        slug: "datamigrato",
        thumbnail: "https://i.imgur.com/DNTfwcY.png",
        iframeSrc: "https://docs.google.com/presentation/d/1vEOZ5ihHrLx99rIIbu46UuKc7FOAkMhS3DlzECoDIkQ/embed?start=false&loop=false&delayms=3000"
    },
    4: {
        title: "Interview Ready",
        slug: "interview_ready",
        thumbnail: "https://i.imgur.com/852GKEj.png",
        iframeSrc: "https://docs.google.com/presentation/d/1fqAoQrxB96RO9t_8xdFXW2guJn_rx-aurvpUnPNrQPs/embed?start=false&loop=false&delayms=3000"
    }
};

const slideshowsBusinessReports = {
    5: {
        title: "Truck Delivery Report",
        slug: "truck_delivery_report",
        thumbnail: "https://i.imgur.com/Ack4rc9.png",
        iframeSrc: "https://docs.google.com/presentation/d/1xIuSAjDo6AU5qGjhWt2uXhb1WjfbdN7xdqYGr-hpdjw/embed?start=false&loop=false&delayms=3000"
    }
};

function getSlideshowBySlug(slug) {
    // Search in slideshowsProjects
    for (let id in slideshowsProjects) {
        if (slideshowsProjects[id].slug === slug) {
            return { slideshow: slideshowsProjects[id], section: 'projects', id: id };
        }
    }
    // Search in slideshowsBusinessReports
    for (let id in slideshowsBusinessReports) {
        if (slideshowsBusinessReports[id].slug === slug) {
            return { slideshow: slideshowsBusinessReports[id], section: 'business', id: id };
        }
    }
    // Not found
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const gridProjects = document.getElementById('grid-projects');
    const gridBusinessReports = document.getElementById('grid-business-reports');

    // Function to create a thumbnail element
    function createThumbnail(id, slideshow, section) {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.setAttribute('onclick', `openSlideshow(${id}, '${section}')`);
        thumbnail.setAttribute('tabindex', '0'); // Make it focusable for accessibility

        // Image Element
        const img = document.createElement('img');
        img.src = slideshow.thumbnail;
        img.alt = `${slideshow.title} Thumbnail`;
        thumbnail.appendChild(img);

        // Title Element
        const title = document.createElement('div');
        title.classList.add('thumbnail-title');
        title.textContent = slideshow.title;
        thumbnail.appendChild(title);

        // Add keyboard accessibility
        thumbnail.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                openSlideshow(id, section);
            }
        });

        return thumbnail;
    }

    // Generate "Myself and Projects" thumbnails
    Object.keys(slideshowsProjects).forEach((id) => {
        const slideshow = slideshowsProjects[id];
        const thumbnail = createThumbnail(id, slideshow, 'projects');
        gridProjects.appendChild(thumbnail);
    });

    // Generate "Business Reports" thumbnails
    Object.keys(slideshowsBusinessReports).forEach((id) => {
        const slideshow = slideshowsBusinessReports[id];
        const thumbnail = createThumbnail(id, slideshow, 'business');
        gridBusinessReports.appendChild(thumbnail);
    });

    // Check for slide in URL path or query parameters
    let slideName = '';
    const path = window.location.pathname;
    const pathSegment = path.substring(1);

    if (pathSegment.includes('=')) {
        const [key, value] = pathSegment.split('=');
        if (key === 'slide') {
            slideName = value;
        }
    } else if (pathSegment) {
        slideName = pathSegment;
    } else {
        // Check query parameters
        const urlParams = new URLSearchParams(window.location.search);
        slideName = urlParams.get('slide');
    }

    if (slideName) {
        const result = getSlideshowBySlug(slideName);
        if (result) {
            openSlideshow(result.id, result.section);
        } else {
            console.error('Slideshow not found for slug:', slideName);
            // Optionally, redirect to main page or show an error message
        }
    }
});

function openSlideshow(id, section) {
    let slideshow;
    if (section === 'projects') {
        slideshow = slideshowsProjects[id];
    } else if (section === 'business') {
        slideshow = slideshowsBusinessReports[id];
    }

    if (!slideshow) {
        console.error('Slideshow not found for the given ID and section.');
        return;
    }

    // Update the URL without reloading the page
    if (history.pushState) {
        const newUrl = `/slide=${slideshow.slug}`;
        history.pushState(null, null, newUrl);
    }

    const slideshowContainer = document.getElementById('slideshow-container');
    const slideshowContent = document.getElementById('slideshow-content');

    // Clear previous content
    slideshowContent.innerHTML = '';

    // Create iframe with smooth loading animation
    const iframeWrapper = document.createElement('div');
    iframeWrapper.classList.add('iframe-wrapper');

    const iframe = document.createElement('iframe');
    iframe.src = slideshow.iframeSrc;
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy"; // Optimize loading
    iframeWrapper.appendChild(iframe);

    slideshowContent.appendChild(iframeWrapper);

    // Show the slideshow container with animation
    slideshowContainer.classList.add('active');
}

function closeSlideshow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    const slideshowContent = document.getElementById('slideshow-content');

    slideshowContainer.classList.remove('active');
    slideshowContent.innerHTML = '';

    // Restore the original URL
    if (history.pushState) {
        history.pushState(null, null, '/');
    }
}

document.addEventListener('keydown', (e) => {
    if (document.getElementById('slideshow-container').classList.contains('active')) {
        if (e.key === 'Escape') {
            closeSlideshow();
        }
    }
});
