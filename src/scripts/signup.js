
function Regitration(e) {
    e.preventDefault();

    let formdata = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    };

    formdata = JSON.stringify(formdata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",

        body: formdata,

        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err.message);
        })
}