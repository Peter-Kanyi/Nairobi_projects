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
  stairs: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
};

const projects = [
  ["Kenya Homes","Residential",images.villa],
  ["Ruiru Office Interior","Interior Design",images.living],
  ["Westlands Office","Commercial",images.office],
  ["Valeria Villas","Interior Design",images.bedroom],
  ["Riverside Apartments","Residential",images.exterior],
  ["Kileleshwa Home","Interior Design",images.kitchen]
];

const posts = [
  ["Interior Design Trends Shaping Nairobi Homes",images.interior,"10 June 2026"],
  ["Why Quality Construction Matters",images.exterior,"28 May 2026"],
  ["Sustainable Building Practices We Love",images.villa,"15 May 2026"]
];

function header(active){
 return `<header class="header"><div class="container nav">
   <a class="logo" href="#/"><img src="images/logo.jpg" alt="Nairobi Projects — Design & Build"></a>
   <nav class="nav-links">
    ${["about","services","projects","blog","contact"].map(x=>`<a class="${active===x?'active':''}" href="#/${x}">${x}</a>`).join("")}
   </nav>
   <a class="cta" href="#/contact">Get a Quote</a>
   <button class="menu" onclick="toggleMenu()">☰</button>
 </div></header>`;
}

function footer(){
 return `<footer class="footer"><div class="container">
  <div class="footer-grid">
   <div>
    <a class="logo">
      <span class="logo-mark"></span>
      <span>NAIROBI<small>PROJECTS</small></span>
    </a>
    <p>Designing and building modern, functional spaces across Nairobi and beyond.</p>
   </div>

   <div>
    <h4>Explore</h4>
    <a href="#/about">About</a>
    <a href="#/services">Services</a>
    <a href="#/projects">Projects</a>
   </div>

   <div>
    <h4>Services</h4>
    <a href="#/services">Architecture & Design</a>
    <a href="#/services">Construction</a>
    <a href="#/services">Interior Design</a>
    <a href="#/services">Renovations</a>
   </div>

   <div>
    <h4>Contact</h4>
    <p>
      Nairobi, Kenya<br>
      +254 712 559 476<br>
      +254 722 540 680<br>
      Nairobiproject@gmail.com
    </p>
   </div>
  </div>

  <div class="copyright">
    © 2026 Nairobi Projects. All rights reserved.
  </div>
 </div></footer>`;
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

   <div class="scroll">Scroll down ↓</div>
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

 <section class="section cream">
  <div class="container">

   <div class="section-head">
    <div>
     <div class="eyebrow">Our Insights</div>
     <h2>Latest News & Ideas</h2>
    </div>

    <a class="btn outline" style="color:#111;border-color:#111" href="#/blog">
     View All Articles
    </a>
   </div>

   <div class="blog-grid">
    ${posts.map(postCard).join("")}
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

function projectCard(p){
 return `
 <article class="project">
  <a href="#/contact">

   <div class="project-img">
    <img src="${p[2]}" alt="${p[0]}">
   </div>

   <div class="project-info">
    <span>${p[1]}</span>
    <h3>${p[0]}</h3>
   </div>

  </a>
 </article>`;
}

function postCard(p){
 return `
 <article class="post">

  <div class="post-img">
   <img src="${p[1]}" alt="${p[0]}">
  </div>

  <div class="post-body">
   <span class="post-date">${p[2]}</span>

   <h3>${p[0]}</h3>

   <p>
    Ideas, practical insights and inspiration from the Nairobi Projects team.
   </p>

   <a class="post-date" href="#/blog">
    Read More →
   </a>
  </div>

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

function blog(){
 return page(
  "Blog",

  innerHero(
   "Our Insights",
   "Latest news & ideas.",
   "Thoughts on architecture, construction, interiors and creating better spaces in Nairobi."
  ) +

  `<section class="section">
   <div class="container">

    <div class="blog-grid">

     ${posts.concat([
       [
        "Making Small Spaces Feel Bigger",
        images.kitchen,
        "03 May 2026"
       ],
       [
        "Choosing Materials for Nairobi Homes",
        images.bathroom,
        "22 April 2026"
       ],
       [
        "Lighting That Changes a Room",
        images.stairs,
        "08 April 2026"
       ]
     ]).map(postCard).join("")}

    </div>

   </div>
  </section>`,

  "blog"
 );
}

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
       +254 712 559 476<br>
       +254 722 540 680
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
   : projects.filter(p=>p[1]===category);

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
========================= */

function router(){

 const route =
  location.hash.replace("#/","") || "home";

 const app =
  document.querySelector("#app");

 app.innerHTML =
  route==="home"
   ? home()
   : route==="about"
   ? about()
   : route==="services"
   ? services()
   : route==="projects"
   ? projectsPage()
   : route==="blog"
   ? blog()
   : route==="contact"
   ? contact()
   : home();

 window.scrollTo(0,0);
}

window.addEventListener("hashchange",router);

router();