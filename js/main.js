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
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic input capture (can be extended for integrations)
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      console.log('Form Submitted successfully:', formData);
      
      // Hide form, show success message
      contactForm.style.display = 'none';
      formSuccess.style.setProperty('display', 'block', 'important');
    });
  }
});
