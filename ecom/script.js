const product = document.querySelector(".product");
let data = [];
let cartData = JSON.parse(localStorage.getItem('CartItems')) || [];
let currentIndex = 0;
const productsPerPage = 12;

async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const ele = await res.json();
    data = ele.products;
    console.log(data);
    addProductsToPages(data.slice(8, productsPerPage));
    currentIndex += productsPerPage;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

function addProductsToPages(products) {
  products.forEach((element) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.addEventListener("click", () => {
      window.location.href = `product.html?id=${element.id}`;
    });

    const img = document.createElement("img");
    img.src = element.images[0];
    img.alt = element.title;
    img.classList.add("product-image");

    const h3 = document.createElement("h3");
    h3.innerText = element.title;
    h3.classList.add("product-title");

    const p = document.createElement("p");
    p.innerText = element.description;
    p.classList.add("product-description");

    const price = document.createElement("p");
    price.innerText = `Price : $${element.price}`;
    price.classList.add("product-price");

    const button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.classList.add("cart-button");

    button.addEventListener('click', () => {
        const productToAdd = {
            title: element.title,
            description: element.description,
            price: element.price,
            images: element.images[0]
        };
        cartItem(productToAdd);
    });

    productDiv.append(img, h3, p, price, button);
    product.appendChild(productDiv);
  });
}

function cartItem(product) {
  let existingCartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
  existingCartItems.push(product);
  localStorage.setItem('CartItems', JSON.stringify(existingCartItems));

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Product added to cart successfully!',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  
  console.log(product);
}

document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.createElement("button");
  loadMoreButton.id = "load-more";
  loadMoreButton.textContent = "Load More";
  document.body.appendChild(loadMoreButton);

  loadMoreButton.addEventListener("click", loadMoreProducts);
});

function loadMoreProducts() {
  const nextIndex = currentIndex + productsPerPage;
  const productsToLoad = data.slice(currentIndex, nextIndex);
  addProductsToPages(productsToLoad);
  currentIndex += productsPerPage;

  if (currentIndex >= data.length) {
    document.getElementById("load-more").disabled = true;
  }
}