// Animation typing pour la section About
const fullText = "Développeur passionné, créatif et rigoureux, je transforme vos idées en solutions web innovantes.";
const typingText = document.getElementById('typing-text');
let currentIndex = 0;
function typeWriter() {
  if (typingText && currentIndex <= fullText.length) {
    typingText.textContent = fullText.slice(0, currentIndex);
    currentIndex++;
    setTimeout(typeWriter, 50);
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

// Projets et compétences (repris du composant React)
const skills = [
  { id: 'react', name: 'React', color: '#61DAFB' },
  { id: 'javascript', name: 'JavaScript', color: '#F7DF1E' },
  { id: 'html', name: 'HTML', color: '#E34F26' },
  { id: 'css', name: 'CSS', color: '#1572B6' },
  { id: 'git', name: 'Git', color: '#F05032' },
  { id: 'php', name: 'PHP', color: '#777BB4' },
  { id: 'sql', name: 'SQL', color: '#4479A1' },
  { id: 'flutter', name: 'Flutter', color: '#02569B' },
  { id: 'firebase', name: 'Firebase', color: '#FFCA28' },
  { id: 'django', name: 'Django', color: '#092E20' },
  { id: 'python', name: 'Python', color: '#3776AB' }
];

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Mon portfolio personnel avec animations et design moderne",
    image: "assets/logo-y.png",
    skills: ['react', 'javascript', 'html', 'css'],
    features: [
      "Design moderne et responsive",
      "Animations fluides au scroll",
      "Filtrage des projets par compétences",
      "Modale vidéo pour les démonstrations",
      "Thème sombre avec accents bleus",
      "Navigation fluide entre les sections"
    ]
  },
  {
    id: 2,
    title: "Gestion de Films",
    description: "Application web de gestion de films avec système de notation et commentaires",
    image: "assets/cinema.jpg",
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
    id: 3,
    title: "TodoList Flutter",
    description: "Application mobile de gestion de tâches avec authentification Firebase et synchronisation en temps réel",
    image: "assets/todolist.jpg",
    skills: ['flutter', 'firebase', 'javascript', 'git'],
    videoUrl: "https://www.youtube.com/embed/ltDjm42RDXw",
    features: [
      "Système d'authentification complet",
      "Gestion de tâches personnalisée par utilisateur",
      "Synchronisation en temps réel",
      "Interface utilisateur moderne et intuitive",
      "Notifications push"
    ]
  },
  {
    id: 4,
    title: "Bibliodrive Django",
    description: "Site web de gestion de bibliothèque avec interface d'administration Django",
    image: "assets/bibliodrive.jpg",
    skills: ['django', 'python', 'html', 'css', 'sql'],
    features: [
      "Gestion complète des livres et auteurs",
      "Interface d'administration Django personnalisée",
      "Système de recherche avancé",
      "Gestion des emprunts et retours",
      "Statistiques et rapports"
    ]
  }
];

let selectedSkills = [];
const skillsFilter = document.getElementById('skills-filter');
const projectsGrid = document.getElementById('projects-grid');
const modalRoot = document.getElementById('modal-root');

function renderSkillsFilter() {
  skillsFilter.innerHTML = '';
  skills.forEach(skill => {
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
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-header">
        <h3>${project.title}</h3>
      </div>
      <div class="project-content">
        <p>${project.description}</p>
        <div class="project-skills">
          ${project.skills.map(skillId => {
            const skill = skills.find(s => s.id === skillId);
            return `<span class="project-skill-tag" style="--skill-color: ${skill.color}">${skill.name}</span>`;
          }).join('')}
        </div>
        ${project.features ? `
        <div class="project-features" style="--skill-color: ${skills.find(s => s.id === project.skills[0]).color}">
          <h4>Fonctionnalités</h4>
          <ul>
            ${project.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>` : ''}
        ${project.videoUrl ? `<button class="project-link" data-video="${project.videoUrl}">En savoir plus</button>` : ''}
      </div>
    `;
    projectsGrid.appendChild(card);
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