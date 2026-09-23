/**
 * Jerry A. Nabasu - Master Portfolio Hub Logic
 */

const PROJECTS = [
  // 1. Live Interactive Engineering Laboratories (9)
  {
    id: "nexus-mcp-enterprise-gateway",
    title: "nexus-mcp-enterprise-gateway",
    category: "live enterprise",
    tag: "LIVE MCP STUDIO",
    tagClass: "tag-live",
    description: "Enterprise Model Context Protocol (MCP) JSON-RPC 2.0 security gateway with hierarchical RBAC, regex DLP PII scrubbing, SQL AST query inspection, and OpenTelemetry tracing.",
    tech: ["MCP JSON-RPC", "FastAPI", "Python", "RBAC", "DLP PII", "OpenTelemetry"],
    liveUrl: "https://jaynabasu.github.io/nexus-mcp-enterprise-gateway/",
    localUrl: "../nexus-mcp-enterprise-gateway/web/index.html",
    githubUrl: "https://github.com/JayNabasu/nexus-mcp-enterprise-gateway"
  },
  {
    id: "vector-hnsw-search-engine",
    title: "vector-hnsw-search-engine",
    category: "live systems",
    tag: "LIVE 2D/3D STUDIO",
    tagClass: "tag-live",
    description: "Bare-metal Hierarchical Navigable Small World (HNSW) vector search engine from first principles with SIMD distance metrics, SQ8 scalar quantization, and Reciprocal Rank Fusion.",
    tech: ["HNSW Graph", "SIMD", "SQ8 Quantization", "BM25", "Python", "HTML5 Canvas"],
    liveUrl: "https://jaynabasu.github.io/vector-hnsw-search-engine/",
    localUrl: "../vector-hnsw-search-engine/web/index.html",
    githubUrl: "https://github.com/JayNabasu/vector-hnsw-search-engine"
  },
  {
    id: "energy-digital-twin-spatial-telemetry",
    title: "energy-digital-twin-spatial-telemetry",
    category: "live enterprise",
    tag: "LIVE 3D DIGITAL TWIN",
    tagClass: "tag-live",
    description: "Interactive 3D Digital Twin and spatial telemetry monitoring platform of a deepwater subsea production manifold with real-time sensor overlays and LMS xAPI virtual reality walkthrough.",
    tech: ["Three.js", "WebGL", "FastAPI", "IoT/SCADA", "xAPI LMS", "Spatial VR"],
    liveUrl: "https://jaynabasu.github.io/energy-digital-twin-spatial-telemetry/",
    localUrl: "../energy-digital-twin-spatial-telemetry/frontend/index.html",
    githubUrl: "https://github.com/JayNabasu/energy-digital-twin-spatial-telemetry"
  },
  {
    id: "neuroevolution-swarm-sandbox",
    title: "neuroevolution-swarm-sandbox",
    category: "live systems",
    tag: "LIVE NEAT STUDIO",
    tagClass: "tag-live",
    description: "Real-time 3D autonomous swarm robotics simulation evolving topological neural networks through Neuroevolution of Augmenting Topologies (NEAT) across complex obstacle fields.",
    tech: ["NEAT Algorithm", "Three.js", "Genetic Networks", "WebGL", "Autonomous Swarms"],
    liveUrl: "https://jaynabasu.github.io/neuroevolution-swarm-sandbox/",
    localUrl: "../neuroevolution-swarm-sandbox/index.html",
    githubUrl: "https://github.com/JayNabasu/neuroevolution-swarm-sandbox"
  },
  {
    id: "prism-raymarcher-engine",
    title: "prism-raymarcher-engine",
    category: "live systems",
    tag: "LIVE SHADER STUDIO",
    tagClass: "tag-live",
    description: "Real-time mathematical 3D SDF raymarching engine rendered in pure WebGL fragment shaders with Phong illumination, soft shadows, ambient occlusion, and CSG primitives.",
    tech: ["WebGL", "GLSL Shaders", "Raymarching", "SDF Math", "Phong Lighting"],
    liveUrl: "https://jaynabasu.github.io/prism-raymarcher-engine/",
    localUrl: "../prism-raymarcher-engine/index.html",
    githubUrl: "https://github.com/JayNabasu/prism-raymarcher-engine"
  },
  {
    id: "flux-lang-compiler-vm",
    title: "flux-lang-compiler-vm",
    category: "live systems",
    tag: "LIVE COMPILER STUDIO",
    tagClass: "tag-live",
    description: "Domain-Specific Language (DSL) lexer, Pratt parser, AST generator, bytecode compiler, and stack-based Virtual Machine for enterprise financial pipelines and contract execution.",
    tech: ["Pratt Parser", "Bytecode VM", "Compiler", "AST", "Python", "JavaScript Runtime"],
    liveUrl: "https://jaynabasu.github.io/flux-lang-compiler-vm/",
    localUrl: "../flux-lang-compiler-vm/web/index.html",
    githubUrl: "https://github.com/JayNabasu/flux-lang-compiler-vm"
  },
  {
    id: "zk-merkle-credential-vault",
    title: "zk-merkle-credential-vault",
    category: "live systems",
    tag: "LIVE CRYPTO VAULT",
    tagClass: "tag-live",
    description: "Cryptographic identity vault implementing Sparse Merkle Trees (SMT), SHA-256 cryptographic proofs, and Zero-Knowledge membership verification without revealing private credentials.",
    tech: ["Zero-Knowledge", "Merkle Trees", "SHA-256", "Cryptography", "Python"],
    liveUrl: "https://jaynabasu.github.io/zk-merkle-credential-vault/",
    localUrl: "../zk-merkle-credential-vault/web/index.html",
    githubUrl: "https://github.com/JayNabasu/zk-merkle-credential-vault"
  },
  {
    id: "celestial-gravity-sandbox",
    title: "celestial-gravity-sandbox",
    category: "live systems",
    tag: "LIVE 3D N-BODY",
    tagClass: "tag-live",
    description: "Symplectic 4th-Order Runge-Kutta N-Body orbital mechanics simulation with procedural gravitational fields, relativistic time-warping, and spatial WebAudio synthesis.",
    tech: ["Runge-Kutta RK4", "Three.js", "WebAudio API", "Astrodynamics", "Physics"],
    liveUrl: "https://jaynabasu.github.io/celestial-gravity-sandbox/",
    localUrl: "../celestial-gravity-sandbox/index.html",
    githubUrl: "https://github.com/JayNabasu/celestial-gravity-sandbox"
  },
  {
    id: "motion-cv-posture-coach",
    title: "motion-cv-posture-coach",
    category: "live systems",
    tag: "LIVE EDGE AI COACH",
    tagClass: "tag-live",
    description: "Zero-latency, 100% private in-browser ergonomic posture monitor and workout rep counter tracking 33 skeletal landmarks via MediaPipe Edge AI and biofeedback audio alerts.",
    tech: ["MediaPipe", "Edge AI", "Computer Vision", "Pose Kinematics", "WebAudio"],
    liveUrl: "https://jaynabasu.github.io/motion-cv-posture-coach/",
    localUrl: "../motion-cv-posture-coach/index.html",
    githubUrl: "https://github.com/JayNabasu/motion-cv-posture-coach"
  },

  // 2. Enterprise & Energy Flagship Platforms
  {
    id: "enterprise-rpa-financial-reconciliation",
    title: "enterprise-rpa-financial-reconciliation",
    category: "enterprise",
    tag: "ENTERPRISE RPA",
    tagClass: "tag-enterprise",
    description: "Unattended enterprise RPA solution built with UiPath REFramework in C# for high-throughput invoice extraction, Nigerian VAT (7.5%) & WHT reconciliation, and SAP S/4HANA OData integration.",
    tech: ["UiPath REFramework", "C#", "SAP S/4HANA", ".NET 8.0", "Regex", "SDD"],
    githubUrl: "https://github.com/JayNabasu/enterprise-rpa-financial-reconciliation"
  },
  {
    id: "energy-edw-pipeline-analytics",
    title: "energy-edw-pipeline-analytics",
    category: "enterprise",
    tag: "ENERGY EDW & BI",
    tagClass: "tag-enterprise",
    description: "Upstream Enterprise Data Warehouse (EDW) and analytics platform modeling high-frequency production telemetry across offshore and onshore operating assets with automated joint venture cash-call reconciliation.",
    tech: ["Python", "PostgreSQL", "SQLAlchemy", "Star Schema", "Streamlit", "Docker"],
    githubUrl: "https://github.com/JayNabasu/energy-edw-pipeline-analytics"
  },
  {
    id: "agentic-doc-intel-local-llm",
    title: "agentic-doc-intel-local-llm",
    category: "enterprise",
    tag: "APPLIED LOCAL AI",
    tagClass: "tag-enterprise",
    description: "Private zero-egress document intelligence agent powered by localized open-weight LLMs (Qwen 2.5 and DeepSeek-R1) parsing engineering specifications into validated Pydantic schemas.",
    tech: ["Ollama", "Qwen 2.5", "DeepSeek-R1", "FastAPI", "Redis Cache", "Pydantic"],
    localUrl: "../agentic-doc-intel-local-llm/frontend/index.html",
    githubUrl: "https://github.com/JayNabasu/agentic-doc-intel-local-llm"
  },
  {
    id: "enterprise-attendance-portal",
    title: "enterprise-attendance-portal",
    category: "enterprise",
    tag: "SOVEREIGN BIOMETRICS",
    tagClass: "tag-enterprise",
    description: "Zero-hardware sovereign mobile attendance presence platform with in-browser 128D facial recognition, active liveness verification, and multi-site corporate GPS geofencing.",
    tech: ["FastAPI", "Cosine Similarity", "Active Liveness", "Haversine GPS", "WebSockets"],
    localUrl: "../enterprise-attendance-portal/frontend/index.html",
    githubUrl: "https://github.com/JayNabasu/enterprise-attendance-portal"
  },
  {
    id: "upstream-predictive-maintenance-ml",
    title: "upstream-predictive-maintenance-ml",
    category: "enterprise",
    tag: "PREDICTIVE ML",
    tagClass: "tag-enterprise",
    description: "Industrial IoT predictive maintenance platform for offshore Electrical Submersible Pumps (ESP) forecasting Remaining Useful Life (RUL) with multi-sensor telemetry.",
    tech: ["Random Forest", "Gradient Boosting", "RUL Estimation", "FastAPI", "scikit-learn"],
    githubUrl: "https://github.com/JayNabasu/upstream-predictive-maintenance-ml"
  },
  {
    id: "azure-enterprise-cloud-platform-iac",
    title: "azure-enterprise-cloud-platform-iac",
    category: "enterprise",
    tag: "AZURE CLOUD IAC",
    tagClass: "tag-enterprise",
    description: "Production-ready Infrastructure as Code (IaC) templates in Azure Bicep provisioning enterprise-grade Hub-Spoke virtual networks, App Services, Managed Redis, and Key Vault.",
    tech: ["Azure Bicep", "Hub-Spoke VNet", "Managed Redis", "Key Vault", "CI/CD Checkov"],
    githubUrl: "https://github.com/JayNabasu/azure-enterprise-cloud-platform-iac"
  },

  // 3. Deep-Tech & Systems Laboratories
  {
    id: "zenith-kv-engine",
    title: "zenith-kv-engine",
    category: "systems",
    tag: "DISTRIBUTED SYSTEMS",
    tagClass: "tag-systems",
    description: "Distributed in-memory key-value database engine featuring concurrent SkipList indexing, Write-Ahead Logging (WAL) durability, and Raft consensus quorum replication.",
    tech: ["SkipLists", "Write-Ahead Log", "Raft Consensus", "Python", "FastAPI"],
    localUrl: "../zenith-kv-engine/web/index.html",
    githubUrl: "https://github.com/JayNabasu/zenith-kv-engine"
  },
  {
    id: "crypto-arbitrage-scanner",
    title: "crypto-arbitrage-scanner",
    category: "systems",
    tag: "QUANTITATIVE HFT",
    tagClass: "tag-systems",
    description: "High-frequency triangular arbitrage engine converting cross-currency exchange orderbooks into directed negative-log weighted graphs to detect risk-free cycles in sub-millisecond latency.",
    tech: ["Bellman-Ford", "Negative Cycles", "Graph Theory", "FastAPI", "Python"],
    localUrl: "../crypto-arbitrage-scanner/web/index.html",
    githubUrl: "https://github.com/JayNabasu/crypto-arbitrage-scanner"
  },
  {
    id: "multi-agent-debate-arena",
    title: "multi-agent-debate-arena",
    category: "systems",
    tag: "MULTI-AGENT SWARM",
    tagClass: "tag-systems",
    description: "Deliberation arena pitting specialized AI personas (Architect, Skeptic, Ethicist, Pragmatist) against each other with dialectic cross-examination and consensus convergence.",
    tech: ["Multi-Agent AI", "FastAPI", "Dialectic Consensus", "Prompt Orchestration"],
    localUrl: "../multi-agent-debate-arena/frontend/index.html",
    githubUrl: "https://github.com/JayNabasu/multi-agent-debate-arena"
  },
  {
    id: "git-storyteller-ai",
    title: "git-storyteller-ai",
    category: "systems",
    tag: "DEVELOPER TOOLING",
    tagClass: "tag-systems",
    description: "CLI and storytelling engine turning any Git repository into a narrative architectural documentary, partitioning commits into dramatic development chapters.",
    tech: ["Python CLI", "Git Semantics", "Narrative Synthesis", "HTML Generation"],
    githubUrl: "https://github.com/JayNabasu/git-storyteller-ai"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupFilters();
});

function renderProjects(filterCategory) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  const filtered = PROJECTS.filter(p => {
    if (filterCategory === "all") return true;
    if (filterCategory === "live") return p.category.includes("live");
    if (filterCategory === "enterprise") return p.category.includes("enterprise");
    if (filterCategory === "systems") return p.category.includes("systems");
    return true;
  });

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";

    // Badges HTML
    const badgesHtml = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");

    // Action buttons
    let actionButtons = "";
    if (p.liveUrl) {
      actionButtons += `
        <a href="${p.liveUrl}" target="_blank" class="btn-card btn-card-live">
          <span>🌐 Launch Studio</span>
        </a>
      `;
    }
    if (p.localUrl) {
      actionButtons += `
        <a href="${p.localUrl}" class="btn-card btn-card-code" title="Launch standalone local file">
          <span>⚡ Local Run</span>
        </a>
      `;
    }
    actionButtons += `
      <a href="${p.githubUrl}" target="_blank" class="btn-card btn-card-code">
        <span>GitHub →</span>
      </a>
    `;

    card.innerHTML = `
      <div>
        <div class="card-header">
          <span class="card-tag ${p.tagClass}">${p.tag}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-badges">${badgesHtml}</div>
      </div>
      <div class="card-actions">${actionButtons}</div>
    `;

    container.appendChild(card);
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.category);
    });
  });
}
