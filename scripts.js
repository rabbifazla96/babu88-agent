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
