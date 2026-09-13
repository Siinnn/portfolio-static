// Animation typing pour la section About
const fullText = "Développeur passionné, créatif et rigoureux, je transforme vos idées en solutions web ou mobile de maniére innovantes.";
const typingText = document.getElementById('typing-text');
let currentIndex = 0;
function typeWriter() {
  if (typingText && currentIndex <= fullText.length) {
    typingText.textContent = fullText.slice(0, currentIndex);
    currentIndex++;
    setTimeout(typeWriter, 50);
  } else if (currentIndex > fullText.length) {
    const cursor = document.querySelector('.typing-cursor');
    if (cursor) cursor.style.display = 'none';
  }
}
typeWriter();

// Navbar scroll effect
let lastScrollY = window.scrollY;
let isVisible = true;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add('hidden');
    isVisible = false;
  } else if (currentScrollY < lastScrollY) {
    navbar.classList.remove('hidden');
    isVisible = true;
  }
  lastScrollY = currentScrollY;
  if (currentScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.getElementById('logo-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Compétences utilisées par les projets (tags filtrables)
const skills = [
  { id: 'react', name: 'React', color: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', color: '#e2e8f0' },
  { id: 'javascript', name: 'JavaScript', color: '#F7DF1E' },
  { id: 'html', name: 'HTML', color: '#E34F26' },
  { id: 'css', name: 'CSS', color: '#1572B6' },
  { id: 'git', name: 'Git', color: '#F05032' },
  { id: 'php', name: 'PHP', color: '#777BB4' },
  { id: 'sql', name: 'SQL', color: '#4479A1' },
  { id: 'flutter', name: 'Flutter', color: '#02569B' },
  { id: 'firebase', name: 'Firebase', color: '#FFCA28' },
  { id: 'django', name: 'Django', color: '#092E20' },
  { id: 'python', name: 'Python', color: '#3776AB' },
  { id: 'typescript', name: 'TypeScript', color: '#3178C6' },
  { id: 'tailwind', name: 'Tailwind CSS', color: '#06B6D4' },
  { id: 'supabase', name: 'Supabase', color: '#3ECF8E' },
  { id: 'nodejs', name: 'Node.js', color: '#68A063' },
  { id: 'vite', name: 'Vite', color: '#8b7cf6' },
  { id: 'leaflet', name: 'Leaflet', color: '#77b453' },
  { id: 'ejs', name: 'EJS', color: '#b4ca65' }
];

// Mes projets, classés du plus significatif au plus exploratoire.
// badge : nature du projet (Client, Perso, Workshop, Jeu, Exercice)
// siteUrl : site en ligne — githubUrl : dépôt source 
const projects = [
  {
    id: 1,
    title: "Boucherie Halal MGH",
    badge: "Client",
    description: "Site vitrine et back-office pour une boucherie halal à Brest, avec catalogue produit et gestion autonome par le commerçant.",
    skills: ['nextjs', 'typescript', 'tailwind', 'supabase', 'nodejs'],
    features: [
      "Catalogue produits par catégorie avec prix et photos",
      "Offres promotionnelles limitées dans le temps",
      "Tableau de bord admin pour gérer produits, galerie, horaires",
      "Galerie photo publique et fiche contact/localisation",
      "Fonctionne même sans base de données (mode démo en JSON)",
      "Design responsive sur mesure (bordeaux, crème, anthracite)"
    ],
    siteUrl: "https://boucherie-mgh.vercel.app",
    githubUrl: "https://github.com/Siinnn/boucherie-mgh"
  },
  {
    id: 2,
    title: "JobReady",
    badge: "Workshop France Travail",
    description: "Outil web de création de CV et lettres de motivation orienté compatibilité ATS, développé pour mes ateliers à France Travail Brest Marine.",
    skills: ['nextjs', 'react', 'tailwind', 'javascript'],
    features: [
      "Parcours guidé en 7 étapes pour construire son CV",
      "Double score qualité générale + compatibilité ATS avec 19 vérifications",
      "Éditeur en double panneau avec aperçu en temps réel et export PDF",
      "Création de lettres de motivation en 3 étapes (structure en 4 paragraphes)",
      "Assistant de reformulation et générateur d'accroche",
      "Espace admin pour centraliser des offres d'emploi"
    ],
    siteUrl: "https://jobready-five.vercel.app"
  },
  {
    id: 3,
    title: "AFAM Web",
    badge: "Client associatif",
    description: "Application web moderne pour l'Association des Femmes Actives de Mutsumudu (Comores).",
    skills: ['react', 'javascript', 'git', 'supabase', 'tailwind', 'typescript'],
    features: [
      "Dashboard Admin complet pour la gestion de contenu",
      "Espace membre sécurisé avec authentification Supabase",
      "Système de blog et gestion d'événements",
      "Conformité RGPD (Export/Suppression de données)",
      "Architecture moderne avec Next.js 15 App Router",
      "Design responsive avec Tailwind CSS v4"
    ],
    siteUrl: "https://afam-web.vercel.app/"
  },
  {
    id: 4,
    title: "Shoffeur",
    badge: "Perso",
    description: "Application mobile de gestion de courses VTC en temps réel pour administrateur unique",
    skills: ['flutter', 'firebase', 'git'],
    features: [
      "Architecture modulaire (Atomic Design)",
      "Data Streaming temps réel (Firestore)",
      "Sécurité administrateur (Email Whitelisting)",
      "Dashboard de statistiques et revenus",
      "Optimisation native (60 FPS) iOS/Android",
      "Gestion d'états de chargement (Shimmers)"
    ]
  },
  {
    id: 5,
    title: "Undercover",
    badge: "Jeu",
    description: "Jeu de déduction sociale à jouer entre amis : chaque joueur reçoit un rôle en secret et doit démasquer l'imposteur.",
    skills: ['nextjs', 'typescript', 'react'],
    features: [
      "Création de partie avec pseudo et couleur personnalisés",
      "Mode hôte ou rejoindre une partie existante",
      "Parties de 3 à 8 joueurs",
      "Compte créateur avec fonctionnalités additionnelles",
      "Interface minimaliste centrée sur la rapidité de jeu"
    ],
    siteUrl: "https://undercover-rose.vercel.app"
  },
  {
    id: 6,
    title: "Gestion de Films",
    badge: "Exercice",
    description: "Application web de gestion de films avec système de notation et commentaires",
    skills: ['php', 'sql', 'html', 'css', 'javascript', 'git'],
    videoUrl: "https://www.youtube.com/embed/0lBw_ptKmJY",
    features: [
      "Gestion complète des films et acteurs",
      "Système de notation et commentaires",
      "Interface d'administration sécurisée",
      "Base de données relationnelle optimisée",
      "Recherche avancée par critères multiples",
      "Interface utilisateur intuitive et responsive"
    ]
  },
  {
    id: 7,
    title: "Bibliodrive Django",
    badge: "Exercice",
    description: "Site web de gestion de bibliothèque avec interface d'administration Django",
    skills: ['django', 'python', 'html', 'css', 'sql'],
    features: [
      "Gestion complète des livres et auteurs",
      "Interface d'administration Django personnalisée",
      "Système de recherche avancé",
      "Gestion des emprunts et retours",
      "Statistiques et rapports"
    ]
  },
  {
    id: 8,
    title: "Recipes App",
    badge: "Perso",
    description: "Application de recherche de recettes avec favoris et authentification, connectée à l'API Tasty.",
    skills: ['react', 'typescript', 'css'],
    features: [
      "Recherche de recettes par nom ou ingrédient",
      "Fiche détaillée : ingrédients, temps de cuisson, instructions",
      "Gestion d'une liste de favoris",
      "Authentification et persistance via localStorage",
      "Interface responsive desktop et mobile"
    ],
    githubUrl: "https://github.com/Siinnn/Recipes-app"
  },
  {
    id: 9,
    title: "Carte Interactive",
    badge: "Perso",
    description: "Carte interactive générée à partir d'images TIFF géoréférencées, avec zoom et navigation fluide.",
    skills: ['react', 'vite', 'leaflet', 'css'],
    features: [
      "Affichage d'une carte interactive avec Leaflet",
      "Zoom et déplacement fluides",
      "Découpage de l'image en tuiles pour un rendu performant",
      "Interface responsive optimisée mobile",
      "Panneau d'information sur le procédé TIFF → carte web"
    ],
    githubUrl: "https://github.com/Siinnn/carte-interactive"
  },
  {
    id: 10,
    title: "Netflix Clone",
    badge: "Exercice",
    description: "Reproduction de l'interface Netflix pour s'entraîner à la mise en page et au rendu serveur.",
    skills: ['nodejs', 'ejs', 'css'],
    features: [
      "Rendu de pages côté serveur avec EJS",
      "Reproduction fidèle de la grille et du header Netflix",
      "Structure de projet Node.js classique"
    ],
    githubUrl: "https://github.com/Siinnn/netflix"
  },
  {
    id: 11,
    title: "Ce portfolio",
    badge: "Perso",
    description: "Mon portfolio personnel, statique et sans framework, avec animations et filtrage des projets par compétences.",
    image: "assets/logo-y.png",
    skills: ['javascript', 'html', 'css'],
    features: [
      "Design sombre moderne et responsive",
      "Animations fluides au scroll",
      "Filtrage des projets par compétences",
      "Modale vidéo pour les démonstrations",
      "Navigation fluide entre les sections"
    ],
    githubUrl: "https://github.com/Siinnn/portfolio-static"
  }
];

let selectedSkills = [];
const skillsFilter = document.getElementById('skills-filter');
const projectsGrid = document.getElementById('projects-grid');
const modalRoot = document.getElementById('modal-root');

// Gestion des animations au scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observer les sections existantes
document.querySelectorAll('.section, .fade-in').forEach(element => {
  observer.observe(element);
});

// Ne montrer dans le filtre que les compétences réellement utilisées par un projet
const usedSkillIds = new Set(projects.flatMap(p => p.skills));
const filterableSkills = skills.filter(s => usedSkillIds.has(s.id));

function renderSkillsFilter() {
  skillsFilter.innerHTML = '';
  filterableSkills.forEach(skill => {
    const btn = document.createElement('button');
    btn.className = 'skill-tag' + (selectedSkills.includes(skill.id) ? ' selected' : '');
    btn.textContent = skill.name;
    btn.style.setProperty('--skill-color', skill.color);
    btn.style.backgroundColor = selectedSkills.includes(skill.id) ? skill.color : 'transparent';
    btn.onclick = () => {
      if (selectedSkills.includes(skill.id)) {
        selectedSkills = selectedSkills.filter(id => id !== skill.id);
      } else {
        selectedSkills.push(skill.id);
      }
      renderSkillsFilter();
      renderProjects();
    };
    skillsFilter.appendChild(btn);
  });
}

function renderProjects() {
  projectsGrid.innerHTML = '';
  const filtered = projects.filter(project =>
    selectedSkills.length === 0 || selectedSkills.every(skill => project.skills.includes(skill))
  );

  if (filtered.length === 0) {
    projectsGrid.innerHTML = '<p class="projects-empty">Aucun projet ne correspond à cette combinaison de compétences.</p>';
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.transitionDelay = `${index * 0.08}s`;
    card.style.setProperty('--skill-color', skills.find(s => s.id === project.skills[0])?.color || 'var(--primary)');
    card.innerHTML = `
      <div class="project-header">
        ${project.badge ? `<span class="project-badge">${project.badge}</span>` : ''}
        <h3>${project.title}</h3>
      </div>
      <div class="project-content">
        <p>${project.description}</p>
        <div class="project-skills">
          ${project.skills.map(skillId => {
      const skill = skills.find(s => s.id === skillId);
      if (!skill) return '';
      return `<span class="project-skill-tag" style="--skill-color: ${skill.color}">${skill.name}</span>`;
    }).join('')}
        </div>
        ${project.features ? `
        <div class="project-features">
          <h4>Principales fonctionnalités</h4>
          <ul>
            ${project.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>` : ''}
        <div class="project-actions">
          ${project.videoUrl ? `<button class="project-link" data-video="${project.videoUrl}"><i class="fas fa-play"></i> Démo Vidéo</button>` : ''}
          ${project.siteUrl ? `<a href="${project.siteUrl}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-external-link-alt"></i> Voir le site</a>` : ''}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-secondary"><i class="fab fa-github"></i> Code source</a>` : ''}
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
    // Observer the new card
    observer.observe(card);
  });
  // Ajout des listeners pour les boutons vidéo
  document.querySelectorAll('.project-link[data-video]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      openModal(btn.getAttribute('data-video'));
    });
  });
}

function openModal(videoUrl) {
  modalRoot.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="modal-close">×</button>
        <iframe width="100%" height="100%" src="${videoUrl}" title="Démonstration du projet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;
  document.querySelector('.modal-close').onclick = closeModal;
  document.querySelector('.modal-overlay').onclick = closeModal;
  document.querySelector('.modal-content').onclick = e => e.stopPropagation();
}

function closeModal() {
  modalRoot.innerHTML = '';
}


renderSkillsFilter();
renderProjects();

// Gestion de l'écran de chargement
window.addEventListener('load', () => {
  const loader = document.querySelector('.loading');
  if (loader) {
    loader.classList.add('hidden');
  }
  initMagneticEffect();
});

function initMagneticEffect() {
  const magneticElements = document.querySelectorAll('.social-links a, .submit-btn, .project-link, .btn');

  magneticElements.forEach(item => {
    item.addEventListener('mousemove', e => {
      const { left, top, width, height } = item.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      item.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = `translate(0px, 0px)`;
    });
  });
}
