// JavaScript for dynamic content and interactivity
document.addEventListener("DOMContentLoaded", function () {
  // Animate On Scroll initialization
  AOS.init({
    duration: 1200,
  });

  // Add to Cart functionality
  const cart = [];
  const flavorCards = document.querySelectorAll(".add-to-cart");

  flavorCards.forEach((card) => {
    card.addEventListener("click", function () {
      const flavorName = this.parentElement.querySelector("h3").textContent;
      cart.push(flavorName);
      alert(`${flavorName} added to cart!`);
      updateCartCount();
    });
  });

  function updateCartCount() {
    const cartLink = document.querySelector(".cart");
    cartLink.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cart.length})`;
  }

  // Contact form submission (simple form validation)
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".flavor-carousel-inner");
  const cards = document.querySelectorAll(".flavor-card");
  const totalCards = cards.length;
  let cardIndex = 0;
  const cardWidth = cards[0].clientWidth;
  let isSliding = false;

  // Clone first and last cards for seamless looping
  const firstCard = cards[0].cloneNode(true);
  const lastCard = cards[totalCards - 1].cloneNode(true);
  carousel.appendChild(firstCard);
  carousel.insertBefore(lastCard, carousel.firstChild);

  function moveToNextSlide() {
    if (isSliding) return;
    isSliding = true;
    cardIndex++;
    const maxIndex = totalCards;
    if (cardIndex > maxIndex) {
      cardIndex = 1;
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        moveToNextSlide();
      }, 50);
    } else {
      carousel.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
      setTimeout(() => {
        isSliding = false;
      }, 500); // Transition duration
    }
  }

  setInterval(moveToNextSlide, 3000); // Slide every 3 seconds

  window.addEventListener("resize", () => {
    carousel.style.transition = "none"; // Disable transition during resize
    carousel.style.transform = `translateX(-${
      cardIndex * cards[0].clientWidth
    }px)`;
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
    }, 50);
  });

  // Initial adjustment
  carousel.style.transform = `translateX(-${cardWidth}px)`;
});
