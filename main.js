/* js/main.js - Global Interactions for Muyaka Ngulube-Banda GRC Consultant Website */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header scroll effect
  const header = document.querySelector('header.sticky-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Initial check in case page is refreshed scrolled down
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // 2. Active Page Highlighting (in case not hardcoded)
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link-custom');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.endsWith(href) && href !== '/')) {
      link.classList.add('active');
    }
  });

  // 3. Blog Category Filtering (insights.html)
  const categoryButtons = document.querySelectorAll('.category-btn');
  const postCards = document.querySelectorAll('.post-card-col');
  const featuredArticle = document.getElementById('featured-article-container');
  const emptyState = document.getElementById('no-posts-alert');

  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active button class
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');
        let visibleCount = 0;

        // Filter cards
        postCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'All' || cardCategory === selectedCategory) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Handle featured post visibility (only show when category is All or matches Governance)
        if (featuredArticle) {
          const featuredCategory = featuredArticle.getAttribute('data-category');
          if (selectedCategory === 'All' || selectedCategory === featuredCategory) {
            featuredArticle.style.display = 'block';
            visibleCount++;
          } else {
            featuredArticle.style.display = 'none';
          }
        }

        // Show empty state if no posts visible
        if (emptyState) {
          if (visibleCount === 0) {
            emptyState.style.setProperty('display', 'block', 'important');
          } else {
            emptyState.style.setProperty('display', 'none', 'important');
          }
        }
      });
    });
  }

  // 4. Contact Form Submission (contact.html)
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success-message');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      // Update UI to show sending state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Capture form data
      const formData = new FormData(contactForm);

      try {
        // REPLACE 'YOUR_FORMSPREE_ID' with your actual Formspree ID from formspree.io
        const response = await fetch('https://formspree.io/f/mbdepgaj', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Hide form, show success message
          contactForm.style.display = 'none';
          formSuccess.style.setProperty('display', 'block', 'important');
          console.log('Form Submitted successfully');
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      } catch (error) {
        alert("Oops! There was a problem submitting your form");
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
