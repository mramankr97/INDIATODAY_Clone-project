function getLogin(e){
    e.preventDefault();

    let mydata={
        username: document.getElementById("username").value,
        password:document.getElementById("password").value

    }
    
    
    let loginData = JSON.stringify(mydata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:loginData,
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((response)=> {
        alert("login Successfuly");
        getMyprofile(response,mydata)
        window.location.href = "index.html";
    })
    .catch((err)=>{
        alert(err.message);

    })
}


function getMyprofile({token},{username}){

    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        // mode:"no-cors",
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("error.message")
    })


}