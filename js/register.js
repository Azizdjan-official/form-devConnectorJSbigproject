let form = document.querySelector("form");
// axios.defaults.baseURL = "https://nt-devconnector.onrender.com";

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let name = form[0].value;
    let email = form[1].value;
    let password = form[2].value;
    let confirmPassword = form[3].value;
    let newUser = {
        name,
        email,
        password,
    }
    if(password !== confirmPassword){
        alert("Password doesn't match. Please try again")
    }

    try{
        let {data} = await axios.post(`https://nt-devconnector.onrender.com/api/users`, newUser);
            localStorage.setItem("userToken", data.token);
            console.log(data);
            window.location.replace("./dashboard.html")

    }catch(error){
        alert(error.response.data.errors[0].msg);
    }
})

// response.data.error[0].msg