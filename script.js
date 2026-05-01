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

// LLM Notebooks
const llmNotebooks = {
  1: {
    title: "fine tuining",
    slug: "llm-notebook",
    thumbnail: "media/notebook_logo.png",
    githubNotebookUrl:
      "https://github.com/RitikDutta/notebooks_ritikdutta/blob/master/notebooks/colab_5b_class_qlora_finetuning_.ipynb",
    details: "finetuned 1.5B model"
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
  const gridLLM = document.getElementById("grid-llm");

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

  // Insert LLM notebook thumbnails
  Object.keys(llmNotebooks).forEach((id) => {
    const notebook = llmNotebooks[id];
    const thumb = createNotebookThumbnail(id, notebook, "llm");
    gridLLM.appendChild(thumb);
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
  for (let id in llmNotebooks) {
    if (llmNotebooks[id].slug === slug) {
      return { notebook: llmNotebooks[id], section: "llm", id: id };
    }
  }
  return null;
}

// --- Open a notebook in the viewer ---
function openNotebook(id, section) {
  let notebook;
  if (section === "ml") {
    notebook = notebooksML[id];
  } else if (section === "business") {
    notebook = nlpNotebooks[id];
  } else if (section === "llm") {
    notebook = llmNotebooks[id];
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

  // Render the notebook source inside the iframe if available.
  if (notebook.githubNotebookUrl) {
    renderGithubNotebookInIframe(iframe, notebook.githubNotebookUrl);
  } else if (notebook.gist) {
    embedGistInIframe(iframe, notebook.gist);
  } else if (notebook.iframeSrc) {
    iframe.src = notebook.iframeSrc;
  }

  viewerContainer.classList.add("active");
}

// --- Function to render a GitHub-hosted notebook JSON inside an iframe ---
async function renderGithubNotebookInIframe(iframe, githubUrl) {
  const rawUrl = getRawGithubNotebookUrl(githubUrl);
  writeNotebookMessage(
    iframe,
    "Loading notebook...",
    "Fetching notebook JSON from GitHub.",
    githubUrl
  );

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const notebook = await response.json();
    writeNotebookHtml(iframe, notebook, githubUrl);
  } catch (error) {
    writeNotebookMessage(
      iframe,
      "Unable to load notebook",
      `${error.message}. Open the GitHub notebook link directly or check that the file path exists.`,
      githubUrl
    );
  }
}

function getRawGithubNotebookUrl(githubUrl) {
  const url = new URL(githubUrl);
  if (url.hostname !== "github.com") {
    return githubUrl;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  const blobIndex = parts.indexOf("blob");
  if (parts.length < 5 || blobIndex < 2) {
    return githubUrl;
  }

  const owner = parts[0];
  const repo = parts[1];
  const branch = parts[blobIndex + 1];
  const filePath = parts.slice(blobIndex + 2).join("/");

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
}

function writeNotebookHtml(iframe, notebook, sourceUrl) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const title = notebook.metadata?.kernelspec?.display_name || "GitHub Notebook";
  const cells = Array.isArray(notebook.cells)
    ? notebook.cells.map(renderNotebookCell).join("")
    : `<pre class="notebook-json">${escapeHtml(JSON.stringify(notebook, null, 2))}</pre>`;

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <base target="_blank">
        <style>
          body {
            margin: 0;
            padding: 28px;
            background: #f6f8fa;
            color: #24292f;
            font: 15px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .notebook-shell {
            max-width: 980px;
            margin: 0 auto;
          }
          .notebook-header {
            margin-bottom: 20px;
            padding-bottom: 14px;
            border-bottom: 1px solid #d8dee4;
          }
          .notebook-header h1 {
            margin: 0 0 8px;
            font-size: 1.35rem;
          }
          .notebook-header a {
            color: #0969da;
            text-decoration: none;
          }
          .notebook-cell {
            margin: 16px 0;
            padding: 16px;
            background: #fff;
            border: 1px solid #d8dee4;
            border-radius: 8px;
          }
          .notebook-cell.markdown {
            padding: 18px 22px;
          }
          .notebook-cell.code {
            border-left: 4px solid #ff9900;
          }
          pre {
            margin: 0;
            padding: 14px;
            overflow-x: auto;
            background: #f6f8fa;
            border-radius: 6px;
            font: 13px/1.55 ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
            white-space: pre-wrap;
          }
          .output {
            margin-top: 12px;
            border-top: 1px solid #d8dee4;
            padding-top: 12px;
          }
          .output img {
            max-width: 100%;
            height: auto;
          }
          p, ul, ol {
            margin: 0 0 12px;
          }
          h1, h2, h3, h4, h5, h6 {
            margin: 18px 0 10px;
            line-height: 1.25;
          }
          .notebook-json {
            background: #fff;
            border: 1px solid #d8dee4;
          }
        </style>
      </head>
      <body>
        <main class="notebook-shell">
          <header class="notebook-header">
            <h1>${escapeHtml(title)}</h1>
            <a href="${escapeHtml(sourceUrl)}" rel="noopener noreferrer">Open source on GitHub</a>
          </header>
          ${cells}
        </main>
      </body>
    </html>
  `);
  doc.close();
}

function renderNotebookCell(cell) {
  const source = notebookSourceToString(cell.source);
  if (cell.cell_type === "markdown") {
    return `<section class="notebook-cell markdown">${renderMarkdown(source)}</section>`;
  }

  if (cell.cell_type === "code") {
    const outputs = Array.isArray(cell.outputs) ? cell.outputs.map(renderNotebookOutput).join("") : "";
    return `
      <section class="notebook-cell code">
        <pre><code>${escapeHtml(source)}</code></pre>
        ${outputs ? `<div class="output">${outputs}</div>` : ""}
      </section>
    `;
  }

  return `<section class="notebook-cell"><pre>${escapeHtml(source)}</pre></section>`;
}

function renderNotebookOutput(output) {
  if (output.output_type === "stream") {
    return `<pre>${escapeHtml(notebookSourceToString(output.text))}</pre>`;
  }

  const data = output.data || {};
  if (data["image/png"]) {
    const imageData = Array.isArray(data["image/png"]) ? data["image/png"].join("") : data["image/png"];
    return `<img src="data:image/png;base64,${imageData}" alt="Notebook output">`;
  }

  if (data["text/plain"]) {
    return `<pre>${escapeHtml(notebookSourceToString(data["text/plain"]))}</pre>`;
  }

  if (output.traceback) {
    return `<pre>${escapeHtml(notebookSourceToString(output.traceback))}</pre>`;
  }

  return "";
}

function renderMarkdown(source) {
  return source
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) {
        return "";
      }

      const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        return `<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`;
      }

      if (/^[-*]\s+/m.test(trimmed)) {
        const items = trimmed
          .split("\n")
          .map((line) => line.replace(/^[-*]\s+/, "").trim())
          .filter(Boolean)
          .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${renderInlineMarkdown(trimmed).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

function renderInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
}

function notebookSourceToString(source) {
  if (Array.isArray(source)) {
    return source.join("");
  }

  return source || "";
}

function writeNotebookMessage(iframe, title, message, sourceUrl) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <base target="_blank">
        <style>
          body {
            margin: 0;
            display: grid;
            min-height: 100vh;
            place-items: center;
            background: #f6f8fa;
            color: #24292f;
            font: 15px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .message {
            width: min(520px, calc(100% - 40px));
            padding: 24px;
            background: #fff;
            border: 1px solid #d8dee4;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(27, 31, 36, 0.12);
          }
          h1 {
            margin: 0 0 10px;
            font-size: 1.2rem;
          }
          p {
            margin: 0 0 16px;
          }
          a {
            color: #0969da;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(message)}</p>
          <a href="${escapeHtml(sourceUrl)}" rel="noopener noreferrer">Open on GitHub</a>
        </div>
      </body>
    </html>
  `);
  doc.close();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
