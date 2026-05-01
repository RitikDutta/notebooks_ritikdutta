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
  iframe.style.padding = notebook.githubNotebookUrl ? "0" : "2%";

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
  const notebookCells = Array.isArray(notebook.cells) ? notebook.cells : [];
  const title = getNotebookDisplayName(sourceUrl);
  const kernel =
    notebook.metadata?.kernelspec?.display_name ||
    notebook.metadata?.language_info?.name ||
    "Notebook";
  const codeCellCount = notebookCells.filter((cell) => cell.cell_type === "code").length;
  const markdownCellCount = notebookCells.filter((cell) => cell.cell_type === "markdown").length;
  const cells = notebookCells.length
    ? notebookCells.map(renderNotebookCell).join("")
    : `<pre class="notebook-json">${escapeHtml(JSON.stringify(notebook, null, 2))}</pre>`;

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <base target="_blank">
        <style>
          :root {
            color-scheme: light;
            --accent: #f97316;
            --accent-soft: #fff4e8;
            --blue: #2563eb;
            --green: #0f766e;
            --ink: #111827;
            --muted: #6b7280;
            --line: #d8dee8;
            --paper: #ffffff;
            --canvas: #eef2f7;
            --code-bg: #f8fafc;
            --code-ink: #1f2937;
            --output-bg: #111827;
            --output-panel: #0f172a;
            --output-line: #334155;
            --output-ink: #e5e7eb;
          }
          * {
            box-sizing: border-box;
          }
          html {
            background: var(--canvas);
          }
          body {
            margin: 0;
            background:
              linear-gradient(180deg, #f9fbff 0%, var(--canvas) 240px, #f6f8fb 100%);
            color: var(--ink);
            font: 15px/1.65 Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .notebook-topbar {
            position: sticky;
            top: 0;
            z-index: 10;
            background: rgba(255, 255, 255, 0.94);
            border-bottom: 1px solid var(--line);
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
            backdrop-filter: blur(12px);
          }
          .topbar-inner {
            max-width: 1120px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            gap: 18px;
            align-items: center;
            justify-content: space-between;
          }
          .notebook-shell {
            max-width: 1120px;
            margin: 0 auto;
            padding: 28px 24px 56px;
          }
          .notebook-heading {
            min-width: 0;
          }
          .eyebrow {
            margin: 0 0 4px;
            color: var(--accent);
            font-size: 0.74rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .notebook-heading h1 {
            margin: 0;
            color: var(--ink);
            font-size: clamp(1.15rem, 2vw, 1.55rem);
            line-height: 1.2;
            letter-spacing: 0;
          }
          .meta-row {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .meta-pill {
            display: inline-flex;
            align-items: center;
            min-height: 28px;
            padding: 4px 10px;
            border: 1px solid #e5e7eb;
            border-radius: 999px;
            background: #f9fafb;
            color: #4b5563;
            font-size: 0.78rem;
            font-weight: 600;
            white-space: nowrap;
          }
          .github-link {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            min-height: 36px;
            padding: 0 12px;
            border: 1px solid #cfd7e6;
            border-radius: 8px;
            background: var(--paper);
            color: var(--blue);
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
          }
          .notebook-cell {
            display: grid;
            grid-template-columns: 76px minmax(0, 1fr);
            gap: 12px;
            margin: 0 0 18px;
          }
          .cell-label {
            padding-top: 14px;
            color: #7c8798;
            font: 600 0.78rem/1.2 ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
            text-align: right;
            user-select: none;
          }
          .cell-card {
            min-width: 0;
            overflow: hidden;
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: 8px;
            box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
          }
          .markdown-cell .cell-card {
            padding: 20px 24px;
          }
          .code-cell .cell-card {
            border-top: 3px solid var(--accent);
          }
          .cell-toolbar {
            min-height: 36px;
            padding: 8px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            background: #f8fafc;
            border-bottom: 1px solid var(--line);
            color: var(--muted);
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
          }
          .cell-kind {
            color: var(--green);
          }
          .exec-count {
            font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
            text-transform: none;
          }
          pre {
            margin: 0;
            overflow-x: auto;
            font: 13px/1.65 ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
            letter-spacing: 0;
          }
          .code-block {
            padding: 18px 20px;
            background: var(--code-bg);
            color: var(--code-ink);
            white-space: pre;
          }
          .code-block code {
            color: inherit;
            background: transparent;
            padding: 0;
          }
          .tok-comment {
            color: #64748b;
            font-style: italic;
          }
          .tok-string {
            color: #047857;
          }
          .tok-keyword {
            color: #2563eb;
            font-weight: 700;
          }
          .tok-number {
            color: #c2410c;
          }
          .output-stack {
            background: var(--output-bg);
            border-top: 1px solid var(--line);
          }
          .notebook-output {
            display: grid;
            grid-template-columns: 76px minmax(0, 1fr);
            gap: 12px;
            padding: 14px;
            border-top: 1px solid #263244;
          }
          .notebook-output:first-child {
            border-top: 0;
          }
          .output-label {
            color: #cbd5e1;
            font: 600 0.75rem/1.2 ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
            text-align: right;
          }
          .output-body {
            min-width: 0;
          }
          .output-body pre {
            padding: 14px 16px;
            border: 1px solid var(--output-line);
            border-radius: 8px;
            background: var(--output-panel);
            color: var(--output-ink);
            white-space: pre-wrap;
          }
          .notebook-json {
            padding: 14px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: #ffffff;
            color: #1f2937;
            white-space: pre-wrap;
          }
          .output-error .output-body pre {
            border-color: #f87171;
            background: #2f1218;
            color: #fecaca;
          }
          .media-output {
            display: inline-block;
            max-width: 100%;
            padding: 10px;
            border: 1px solid var(--output-line);
            border-radius: 8px;
            background: var(--output-panel);
          }
          .media-output img {
            max-width: 100%;
            height: auto;
            display: block;
          }
          .html-output {
            overflow-x: auto;
            padding: 12px;
            border: 1px solid var(--output-line);
            border-radius: 8px;
            background: var(--output-panel);
            color: var(--output-ink);
          }
          .html-output table,
          .markdown-cell table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.92rem;
          }
          .html-output th,
          .html-output td {
            padding: 9px 10px;
            border: 1px solid #334155;
            text-align: left;
            vertical-align: top;
          }
          .html-output th {
            background: #1f2937;
            color: #f8fafc;
            font-weight: 700;
          }
          .markdown-cell th,
          .markdown-cell td {
            padding: 9px 10px;
            border: 1px solid #e5e7eb;
            text-align: left;
            vertical-align: top;
          }
          .markdown-cell th {
            background: #f8fafc;
            color: #374151;
            font-weight: 700;
          }
          p, ul, ol {
            margin: 0 0 14px;
          }
          h1, h2, h3, h4, h5, h6 {
            margin: 20px 0 10px;
            line-height: 1.25;
            letter-spacing: 0;
          }
          h1:first-child,
          h2:first-child,
          h3:first-child,
          p:first-child,
          ul:first-child,
          ol:first-child {
            margin-top: 0;
          }
          p:last-child,
          ul:last-child,
          ol:last-child,
          pre:last-child {
            margin-bottom: 0;
          }
          .markdown-cell a,
          .html-output a {
            color: var(--blue);
            font-weight: 600;
            text-decoration: none;
          }
          .html-output a,
          .output-body .markdown-cell a {
            color: #93c5fd;
          }
          .output-body .markdown-cell {
            color: var(--output-ink);
          }
          .output-body .markdown-cell code {
            background: #1f2937;
            color: #fda4af;
          }
          .output-body .markdown-cell th,
          .output-body .markdown-cell td {
            border-color: #334155;
          }
          .output-body .markdown-cell th {
            background: #1f2937;
            color: #f8fafc;
          }
          .markdown-cell blockquote {
            margin: 14px 0;
            padding: 10px 14px;
            border-left: 4px solid var(--accent);
            background: var(--accent-soft);
            color: #4b5563;
          }
          .markdown-cell code {
            padding: 2px 5px;
            border-radius: 5px;
            background: #eef2f7;
            color: #be123c;
            font: 0.9em ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
          }
          .markdown-cell pre {
            margin: 14px 0;
            padding: 14px 16px;
            border-radius: 8px;
            background: var(--code-bg);
            color: var(--code-ink);
            white-space: pre;
          }
          .markdown-cell img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }
          .notebook-json {
            display: block;
          }
          @media (max-width: 760px) {
            .topbar-inner {
              align-items: flex-start;
              flex-direction: column;
              padding: 14px 16px;
            }
            .notebook-shell {
              padding: 18px 14px 36px;
            }
            .notebook-cell,
            .notebook-output {
              grid-template-columns: 1fr;
              gap: 8px;
            }
            .cell-label,
            .output-label {
              padding-top: 0;
              text-align: left;
            }
            .markdown-cell .cell-card {
              padding: 18px;
            }
            .code-block {
              padding: 16px;
            }
          }
        </style>
      </head>
      <body>
        <header class="notebook-topbar">
          <div class="topbar-inner">
            <div class="notebook-heading">
              <p class="eyebrow">GitHub notebook</p>
              <h1>${escapeHtml(title)}</h1>
              <div class="meta-row">
                <span class="meta-pill">${escapeHtml(kernel)}</span>
                <span class="meta-pill">${notebookCells.length} cells</span>
                <span class="meta-pill">${codeCellCount} code</span>
                <span class="meta-pill">${markdownCellCount} markdown</span>
              </div>
            </div>
            <a class="github-link" href="${escapeHtml(sourceUrl)}" rel="noopener noreferrer">Open on GitHub</a>
          </div>
        </header>
        <main class="notebook-shell">
          ${cells}
        </main>
      </body>
    </html>
  `);
  doc.close();
}

function renderNotebookCell(cell, index) {
  const source = notebookSourceToString(cell.source);
  if (cell.cell_type === "markdown") {
    return `
      <section class="notebook-cell markdown-cell">
        <div class="cell-label">Md</div>
        <article class="cell-card">${renderMarkdown(source)}</article>
      </section>
    `;
  }

  if (cell.cell_type === "code") {
    const executionCount = cell.execution_count ?? "";
    const outputs = Array.isArray(cell.outputs)
      ? cell.outputs.map((output) => renderNotebookOutput(output, executionCount)).join("")
      : "";
    return `
      <section class="notebook-cell code-cell">
        <div class="cell-label">In [${escapeHtml(executionCount || " ")}]</div>
        <article class="cell-card">
          <div class="cell-toolbar">
            <span class="cell-kind">Python</span>
            <span class="exec-count">cell ${index + 1}</span>
          </div>
          <pre class="code-block"><code>${highlightPython(source)}</code></pre>
          ${outputs ? `<div class="output-stack">${outputs}</div>` : ""}
        </article>
      </section>
    `;
  }

  return `
    <section class="notebook-cell raw-cell">
      <div class="cell-label">Raw</div>
      <article class="cell-card"><pre>${escapeHtml(source)}</pre></article>
    </section>
  `;
}

function renderNotebookOutput(output, executionCount) {
  const label = output.output_type === "stream"
    ? output.name || "stream"
    : `Out [${executionCount || " "}]`;

  if (output.output_type === "stream") {
    return renderOutputBlock(label, `<pre>${escapeHtml(notebookSourceToString(output.text))}</pre>`);
  }

  const data = output.data || {};
  if (data["text/html"]) {
    return renderOutputBlock(
      label,
      `<div class="html-output">${sanitizeNotebookHtml(notebookSourceToString(data["text/html"]))}</div>`
    );
  }

  if (data["image/png"]) {
    const imageData = notebookSourceToString(data["image/png"]);
    return renderOutputBlock(
      label,
      `<div class="media-output"><img src="data:image/png;base64,${imageData}" alt="Notebook output"></div>`
    );
  }

  if (data["image/jpeg"]) {
    const imageData = notebookSourceToString(data["image/jpeg"]);
    return renderOutputBlock(
      label,
      `<div class="media-output"><img src="data:image/jpeg;base64,${imageData}" alt="Notebook output"></div>`
    );
  }

  if (data["image/svg+xml"]) {
    const svgData = encodeURIComponent(notebookSourceToString(data["image/svg+xml"]));
    return renderOutputBlock(
      label,
      `<div class="media-output"><img src="data:image/svg+xml;charset=utf-8,${svgData}" alt="Notebook output"></div>`
    );
  }

  if (data["text/markdown"]) {
    return renderOutputBlock(label, `<div class="markdown-cell">${renderMarkdown(notebookSourceToString(data["text/markdown"]))}</div>`);
  }

  if (data["text/plain"]) {
    return renderOutputBlock(label, `<pre>${escapeHtml(notebookSourceToString(data["text/plain"]))}</pre>`);
  }

  if (data["application/json"]) {
    return renderOutputBlock(
      label,
      `<pre>${escapeHtml(JSON.stringify(data["application/json"], null, 2))}</pre>`
    );
  }

  if (output.traceback) {
    return renderOutputBlock(
      "error",
      `<pre>${escapeHtml(notebookSourceToString(output.traceback))}</pre>`,
      "output-error"
    );
  }

  return "";
}

function renderOutputBlock(label, content, extraClass = "") {
  return `
    <div class="notebook-output ${extraClass}">
      <div class="output-label">${escapeHtml(label)}</div>
      <div class="output-body">${content}</div>
    </div>
  `;
}

function renderMarkdown(source) {
  const normalized = source.replace(/\r\n/g, "\n");
  const fencePattern = /```([\w-]*)\n?([\s\S]*?)```/g;
  let html = "";
  let lastIndex = 0;
  let match;

  while ((match = fencePattern.exec(normalized)) !== null) {
    html += renderMarkdownChunk(normalized.slice(lastIndex, match.index));
    html += `<pre><code>${escapeHtml(match[2].trim())}</code></pre>`;
    lastIndex = match.index + match[0].length;
  }

  html += renderMarkdownChunk(normalized.slice(lastIndex));
  return html;
}

function renderMarkdownChunk(source) {
  return source
    .split(/\n{2,}/)
    .map(renderMarkdownBlock)
    .join("");
}

function renderMarkdownBlock(block) {
  const trimmed = block.trim();
  if (!trimmed) {
    return "";
  }

  const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    return `<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`;
  }

  if (isMarkdownTable(trimmed)) {
    return renderMarkdownTable(trimmed);
  }

  if (/^>\s+/m.test(trimmed)) {
    const quote = trimmed
      .split("\n")
      .map((line) => line.replace(/^>\s?/, ""))
      .join("\n");
    return `<blockquote>${renderMarkdown(quote)}</blockquote>`;
  }

  if (/^\d+\.\s+/m.test(trimmed)) {
    return renderList(trimmed, "ol", /^\d+\.\s+/);
  }

  if (/^[-*]\s+/m.test(trimmed)) {
    return renderList(trimmed, "ul", /^[-*]\s+/);
  }

  return `<p>${renderInlineMarkdown(trimmed).replace(/\n/g, "<br>")}</p>`;
}

function renderList(block, tagName, markerPattern) {
  const items = block
    .split("\n")
    .map((line) => line.replace(markerPattern, "").trim())
    .filter(Boolean)
    .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
    .join("");

  return `<${tagName}>${items}</${tagName}>`;
}

function isMarkdownTable(block) {
  const lines = block.split("\n").map((line) => line.trim());
  return (
    lines.length >= 2 &&
    lines[0].includes("|") &&
    /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(lines[1])
  );
}

function renderMarkdownTable(block) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  const headers = splitMarkdownTableRow(lines[0]);
  const rows = lines.slice(2).map(splitMarkdownTableRow);

  return `
    <table>
      <thead>
        <tr>${headers.map((cell) => `<th>${renderInlineMarkdown(cell)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows
          .map((row) => `<tr>${row.map((cell) => `<td>${renderInlineMarkdown(cell)}</td>`).join("")}</tr>`)
          .join("")}
      </tbody>
    </table>
  `;
}

function splitMarkdownTableRow(row) {
  return row
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInlineMarkdown(text) {
  const placeholders = [];
  const preserve = (html) => {
    const key = `@@INLINE_${placeholders.length}@@`;
    placeholders.push([key, html]);
    return key;
  };

  let rendered = escapeHtml(text)
    .replace(/`([^`]+)`/g, (_match, code) => preserve(`<code>${code}</code>`))
    .replace(/!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g, '<img src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  placeholders.forEach(([key, html]) => {
    rendered = rendered.replace(key, html);
  });

  return rendered;
}

function highlightPython(source) {
  const tokenPattern =
    /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*|\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield)\b|\b\d+(?:\.\d+)?\b)/g;
  let highlighted = "";
  let lastIndex = 0;
  let match;

  while ((match = tokenPattern.exec(source)) !== null) {
    const token = match[0];
    highlighted += escapeHtml(source.slice(lastIndex, match.index));
    highlighted += `<span class="${getPythonTokenClass(token)}">${escapeHtml(token)}</span>`;
    lastIndex = match.index + token.length;
  }

  highlighted += escapeHtml(source.slice(lastIndex));
  return highlighted;
}

function getPythonTokenClass(token) {
  if (token.startsWith("#")) {
    return "tok-comment";
  }

  if (token.startsWith("\"") || token.startsWith("'")) {
    return "tok-string";
  }

  if (/^\d/.test(token)) {
    return "tok-number";
  }

  return "tok-keyword";
}

function sanitizeNotebookHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html;

  template.content
    .querySelectorAll("script, iframe, object, embed, link, meta, style")
    .forEach((element) => element.remove());

  template.content.querySelectorAll("*").forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (
        name.startsWith("on") ||
        value.startsWith("javascript:") ||
        value.startsWith("data:text/html")
      ) {
        element.removeAttribute(attribute.name);
      }
    });
  });

  return template.innerHTML;
}

function getNotebookDisplayName(sourceUrl) {
  const fileName = decodeURIComponent(new URL(sourceUrl).pathname.split("/").pop() || "GitHub Notebook");
  const name = fileName
    .replace(/\.(ipynb|json)$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!name) {
    return "GitHub Notebook";
  }

  const specialWords = {
    llm: "LLM",
    qlora: "QLoRA",
    colab: "Colab"
  };

  return name
    .split(" ")
    .map((word) => specialWords[word.toLowerCase()] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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
