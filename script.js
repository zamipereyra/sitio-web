const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis...", 
    "In mi velit, fringilla sed velit vel, ornare varius dui. Nunc ...", 
    "In aliquet fringilla libero, quis dapibus massa tincidunt a..."
  ];
  
  let currentIndex = 0;
  
  function showNextText() {
    const carouselText = document.getElementById('carousel-text');
    carouselText.style.opacity = 0; // Oculta el texto actual
    
    setTimeout(() => {
      currentIndex = Math.floor(Math.random() * texts.length); 
      carouselText.innerHTML = texts[currentIndex]; // Muestra el nuevo texto
      carouselText.style.opacity = 1; 
    }, 1000); 
  }
  
  setInterval(showNextText, 3000); // Cambia el texto cada 3 segundos
  
  // Mostrar el primer texto al cargar la página
  showNextText();
  