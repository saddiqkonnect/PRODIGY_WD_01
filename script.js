window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll position as needed
      navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  