export function initFooter() {
  const form = document.getElementById("subscribe-form");
  const input = document.getElementById("subscribe");

  if (!form || !input) return; // Safety check in case footer not loaded correctly

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent reload

    if (input.checkValidity()) {
      alert("Thank you for subscribing!");
      // Optionally: form.reset();
    } else {
      input.reportValidity();
    }
  });
}