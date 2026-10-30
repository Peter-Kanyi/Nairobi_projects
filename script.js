const images = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  villa: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  kitchen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
  bathroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  exterior: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
};


/* =====================================================================
   PROJECT DATA
   ---------------------------------------------------------------------
   Each project has its own block below. To add a project, copy a block,
   give it a unique `slug`, and add it to the `projects` array at the end.

   - slug      → used in the URL: #/project/<slug>
   - category  → must be "Residential", "Commercial" or "Interior Design"
                 (the Projects page filter buttons use this)
   - cover     → image used on the project cards
   - gallery   → list of photos. `room` becomes a filter button on the
                 project page (Exterior, Kitchen, Bathroom, etc.)
   - Replace the Unsplash placeholders with your real project photos,
     e.g. "images/projects/kenya-homes/kitchen.jpg"
   ===================================================================== */

// Small helper so gallery entries stay short
const shot = (room, src, caption) => ({ room, src, caption });


/* ---------- PROJECT 1: KENYA HOMES (Residential) ---------- */
const kenyaHomes = {
  slug: "kenya-homes",
  name: "Kenya Homes",
  category: "Residential",
  cover: "images/kenya_homes.jpg",
  location: "Juja, Nairobi, Kenya",
  scope: "Design, construction and finishing",
  summary: "A contemporary family residence designed around light, open living and a calm connection to the garden.",
  description: [
    "Kenya Homes is a private residence where the brief was simple: a home that feels generous without feeling large. We planned the ground floor as one continuous space so kitchen, dining and living areas share daylight and views.",
    "Natural stone, warm timber and soft neutral finishes run through every room, giving the house a consistent character from the façade to the bedrooms."
  ],
  highlights: ["Open-plan living and dining", "Natural stone and timber finishes", "Full-height glazing to the garden"],
  gallery: [
    shot("Exterior", "images/kenya_homes.jpg", "Front elevation"),
    shot("Exterior", "images/kenyaH_inter1.jpg", "Side view and entrance"),
    shot("Living Room", "images/kenyaH_inter2.jpg", "Open-plan living area"),
    shot("Kitchen", "images/kenyaH_inter3.jpg", "Kitchen and dining"),
    shot("Master Bedroom", images.bedroom, "Master bedroom"),
    shot("Bathroom", images.bathroom, "Master en-suite bathroom"),
  ]
};


/* ---------- PROJECT 2: ECHDINA GIVING OFFICE INTERIOR (Interior Design) ---------- */
const ruiruOffice = {
  slug: "ruiru-office-interior",
  name: "Echidna Giving",
  category: "Interior Design",
  cover: "images/echdina.jpg",
  location: "Westlands, Kenya",
  scope: "Space planning and interior fit-out",
  summary: "A warm, welcoming office interior that balances focused workspaces with relaxed meeting and lounge areas.",
  description: [
    "For the echidna Westlands office we reworked the floor plan to separate quiet desk areas from social and meeting spaces, then tied everything together with a consistent palette of timber, soft textiles and layered lighting.",
    "The result is a workplace that feels more like a well-run home than a corporate floor."
  ],
  highlights: ["Zoned workspaces and meeting areas", "Layered ambient and task lighting", "Custom joinery and storage"],
  gallery: [
    shot("Lounge", "images/echdinaLounge.jpg", "Reception and lounge"),
    shot("Workspace", "images/echdinaKitchen.jpg", "Open workspace"),
    shot("Interior Details", "images/echdinaDoor.jpg", "Feature wall and lighting"),
    shot("Pantry", "images/echidnaOffice.jpg", "Staff pantry"),
    shot("Lounge", "images/echdinaL.jpg", "Executive"),
  ]
};


/* ---------- PROJECT 3: WESTLANDS OFFICE (Commercial) ---------- */
const westlandsOffice = {
  slug: "westlands-office",
  name: "Westlands Office",
  category: "Commercial",
  cover: images.office,
  location: "Westlands, Nairobi",
  scope: "Commercial fit-out and project management",
  summary: "A bright, modern commercial office delivered on a tight programme with minimal disruption to the client.",
  description: [
    "The Westlands office is a full commercial fit-out managed from design through handover. We coordinated consultants, suppliers and contractors under one programme so the client had a single point of contact.",
    "Glass partitions, acoustic ceilings and flexible furniture layouts let the team reconfigure the space as it grows."
  ],
  highlights: ["Glass partitions and acoustic ceilings", "Flexible furniture layouts", "Delivered on programme"],
  gallery: [
    shot("Exterior", images.exterior, "Building entrance"),
    shot("Workspace", images.office, "Main open-plan floor"),
    shot("Reception", images.living, "Reception area"),
    shot("Meeting Rooms", images.interior, "Boardroom"),
    shot("Pantry", images.kitchen, "Break-out kitchen"),
    shot("Washroom", images.bathroom, "Staff washrooms"),
  ]
};


/* ---------- PROJECT 4: VALERIA VILLAS (Interior Design) ---------- */
const valeriaVillas = {
  slug: "valeria-villas",
  name: "Valeria Villas",
  category: "Residential",
  cover: "images/ValeriaVillas1.jpg",
  location: "Ruiru Bypass, Nairobi, Kenya",
  scope: "Residential Homes Design, construction and finishing",
  summary: "Elegant, restful villa interiors with a focus on materials, texture and light.",
  description: [
    "At Valeria Villas, we delivered the complete project from design and construction to interior design, creating elegant, hotel-inspired homes with bespoke finishes, refined materials and warm lighting."
  ],
  highlights: ["Bespoke furniture and joinery", "Stone and timber surfaces", "Hotel-style bedrooms and bathrooms"],
  gallery: [
  shot("Exterior", "images/ValeriaVillas1.jpg", "Villa frontage"),
  shot("Backyard", "images/ValeriaVillas6.webp", "Backyard"),
  shot("Kitchen", "images/ValeriaVillas4.webp", "Kitchen"),
  shot("Master Bedroom", "images/ValeriaVillas7.webp", "Master bedroom"),
  shot("Bathroom", "images/ValeriaVillas9.webp", "En-suite bathroom"),
  shot("Interior Details", "images/ValeriaVillas8.webp", "Sitting Lounge"),
  shot("Interior Details", "images/ValeriaVillas3.webp", "Sitting Room")
]
};


/* ---------- PROJECT 5: RIVERSIDE APARTMENTS (Residential) ---------- */
const riversideApartments = {
  slug: "riverside-apartments",
  name: "Riverside Apartments",
  category: "Residential",
  cover: images.exterior,
  location: "Riverside, Nairobi",
  scope: "Architecture, construction and interiors",
  summary: "A modern apartment development with efficient layouts, generous balconies and durable finishes.",
  description: [
    "Riverside Apartments brings together efficient floor plans and quality finishes in a development designed for everyday living. Each unit is planned to maximise light, ventilation and usable storage.",
    "Balconies, shared landscaping and a clean architectural language give the building a strong street presence."
  ],
  highlights: ["Efficient, light-filled layouts", "Private balconies", "Durable, low-maintenance finishes"],
  gallery: [
    shot("Exterior", images.exterior, "Street elevation"),
    shot("Exterior", images.villa, "Entrance and landscaping"),
    shot("Living Room", images.living, "Show-unit living area"),
    shot("Kitchen", images.kitchen, "Show-unit kitchen"),
    shot("Master Bedroom", images.bedroom, "Master bedroom"),
    shot("Bathroom", images.bathroom, "Bathroom"),
  ]
};


/* ---------- PROJECT 6: KILELESHWA HOME (Interior Design) ---------- */
const kileleshwaHome = {
  slug: "kileleshwa-home",
  name: "Kileleshwa Home",
  category: "Interior Design",
  cover: images.kitchen,
  location: "Kileleshwa, Nairobi",
  scope: "Interior design and renovation",
  summary: "A family home renovated around a bright, social kitchen and calm, comfortable bedrooms.",
  description: [
    "The Kileleshwa renovation started in the kitchen. We opened it to the dining and living areas, added generous storage and chose durable finishes suited to a busy family.",
    "Upstairs, the bedrooms and bathrooms were refreshed with a quieter palette to contrast with the energy of the ground floor."
  ],
  highlights: ["Open, social kitchen", "Generous built-in storage", "Refreshed bedrooms and bathrooms"],
  gallery: [
    shot("Exterior", images.exterior, "Home exterior"),
    shot("Kitchen", images.kitchen, "Kitchen and island"),
    shot("Living Room", images.living, "Living room"),
    shot("Master Bedroom", images.bedroom, "Master bedroom"),
    shot("Bathroom", images.bathroom, "Family bathroom"),
    shot("Interior Details", images.interior, "Details and finishes"),
  ]
};


/* ---------- ALL PROJECTS (order here = order on the site) ---------- */
const projects = [
  kenyaHomes,
  ruiruOffice,
  westlandsOffice,
  valeriaVillas,
  riversideApartments,
  kileleshwaHome
];


function header(active){
 return `<header class="header"><div class="container nav">
   <a class="logo" href="#/"><img src="images/logo.jpg" alt="Nairobi Projects — Design & Build"></a>
   <nav class="nav-links">
    ${["home","about","services","projects","contact"].map(x=>`<a class="${active===x?'active':''}" href="#/${x}">${x}</a>`).join("")}
   </nav>
   <a class="cta" href="#/contact">Get a Quote</a>
   <button class="menu" onclick="toggleMenu()">☰</button>
 </div></header>`;
}


function footer(){
  return `<footer class="footer">
    <div class="container">

      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <a class="logo" href="#/">
            <img src="images/logo.jpg" alt="Nairobi Projects — Design & Build">
          </a>
          <p>
            Designing and building modern, functional spaces
            across Nairobi and beyond.
          </p>
        </div>

        <!-- Explore -->
        <div class="footer-column">
          <h4>Explore</h4>
          <a href="#/about">About</a>
          <a href="#/services">Services</a>
          <a href="#/projects">Projects</a>
          <a href="#/contact">Contact</a>
        </div>

        <!-- Services -->
        <div class="footer-column">
          <h4>Services</h4>
          <a href="#/services">Architecture &amp; Design</a>
          <a href="#/services">Construction</a>
          <a href="#/services">Interior Design</a>
          <a href="#/services">Project Management</a>
          <a href="#/services">Renovations</a>
        </div>

        <!-- Contact -->
        <div class="footer-column">
          <h4>Contact</h4>

            <a href="tel:+254712559476">
              <span class="contact-icon" aria-hidden="true">☎</span>
              <span>+254 712 559 476</span>
            </a>

            <a href="mailto:nairobiprojects26@gmail.com">
              <span class="contact-icon" aria-hidden="true">✉</span>
              <span>nairobiprojects26@gmail.com
              </span>
            </a>

        </div>

        <!-- Follow Us: next to Contact -->
        <div class="footer-column footer-follow">
          <h4>Follow Us</h4>

          <a
            href="https://www.instagram.com/nairobiprojects/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1"
                fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1DjQCRjiHH/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.3 1.3 16.2 1.2 15 1.2c-3.5 0-5.5 2.1-5.5 5.8V9H6v4h3.5v8z"
                fill="currentColor" stroke="none"/>
            </svg>
            Facebook
          </a>

          <a
            href="https://wa.me/254712559476"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.5 3.5A11.5 11.5 0 0 0 2.4 17.3L1 23l5.9-1.5A11.5 11.5 0 0 0 20.5 3.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9 9 0 1 1 12 21Z"/>
              <path
                d="M8.5 7.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.3 2.2 3.5 5.4 4.7 2.6 1 3.1.8 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.7-.4-.4-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.2-.2.2-.4.2-.7 0-.4-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6z"/>
            </svg>
            WhatsApp
          </a>
        </div>

      </div>

      <div class="copyright">
        <span>
            © ${new Date().getFullYear()} Nairobi Projects.
            All rights reserved.
        </span>
        <a href="#/contact">Let's build something amazing together.</a>
      </div>

    </div>
  </footer>`;
}


function page(title, body, active=""){
 return `<div class="page reveal">${header(active)}${body}${footer()}</div>`;
}

function home(){
 return page("",`
 <section class="hero">
  <div class="hero-bg"></div>

  <div class="container hero-content">
   <div class="eyebrow">Nairobi Projects</div>

   <h1>
    Transforming Spaces.<br>
    Elevating Lives.
   </h1>

   <p>
    We design and build modern, functional and inspiring spaces in Nairobi and beyond.
   </p>

   <div class="actions">
    <a class="btn" href="#/projects">Our Projects</a>
    <a class="btn outline" href="#/services">Our Services</a>
   </div>

  </div>
 </section>

 <section class="section">
  <div class="container split">

   <div class="copy">
    <div class="eyebrow">About Us</div>

    <h2>
     Building Nairobi.<br>
     One Project at a Time.
    </h2>

    <p>
     Nairobi Projects is a full-service construction and interior design company based in Nairobi.
     We create spaces that are not only beautiful but also functional and sustainable.
    </p>

    <p>
     From concept to completion, we are committed to delivering quality, on time and within budget.
    </p>

    <a class="btn" href="#/about">Read More About Us</a>
   </div>

   <div class="split reverse">
    <div class="media">
     <img src="${images.exterior}" alt="Modern Nairobi residence">
    </div>

    <div class="values">

     <div class="value">
      <div class="value-icon">✦</div>
      <div>
       <h3>Quality</h3>
       <p>Superior craftsmanship and attention to detail.</p>
      </div>
     </div>

     <div class="value">
      <div class="value-icon">◈</div>
      <div>
       <h3>Integrity</h3>
       <p>Honest, transparent and reliable service.</p>
      </div>
     </div>

     <div class="value">
      <div class="value-icon">⌁</div>
      <div>
       <h3>Innovation</h3>
       <p>Creative solutions for modern living.</p>
      </div>
     </div>

    </div>
   </div>

  </div>
 </section>

 <section class="section dark">
  <div class="container">

   <div class="section-head">
    <div>
     <div class="eyebrow">Our Services</div>
     <h2>What We Do</h2>
    </div>

    <p>
     From design through construction and finishing,
     we bring every part of your project together.
    </p>
   </div>

   <div class="services-grid">

    ${[
      "Architecture & Design",
      "Construction",
      "Interior Design",
      "Project Management",
      "Renovations"
    ].map((s,i)=>`

      <article class="service">
       <span class="service-num">0${i+1}</span>

       <h3>${s}</h3>

       <p>
        ${[
          "Modern architectural design tailored to your needs and lifestyle.",
          "End-to-end construction services with quality and efficiency.",
          "Beautiful, functional interiors that reflect your personality.",
          "Professional project management from start to finish.",
          "We transform existing spaces to suit modern living standards."
        ][i]}
       </p>
      </article>

    `).join("")}

   </div>

   <div style="margin-top:32px">
    <a class="btn" href="#/services">View All Services</a>
   </div>

  </div>
 </section>

 <section class="section">
  <div class="container">

   <div class="section-head">
    <div>
     <div class="eyebrow">Selected Work</div>
     <h2>Spaces We Have Transformed</h2>
    </div>

    <a class="btn" href="#/projects">View All Projects</a>
   </div>

   <div class="project-grid">
    ${projects.slice(0,6).map(projectCard).join("")}
   </div>

  </div>
 </section>
 <section class="section dark">
  <div class="container split">

   <div class="copy">
    <div class="eyebrow">Start Your Project</div>

    <h2>
     Let's Build Something Amazing Together.
    </h2>

    <p>
     Have a project in mind?
     We'd love to hear from you.
     Send us a message and we'll get back to you shortly.
    </p>

    <a class="btn" href="#/contact">Get a Quote</a>
   </div>

   <div class="media">
    <img src="${images.interior}" alt="Luxury interior">
   </div>

  </div>
 </section>
 `);
}

/* Project card: now links to the project's own page */
function projectCard(p){
 return `
 <article class="project">
  <a href="#/project/${p.slug}">

   <div class="project-img">
    <img src="${p.cover}" alt="${p.name}">
   </div>

   <div class="project-info">
    <span>${p.category}</span>
    <h3>${p.name}</h3>
   </div>

  </a>
 </article>`;
}


function innerHero(label,title,desc=""){
 return `
 <section class="page-hero">
  <div class="container">

   <div class="eyebrow">${label}</div>

   <h1>${title}</h1>

   ${desc ? `<p>${desc}</p>` : ""}

  </div>
 </section>`;
}

function about(){
 return page(
  "About",

  innerHero(
   "About Nairobi Projects",
   "We build spaces with purpose.",
   "A Nairobi-based team bringing together design, construction and interiors under one roof."
  ) +

  `<section class="section">
   <div class="container split">

    <div class="media">
     <img src="${images.exterior}" alt="Nairobi Projects residential design">
    </div>

    <div class="copy">
     <div class="eyebrow">Who We Are</div>

     <h2>
      Design-led. Detail-driven. Built to last.
     </h2>

     <p>
      We believe great spaces begin with listening.
      Our process combines practical construction expertise
      with a strong eye for proportion, material, light and everyday usability.
     </p>

     <p>
      Whether it is a private residence, office, hospitality space or renovation,
      our team works closely with clients from the first idea to the final handover.
     </p>
    </div>

   </div>
  </section>

  <section class="section cream">
   <div class="container">

    <div class="section-head">
     <div>
      <div class="eyebrow">Our Approach</div>

      <h2>
       Simple principles.<br>
       Exceptional execution.
      </h2>
     </div>
    </div>

    <div class="services-grid">

     ${[
       "Quality",
       "Integrity",
       "Innovation",
       "Communication"
     ].map((s,i)=>`

       <article class="service">
        <span class="service-num">0${i+1}</span>

        <h3>${s}</h3>

        <p>
         We make thoughtful decisions, communicate clearly
         and hold every stage of the project to a high standard.
        </p>
       </article>

     `).join("")}

    </div>

   </div>
  </section>`,

  "about"
 );
}

function services(){
 return page(
  "Services",

  innerHero(
   "What We Do",
   "From concept to completion.",
   "A complete suite of services for residential, commercial and interior projects."
  ) +

  `<section class="section">
   <div class="container">

    <div class="services-list">

     ${[
       [
        "Architecture & Design",
        images.exterior,
        "We develop architectural concepts that balance aesthetics, function, context and budget."
       ],
       [
        "Construction",
        images.villa,
        "End-to-end building delivery with careful coordination, quality materials and disciplined site management."
       ],
       [
        "Interior Design",
        images.interior,
        "We create cohesive interiors through space planning, materials, lighting, furniture and bespoke details."
       ],
       [
        "Project Management",
        images.office,
        "We coordinate consultants, contractors, timelines and budgets so clients have one clear point of accountability."
       ],
       [
        "Renovations",
        images.bathroom,
        "We modernise existing properties while respecting what works and improving what doesn't."
       ],
       [
        "Fit-Outs",
        images.office,
        "Complete commercial and residential fit-outs tailored to the identity and needs of each space."
       ]
     ].map((x,i)=>`

       <article class="service-large">

        <span class="eyebrow">0${i+1}</span>

        <h2>${x[0]}</h2>

        <p>${x[2]}</p>

        <div class="media" style="height:270px;margin-top:25px">
         <img src="${x[1]}" alt="${x[0]}">
        </div>

       </article>

     `).join("")}

    </div>

   </div>
  </section>`,

  "services"
 );
}

function projectsPage(){
 return page(
  "Projects",

  innerHero(
   "Our Projects",
   "Spaces we have transformed.",
   "Explore selected residential, commercial and interior work."
  ) +

  `<section class="section">
   <div class="container">

    <div class="filters">

     ${[
       "All",
       "Residential",
       "Commercial",
       "Interior Design"
     ].map((x,i)=>`

       <button
        class="filter ${i===0?"active":""}"
        onclick="filterProjects('${x}',this)"
       >
        ${x}
       </button>

     `).join("")}

    </div>

    <div id="project-grid" class="project-grid">
     ${projects.map(projectCard).join("")}
    </div>

   </div>
  </section>`,

  "projects"
 );
}


/* =====================================================================
   PROJECT DETAIL PAGE  (#/project/<slug>)
   One template, rendered for every project in the `projects` array.
   Sections: hero → overview → photo gallery → previous/next → CTA
   ===================================================================== */

// Photos currently shown in the gallery (changes when a room filter is used)
let activeGallery = [];
let lightboxIndex = 0;

function projectPage(slug){

 const index = projects.findIndex(p => p.slug === slug);

 // Unknown project → fall back to the projects list
 if(index === -1) return projectsPage();

 const p = projects[index];
 const prev = projects[(index - 1 + projects.length) % projects.length];
 const next = projects[(index + 1) % projects.length];

 // Unique rooms in the order they first appear
 const rooms = ["All", ...new Set(p.gallery.map(g => g.room))];

 activeGallery = p.gallery;

 return page(
  p.name,

  /* ---------- HERO ---------- */
  `<section class="page-hero project-hero">
   <div class="container">

    <a class="back-link" href="#/projects">&larr; All Projects</a>

    <div class="eyebrow">${p.category}</div>

    <h1>${p.name}</h1>

    <p>${p.summary}</p>

   </div>
  </section>

  <!-- ${p.name.toUpperCase()}: OVERVIEW -->
  <section class="section">
   <div class="container">

    <div class="project-meta">
     <div>
      <label>Category</label>
      <span>${p.category}</span>
     </div>
     <div>
      <label>Location</label>
      <span>${p.location}</span>
     </div>
     <div>
      <label>Scope</label>
      <span>${p.scope}</span>
     </div>
     <div>
      <label>Photos</label>
      <span>${p.gallery.length}</span>
     </div>
    </div>

    <div class="project-overview">

     <div class="copy">
      <div class="eyebrow">About This Project</div>
      <h2>The brief and the result.</h2>
      ${p.description.map(t => `<p>${t}</p>`).join("")}
     </div>

     <ul class="project-highlights">
      ${p.highlights.map(h => `<li>${h}</li>`).join("")}
     </ul>

    </div>

   </div>
  </section>

  <!-- ${p.name.toUpperCase()}: PHOTO GALLERY -->
  <section class="section cream">
   <div class="container">

    <div class="section-head">
     <div>
      <div class="eyebrow">Gallery</div>
      <h2>Inside ${p.name}</h2>
     </div>
    </div>

    <div class="filters gallery-filters">
     ${rooms.map((r,i)=>`
      <button
       class="filter ${i===0?"active":""}"
       onclick="filterGallery('${slug}','${r}',this)"
      >${r}</button>
     `).join("")}
    </div>

    <div id="gallery" class="gallery">
     ${galleryItems(p.gallery)}
    </div>

   </div>
  </section>

  <!-- ${p.name.toUpperCase()}: PREVIOUS / NEXT PROJECT -->
  <section class="section project-nav-section">
   <div class="container project-nav">

    <a class="project-nav-link" href="#/project/${prev.slug}">
     <span>&larr; Previous project</span>
     <strong>${prev.name}</strong>
    </a>

    <a class="project-nav-link next" href="#/project/${next.slug}">
     <span>Next project &rarr;</span>
     <strong>${next.name}</strong>
    </a>

   </div>
  </section>

  <!-- ${p.name.toUpperCase()}: CALL TO ACTION -->
  <section class="section dark">
   <div class="container split">

    <div class="copy">
     <div class="eyebrow">Start Your Project</div>
     <h2>Planning something similar?</h2>
     <p>
      Tell us about your space and we'll get back to you
      with ideas, timelines and a clear quote.
     </p>
     <a class="btn" href="#/contact">Get a Quote</a>
    </div>

    <div class="media">
     <img src="${p.gallery[0].src}" alt="${p.name}">
    </div>

   </div>
  </section>`,

  "projects"
 );
}

/* Gallery thumbnails — each opens the lightbox at its position */
function galleryItems(list){
 return list.map((g,i)=>`
  <figure class="gallery-item">
   <button type="button" onclick="openLightbox(${i})" aria-label="View ${g.caption}">
    <img src="${g.src}" alt="${g.caption}" loading="lazy">
    <figcaption>
     <span>${g.room}</span>
     ${g.caption}
    </figcaption>
   </button>
  </figure>
 `).join("");
}


/* =========================
   GALLERY ROOM FILTER
========================= */

function filterGallery(slug,room,btn){

 const p = projects.find(x => x.slug === slug);
 if(!p) return;

 document
  .querySelectorAll(".gallery-filters .filter")
  .forEach(b=>b.classList.remove("active"));

 btn.classList.add("active");

 activeGallery =
  room==="All"
   ? p.gallery
   : p.gallery.filter(g=>g.room===room);

 document.querySelector("#gallery").innerHTML =
  galleryItems(activeGallery);
}


/* =========================
   LIGHTBOX
========================= */

function ensureLightbox(){

 let box = document.querySelector("#lightbox");

 if(!box){
  box = document.createElement("div");
  box.id = "lightbox";
  box.className = "lightbox";
  box.setAttribute("role","dialog");
  box.setAttribute("aria-modal","true");
  box.setAttribute("aria-label","Photo viewer");
  box.innerHTML = `
   <button class="lb-close" type="button" onclick="closeLightbox()" aria-label="Close">&times;</button>
   <button class="lb-nav lb-prev" type="button" onclick="stepLightbox(-1)" aria-label="Previous photo">&#8249;</button>
   <figure class="lb-figure">
    <img id="lb-img" src="" alt="">
    <figcaption id="lb-caption"></figcaption>
   </figure>
   <button class="lb-nav lb-next" type="button" onclick="stepLightbox(1)" aria-label="Next photo">&#8250;</button>
  `;
  // Click on the dark backdrop closes the viewer
  box.addEventListener("click",e=>{
   if(e.target===box) closeLightbox();
  });
  document.body.appendChild(box);
 }

 return box;
}

function openLightbox(i){
 lightboxIndex = i;
 showLightboxPhoto();
 ensureLightbox().classList.add("open");
 document.body.classList.add("no-scroll");
}

function showLightboxPhoto(){
 const g = activeGallery[lightboxIndex];
 if(!g) return;
 ensureLightbox();
 const img = document.querySelector("#lb-img");
 img.src = g.src;
 img.alt = g.caption;
 document.querySelector("#lb-caption").textContent =
  `${g.room} — ${g.caption}  (${lightboxIndex+1} / ${activeGallery.length})`;
}

function stepLightbox(dir){
 if(!activeGallery.length) return;
 lightboxIndex =
  (lightboxIndex + dir + activeGallery.length) % activeGallery.length;
 showLightboxPhoto();
}

function closeLightbox(){
 const box = document.querySelector("#lightbox");
 if(box) box.classList.remove("open");
 document.body.classList.remove("no-scroll");
}

// Keyboard: Esc closes, arrows move between photos
document.addEventListener("keydown",e=>{
 const box = document.querySelector("#lightbox");
 if(!box || !box.classList.contains("open")) return;
 if(e.key==="Escape") closeLightbox();
 if(e.key==="ArrowLeft") stepLightbox(-1);
 if(e.key==="ArrowRight") stepLightbox(1);
});


function contact(){
 return page(
  "Contact",

  innerHero(
   "Get In Touch",
   "Let's build something amazing together.",
   "Tell us about your project and our team will get back to you."
  ) +

  `<section class="section">
   <div class="container contact-grid">

    <div class="contact-details">

     <div class="eyebrow">Contact</div>

     <h2>
      Let's talk about your next project.
     </h2>

     <p>
      From a new home to a commercial fit-out or a complete
      interior transformation, we'd love to understand what you're planning.
     </p>

     <div class="contact-item">
      <label>Phone</label>
      <div>
        <a href="tel:+254712559476">
          <span class="contact-icon" aria-hidden="true">☎</span>
          <span>+254 712 559 476</span>
        </a>
      </div>
     </div>

     <div class="contact-item">
      <label>Email</label>
      <div>Nairobiproject@gmail.com</div>
     </div>

     <div class="contact-item">
      <label>Location</label>
      <div>Nairobi, Kenya</div>
     </div>

    </div>

    <form class="form" onsubmit="submitForm(event)">

     <div class="form-grid">

      <div class="field">
       <label>Name</label>
       <input required placeholder="Your name">
      </div>

      <div class="field">
       <label>Email</label>
       <input required type="email" placeholder="Your email">
      </div>

      <div class="field">
       <label>Phone</label>
       <input placeholder="Phone number">
      </div>

      <div class="field">
       <label>Project Type</label>

       <select>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Interior Design</option>
        <option>Renovation</option>
        <option>Other</option>
       </select>

      </div>

      <div class="field full">
       <label>Message</label>

       <textarea
        required
        placeholder="Tell us about your project..."
       ></textarea>
      </div>

      <div class="field full">
       <button class="btn" type="submit">
        Send Message
       </button>
      </div>

     </div>

    </form>

   </div>
  </section>`,

  "contact"
 );
}


/* =========================
   PROJECT FILTER
========================= */

function filterProjects(category,btn){

 document
  .querySelectorAll(".filter")
  .forEach(b=>b.classList.remove("active"));

 btn.classList.add("active");

 const filtered =
  category==="All"
   ? projects
   : projects.filter(p=>p.category===category);

 document.querySelector("#project-grid").innerHTML =
  filtered.map(projectCard).join("");
}


/* =========================
   WHATSAPP ENQUIRY
========================= */

function submitForm(e){

 e.preventDefault();

 const form = e.target;

 // Get all form fields in their current order
 const fields = form.querySelectorAll(
  "input, select, textarea"
 );

 const name = fields[0].value.trim();
 const email = fields[1].value.trim();
 const phone = fields[2].value.trim();
 const service = fields[3].value;
 const message = fields[4].value.trim();

 // Nairobi Projects WhatsApp number
 const whatsappNumber = "254712559476";

 // Create WhatsApp message
 const whatsappMessage =
`Hello Nairobi Projects,

I would like to make an enquiry about a project.

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${service}

Message:
${message}

I found Nairobi Projects through your website.`;

 // Create WhatsApp URL
 const whatsappURL =
  "https://wa.me/" +
  whatsappNumber +
  "?text=" +
  encodeURIComponent(whatsappMessage);

 // Open WhatsApp
 window.open(whatsappURL, "_blank");

 // Reset form
 form.reset();
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

 const nav = document.querySelector(".nav-links");

 nav.style.display =
  nav.style.display === "flex" ? "" : "flex";

 if(nav.style.display === "flex"){

  nav.style.position = "absolute";
  nav.style.top = "82px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "22px";
  nav.style.background = "#101112";
  nav.style.flexDirection = "column";
 }
}


/* =========================
   ROUTER
   #/home, #/about, #/services, #/projects, #/contact
   #/project/<slug>  → individual project page
========================= */

function router(){

 const route =
  location.hash.replace("#/","") || "home";

 const app =
  document.querySelector("#app");

 closeLightbox();

 if(route.startsWith("project/")){

  app.innerHTML = projectPage(route.replace("project/",""));

 } else {

  app.innerHTML =
   route==="home"
    ? home()
    : route==="about"
    ? about()
    : route==="services"
    ? services()
    : route==="projects"
    ? projectsPage()
    : route==="contact"
    ? contact()
    : home();
 }

 window.scrollTo(0,0);
}

window.addEventListener("hashchange",router);

router();