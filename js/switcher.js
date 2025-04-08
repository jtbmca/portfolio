document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.btn-outline-light');
    
    // Add click event listeners to each button
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get section name from button text
        const sectionName = this.textContent.trim().toLowerCase();
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
          section.classList.remove('active');
        });
        
        // Show the selected section
        const targetSection = document.getElementById(sectionName + '-content');
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  });