const slideshowsProjects = {
    1: {
        title: "My Journey",
        thumbnail: "https://i.imgur.com/fINt0h8.png",
        iframeSrc: "https://docs.google.com/presentation/d/1VBVok0t7ldnVEjWNeTI_LhpW1itW85IfBMoydv5mAdY/embed?start=false&loop=false&delayms=3000"
    },
    2: {
        title: "CWEM",
        thumbnail: "https://i.imgur.com/ZKy96ts.png",
        iframeSrc: "https://docs.google.com/presentation/d/1bTUlQlKTaOQhnb1TO9JAZFt5LBOrAv20PRcgaSZEW94/embed?start=false&loop=false&delayms=3000"
    },
    3: {
        title: "Datamigrato",
        thumbnail: "https://i.imgur.com/DNTfwcY.png",
        iframeSrc: "https://docs.google.com/presentation/d/1vEOZ5ihHrLx99rIIbu46UuKc7FOAkMhS3DlzECoDIkQ/embed?start=false&loop=false&delayms=3000"
    },
    4: {
        title: "Interview Ready",
        thumbnail: "https://i.imgur.com/852GKEj.png",
        iframeSrc: "https://docs.google.com/presentation/d/1fqAoQrxB96RO9t_8xdFXW2guJn_rx-aurvpUnPNrQPs/embed?start=false&loop=false&delayms=3000"
    }
};

const slideshowsBusinessReports = {
    5: {
        title: "Truck Delivery Report",
        thumbnail: "https://i.imgur.com/Ack4rc9.png",
        iframeSrc: "https://docs.google.com/presentation/d/1xIuSAjDo6AU5qGjhWt2uXhb1WjfbdN7xdqYGr-hpdjw/embed?start=false&loop=false&delayms=3000"
    }
};

// New mapping from slide names to IDs and sections
const slideNameMap = {
    'my_journey': { id: 1, section: 'projects' },
    'cwem': { id: 2, section: 'projects' },
    'datamigrato': { id: 3, section: 'projects' },
    'interview_ready': { id: 4, section: 'projects' },
    'truck_delivery_report': { id: 5, section: 'business' }
};

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

    // Parse the URL path to determine if a slideshow should be opened
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(segment => segment !== '');

    if (pathSegments.length > 0) {
        const slideName = pathSegments[0]; // Assuming the slide name is the first segment
        const slideInfo = slideNameMap[slideName.toLowerCase()];

        if (slideInfo) {
            openSlideshow(slideInfo.id, slideInfo.section);
        } else {
            // Slide name not found; you may choose to handle this differently
            console.warn(`No slideshow found for path: ${slideName}`);
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
}

document.addEventListener('keydown', (e) => {
    if (document.getElementById('slideshow-container').classList.contains('active')) {
        if (e.key === 'Escape') {
            closeSlideshow();
        }
    }
});
