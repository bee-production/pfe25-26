// ============================================
// PFE25-26 Platform - Main Application
// ============================================

// Global state
let pfebooks = [];
let filteredPfebooks = [];
let allTags = new Set();
let currentFilter = 'all';

// DOM Elements
const pfebooksGrid = document.getElementById('pfebooks-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const scrollTopBtn = document.getElementById('scroll-top');
const header = document.getElementById('header');

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

async function init() {
  await loadPfebooks();
  setupEventListeners();
  animateCounters();
}

// Load PFE Books from localStorage or JSON
async function loadPfebooks() {
  try {
    // Try to load from localStorage first (admin modifications)
    const storedData = localStorage.getItem('pfebooks');
    
    if (storedData) {
      pfebooks = JSON.parse(storedData);
    } else {
      // Load from JSON file
      const response = await fetch('data/pfebooks.json');
      if (!response.ok) throw new Error('Failed to load data');
      pfebooks = await response.json();
    }
    
    // Sort alphabetically by company name
    pfebooks.sort((a, b) => a.company.localeCompare(b.company, 'fr', { sensitivity: 'base' }));
    
    filteredPfebooks = [...pfebooks];
    
    renderPfebooks();
    updateStats();
  } catch (error) {
    console.error('Error loading PFE Books:', error);
    pfebooksGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-exclamation-triangle"></i>
        <h3>Erreur de chargement</h3>
        <p>Impossible de charger les données. Veuillez réessayer plus tard.</p>
      </div>
    `;
  }
}

// Render PFE Books grid
function renderPfebooks() {
  if (filteredPfebooks.length === 0) {
    pfebooksGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  pfebooksGrid.innerHTML = filteredPfebooks.map((book, index) => `
    <article class="pfebook-card" style="animation-delay: ${index * 0.05}s">
      <div class="card-image">
        <img src="${book.image}" alt="${book.company}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/1a2744/38bdf8?text=${encodeURIComponent(book.company)}'">
        <div class="card-overlay">
          ${book.linkedin ? `
            <a href="${book.linkedin}" target="_blank" rel="noopener noreferrer" class="overlay-btn linkedin" title="Voir sur LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          ` : ''}
          ${book.pdf ? `
            <a href="${book.pdf}" target="_blank" rel="noopener noreferrer" class="overlay-btn pdf" title="Télécharger le PDF">
              <i class="fas fa-file-pdf"></i>
            </a>
          ` : ''}
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-company">${book.company}</h3>
        <div class="card-actions">
          ${book.linkedin ? `
            <a href="${book.linkedin}" target="_blank" rel="noopener noreferrer" class="card-btn linkedin-btn">
              <i class="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          ` : '<span class="card-btn linkedin-btn" style="opacity:0.3;cursor:not-allowed;"><i class="fab fa-linkedin-in"></i> Non disponible</span>'}
          ${book.pdf ? `
            <a href="${book.pdf}" target="_blank" rel="noopener noreferrer" class="card-btn pdf-btn">
              <i class="fas fa-file-pdf"></i>
              PDF
            </a>
          ` : '<span class="card-btn pdf-btn" style="opacity:0.3;cursor:not-allowed;"><i class="fas fa-file-pdf"></i> Non disponible</span>'}
        </div>
      </div>
    </article>
  `).join('');
}

// Update statistics
function updateStats() {
  document.getElementById('companies-count').textContent = pfebooks.length;
  document.getElementById('pfebooks-count').textContent = pfebooks.length;
}

// Animate counter numbers
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    if (isNaN(target)) return;
    
    counter.textContent = '0';
    
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener('input', handleSearch);
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Scroll to top button
  scrollTopBtn.addEventListener('click', scrollToTop);
}

// Handle search
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  filteredPfebooks = pfebooks.filter(book => 
    book.company.toLowerCase().includes(searchTerm)
  );
  
  renderPfebooks();
}

// Handle scroll
function handleScroll() {
  // Header effect
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Scroll to top button visibility
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
