const btn = document.getElementById("btn");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", function() {
    let obj = {
        username: username.value,
        password: password.value
    };
    fetch('/login', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.text();
    }).then((data) => {
        alert(data);
    });
});
