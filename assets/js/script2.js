// scripts.js

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	if (window.scrollY > 50) {
	  navbar.classList.add('scrolled');
	} else {
	  navbar.classList.remove('scrolled');
	}
  });
  
  // Smooth Scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
	  e.preventDefault();
	  const targetId = link.getAttribute('href').substring(1);
	  const targetSection = document.getElementById(targetId);
	  if (targetSection) {
		window.scrollTo({
		  top: targetSection.offsetTop - 70,
		  behavior: 'smooth'
		});
	  }
	});
  });
  
  // Search Bar Placeholder Animation
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
	searchBar.addEventListener('focus', () => {
	  searchBar.placeholder = '';
	});
	searchBar.addEventListener('blur', () => {
	  searchBar.placeholder = 'Search for colleges or courses...';
	});
  }
  