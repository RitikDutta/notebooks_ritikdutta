// --- Data for Notebooks ---
// Machine Learning Notebooks
const notebooksML = {
  1: {
    title: "Business Research Truck Delivery",
    slug: "EDA and Actual business case study",
    thumbnail: "media/Business_Research_Truck_Delivery.png",
    gist: "https://gist.github.com/RitikDutta/79fff6ae19d74c2d8258403af7b282b4.js",
    details:
      "<strong>Task:</strong> Business Case Study<br><strong>Example:</strong>Custom Mathematical functions, EDA, Machine Learning"
  },
  2: {
    title: "EDA and Classification predictive modelling",
    slug: "regression_notebook",
    gist: "https://gist.github.com/RitikDutta/3d3a0f6fb1e5232c2cc65d08c1565178.js",
    thumbnail: "media/eda_predictive.png",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> Binary Classification And EDA"
  },
  3: {
    title: "Car Price Prediction EDA",
    slug: "logistic regression1",
    thumbnail: "media/car_eda.png",
    gist: "https://gist.github.com/RitikDutta/333512e9e5dbef7ae44bb0e22528f5da.js",
    details:
      "<strong>Task:</strong> Regression<br><strong>Example:</strong> EDA for car price"
  },
  4: {
    title: "Employee Salary Prediction",
    slug: "logistic regression2",
    thumbnail: "media/employee_salary.png",
    gist: "https://gist.github.com/RitikDutta/24c4095a6b39097789c7f2e06000c389.js",
    details:
      "<strong>Task:</strong> Logistic regression<br><strong>Example:</strong> simple Employee salary prediction"
  },  
  5: {
    title: "Multi Model Comparison",
    slug: "multi model",
    thumbnail: "media/multi_model_comparison.png",
    gist: "https://gist.github.com/RitikDutta/888582721bcbe4c8d247829b35e3703f.js",
    details:
      "<strong>Task:</strong> Regression<br><strong>Example:</strong> (Linear, Robust, Ridge, Lasso, ElasticNet, Polinomial, RF, SVM) Regression, SGD, ANN"
  },
  6: {
    title: "Insurence Charges",
    slug: "linear regression 2",
    thumbnail: "media/insurance_prediction.png",
    gist: "https://gist.github.com/RitikDutta/2e2b7f6ef57b40422f66f80f37350185.js",
    details:
      "<strong>Task:</strong> Linear Regression<br><strong>Example:</strong> linear regression on insurence cost"
  },
  7: {
    title: "Loan Approval Prediction",
    slug: "Classification",
    thumbnail: "media/loan_approval_prediction.png",
    gist: "https://gist.github.com/RitikDutta/b54338c05b17c589820449c40ff7724c.js",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> Logistic regression, Random Forest, XG-Boost"
  },
  8: {
    title: "MNIST Classification",
    slug: "MNIST-Classification",
    thumbnail: "media/mnist_classification.png",
    gist: "https://gist.github.com/RitikDutta/4207ddff5d66affa1951052a0c15c2b4.js",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> SGD Classifier, Random Forest, KNN"
  },
  9: {
    title: "Multi Model Classification",
    slug: "multi-model-Classification",
    thumbnail: "media/multi_model_classification.png",
    gist: "https://gist.github.com/RitikDutta/34ef9fb92e36f38cf35d8c65e51d5ecf.js",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> SGD, RF, KNN, ..."
  },
  10: {
    title: "Support Vector Machine",
    slug: "multi-model-Classification",
    thumbnail: "media/svm_classification.png",
    gist: "https://gist.github.com/RitikDutta/fd8b4d43aec5c2a439540a721b694412.js",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> Support vector machine Classification"
  },
  11: {
    title: "Bagging and pasting Voting Classifier",
    slug: "voting-Classification",
    thumbnail: "media/bagging_pasting_voting.png",
    gist: "https://gist.github.com/RitikDutta/288e099213e0c9c725002877c676e1fb.js",
    details:
      "<strong>Task:</strong> Classification<br><strong>Example:</strong> Voting Classifier"
  },
};

// LangGraph LangChain NLP Notebooks
const nlpNotebooks = {
  1: {
    title: "LangGraph",
    slug: "LangGraph",
    thumbnail: "media/langraph.png",
    gist: "https://gist.github.com/RitikDutta/02e7db7a7950437c40a897b5a62612b5.js",
    details:
      "<strong>Task:</strong> LangGraph<br><strong>Example:</strong> LangGraph, Agents, Threads, Databases"
  }
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
  Object.keys(nlpNotebooks).forEach((id) => {
    const notebook = nlpNotebooks[id];
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
  for (let id in nlpNotebooks) {
    if (nlpNotebooks[id].slug === slug) {
      return { notebook: nlpNotebooks[id], section: "business", id: id };
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
    notebook = nlpNotebooks[id];
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
