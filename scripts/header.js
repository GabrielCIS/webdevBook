// header.js

// Shared cart array
window.cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

// Global function to open modal
window.openCartModal = function () {
  const modal = document.getElementById("cart-modal");
  if (modal) {
    updateCartDisplay();
    modal.style.display = "block";
  }
};

// Close modal function
function closeCartModal() {
  const modal = document.getElementById("cart-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Update cart items list in modal
function updateCartDisplay() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  if (!window.cartItems.length) {
    list.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  window.cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Initialize everything after DOM is loaded
export function initHeader() {
  const cartIcon = document.getElementById("cart-icon");
  const closeBtn = document.getElementById("close-cart-modal");
  const clearBtn = document.getElementById("clear-cart-button");
  const processBtn = document.getElementById("process-order-button");

  // Icon click
  if (cartIcon) {
    cartIcon.addEventListener("click", window.openCartModal);
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCartModal);
  }

  // Clear cart
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      window.cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify([]));
      updateCartDisplay();
    });
  }

  // Process order
  if (processBtn) {
    processBtn.addEventListener("click", () => {
      alert("Order processed: " + window.cartItems.join(", "));
      window.cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify([]));
      updateCartDisplay();
      closeCartModal();
    });
  }
}
