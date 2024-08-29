let url = 'https://reqres.in/api/users?page=1';

let arr = [];

fetch(url)
    .then((res) => res.json())
    .then((res) => {
        arr = res.data;
        arr.forEach(ele => {
            display(ele);
            // console.log(ele)
        });
    })
    .catch((err) => {
        console.log(err);
    });


function display(ele){
    console.log(ele);
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement('img');
    const email = document.createElement('p');

    img.src = ele.avatar;
    h3.innerText = ele.first_name;
    email.innerHTML = ele.email;
    div.append(h3);
    div.append(img);
    div.append(email);
    document.body.append(div);
}