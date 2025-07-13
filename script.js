const sections = document.querySelectorAll('.section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);
sections.forEach(section => observer.observe(section));

//& Navbar functionality ...

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

//& Mobile menu toggle ...

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//&  Improved smooth scrolling with proper offset ...

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {

//& Calculate proper scroll position with navbar offset ...

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight - 10;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
//& Close mobile menu ...

    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

//& Improved active link highlighting with proper offset calculation ...

window.addEventListener('scroll', function() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const scrollPos = window.scrollY + navbarHeight + 50;
  
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});