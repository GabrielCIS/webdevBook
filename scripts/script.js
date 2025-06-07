console.log('Hello!');


var addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var itemName = this.getAttribute("data-item");
    addToCart(itemName);
  });
});

function addToCart(itemName) {
  cartItems.push(itemName);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  showMessage("Item added to the cart: " + itemName);
}

var viewCartButton = document.getElementById("view-cart-button");
var cartModal = document.getElementById("cart-modal");

viewCartButton.addEventListener("click", function() {
  openCartModal();
  displayCartItems();
});

function openCartModal() {
  cartModal.style.display = "block";
}

function displayCartItems() {
  var cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  if (cartItems && cartItems.length > 0) {
    for (var i = 0; i < cartItems.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = cartItems[i];
      cartList.appendChild(listItem);
    }
  }
}


//Get the handle.
var closeCartButton = document.getElementById("close-cart-modal");

//Function to close the modal by changing CSS property.
function closeCartModal() {
  cartModal.style.display = "none";
}

//Attach event listener to trigger closeCartModal().
closeCartButton.onclick = function() {
  closeCartModal();
}

<script>
function submitForm()
{
            const fname = document.getElementById("fname").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const order = document.getElementById("order").value;
            const feedback = document.getElementById("feedback").value;
            const type = document.getElementById("type").value;


            const customOrder = document.getElementById("contactusform").checked;

            const customerInfo = {
                    fname, email, phone, feedback, order, type
            };
	
            const keyValue = fname;
            //save customer information to localStorage
            localStorage.setItem(keyValue, JSON.stringify(customerInfo));
                
            //access and parse local data back out of localStorage. 
            const who = JSON.parse( localStorage.getItem(fname) );
            alert("Thank you for your message, "+ who.fname +"!");
}
<script>