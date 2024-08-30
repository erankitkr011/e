document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
  
    if (productId) {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await res.json();
        console.log(product)
  
        const productDetailsDiv = document.getElementById("product-details");
  
        const img = document.createElement("img");
        img.src = product.images[0];
        img.alt = product.title;
        img.classList.add("product-image");
  
        const h1 = document.createElement("h1");
        h1.innerText = product.title;
        h1.classList.add("product-title");
  
        const p = document.createElement("p");
        p.innerText = product.description;
        p.classList.add("product-description");

        const price = document.createElement("span");
        price.innerText = product.price;
        price.classList.add("product-price");
  
        productDetailsDiv.appendChild(img);
        productDetailsDiv.appendChild(h1);
        productDetailsDiv.appendChild(p);
        productDetailsDiv.appendChild(price);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    } else {
      console.error("Product ID not found in URL parameters.");
    }
  });