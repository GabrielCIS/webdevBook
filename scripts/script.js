
// ----------------- CONTACT FORM -----------------
const form = document.getElementById("contactusform");
const clearButton = document.getElementById("clear-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fname = document.getElementById("fname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const order = document.getElementById("order").value;
    const feedback = document.getElementById("feedback").value;
    const type = document.getElementById("type").value;

    const customerInfo = {
      fname,
      email,
      phone,
      feedback,
      order,
      type,
    };

    localStorage.setItem(fname, JSON.stringify(customerInfo));

    const who = JSON.parse(localStorage.getItem(fname));
    alert("Thank you for your message, " + who.fname + "!");
    form.reset();
  });
}

if (clearButton) {
  clearButton.addEventListener("click", function () {
    alert("Form has been cleared!");
  });
}
