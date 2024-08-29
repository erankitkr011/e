const input = document.getElementById("input");
const search = document.getElementById("search");
const detailDiv = document.getElementById('detail');

let productss = [];

async function fetchdata() {
    await fetch('/product.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            productss=data;
        });
    console.log(productss);
}
fetchdata();
// document.addEventListener("DOMContentLoaded",fetchdata);

search.addEventListener('click', () => {
    const query = input.value.toLowerCase();
    const results = productss.filter(product => product.name.toLowerCase().includes(query));
    
    if (results.length > 0) {
        displayProducts(results);
    } else {
        detailDiv.innerHTML = 'Not Found';
    }
});

function displayProducts(products) {
    detailDiv.innerHTML = '';
    products.forEach(product => {
        const productDetails = `
            <div>
                <h2>${product.name}</h2>
                <p>Description: ${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Stock: ${product.stock}</p>
            </div>
        `;
        detailDiv.innerHTML += productDetails;
    });
}