// نمایش محصولات سبد خرید و مدیریت آن
document.addEventListener("DOMContentLoaded", function() {
  renderCart();
  updateCartCount();
  setupCheckout();
});

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  function formatNumberWithCommas(number) {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  let total = 0;

  cart.forEach((item, idx) => {
    const priceNum = item.price;
    total += priceNum * item.quantity;

    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.selectedColor = item.selectedColor;

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.className = "product-image";

    const name = document.createElement("h2");
    name.className = "product-name";
    name.textContent = item.name + " ";

    const colorSpan = document.createElement("span");
    colorSpan.textContent = item.selectedColor;
    colorSpan.style.color = item.selectedColor;
    name.appendChild(colorSpan);

    const colorDots = document.createElement("div");
    colorDots.className = "color-dots";

    item.colors.forEach(color => {
      const dot = document.createElement("span");
      dot.className = "color-dot";
      dot.style.backgroundColor = color;

      if (color.toLowerCase() === item.selectedColor.toLowerCase()) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        changeColor(idx, color);
      });

      colorDots.appendChild(dot);
    });

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = formatNumberWithCommas(item.price) + " تومان";

    const quantityControls = document.createElement("div");
    quantityControls.className = "quantity-controls";

    const decrease = document.createElement("button");
    decrease.textContent = "-";
    decrease.className = "decrease";
    decrease.addEventListener("click", () => changeQuantity(idx, -1));

    const quantitySpan = document.createElement("span");
    quantitySpan.className = "product-qu";
    quantitySpan.textContent = item.quantity;

    const increase = document.createElement("button");
    increase.textContent = "+";
    increase.className = "increase";
    increase.addEventListener("click", () => changeQuantity(idx, 1));

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "حذف";
    removeBtn.className = "remove-from-card";
    removeBtn.addEventListener("click", () => removeItem(idx));

    quantityControls.appendChild(decrease);
    quantityControls.appendChild(quantitySpan);
    quantityControls.appendChild(increase);
    quantityControls.appendChild(removeBtn);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(colorDots);
    card.appendChild(price);
    card.appendChild(quantityControls);

    productsContainer.appendChild(card);
  });

  document.getElementById("total-price").textContent =
    formatNumberWithCommas(total) + " تومان";
}






  


function changeColor(index, newColor) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart[index]) return;
  cart[index].selectedColor = newColor;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


function changeQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);
  const cartCountElem = document.getElementById("cart-count");
  if (cartCountElem) cartCountElem.textContent = totalCount;
}

function setupCheckout() {
  const checkoutBtn = document.getElementById("checkout-button");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("سبد خرید شما خالی است!");
        return;
      }
      alert("پرداخت با موفقیت انجام شد!\nممنون از خرید شما.");
      localStorage.removeItem("cart");
      renderCart();
      updateCartCount();
    });
  }
}
//افزودن رویداد کلیک برای نمایش منوی همبرگری
const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// کلیک بیرون برای بستن منو
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});