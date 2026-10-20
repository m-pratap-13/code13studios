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
    status: "live",
    statusLabel: "Available on Google Play",
    tagline: "Manage Your Tuition Fees Easily",
    developer: "Pratap Mondal",
    storeName: "Code 13 Studios",
    packageName: "com.pratap.mytuitionfees",
    totalDownloads: "2.85K+",
    downloadsLabel: "Total Installs",
    downloadsTrend: "↑ 1.11K recent",
    activeDevices: "1.11K+",
    devicesLabel: "Active Devices",
    devicesTrend: "↑ 81% average",
    activeUsers: "1.55K+",
    usersLabel: "Monthly Active Users",
    usersTrend: "347 daily avg (↑ 54%)",
    rating: "4.81",
    ratingLabel: "Google Play Rating",
    ratingTrend: "Top 5% in Education",
    contentRating: "Everyone (3+)",
    crashRate: "0.20% (99.8% Crash-Free)",
    anrRate: "0.02% (Ultra Responsive)",
    conversionRate: "43.9% Average",
    audienceGrowth: "108% Average",
    kpis: [
      { label: "Total Installs", value: "2.85K", trend: "↑ 1.11K", trendType: "up", note: "" },
      { label: "Active Devices", value: "1.11K", trend: "↑ 81%", trendType: "up", note: "avg" },
      { label: "Daily Active Users", value: "347", trend: "↑ 54%", trendType: "up", note: "avg" },
      { label: "Monthly Active Users", value: "1.55K", trend: "↑ 74%", trendType: "up", note: "avg" },
      { label: "Google Play Rating", value: "4.81 ★", trend: "4.81 avg", trendType: "up", note: "rating" },
      { label: "Crash Rate", value: "0.20%", trend: "99.8% Safe", trendType: "safe", note: "avg" },
      { label: "ANR Rate", value: "0.02%", trend: "0.00pp", trendType: "safe", note: "avg" },
      { label: "Store Conversion", value: "43.9%", trend: "High Intent", trendType: "up", note: "avg" },
      { label: "Audience Growth", value: "108%", trend: "Fast Growth", trendType: "up", note: "avg" },
      { label: "Daily Store Visitors", value: "93.8", trend: "↑ 18%", trendType: "up", note: "avg" },
      { label: "User Acquisitions", value: "44.9", trend: "↑ 7%", trendType: "up", note: "avg" },
      { label: "Store Acquisitions", value: "41.2", trend: "↑ 7%", trendType: "up", note: "avg" }
    ],
    description: "My Tuition Fees is an all-in-one productivity tool tailored for private tutors, coaching centres, home teachers, and educational mentors. It streamlines student fee collection, batch scheduling, payment records, and monthly financial summaries so you can dedicate more time to teaching.",
    shortDescription: "Manage your tuition fees, students, batches and more — all in one place.",
    icon: "assets/apps/my-tuition-fees.png",
    playStore: "https://play.google.com/store/apps/details?id=com.pratap.mytuitionfees",
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
    status: "live",
    statusLabel: "Available on Google Play",
    tagline: "Book Your Favorite Men's Salon",
    developer: "Rahul Biswas",
    storeName: "Code 13 Studios",
    packageName: "com.nexthaircut.app",
    totalDownloads: "27+",
    downloadsLabel: "Total Installs",
    downloadsTrend: "↑ 20 recent",
    activeDevices: "10.2",
    devicesLabel: "Active Devices",
    devicesTrend: "10.2 average",
    activeUsers: "5.07",
    usersLabel: "Monthly Active Users",
    usersTrend: "0.54 daily avg (↑ 275%)",
    rating: "5.0",
    ratingLabel: "Daily Average Rating",
    ratingTrend: "5.0 ★ Top Rating",
    contentRating: "Teen (12+)",
    crashRate: "0.00% (100% Crash-Free)",
    anrRate: "0.00% (Ultra Responsive)",
    conversionRate: "9.96% Average",
    audienceGrowth: "-13.77% Average",
    kpis: [
      { label: "Total Installs", value: "27", trend: "↑ 20", trendType: "up", note: "" },
      { label: "Active Devices", value: "10.2", trend: "10.2 avg", trendType: "neutral", note: "avg" },
      { label: "Daily Active Users", value: "0.54", trend: "↑ 275%", trendType: "up", note: "avg" },
      { label: "Monthly Active Users", value: "5.07", trend: "5.07 avg", trendType: "neutral", note: "avg" },
      { label: "Daily Average Rating", value: "5.0 ★", trend: "5.0 avg", trendType: "up", note: "rating" },
      { label: "Store Conversion", value: "9.96%", trend: "↑ +8.18pp", trendType: "up", note: "avg" },
      { label: "Store Visitors", value: "3.04", trend: "↑ 372%", trendType: "up", note: "avg" },
      { label: "User Acquisitions", value: "0.75", trend: "↑ >999%", trendType: "up", note: "avg" },
      { label: "Store Acquisitions", value: "0.54", trend: "↑ >999%", trendType: "up", note: "avg" },
      { label: "Total Audience", value: "9.89", trend: "9.89 avg", trendType: "neutral", note: "avg" },
      { label: "Crash Rate", value: "0.00%", trend: "100% Safe", trendType: "safe", note: "0 crashes" },
      { label: "ANR Rate", value: "0.00%", trend: "0.00pp", trendType: "safe", note: "0 ANRs" }
    ],
    description: "Next Hair Cut connects men with premier neighborhood hair salons, barber studios, and grooming professionals. Browse top salons, view service rate cards, select your favorite barber, and book your grooming slot in advance without wasting time in long queues.",
    shortDescription: "Book your favorite men's salon and get the best grooming experience.",
    icon: "assets/apps/next-hair-cut.png",
    playStore: "https://play.google.com/store/apps/details?id=com.nexthaircut.app",
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
    status: "closed-testing",
    statusLabel: "Closed Testing",
    tagline: "Master Mental Math & Fast Calculations",
    developer: "Pratap Mondal",
    storeName: "Code 13 Studios",
    packageName: "com.pratap.abacusmentalmath",
    totalDownloads: "Closed Beta",
    downloadsLabel: "Release Stage",
    downloadsTrend: "Closed Testing Track",
    activeDevices: "Active Group",
    devicesLabel: "Active Testers",
    devicesTrend: "Internal QA",
    activeUsers: "Android 8.0+",
    usersLabel: "Target OS",
    usersTrend: "Child & Family Safe",
    rating: "Testing",
    ratingLabel: "Testing Stage",
    ratingTrend: "Beta Feedback Open",
    contentRating: "Everyone (Child & Family Safe)",
    crashRate: "Testing Stability Track",
    anrRate: "0.00% in testing",
    conversionRate: "Closed Opt-in Track",
    kpis: [],
    description: "Abacus : Mental Math helps children, school students, and math enthusiasts master rapid mental calculations using the traditional Soroban abacus methodology. Strengthen arithmetic reflexes, improve visual memory, and boost concentration with guided drills.",
    shortDescription: "Learn abacus and master fast mental calculations with interactive drills.",
    icon: "assets/apps/abacus-math.png",
    playStore: "https://play.google.com/store/apps/details?id=com.pratap.abacusmentalmath",
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
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tagline: "Play Exciting Offline Games",
    developer: "Pratap Mondal",
    storeName: "Code 13 Studios",
    packageName: "com.code13studios.offlinearena",
    totalDownloads: "Coming Soon",
    downloadsLabel: "Release Status",
    downloadsTrend: "Target: Q4 2026",
    activeDevices: "In Development",
    devicesLabel: "Engineering Phase",
    devicesTrend: "Silky 60 FPS Native",
    activeUsers: "100% Offline",
    usersLabel: "Connectivity",
    usersTrend: "Zero Mobile Data",
    rating: "Upcoming",
    ratingLabel: "Data Safety",
    ratingTrend: "Zero Sign-in / 100% Private",
    contentRating: "Everyone (3+)",
    crashRate: "Target: 99.9% Crash-Free",
    anrRate: "Target: Ultra Low (0.00%)",
    conversionRate: "Upcoming on Google Play",
    kpis: [],
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

  let statusBadgeHtml = '';
  if (app.status === 'coming-soon') {
    statusBadgeHtml = `<span class="app-card-status-pill badge-status-coming-soon">Coming Soon</span>`;
  } else if (app.status === 'closed-testing') {
    statusBadgeHtml = `<span class="app-card-status-pill badge-status-testing">Closed Testing</span>`;
  }

  let actionBtnHtml = '';
  if (app.status === 'coming-soon') {
    actionBtnHtml = `<span class="app-card-status-btn btn-coming-soon" aria-disabled="true">Coming Soon</span>`;
  } else if (app.status === 'closed-testing') {
    actionBtnHtml = `
      <a href="${app.playStore}" class="app-card-link link-testing" target="_blank" rel="noopener noreferrer" aria-label="Closed Testing on Google Play" onclick="event.stopPropagation();">
        ${googlePlayIconSvg}
        <span>Closed Testing →</span>
      </a>`;
  } else {
    actionBtnHtml = `
      <a href="${app.playStore}" class="app-card-link" target="_blank" rel="noopener noreferrer" aria-label="View ${app.name} on Google Play" onclick="event.stopPropagation();">
        ${googlePlayIconSvg}
        <span>View on Play Store →</span>
      </a>`;
  }

  card.innerHTML = `
    <div class="app-card-icon-wrap">
      <img src="${iconSrc}" alt="${app.name} icon" class="app-card-icon" width="60" height="60" loading="lazy">
    </div>
    <h3 class="app-card-name">${app.name}</h3>
    <p class="app-card-desc">${app.shortDescription}</p>
    <div class="app-card-meta-row">
      <span class="app-card-category ${app.categoryClass}">${app.category}</span>
      ${statusBadgeHtml}
    </div>
    <div class="app-card-footer">
      ${actionBtnHtml}
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
  // Handle Play Store / Coming Soon / Closed Testing CTA Button
  if (playBtnEl) {
    if (app.status === "coming-soon") {
      playBtnEl.href = "javascript:void(0)";
      playBtnEl.className = "btn-play-large is-coming-soon";
      playBtnEl.removeAttribute("target");
      playBtnEl.setAttribute("aria-disabled", "true");
      playBtnEl.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Coming Soon on Google Play</span>
      `;
    } else if (app.status === "closed-testing") {
      playBtnEl.href = app.playStore;
      playBtnEl.className = "btn-play-large is-testing";
      playBtnEl.setAttribute("target", "_blank");
      playBtnEl.removeAttribute("aria-disabled");
      playBtnEl.innerHTML = `
        ${googlePlayIconSvg}
        <span>Join Closed Testing</span>
      `;
    } else {
      playBtnEl.href = app.playStore;
      playBtnEl.className = "btn-play-large";
      playBtnEl.setAttribute("target", "_blank");
      playBtnEl.removeAttribute("aria-disabled");
      playBtnEl.innerHTML = `
        ${googlePlayIconSvg}
        <span>Get on Google Play</span>
      `;
    }
  }

  if (privacyBtnEl) {
    privacyBtnEl.href = resolvePrivacyUrl(app.id);
  }

  // Handle Hero Rating / Status Badge
  const ratingWrapEl = document.getElementById("detail-app-rating");
  if (ratingWrapEl) {
    if (app.status === "coming-soon") {
      ratingWrapEl.innerHTML = `
        <span class="app-detail-status-pill status-coming-soon">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Coming Soon
        </span>
      `;
    } else if (app.status === "closed-testing") {
      ratingWrapEl.innerHTML = `
        <span class="app-detail-status-pill status-testing">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
          Closed Testing
        </span>
      `;
    } else {
      ratingWrapEl.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#F59E0B" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <strong id="detail-rating-val">${app.rating || "4.8"}</strong> (${app.ratingLabel || "Google Play"})
      `;
    }
  }

  // 4 Top Metrics Cards
  const totalDownloadsEl = document.getElementById("detail-total-downloads");
  if (totalDownloadsEl) totalDownloadsEl.textContent = app.totalDownloads || "10,000+";
  const downloadsLabelEl = document.getElementById("detail-downloads-label");
  if (downloadsLabelEl && app.downloadsLabel) downloadsLabelEl.textContent = app.downloadsLabel;
  const downloadsTrendEl = document.getElementById("detail-downloads-trend");
  if (downloadsTrendEl) downloadsTrendEl.textContent = app.downloadsTrend || "";

  const activeDevicesEl = document.getElementById("detail-active-devices");
  if (activeDevicesEl) activeDevicesEl.textContent = app.activeDevices || "8,450+";
  const devicesLabelEl = document.getElementById("detail-devices-label");
  if (devicesLabelEl && app.devicesLabel) devicesLabelEl.textContent = app.devicesLabel;
  const devicesTrendEl = document.getElementById("detail-devices-trend");
  if (devicesTrendEl) devicesTrendEl.textContent = app.devicesTrend || "";

  const activeUsersEl = document.getElementById("detail-active-users");
  if (activeUsersEl) activeUsersEl.textContent = app.activeUsers || "7,200+";
  const usersLabelEl = document.getElementById("detail-users-label");
  if (usersLabelEl && app.usersLabel) usersLabelEl.textContent = app.usersLabel;
  const usersTrendEl = document.getElementById("detail-users-trend");
  if (usersTrendEl) usersTrendEl.textContent = app.usersTrend || "";

  const ratingCardVal = document.getElementById("detail-rating-card-val");
  if (ratingCardVal) {
    if (app.status === "coming-soon") {
      ratingCardVal.textContent = "100% Offline";
    } else if (app.status === "closed-testing") {
      ratingCardVal.textContent = "Closed Beta";
    } else {
      ratingCardVal.textContent = `${app.rating || "4.8"} ★`;
    }
  }
  const ratingCardLabel = document.getElementById("detail-rating-card-label");
  if (ratingCardLabel && app.ratingLabel) ratingCardLabel.textContent = app.ratingLabel;
  const ratingCardSub = document.getElementById("detail-rating-card-sub");
  if (ratingCardSub) ratingCardSub.textContent = app.ratingTrend || "Verified Reviews";

  // Populate Google Play Console KPI Grid
  const kpiContainer = document.getElementById("kpi-items-container");
  const kpiSectionCard = document.getElementById("detail-kpi-card");
  if (kpiContainer) {
    if (app.kpis && app.kpis.length > 0) {
      if (kpiSectionCard) kpiSectionCard.style.display = "block";
      kpiContainer.innerHTML = app.kpis.map(kpi => `
        <div class="kpi-metric-item">
          <div class="kpi-item-top">
            <span class="kpi-item-val">${kpi.value} ${kpi.note ? `<small style="font-size:0.72rem;font-weight:600;color:var(--color-muted-text);text-transform:lowercase;">${kpi.note}</small>` : ''}</span>
            <span class="kpi-item-trend trend-${kpi.trendType || 'up'}">${kpi.trend}</span>
          </div>
          <span class="kpi-item-label">${kpi.label}</span>
        </div>
      `).join("");
    } else {
      if (kpiSectionCard) kpiSectionCard.style.display = "none";
    }
  }

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
  const specDev = document.getElementById("spec-developer");
  if (specDev) specDev.textContent = app.developer || (app.id === "next-hair-cut" ? "Rahul Biswas" : "Pratap Mondal");

  const specStore = document.getElementById("spec-store-name");
  if (specStore) specStore.textContent = app.storeName || "Code 13 Studios";

  const specCategory = document.getElementById("spec-category");
  if (specCategory) specCategory.textContent = app.category;

  const specPkg = document.getElementById("spec-pkg");
  if (specPkg) specPkg.textContent = app.packageName || `com.code13studios.${app.id.replace(/-/g, '')}`;

  const specContentRating = document.getElementById("spec-content-rating");
  if (specContentRating) specContentRating.textContent = app.contentRating || "Everyone (3+)";

  const specCrashRate = document.getElementById("spec-crash-rate");
  if (specCrashRate) specCrashRate.textContent = app.crashRate || "0.20% (99.8% Crash-Free)";

  const specAnrRate = document.getElementById("spec-anr-rate");
  if (specAnrRate) specAnrRate.textContent = app.anrRate || "0.02% (Ultra Responsive)";

  const specConversion = document.getElementById("spec-conversion-rate");
  if (specConversion) specConversion.textContent = app.conversionRate || "43.9% Average";

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

// Calculate and update Home Page Journey stats dynamically from all apps
function updateHomeJourneyStats() {
  const totalDownloadsEl = document.getElementById("journey-total-downloads");
  if (!totalDownloadsEl) return;

  let totalNumericDownloads = 0;
  let totalNumericDevices = 0;
  let totalNumericUsers = 0;

  APPS_DATA.forEach(app => {
    // Total Downloads
    if (app.totalDownloads) {
      const cleanDownloads = app.totalDownloads.replace("+", "").trim().toLowerCase();
      if (cleanDownloads.endsWith("k")) {
        const val = parseFloat(cleanDownloads.replace("k", ""));
        if (!isNaN(val)) totalNumericDownloads += val * 1000;
      } else {
        const val = parseFloat(cleanDownloads);
        if (!isNaN(val)) totalNumericDownloads += val;
      }
    }

    // Active Devices
    if (app.activeDevices) {
      const cleanDevices = app.activeDevices.replace("+", "").trim().toLowerCase();
      if (cleanDevices.endsWith("k")) {
        const val = parseFloat(cleanDevices.replace("k", ""));
        if (!isNaN(val)) totalNumericDevices += val * 1000;
      } else {
        const val = parseFloat(cleanDevices);
        if (!isNaN(val)) totalNumericDevices += val;
      }
    }

    // Monthly Active Users
    if (app.activeUsers) {
      const cleanUsers = app.activeUsers.replace("+", "").trim().toLowerCase();
      if (cleanUsers.endsWith("k")) {
        const val = parseFloat(cleanUsers.replace("k", ""));
        if (!isNaN(val)) totalNumericUsers += val * 1000;
      } else {
        const val = parseFloat(cleanUsers);
        if (!isNaN(val)) totalNumericUsers += val;
      }
    }
  });

  if (totalNumericDownloads > 0) {
    if (totalNumericDownloads >= 1000) {
      totalDownloadsEl.textContent = (totalNumericDownloads / 1000).toFixed(2).replace(/\.?0+$/, "") + "K+";
    } else {
      totalDownloadsEl.textContent = totalNumericDownloads + "+";
    }
  }

  const activeDevicesEl = document.getElementById("journey-active-devices");
  if (activeDevicesEl && totalNumericDevices > 0) {
    if (totalNumericDevices >= 1000) {
      activeDevicesEl.textContent = (totalNumericDevices / 1000).toFixed(2).replace(/\.?0+$/, "") + "K+";
    } else {
      activeDevicesEl.textContent = Math.round(totalNumericDevices).toString();
    }
  }

  const activeUsersEl = document.getElementById("journey-active-users");
  if (activeUsersEl && totalNumericUsers > 0) {
    if (totalNumericUsers >= 1000) {
      activeUsersEl.textContent = (totalNumericUsers / 1000).toFixed(2).replace(/\.?0+$/, "") + "K+";
    } else {
      activeUsersEl.textContent = Math.round(totalNumericUsers).toString();
    }
  }
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
  updateHomeJourneyStats();
});
