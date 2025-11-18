const products = [
  {
    name: "A06s",
    description: "یک گوشی اقتصادی مقرون به صرفه",
    price: "8 ملیون ",
    colors: ["black", "white", "red"],
    image: "A06s.jpg",
    quantity: 1,
    selectedColor: "white"
  },
  {
    name: "A16",
    description: "یک گوشی میان رده مقرون به صرفه",
    price: "18ملیون ",
    colors: ["black", "blue"],
    image: "A16.jpg",
     quantity: 1,
    selectedColor: "blue"
  },
  {
  name: "Redmi Note 12",
  description: "عملکرد سریع با صفحه نمایش AMOLED",
  price: "11,5 ملیون ",
  colors: ["blue", "white", "gray"],
  image: "note12.jpg",
  quantity: 1,
  selectedColor: "blue"
},

{
  name: "iPhone 13",
  description: "قدرت و ظرافت در کنار تجربه کاربری بی نظیر",
  price: "45 ملیون ",
  colors: ["black", "white", "pink"],
  image: "iphone13.jpg",
  quantity: 1,
  selectedColor: "white"
},

{
  name: "Galaxy S22 Ultra",
  description: "پرچم دار سامسونگ با قلم S pen و پردازنده 120Hz",
  price: "62 ملیون ",
  colors: ["black", "burgundy", "green"],
  image: "s22ultra.jpg",
  quantity: 1,
  selectedColor: "green"
},

{
  name: "Poco X5 Pro",
  description: "Snapdragon گوشی مخصوص گیمینگ با پردازنده ",
  price: "10,9 ملیون ",
  colors: ["yellow", "black", "blue"],
  image: "poco_x5pro.jpg",
  quantity: 1,
  selectedColor: "yellow"
},

{
  name: "Galaxy A24",
  description: "گوشی میان رده با دوربین قوی و باتری با دوام",
  price: "12,5 ملیون ",
  colors: ["black", "green", "silver"],
  image: "a24.jpg",
  quantity: 1,
  selectedColor: "black"
}
];


 function parsePriceToNumber(priceStr) {
  return parseFloat(
    priceStr
      .replace("تومان", "")
      .replace("میلیون", "")
      .replace(/٬|,/g, ".")
      .replace(/[^\d.]/g, "")
  ) * 1_000_000;
}

function formatNumberWithCommas(number) {
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// ساخت کارت‌ها با createElement
function renderProducts(products) {
  const productsContainer = document.getElementById("products-container");

 

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.selectedColor = product.colors[0];

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.className = "product-image";

    const name = document.createElement("h2");
    name.className = "product-name";
    name.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const details = document.createElement("div");
    details.className = "product-details";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatNumberWithCommas(parsePriceToNumber(product.price)) + " تومان";


    const colors = document.createElement("span");
    colors.className = "product-colors";
    
      // نمایش رنگ‌ها به صورت دایره رنگی
    let selectedColor = product.colors[0];
    product.colors.forEach(color => {
      const dot = document.createElement("span");
      dot.className = "color-dot";
      dot.style.backgroundColor = color;
      dot.addEventListener("click" , () => {
        selectedColor = color;
        colors.querySelectorAll(".color-dot").forEach(dot => {
            dot.classList.remove("active");
        });
        dot.classList.add("active");
        card.dataset.selectedColor = color;
      });
      colors.appendChild(dot);
    })
  

    details.appendChild(price);
    details.appendChild(colors);

    const button = document.createElement("button");
    button.className = "add-to-cart";
    button.textContent = "افزودن به سبد خرید";

    // افزودن محصول به سبد خرید
    button.addEventListener("click", () => {
     const selectedColor = card.dataset.selectedColor;
        addToCart(product , selectedColor);
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(details);
    card.appendChild(button);

    productsContainer.appendChild(card);
  });
}

// افزودن به سبد خرید + ذخیره در localStorage
function addToCart(product, selectedColor) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex(item => item.name === product.name && item.selectedColor === selectedColor);

  if (existingProductIndex > -1) {
    // اگر محصول در سبد خرید وجود دارد، تعداد آن را افزایش می‌دهیم
    cart[existingProductIndex].quantity += 1;
  } else {
    // اگر محصول در سبد خرید وجود ندارد، آن را اضافه می‌کنیم
   cart.push({
  ...product,
  selectedColor: selectedColor,
  quantity: 1,
  price: parsePriceToNumber(product.price)  // قیمت به عدد تبدیل شود
});

  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// به‌روزرسانی تعداد آیتم‌های سبد خرید
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum , item) => sum + Number(item.quantity) , 0 );
  document.getElementById("cart-count").textContent = totalCount;
}

// اجرای برنامه
renderProducts(products);
updateCartCount();


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


// افزودن رویداد کلیک روی زیر منو ها در منو ناوبری برای باز شدن لینک مربوط به هر زیر منو در html
const navLinks = document.querySelectorAll("#nav-menu li a");
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    const target = event.target.getAttribute("href");
    if (target) {
      window.location.href = target; // هدایت به لینک مورد نظر
    }
  });
});

//کلیک روی ایکون سبد خرید برای باز شدن سبد خرید
const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click", (event)=> {
  event.preventDefault();
const target = event.target.getAttribute("href");
if (target) {
  window.location.href = target; // هدایت به لینک مورد نظر
}
});