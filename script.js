// --- Data for Notebooks ---
// Machine Learning Notebooks
const notebooksML = {
  1: {
    title: "EDA and Classification predictive modelling",
    slug: "regression_notebook",
    gist: "https://gist.github.com/RitikDutta/3d3a0f6fb1e5232c2cc65d08c1565178.js",
    thumbnail: "https://www.itarian.com/images/business-report.jpg",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> Binary Classification And EDA"
  },
  2: {
    title: "Car Price Prediction EDA",
    slug: "logistic regression1",
    thumbnail: "https://via.assets.so/img.jpg?w=300&h=200&tc=black&bg=#cecece&t=Classification",
    gist: "https://gist.github.com/RitikDutta/333512e9e5dbef7ae44bb0e22528f5da.js",
    details:
      "<strong>Task:</strong> Regression<br><strong>Example:</strong> EDA for car price"
  },
  3: {
    title: "Employee Salary Prediction",
    slug: "logistic regression2",
    thumbnail: "https://via.assets.so/img.jpg?w=300&h=200&tc=black&bg=#cecece&t=Gold Price",
    gist: "https://gist.github.com/RitikDutta/24c4095a6b39097789c7f2e06000c389.js",
    details:
      "<strong>Task:</strong> Logistic regression<br><strong>Example:</strong> simple Employee salary prediction"
  }
};

// Business Notebooks
const notebooksBusiness = {
  // 1: {
  //   title: "Business Analytics Notebook",
  //   slug: "business_analytics_notebook",
  //   thumbnail: "https://via.placeholder.com/300x200?text=Business+Analytics",
  //   gist: "https://gist.github.com/RitikDutta/your_business_gist.js",
  //   details:
  //     "<strong>Task:</strong> Data Analysis<br><strong>Example:</strong> Sales trends with pandas"
  // }
};

// --- Helper: Create a thumbnail element ---
function createNotebookThumbnail(id, notebook, section) {
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");
  thumbnail.style.position = "relative";
  thumbnail.setAttribute("tabindex", "0"); // for keyboard accessibility

  // When clicking the thumbnail, open the notebook.
  thumbnail.addEventListener("click", function (e) {
    openNotebook(id, section);
  });
  thumbnail.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      openNotebook(id, section);
    }
  });

  // Image element
  const img = document.createElement("img");
  img.src = notebook.thumbnail;
  img.alt = `${notebook.title} Thumbnail`;
  thumbnail.appendChild(img);

  // Title element
  const title = document.createElement("div");
  title.classList.add("thumbnail-title");
  title.textContent = notebook.title;
  thumbnail.appendChild(title);

  // Extra details panel (hidden by default, revealed on hover)
  const details = document.createElement("div");
  details.classList.add("details");
  details.innerHTML = notebook.details;
  thumbnail.appendChild(details);

  return thumbnail;
}

// --- Populate the grids when DOM is ready ---
document.addEventListener("DOMContentLoaded", () => {
  const gridML = document.getElementById("grid-ml");
  const gridBusiness = document.getElementById("grid-business");

  // Insert ML notebook thumbnails
  Object.keys(notebooksML).forEach((id) => {
    const notebook = notebooksML[id];
    const thumb = createNotebookThumbnail(id, notebook, "ml");
    gridML.appendChild(thumb);
  });

  // Insert Business notebook thumbnails
  Object.keys(notebooksBusiness).forEach((id) => {
    const notebook = notebooksBusiness[id];
    const thumb = createNotebookThumbnail(id, notebook, "business");
    gridBusiness.appendChild(thumb);
  });

  // Check URL hash for a notebook slug
  handleNotebookHash();
  window.addEventListener("hashchange", handleNotebookHash);
});

// --- Retrieve notebook by slug ---
function getNotebookBySlug(slug) {
  for (let id in notebooksML) {
    if (notebooksML[id].slug === slug) {
      return { notebook: notebooksML[id], section: "ml", id: id };
    }
  }
  for (let id in notebooksBusiness) {
    if (notebooksBusiness[id].slug === slug) {
      return { notebook: notebooksBusiness[id], section: "business", id: id };
    }
  }
  return null;
}

// --- Open a notebook in the viewer (embed the gist inside an iframe) ---
function openNotebook(id, section) {
  let notebook;
  if (section === "ml") {
    notebook = notebooksML[id];
  } else if (section === "business") {
    notebook = notebooksBusiness[id];
  }

  if (!notebook) {
    console.error("Notebook not found for the given ID and section.");
    return;
  }

  // Update the URL hash (without reloading)
  if (history.replaceState) {
    const newHash = `#notebook=${notebook.slug}`;
    history.replaceState(null, null, newHash);
  } else {
    window.location.hash = `notebook=${notebook.slug}`;
  }

  const viewerContainer = document.getElementById("notebook-viewer");
  const viewerContent = document.getElementById("viewer-content");

  // Clear previous content
  viewerContent.innerHTML = "";

  // Create an iframe element (using about:blank)
  const iframe = document.createElement("iframe");
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.padding = "2%";

  // Append the iframe to the viewer content
  viewerContent.appendChild(iframe);

  // Embed the gist inside the iframe if available
  if (notebook.gist) {
    embedGistInIframe(iframe, notebook.gist);
  } else if (notebook.iframeSrc) {
    iframe.src = notebook.iframeSrc;
  }

  viewerContainer.classList.add("active");
}

// --- Function to embed a GitHub Gist inside an iframe ---
function embedGistInIframe(iframe, gistUrl) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_parent">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          .gist {
            width: 100%;
          }
        </style>
      </head>
      <body>
        <script src="${gistUrl}"></script>
      </body>
    </html>
  `);
  doc.close();
}

// --- Close the notebook viewer ---
function closeNotebookViewer() {
  const viewerContainer = document.getElementById("notebook-viewer");
  const viewerContent = document.getElementById("viewer-content");

  viewerContainer.classList.remove("active");
  viewerContent.innerHTML = "";

  if (history.replaceState) {
    history.replaceState(null, null, " ");
  } else {
    window.location.hash = "";
  }
}

// --- Handle URL hash to open notebook if slug is present ---
function handleNotebookHash() {
  const hash = window.location.hash; // e.g. #notebook=regression_notebook
  if (hash.startsWith("#notebook=")) {
    const slug = hash.substring(10);
    if (slug) {
      const result = getNotebookBySlug(slug);
      if (result) {
        openNotebook(result.id, result.section);
      } else {
        console.error("Notebook not found for slug:", slug);
      }
    }
  }
}

// --- Close viewer on Escape key ---
document.addEventListener("keydown", (e) => {
  const viewerContainer = document.getElementById("notebook-viewer");
  if (viewerContainer.classList.contains("active") && e.key === "Escape") {
    closeNotebookViewer();
  }
});
