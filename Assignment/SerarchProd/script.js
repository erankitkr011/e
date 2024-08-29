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