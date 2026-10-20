/**
 * Code 13 Studios — Core JavaScript
 * Handles dynamic app rendering, mobile navigation drawer, interactive filters,
 * app details rendering, and screenshot lightbox.
 */

// ==========================================================================
// 1. App Data Repository
// ==========================================================================
const appsData = [
  {
    id: "my-tuition-fees",
    name: "My Tuition Fees",
    category: "Education",
    categoryClass: "badge-education",
    tagline: "Manage Your Tuition Fees Easily",
    packageName: "com.code13studios.mytuitionfees",
    totalDownloads: "10,000+",
    activeDevices: "8,450+",
    activeUsers: "7,200+",
    rating: "4.8",
    contentRating: "Everyone (3+)",
    description: "My Tuition Fees is an all-in-one productivity tool tailored for private tutors, coaching centres, home teachers, and educational mentors. It streamlines student fee collection, batch scheduling, payment records, and monthly financial summaries so you can dedicate more time to teaching.",
    shortDescription: "Manage your tuition fees, students, batches and more — all in one place.",
    icon: "assets/apps/my-tuition-fees.png",
    playStore: "https://play.google.com/store/apps/details?id=com.code13studios.mytuitionfees",
    features: [
      "Student Management",
      "Batch & Class Management",
      "Payment Tracking",
      "Attendance & Reports",
      "100% Offline Capability",
      "Instant Fee Reminders"
    ],
    detailedFeatures: [
      {
        title: "Student Profile & Contact Management",
        desc: "Easily enroll students, organize their contact details, parent info, assigned subjects, and enrollment dates in a clean digital ledger."
      },
      {
        title: "Batch & Class Schedule Organization",
        desc: "Create morning, evening, or weekend batches. Assign student groups, set subject timings, and track batch capacities with zero confusion."
      },
      {
        title: "Payment Records & Fee Tracking",
        desc: "Log cash, UPI, or online fee payments. Track overdue fees, partial dues, generate instant digital receipts, and view payment histories."
      },
      {
        title: "Smart Attendance & Monthly Reports",
        desc: "Mark student attendance daily with one tap. View absentee summaries, fee collection charts, and export clean PDF reports."
      },
      {
        title: "100% Offline & Private",
        desc: "No internet required to use the core features. All student data, fees, and records are stored securely on your local device."
      },
      {
        title: "Quick Messaging & Payment Reminders",
        desc: "Send personalized fee dues reminders to students or parents directly via WhatsApp or SMS with a single tap."
      }
    ],
    screenshots: []
  },
  {
    id: "next-hair-cut",
    name: "Next Hair Cut",
    category: "Lifestyle",
    categoryClass: "badge-lifestyle-purple",
    tagline: "Book Your Favorite Men's Salon",
    packageName: "com.code13studios.nexthaircut",
    totalDownloads: "5,000+",
    activeDevices: "4,150+",
    activeUsers: "3,800+",
    rating: "4.7",
    contentRating: "Teen (12+)",
    description: "Next Hair Cut connects men with premier neighborhood hair salons, barber studios, and grooming professionals. Browse top salons, view service rate cards, select your favorite barber, and book your grooming slot in advance without wasting time in long queues.",
    shortDescription: "Book your favorite men's salon and get the best grooming experience.",
    icon: "assets/apps/next-hair-cut.png",
    playStore: "https://play.google.com/store/apps/details?id=com.code13studios.nexthaircut",
    features: [
      "Salon Discovery & Neighborhood Search",
      "Real-time Queue & Slot Booking",
      "Favorite Barbers & Services Selection",
      "Instant Appointment Reminders",
      "Transparent Pricing & Rate Cards"
    ],
    detailedFeatures: [
      {
        title: "Nearby Salon & Barber Discovery",
        desc: "Locate verified local hair salons and barbershops in your area. View photos, customer reviews, amenities, and exact distances."
      },
      {
        title: "Real-time Slot Booking & Queue Tracking",
        desc: "Say goodbye to crowded waiting rooms. Reserve your preferred time slot and check current queue status live before walking in."
      },
      {
        title: "Barber Selection & Custom Services",
        desc: "Choose your favorite hair stylist for haircuts, beard styling, head massages, facials, and hair coloring packages."
      },
      {
        title: "Instant Appointment Notifications",
        desc: "Receive timely reminder alerts prior to your booked slot so you always arrive sharp and on time."
      },
      {
        title: "Transparent Service Rate Cards",
        desc: "Browse detailed pricing lists for every service before booking with no hidden charges or surprises."
      }
    ],
    screenshots: []
  },
  {
    id: "abacus-mental-math",
    name: "Abacus : Mental Math",
    category: "Education",
    categoryClass: "badge-education",
    tagline: "Master Mental Math & Fast Calculations",
    packageName: "com.code13studios.abacusmentalmath",
    totalDownloads: "15,000+",
    activeDevices: "12,800+",
    activeUsers: "11,500+",
    rating: "4.9",
    contentRating: "Everyone (Child & Family Safe)",
    description: "Abacus : Mental Math helps children, school students, and math enthusiasts master rapid mental calculations using the traditional Soroban abacus methodology. Strengthen arithmetic reflexes, improve visual memory, and boost concentration with guided drills.",
    shortDescription: "Learn abacus and master fast mental calculations with interactive drills.",
    icon: "assets/apps/abacus-icon.png",
    playStore: "https://play.google.com/store/apps/details?id=com.code13studios.abacusmentalmath",
    features: [
      "Interactive Virtual Soroban Abacus",
      "Step-by-Step Bead Counting Tutorials",
      "Flash Anzan Speed Arithmetic Tests",
      "Daily Math Drills & Progress Tracking",
      "COPPA & Families Compliant"
    ],
    detailedFeatures: [
      {
        title: "Interactive Virtual Soroban Abacus",
        desc: "Practice bead manipulation on a digital 4+1 Soroban board with realistic touch physics, haptics, and reset mechanisms."
      },
      {
        title: "Step-by-Step Interactive Lessons",
        desc: "Follow structured tutorials covering basic addition, 5-complements, 10-complements, multi-digit subtraction, and multiplication."
      },
      {
        title: "Flash Anzan Speed Arithmetic",
        desc: "Train right-brain photographic calculation speed with customizable flashing numbers and rapid-fire response challenges."
      },
      {
        title: "Daily Drills & Level Progression",
        desc: "Track daily practice streaks, monitor arithmetic accuracy rates, and earn accomplishment badges as speed improves."
      },
      {
        title: "Child-Safe & 100% Private (COPPA Compliant)",
        desc: "Designed specifically for learners of all ages. Does not collect personal data, requires zero permissions, and works completely offline."
      }
    ],
    screenshots: []
  },
  {
    id: "offline-arena",
    name: "Offline Arena",
    category: "Games",
    categoryClass: "badge-games",
    tagline: "Play Exciting Offline Games",
    packageName: "com.code13studios.offlinearena",
    totalDownloads: "25,000+",
    activeDevices: "21,500+",
    activeUsers: "19,800+",
    rating: "4.8",
    contentRating: "Everyone (3+)",
    description: "Offline Arena provides a rich collection of addictive mini-games, logic challenges, memory puzzles, and arcade favorites that you can play anytime, anywhere without an active internet connection or mobile data.",
    shortDescription: "Play exciting offline games anytime, anywhere — no internet needed.",
    icon: "assets/apps/offline-arena.png",
    playStore: "https://play.google.com/store/apps/details?id=com.code13studios.offlinearena",
    features: [
      "100% Offline Gameplay — No Internet Needed",
      "Diverse Collection of Mini Games",
      "High Score Records & Achievements",
      "Battery-friendly & Ultra Fast Loading",
      "Zero Sign-in / Complete Privacy"
    ],
    detailedFeatures: [
      {
        title: "100% Offline Gameplay (Zero Internet Needed)",
        desc: "Enjoy seamless gaming while traveling, on flights, or in remote areas without relying on Wi-Fi or mobile data."
      },
      {
        title: "Diverse Mini-Game Arena",
        desc: "Play logic puzzles, pattern memory games, number challenges, and reaction arcade tests all within a single app."
      },
      {
        title: "Local High Scores & Trophy Milestones",
        desc: "Compete against your personal bests, unlock achievement trophies, and track your gameplay statistics on device."
      },
      {
        title: "Battery-Optimized & Instant Loading",
        desc: "Engineered with lightweight native rendering for silky 60fps performance and minimal power consumption."
      },
      {
        title: "Zero Registration & Full Privacy",
        desc: "No login, no credentials, no trackers. Simply launch the app and jump right into the gaming arena."
      }
    ],
    screenshots: []
  }
];

// Google Play Vector Icon Snippet
const googlePlayIconSvg = `
<svg class="app-play-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5.3 3.6C5.1 4 5 4.5 5 5.2v21.6c0 .7.1 1.2.3 1.6l.1.1 12.1-12.1v-.3L5.3 3.6z" fill="#00E676"/>
  <path d="M21.5 20.4l-4-4v-.3l4-4 .1.1 4.7 2.7c1.3.8 1.3 2 0 2.8l-4.8 2.7z" fill="#FFD600"/>
  <path d="M17.5 16.1L5.3 28.4c.4.4 1.1.5 2 .1l14.2-8.1-4-4.3z" fill="#FF1744"/>
  <path d="M17.5 15.9l4-4-14.2-8.1c-.9-.5-1.6-.3-2 .1l12.2 12z" fill="#00B0FF"/>
</svg>`;

// Path Resolution Helpers for Subfolders (section/, privacy-policy/)
function getRelativePrefix() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("/section/") || path.includes("/privacy-policy/") || path.includes("/privacy%20policy/")) {
    return "../";
  }
  return "";
}

function resolveAssetUrl(relPath) {
  if (!relPath || relPath.startsWith("http") || relPath.startsWith("data:") || relPath.startsWith("../")) {
    return relPath;
  }
  return getRelativePrefix() + relPath;
}

function resolveDetailsUrl(appId) {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("/section/")) {
    return `app-details.html?app=${appId}`;
  }
  if (path.includes("/privacy-policy/") || path.includes("/privacy%20policy/")) {
    return `../section/app-details.html?app=${appId}`;
  }
  return `section/app-details.html?app=${appId}`;
}

function resolvePrivacyUrl(appId) {
  const path = window.location.pathname.toLowerCase();
  const file = appId ? `${appId}.html` : "index.html";
  if (path.includes("/privacy-policy/") || path.includes("/privacy%20policy/")) {
    return file;
  }
  if (path.includes("/section/")) {
    return `../privacy-policy/${file}`;
  }
  return `privacy-policy/${file}`;
}

// ==========================================================================
// 2. Render App Cards
// ==========================================================================
function createAppCardElement(app) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.setAttribute("data-category", app.category);
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${app.name} - View App Details`);

  const iconSrc = resolveAssetUrl(app.icon);
  const detailsHref = resolveDetailsUrl(app.id);

  card.innerHTML = `
    <div class="app-card-icon-wrap">
      <img src="${iconSrc}" alt="${app.name} icon" class="app-card-icon" width="60" height="60" loading="lazy">
    </div>
    <h3 class="app-card-name">${app.name}</h3>
    <p class="app-card-desc">${app.shortDescription}</p>
    <span class="app-card-category ${app.categoryClass}">${app.category}</span>
    <div class="app-card-footer">
      <a href="${app.playStore}" class="app-card-link" target="_blank" rel="noopener noreferrer" aria-label="View ${app.name} on Google Play" onclick="event.stopPropagation();">
        ${googlePlayIconSvg}
        <span>View on Play Store →</span>
      </a>
      <a href="${detailsHref}" class="app-details-btn-mini" aria-label="Learn more about ${app.name}" onclick="event.stopPropagation();">
        Details
      </a>
    </div>
  `;

  // Tap or click on the card opens app details
  card.addEventListener("click", (e) => {
    // If user clicked directly on or inside the Google Play Store link, let it open Google Play
    if (e.target.closest(".app-card-link")) {
      return;
    }
    window.location.href = detailsHref;
  });

  // Keyboard accessibility: Enter or Space opens app details
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (!e.target.closest(".app-card-link")) {
        e.preventDefault();
        window.location.href = detailsHref;
      }
    }
  });

  return card;
}

// Render Homepage Apps
function renderHomeApps() {
  const container = document.getElementById("apps-grid");
  if (!container) return;
  container.innerHTML = "";
  appsData.forEach(app => {
    container.appendChild(createAppCardElement(app));
  });
}

// Render All Apps Page with Filter
function renderAllApps(category = "All") {
  const container = document.getElementById("all-apps-grid");
  if (!container) return;
  container.innerHTML = "";
  
  const filtered = category === "All" 
    ? appsData 
    : appsData.filter(a => a.category.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-apps-msg" style="grid-column: 1/-1; text-align: center; color: var(--color-muted-text); padding: 40px;">No applications found in this category.</p>`;
    return;
  }

  filtered.forEach(app => {
    container.appendChild(createAppCardElement(app));
  });
}

// Set Up Filter Buttons on apps.html
function setupAppFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderAllApps(category);
    });
  });
}

// ==========================================================================
// 3. App Details Page Populator (app-details.html)
// ==========================================================================
function populateAppDetails() {
  const detailsContainer = document.getElementById("app-details-view");
  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get("app") || "my-tuition-fees";
  const app = appsData.find(a => a.id === appId) || appsData[0];

  // Update Page Title
  document.title = `${app.name} — Code 13 Studios`;

  // Breadcrumbs
  const breadcrumbName = document.getElementById("detail-breadcrumb-name");
  if (breadcrumbName) breadcrumbName.textContent = app.name;

  // Update Mobile Header Title
  const mobileHeaderTitle = document.getElementById("subpage-mobile-title");
  if (mobileHeaderTitle) {
    mobileHeaderTitle.textContent = app.name;
  }

  // Populate Hero Meta
  const iconEl = document.getElementById("detail-app-icon");
  const nameEl = document.getElementById("detail-app-name");
  const taglineEl = document.getElementById("detail-app-tagline");
  const badgeEl = document.getElementById("detail-app-badge");
  const pkgNameEl = document.getElementById("detail-pkg-name");
  const playBtnEl = document.getElementById("detail-play-btn");
  const privacyBtnEl = document.getElementById("detail-privacy-btn");

  if (iconEl) {
    iconEl.src = resolveAssetUrl(app.icon);
    iconEl.alt = `${app.name} Icon`;
  }
  if (nameEl) nameEl.textContent = app.name;
  if (taglineEl) taglineEl.textContent = app.tagline;
  if (badgeEl) {
    badgeEl.textContent = app.category;
    badgeEl.className = `app-detail-badge ${app.categoryClass}`;
  }
  if (pkgNameEl) {
    pkgNameEl.textContent = app.packageName || `com.code13studios.${app.id.replace(/-/g, '')}`;
  }
  if (playBtnEl) {
    playBtnEl.href = app.playStore;
  }
  if (privacyBtnEl) {
    privacyBtnEl.href = resolvePrivacyUrl(app.id);
  }

  // Rating & Key Metrics
  const ratingValEl = document.getElementById("detail-rating-val");
  if (ratingValEl) ratingValEl.textContent = app.rating || "4.8";

  const totalDownloadsEl = document.getElementById("detail-total-downloads");
  if (totalDownloadsEl) totalDownloadsEl.textContent = app.totalDownloads || "10,000+";

  const activeDevicesEl = document.getElementById("detail-active-devices");
  if (activeDevicesEl) activeDevicesEl.textContent = app.activeDevices || "8,450+";

  const activeUsersEl = document.getElementById("detail-active-users");
  if (activeUsersEl) activeUsersEl.textContent = app.activeUsers || "7,200+";

  // Populate About Text
  const aboutLeadEl = document.getElementById("detail-about-lead");
  if (aboutLeadEl) aboutLeadEl.textContent = app.shortDescription;

  const aboutTextEl = document.getElementById("detail-about-text");
  if (aboutTextEl) aboutTextEl.textContent = app.description;

  // Populate Detailed Feature Cards
  const featuresGridEl = document.getElementById("detail-features-grid");
  if (featuresGridEl) {
    featuresGridEl.innerHTML = "";
    const featureItems = app.detailedFeatures || app.features.map(f => ({
      title: f,
      desc: `Experience robust and seamless ${f.toLowerCase()} built for optimal performance.`
    }));

    featureItems.forEach(feat => {
      const card = document.createElement("div");
      card.className = "feature-detail-card";
      card.innerHTML = `
        <div class="feature-detail-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div class="feature-detail-text">
          <h3 class="feature-detail-title">${feat.title}</h3>
          <p class="feature-detail-desc">${feat.desc}</p>
        </div>
      `;
      featuresGridEl.appendChild(card);
    });
  }

  // Populate Specifications Sidebar
  const specCategory = document.getElementById("spec-category");
  if (specCategory) specCategory.textContent = app.category;

  const specPkg = document.getElementById("spec-pkg");
  if (specPkg) specPkg.textContent = app.packageName || `com.code13studios.${app.id.replace(/-/g, '')}`;

  const specContentRating = document.getElementById("spec-content-rating");
  if (specContentRating) specContentRating.textContent = app.contentRating || "Everyone (3+)";

  const specPrivacyLink = document.getElementById("spec-privacy-link");
  if (specPrivacyLink) specPrivacyLink.href = resolvePrivacyUrl(app.id);
}

// ==========================================================================
// 4. Mobile Navigation Drawer (Matches Mobile Screen 5 Reference)
// ==========================================================================
function setupMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close-btn");
  const navLinks = document.querySelectorAll(".drawer-nav-item a");

  if (!hamburgerBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    hamburgerBtn.classList.add("active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  overlay.addEventListener("click", closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 5. Active Navigation State
// ==========================================================================
function setupActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const page = currentPath.split("/").pop() || "index.html";

  // Desktop Links
  document.querySelectorAll(".desktop-nav .nav-link").forEach(link => {
    const href = (link.getAttribute("href") || "").split("/").pop() || "";
    if (href === page || (page === "index.html" && href === "index.html" && !currentPath.includes("/privacy-policy/"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Header Privacy Button Active State
  const privacyHeaderBtn = document.getElementById("header-privacy-btn");
  if (privacyHeaderBtn) {
    if (currentPath.includes("privacy-policy")) {
      privacyHeaderBtn.classList.add("active");
    } else {
      privacyHeaderBtn.classList.remove("active");
    }
  }

  // Drawer Links
  document.querySelectorAll(".drawer-nav-item").forEach(item => {
    const link = item.querySelector("a");
    if (!link) return;
    const href = (link.getAttribute("href") || "").split("/").pop() || "";
    if (href === page || (page === "index.html" && href === "index.html" && !currentPath.includes("/privacy-policy/"))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// ==========================================================================
// 6. Screenshot Lightbox
// ==========================================================================
function setupLightbox() {
  let lightbox = document.getElementById("lightbox-modal");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox-modal";
    lightbox.className = "lightbox-modal";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button type="button" class="lightbox-close-btn" aria-label="Close image preview">&times;</button>
        <img src="" alt="Enlarged screenshot preview" id="lightbox-img">
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector(".lightbox-close-btn");
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
      }
    });
  }
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  if (!lightbox || !img) return;

  img.src = src;
  img.alt = alt;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  // Only restore overflow if mobile drawer isn't also open
  const drawer = document.getElementById("mobile-drawer");
  if (!drawer || !drawer.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 7. Privacy Policy Hub & Tab Switcher
// ==========================================================================
function setupPrivacyTabs() {
  const tabBtns = document.querySelectorAll(".privacy-tab-btn");
  const sections = document.querySelectorAll(".privacy-app-section");
  if (!tabBtns.length || !sections.length) return;

  function switchTab(targetId, updateHash = true) {
    const normalizedId = targetId.replace("#", "") || "all-apps";
    
    tabBtns.forEach(btn => {
      const btnTab = btn.getAttribute("data-tab");
      if (btnTab === normalizedId) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    });

    sections.forEach(sec => {
      const secId = sec.getAttribute("id");
      if (secId === normalizedId) {
        sec.classList.add("active");
      } else {
        sec.classList.remove("active");
      }
    });

    if (updateHash && window.location.hash !== `#${normalizedId}`) {
      history.replaceState(null, null, `#${normalizedId}`);
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Handle URL Hash on Load and Hash Change
  function handleHash() {
    const currentHash = window.location.hash;
    if (currentHash) {
      const cleanHash = currentHash.replace("#", "");
      const matched = document.getElementById(cleanHash);
      if (matched && matched.classList.contains("privacy-app-section")) {
        switchTab(cleanHash, false);
        setTimeout(() => {
          matched.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }

  handleHash();
  window.addEventListener("hashchange", handleHash);
}

// Header Privacy Policy Dropdown Interaction
function setupPrivacyDropdown() {
  const dropdownWrap = document.querySelector(".header-privacy-dropdown-wrap");
  const triggerBtn = document.getElementById("header-privacy-btn");
  const menu = document.querySelector(".header-privacy-menu");
  if (!dropdownWrap || !triggerBtn || !menu) return;

  // Toggle dropdown on click for mobile or keyboard accessibility
  triggerBtn.addEventListener("click", (e) => {
    // If user clicked the chevron or wants dropdown on mobile
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      menu.classList.toggle("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!dropdownWrap.contains(e.target)) {
      menu.classList.remove("open");
    }
  });

  menu.querySelectorAll(".privacy-menu-item").forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// ==========================================================================
// 8. Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderHomeApps();
  renderAllApps();
  setupAppFilters();
  populateAppDetails();
  setupMobileMenu();
  setupActiveNav();
  setupLightbox();
  setupPrivacyTabs();
  setupPrivacyDropdown();
});
