let cart = [];
let total = 0;

function addToCart(dish, price) {
  cart.push({ dish, price });
  total += price;
  displayCart();
}

function removeFromCart(index) {
  total -= cart[index].price;   // subtract item price from total
  cart.splice(index, 1);        // remove item from cart array
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.dish} - ₹${item.price} `;

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₹${total}`;
}
//Fade-in animation on scroll
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".contact-card").forEach(card=>{
        const position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            card.classList.add("fade-in");
        }
    });
});
//Conatct form validation
document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    this.requestFullscreen();
});