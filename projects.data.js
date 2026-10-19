/**
 * Mohamed Mamdouh Mohib - Portfolio Projects Database
 * Communication and Electronics Engineering Student
 * Specializing in Programming, Industrial Intelligence, and Cybersecurity
 * 
 * Feel free to update, add, or customize your projects below!
 */

const portfolioProjects = [
  {
    id: "industrial-vision-ai",
    title: "Industrial Vision AI - Surface Defect Inspector",
    tagline: "Automated real-time PCB inspection powered by Edge Deep Learning",
    category: "industrial-ai",
    categoryLabel: "Industrial Intelligence",
    badge: "Featured AI Project",
    liveUrl: "https://industrial-vision-ai.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/pcb-defect-vision-ai",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    description: "An automated industrial computer vision inspection platform engineered for electronic assembly lines. It detects micro-soldering bridges, component misalignments, and hairline substrate defects in under 15ms per frame with high-precision edge inference.",
    highlights: [
      "Sub-15ms edge inference with TensorRT and optimized YOLO architecture",
      "99.4% detection precision across multi-layer high-density PCBs",
      "Automated rejection actuation via industrial Modbus/GPIO triggers",
      "Interactive analytics dashboard showing yield rate and heatmaps"
    ],
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "TensorRT", "FastAPI", "Docker"]
  },
  {
    id: "cybershield-nids",
    title: "CyberShield - Industrial SCADA & OT Network Defense",
    tagline: "Deep packet inspection and anomaly detection for critical infrastructure",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    badge: "Security Defense",
    liveUrl: "https://cybershield-ot.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/scada-ot-nids",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description: "A specialized Network Intrusion Detection System (NIDS) designed for Operational Technology (OT) and SCADA environments. Monitors industrial fieldbus protocols (Modbus TCP, DNP3) to intercept unauthorized PLC register overwrites and anomalous command sequences.",
    highlights: [
      "Real-time packet capture and decoding of Modbus TCP & IEC-60870 traffic",
      "Unsupervised machine learning isolation forest for zero-day threat detection",
      "Zero-latency alerting with automated incident quarantine rules",
      "Comprehensive telemetry integration with Elasticsearch & Grafana"
    ],
    techStack: ["Python", "Scapy", "Wireshark", "Isolation Forest", "Modbus TCP", "Elasticsearch", "Grafana"]
  },
  {
    id: "smartfactory-telemetry",
    title: "SmartFactory - Industrial IoT Predictive Maintenance",
    tagline: "Sensor telemetry pipeline with machine remaining-useful-life forecasting",
    category: "industrial-ai",
    categoryLabel: "Industrial Intelligence",
    badge: "Industry 4.0",
    liveUrl: "https://smartfactory-iot.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/industrial-iot-telemetry",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "An end-to-end telemetry and monitoring system tracking vibration, current signature, and thermal acoustics across industrial rotating machinery. Utilizes recurrent neural networks (LSTM) to predict bearing degradation before physical breakdown occurs.",
    highlights: [
      "Microcontroller edge DAQ reading 3-axis accelerometer at 1kHz",
      "Predicts Remaining Useful Life (RUL) with 94.2% accuracy on benchmark run-to-failure data",
      "MQTT broker pipeline with sub-second dashboard visualization",
      "Automated emergency threshold triggers linked to WhatsApp & SMS alerts"
    ],
    techStack: ["C++", "ESP32", "FreeRTOS", "MQTT", "TimeScaleDB", "Node.js", "Chart.js"]
  },
  {
    id: "rf-spectra-sdr",
    title: "RF-Spectra - Software Defined Radio (SDR) Signal Suite",
    tagline: "Browser-based RF spectrum analyzer, waterfall, and signal demodulator",
    category: "electronics",
    categoryLabel: "Communication & Electronics",
    badge: "DSP & Comms",
    liveUrl: "https://rf-spectra-sdr.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/sdr-rf-analyzer",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "A digital signal processing (DSP) application for Software Defined Radio enthusiasts and telecom engineers. Interfaces with RTL-SDR and HackRF hardware to visualize real-time RF spectrum waterfalls and decode FM/AM/FSK digital telemetry directly in the browser.",
    highlights: [
      "Hardware-accelerated WebAssembly DSP core delivering 2.4 MSPS throughput",
      "Interactive 60 FPS Canvas waterfall display with customizable color palettes",
      "Software demodulation for Narrowband FM, Wideband FM, and AM broadcasts",
      "Constellation diagram analysis for digital modulation (QPSK / 16-QAM)"
    ],
    techStack: ["C++", "WebAssembly", "Web Audio API", "HTML5 Canvas", "RTL-SDR", "GNU Radio"]
  },
  {
    id: "sentinelvault-crypto",
    title: "SentinelVault - Zero-Knowledge Encrypted Security Vault",
    tagline: "Client-side cryptographic vault for engineering schematics and firmware binaries",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    badge: "Cryptography",
    liveUrl: "https://sentinelvault.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/sentinel-vault-crypto",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    description: "A security-first web application designed for engineering teams to protect confidential hardware firmware and schematics. All encryption occurs locally in the user's browser using authenticated AES-256-GCM before any packet touches the network.",
    highlights: [
      "Zero-knowledge architecture: Master keys and unencrypted data never leave client memory",
      "Argon2id memory-hard key derivation to withstand GPU brute-force attacks",
      "Integrated file integrity verification via SHA-256 cryptographic hashes",
      "One-click time-limited self-destructing download links"
    ],
    techStack: ["Web Crypto API", "TypeScript", "Node.js", "AES-256-GCM", "Argon2id", "Tailwind CSS"]
  },
  {
    id: "autopcb-optimizer",
    title: "AutoPCB - High-Speed Signal Integrity Trace Router",
    tagline: "Algorithmic routing assistant analyzing impedance and crosstalk for multi-layer PCBs",
    category: "electronics",
    categoryLabel: "Communication & Electronics",
    badge: "Hardware CAD",
    liveUrl: "https://autopcb-optimizer.demo.app",
    githubUrl: "https://github.com/mohamed-mamdouh/autopcb-router",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    description: "An optimization engine that reads KiCad PCB layouts and evaluates high-speed digital communication traces. Calculates characteristic impedance, parasitic capacitance, and warns engineers about differential pair skew and ground plane discontinuities.",
    highlights: [
      "Automated differential impedance matching calculator (microstrip & stripline)",
      "A* pathfinding with electromagnetic interference (EMI) clearance heuristics",
      "Direct bidirectional synchronization with KiCad PCB layout files (.kicad_pcb)",
      "Interactive WebGL 3D preview of PCB stackup and return path currents"
    ],
    techStack: ["Python", "KiCad API", "Three.js", "C++ Algorithms", "NumPy", "WebGL"]
  }
];

// Profile data for Mohamed Mamdouh Mohib
const profileData = {
  name: "Mohamed Mamdouh Mohib",
  role: "Communication & Electronics Engineering Student",
  specialties: ["Industrial Intelligence", "Cybersecurity", "Programming", "Embedded Systems"],
  bio: "Passionate Communication and Electronics Engineering student focused on the intersection of industrial intelligence, cybersecurity, and modern software programming. Driven by building intelligent systems, secure IoT telemetry architectures, and robust hardware-software bridges.",
  contact: {
    whatsappNumber: "+201098641398",
    whatsappClean: "201098641398",
    whatsappUrl: "https://wa.me/201098641398?text=Hello%20Mohamed,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
    instagramUrl: "https://www.instagram.com/muhammad_mamdou7?psln=MW44ZTdmd2xsOWNkeA%3D%3D&utm_source=qr",
    instagramHandle: "@muhammad_mamdou7",
    location: "Egypt",
    email: "mohamed.mamdouh.mohib@gmail.com"
  },
  stats: [
    { label: "Completed Projects", value: "12+" },
    { label: "Core Domains", value: "3" },
    { label: "Tech Stack Tools", value: "20+" },
    { label: "Code Commits", value: "450+" }
  ],
  skills: {
    industrialAI: [
      "Machine Vision (YOLO, OpenCV)",
      "Predictive Maintenance (LSTM, Time Series)",
      "TensorRT / ONNX Optimization",
      "Industrial IoT & SCADA Telemetry",
      "Edge AI Deployment (Jetson / Raspberry Pi)"
    ],
    cybersecurity: [
      "Network Protocol Security & NIDS",
      "Industrial Control Systems (OT/SCADA Defense)",
      "Applied Cryptography (AES, Argon2, RSA)",
      "Penetration Testing & Vulnerability Assessment",
      "Wireshark / Deep Packet Inspection"
    ],
    electronicsComms: [
      "Digital Signal Processing (DSP)",
      "Software Defined Radio (SDR)",
      "Microcontrollers (ESP32, STM32, AVR)",
      "PCB Design & Signal Integrity (KiCad)",
      "Communication Protocols (Modbus, MQTT, SPI, I2C, UART)"
    ],
    softwareEng: [
      "C / C++ (Embedded & High Performance)",
      "Python (Data, AI, Automation)",
      "JavaScript / TypeScript & Web Standards",
      "Linux Systems & Shell Scripting",
      "Git, Docker & CI/CD Pipelines"
    ]
  }
};
