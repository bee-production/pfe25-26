// ============================================
// PFE25-26 Platform - Admin Dashboard
// ============================================

// Session key
const SESSION_KEY = 'pfe_admin_session';

// Available files (will be populated dynamically)
const availableImages = [
  "ACTIA Engineering Services.png",
  "ADS.png",
  "Akkurad GmbH.png",
  "Alight MEA.png",
  "AmazedIT.png",
  "Ampere Software Technology.png",
  "Anypli.png",
  "Appaxis Innovations.png",
  "Asteroidea.png",
  "ATS - Digital Dev.png",
  "Axe Finance.png",
  "AYMAX Tunisie.png",
  "BAKO MOTORS.png",
  "BePrimeTech.png",
  "Binit Nearshore Services (BinitNS).png",
  "CAFPI.png",
  "Capgemini Enginering.png",
  "CAVEO AUTOMOTIVE TUNISIA.png",
  "CETIME.png",
  "Chifco.png",
  "Consultim IT.png",
  "ContinuousNet.png",
  "Contractzlab.png",
  "DarBlockchain.png",
  "DNEXT Intelligence SA.png",
  "Docaposte Tunisie.png",
  "DotJcoM LTD.png",
  "DRAXLMAIER.png",
  "Drone Discovery.png",
  "E-Tafakna.png",
  "Eddium.png",
  "EITA INNOV.png",
  "EmyeHR.png",
  "EXCELLIA Solutions.png",
  "Exypnotech.png",
  "EY.png",
  "Full Remote Factory.png",
  "GPRO Consulting.png",
  "Graines d'Entrepreneurs.png",
  "Groupe SFM.png",
  "GTIFinancial Software.png",
  "habemus! Solutions.png",
  "Hanoutik.png",
  "Healio.png",
  "HUTCHINSON.png",
  "hydatis.png",
  "Infotech Consulting Services (ICS).png",
  "Integration Objects.png",
  "ITANIS.png",
  "KPMG - Tech Solutions.png",
  "Krenova Consulting.png",
  "LEONI TUNISIA.png",
  "LinSoft.png",
  "MEDIANET.png",
  "MEDIWAVE.png",
  "MINOTORE.png",
  "MPBS.png",
  "MVPNest.png",
  "NeoXam Tunisie.png",
  "Nexor Robotics.png",
  "Nolyss Digital.png",
  "Numeryx Tunisie.png",
  "OCP Maintenance Solutions.png",
  "Oddo BHF tunis.png",
  "OLINDIAS.png",
  "OliveSoft.png",
  "One Tech Business Solutions.png",
  "OneTech Careers.png",
  "Orange Tunisie.png",
  "OX4Labs.png",
  "Pearls Consulting Tunisie.png",
  "ProVerdy.png",
  "Pursuit Aerospace.png",
  "Qualipro.png",
  "Safran.png",
  "Sagemcom.png",
  "Security Accent GmbH.png",
  "SeekMake.png",
  "SIRYOS.png",
  "Smartovate.png",
  "Sofrecom Tunisie.png",
  "SoluMove.png",
  "SOPAL.png",
  "Spark-it Group.png",
  "Stark Solutions.png",
  "STMicroelectronics Tunisie.png",
  "SYSTEO DIGITAL.png",
  "TALYS.png",
  "Tanit Healthcare Technologies.png",
  "Tech-Expert.png",
  "Telnet.png",
  "Testohire.png",
  "Timsoft Group.png",
  "TPEG.png",
  "TPLUS Innovation.png",
  "Tradrly.png",
  "TUNAV IT Group.png",
  "Tuniform.png",
  "Tunisie Telecom.png",
  "Tynass IT.png",
  "Unilog.png",
  "VALUE.png",
  "VISEO.png",
  "Voltwise Solutions.png",
  "WayCare.png",
  "Wevioo.png",
  "WICMIC.png",
  "WiseVision AI Technologies.png",
  "YUCCAINFO.png",
  "YUMA Tunisia.png"
];

const availablePDFs = [
  "ACTIA Engineering Services.pdf",
  "ADS.pdf",
  "Akkurad GmbH.pdf",
  "Alight MEA.pdf",
  "AmazedIT.pdf",
  "Ampere Software Technology.pdf",
  "Anypli.pdf",
  "Appaxis Innovations.pdf",
  "ASQII - HealthTech.pdf",
  "Asteroidea.pdf",
  "ATS - Digital Dev.pdf",
  "Axe Finance.pdf",
  "AYMAX Tunisie.pdf",
  "BAKO MOTORS.pdf",
  "BePrimeTech.pdf",
  "Binit Nearshore Services (BinitNS).pdf",
  "CAFPI.pdf",
  "Capgemini Enginering.pdf",
  "CAVEO AUTOMOTIVE TUNISIA.pdf",
  "CETIME.pdf",
  "Chifco.pdf",
  "Consultim IT.pdf",
  "ContinuousNet.pdf",
  "Contractzlab.pdf",
  "DarBlockchain.pdf",
  "DNEXT Intelligence SA.pdf",
  "Docaposte Tunisie.pdf",
  "DotJcoM LTD.pdf",
  "DRAXLMAIER.pdf",
  "Drone Discovery.pdf",
  "E-Tafakna.pdf",
  "Eddium.pdf",
  "EITA INNOV.pdf",
  "EmyeHR.pdf",
  "EXCELLIA Solutions.pdf",
  "Exypnotech.pdf",
  "EY.pdf",
  "Full Remote Factory.pdf",
  "GPRO Consulting.pdf",
  "Graines d'Entrepreneurs.pdf",
  "Groupe SFM.pdf",
  "GTIFinancial Software.pdf",
  "habemus! Solutions.pdf",
  "Hanoutik.pdf",
  "Healio.pdf",
  "HUTCHINSON.pdf",
  "hydatis.pdf",
  "Infotech Consulting Services (ICS).pdf",
  "Integration Objects.pdf",
  "ITANIS.pdf",
  "KPMG - Tech Solutions.pdf",
  "Krenova Consulting.pdf",
  "LEONI TUNISIA.pdf",
  "LinSoft.pdf",
  "MEDIANET.pdf",
  "MEDIWAVE.pdf",
  "MINOTORE.pdf",
  "MPBS.pdf",
  "MVPNest.pdf",
  "NeoXam Tunisie.pdf",
  "Nexor Robotics.pdf",
  "Nolyss Digital.pdf",
  "Numeryx Tunisie.pdf",
  "OCP Maintenance Solutions.pdf",
  "Oddo BHF tunis.pdf",
  "OLINDIAS.pdf",
  "OliveSoft.pdf",
  "One Tech Business Solutions.pdf",
  "OneTech Careers.pdf",
  "Orange Tunisie.pdf",
  "OX4Labs.pdf",
  "Pearls Consulting Tunisie.pdf",
  "ProVerdy.pdf",
  "Pursuit Aerospace.pdf",
  "Qualipro.pdf",
  "Safran.pdf",
  "Sagemcom.pdf",
  "Security Accent GmbH.pdf",
  "SeekMake.pdf",
  "SIRYOS.pdf",
  "Smartovate.pdf",
  "Sofrecom Tunisie.pdf",
  "SoluMove.pdf",
  "SOPAL.pdf",
  "Spark-it Group.pdf",
  "Stark Solutions.pdf",
  "STMicroelectronics Tunisie.pdf",
  "SYSTEO DIGITAL.pdf",
  "TALYS.pdf",
  "Tanit Healthcare Technologies.pdf",
  "Tech-Expert.pdf",
  "Telnet.pdf",
  "Testohire.pdf",
  "Timsoft Group.pdf",
  "TPEG.pdf",
  "TPLUS Innovation.pdf",
  "Tradrly.pdf",
  "TUNAV IT Group.pdf",
  "Tuniform.pdf",
  "Tunisie Telecom.pdf",
  "Tynass IT.pdf",
  "Unilog.pdf",
  "VALUE.pdf",
  "VISEO.pdf",
  "Voltwise Solutions.pdf",
  "WayCare.pdf",
  "Wevioo.pdf",
  "WICMIC.pdf",
  "WiseVision AI Technologies.pdf",
  "YUCCAINFO.pdf",
  "YUMA Tunisia.pdf"
];

// State
let pfebooks = [];
let tags = [];
let deleteTargetId = null;

// DOM Elements
const totalCompanies = document.getElementById('total-companies');
const totalPdfs = document.getElementById('total-pdfs');
const totalTags = document.getElementById('total-tags');
const pfebooksTbody = document.getElementById('pfebooks-tbody');
const addForm = document.getElementById('add-pfebook-form');
const companyImageSelect = document.getElementById('company-image');
const companyPdfSelect = document.getElementById('company-pdf');
const tagsInputContainer = document.getElementById('tags-input');
const tagInput = document.getElementById('tag-input');
const listSearch = document.getElementById('list-search');
const deleteModal = document.getElementById('delete-modal');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
  // Check authentication
  if (!isLoggedIn()) {
    window.location.href = 'admin.html';
    return;
  }
  
  loadPfebooks();
  populateSelects();
  setupEventListeners();
}

// Check login status
function isLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === 'authenticated';
}

// Load PFE Books from localStorage or JSON
async function loadPfebooks() {
  // Try to load from localStorage first
  const storedData = localStorage.getItem('pfebooks');
  
  if (storedData) {
    pfebooks = JSON.parse(storedData);
  } else {
    // Load from JSON file
    try {
      const response = await fetch('data/pfebooks.json');
      pfebooks = await response.json();
      savePfebooks();
    } catch (error) {
      console.error('Error loading PFE Books:', error);
      pfebooks = [];
    }
  }
  
  updateStats();
  renderTable();
}

// Save PFE Books to localStorage
function savePfebooks() {
  localStorage.setItem('pfebooks', JSON.stringify(pfebooks));
}

// Populate select dropdowns
function populateSelects() {
  // Images
  companyImageSelect.innerHTML = '<option value="">Sélectionnez une image...</option>';
  availableImages.forEach(img => {
    companyImageSelect.innerHTML += `<option value="img/${img}">${img}</option>`;
  });
  
  // PDFs
  companyPdfSelect.innerHTML = '<option value="">Sélectionnez un PDF...</option>';
  availablePDFs.forEach(pdf => {
    companyPdfSelect.innerHTML += `<option value="pfebooks/${pdf}">${pdf}</option>`;
  });
}

// Update statistics
function updateStats() {
  totalCompanies.textContent = pfebooks.length;
  totalPdfs.textContent = pfebooks.length;
  
  // Count unique tags
  const allTags = new Set();
  pfebooks.forEach(book => {
    if (book.tags) {
      book.tags.forEach(tag => allTags.add(tag));
    }
  });
  totalTags.textContent = allTags.size;
}

// Render table
function renderTable(searchTerm = '') {
  const filtered = pfebooks.filter(book => 
    book.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filtered.length === 0) {
    pfebooksTbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 2rem; color: var(--gray);">
          Aucun PFE Book trouvé
        </td>
      </tr>
    `;
    return;
  }
  
  pfebooksTbody.innerHTML = filtered.map(book => `
    <tr data-id="${book.id}">
      <td>
        <div class="table-company">
          <img src="${book.image}" alt="${book.company}" class="table-company-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏢</text></svg>'">
          <span>${book.company}</span>
        </div>
      </td>
      <td>
        <div class="table-tags">
          ${book.tags ? book.tags.map(tag => `
            <span class="table-tag">${tag}</span>
          `).join('') : '<span style="color: var(--gray)">-</span>'}
        </div>
      </td>
      <td>
        ${book.linkedin ? `
          <a href="${book.linkedin}" target="_blank" style="color: #0077b5;">
            <i class="fab fa-linkedin"></i>
          </a>
        ` : '<span style="color: var(--gray)">-</span>'}
      </td>
      <td>
        <div class="table-actions">
          <button class="table-btn table-btn-edit" onclick="editPfebook(${book.id})" title="Modifier">
            <i class="fas fa-edit"></i>
          </button>
          <button class="table-btn table-btn-delete" onclick="confirmDelete(${book.id})" title="Supprimer">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Logout
  document.getElementById('logout-btn').addEventListener('click', logout);
  
  // Add form
  addForm.addEventListener('submit', handleAddPfebook);
  
  // Reset form
  document.getElementById('reset-form').addEventListener('click', resetForm);
  
  // Tags input
  tagInput.addEventListener('keydown', handleTagInput);
  
  // List search
  listSearch.addEventListener('input', (e) => {
    renderTable(e.target.value);
  });
  
  // Modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('cancel-delete').addEventListener('click', closeModal);
  document.getElementById('confirm-delete').addEventListener('click', deletePfebook);
  
  // Close modal on outside click
  deleteModal.addEventListener('click', (e) => {
    if (e.target === deleteModal) closeModal();
  });
}

// Handle tag input
function handleTagInput(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const tag = tagInput.value.trim();
    
    if (tag && !tags.includes(tag)) {
      tags.push(tag);
      renderTags();
      tagInput.value = '';
    }
  }
}

// Render tags
function renderTags() {
  const existingTags = tagsInputContainer.querySelectorAll('.tag-item');
  existingTags.forEach(tag => tag.remove());
  
  tags.forEach((tag, index) => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag-item';
    tagEl.innerHTML = `
      ${tag}
      <span class="tag-remove" onclick="removeTag(${index})">&times;</span>
    `;
    tagsInputContainer.insertBefore(tagEl, tagInput);
  });
}

// Remove tag
function removeTag(index) {
  tags.splice(index, 1);
  renderTags();
}

// Handle add PFE Book
function handleAddPfebook(e) {
  e.preventDefault();
  
  const companyName = document.getElementById('company-name').value.trim();
  const companyImage = document.getElementById('company-image').value;
  const companyPdf = document.getElementById('company-pdf').value;
  const linkedinUrl = document.getElementById('linkedin-url').value.trim();
  
  // Only company name is required
  if (!companyName) {
    showNotification('Veuillez remplir le nom de la société', 'error');
    return;
  }
  
  // Generate new ID
  const newId = pfebooks.length > 0 ? Math.max(...pfebooks.map(b => b.id)) + 1 : 1;
  
  const newPfebook = {
    id: newId,
    company: companyName,
    image: companyImage || '',
    pdf: companyPdf || '',
    linkedin: linkedinUrl || '',
    tags: [...tags]
  };
  
  pfebooks.push(newPfebook);
  savePfebooks();
  updateStats();
  renderTable();
  resetForm();
  
  showNotification('PFE Book ajouté avec succès!', 'success');
}

// Reset form
function resetForm() {
  addForm.reset();
  tags = [];
  renderTags();
}

// Edit PFE Book
function editPfebook(id) {
  const book = pfebooks.find(b => b.id === id);
  if (!book) return;
  
  document.getElementById('company-name').value = book.company;
  document.getElementById('company-image').value = book.image;
  document.getElementById('company-pdf').value = book.pdf;
  document.getElementById('linkedin-url').value = book.linkedin || '';
  tags = book.tags ? [...book.tags] : [];
  renderTags();
  
  // Remove the old entry
  pfebooks = pfebooks.filter(b => b.id !== id);
  savePfebooks();
  updateStats();
  renderTable();
  
  // Scroll to form
  document.querySelector('.add-pfebook-section').scrollIntoView({ behavior: 'smooth' });
  
  showNotification('Modifiez les informations et cliquez sur Ajouter', 'success');
}

// Confirm delete
function confirmDelete(id) {
  deleteTargetId = id;
  deleteModal.classList.add('active');
}

// Close modal
function closeModal() {
  deleteModal.classList.remove('active');
  deleteTargetId = null;
}

// Delete PFE Book
function deletePfebook() {
  if (deleteTargetId === null) return;
  
  pfebooks = pfebooks.filter(b => b.id !== deleteTargetId);
  savePfebooks();
  updateStats();
  renderTable();
  closeModal();
  
  showNotification('PFE Book supprimé avec succès', 'success');
}

// Show notification
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Logout
function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.removeItem('pfebooks'); // Optional: keep data
  window.location.href = 'admin.html';
}
