let url = "https://reqres.in/api/users?page=1";

// let product = [];

// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     // product.push(data.data);
//     console.log(data);
// });

// console.log(product);

//! Async function

let product = [];

async function fetchData(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        product.push(...data.data);
        // console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

let div = document.createElement("div");
div.style.display="flex";
div.style.flexWrap="wrap";
div.style.justifyContent = "space-between";
fetchData().then(()=>{
    // console.log(product);
    product.forEach((ele)=>{
        let container = document.createElement("div");
        console.log(ele);
        const name = document.createElement("p");
        const email = document.createElement("p");
        const img = document.createElement("img");

        name.innerText = ele.first_name;
        email.innerText = ele.email;
        img.src = ele.avatar;

        container.append(name, email, img);
        div.append(container);
    });
    document.body.append(div);
});









