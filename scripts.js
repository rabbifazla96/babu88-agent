// Set today's date
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById('todayDate').textContent = formattedDate;
document.getElementById('endDateToday').textContent = formattedDate;

// Update input value when date is selected
document.getElementById('startDate').addEventListener('change', function(e) {
    this.setAttribute('data-value', this.value);
});

document.getElementById('endDate').addEventListener('change', function(e) {
    this.setAttribute('data-value', this.value);
});

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Initialize side menu for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburger = document.querySelector('.humber-lines');
    const sideMenu = document.getElementById('sideMenu');
    
    // Single click handler for hamburger
    if (hamburger && sideMenu) {
        hamburger.onclick = function(e) {
            e.stopPropagation();
            sideMenu.classList.toggle('open');
        };

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
                sideMenu.classList.remove('open');
            }
        });
    }
});

// Menu item click handler
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('submenu')) {
            e.preventDefault();
            this.classList.toggle('active');
        }
        document.querySelectorAll('.menu-item').forEach(i => {
            if (i !== this) i.classList.remove('active');
        });
    });
});

// Dropdown toggle functionality
function toggleDropdown(index) {
    const cards = document.querySelectorAll('.card-content');
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    
    // Close other dropdowns and cards
    cards.forEach((card, i) => {
        if (i !== index) {
            card.classList.remove('active');
            dropdowns[i].classList.remove('active');
        }
    });

    // Toggle clicked dropdown and card
    cards[index].classList.toggle('active');
    dropdowns[index].classList.toggle('active');
}
