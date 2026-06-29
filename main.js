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
  const emptyState = document.getElementById('no-posts-alert');

  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active button class
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');
        let visibleCount = 0;

        // Filter cards (query dynamically to support asynchronously rendered articles)
        const postCards = document.querySelectorAll('.post-card-col');
        postCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'All' || cardCategory === selectedCategory) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Handle featured post visibility (query dynamically to support asynchronously rendered articles)
        const featuredArticle = document.getElementById('featured-article-container');
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

  // 5. Scroll Reveal Animations & Counters (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal, .reveal-group');
  const counterValues = document.querySelectorAll('.counter-value');
  
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    let currentFrame = 0;

    const easeOutQuad = (t) => t * (2 - t);

    const updateCounter = () => {
      currentFrame++;
      const progress = easeOutQuad(currentFrame / totalFrames);
      const currentValue = Math.round(target * progress);

      el.textContent = currentValue + suffix;

      if (currentFrame < totalFrames) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // If the intersecting element contains counters, animate them
          const countersInTarget = entry.target.querySelectorAll('.counter-value');
          if (countersInTarget.length > 0) {
            countersInTarget.forEach(counter => animateCounter(counter));
          } else if (entry.target.classList.contains('counter-value')) {
            animateCounter(entry.target);
          }

          // Once revealed, we can stop observing it
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
    // Also observe individual counter values if they are not inside a reveal-group
    counterValues.forEach(el => {
      if (!el.closest('.reveal-group')) {
        revealObserver.observe(el);
      }
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
    counterValues.forEach(el => {
      const target = el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
  }
});
