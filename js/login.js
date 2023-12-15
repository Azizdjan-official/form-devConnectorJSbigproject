let form = document.querySelector("form");
// axios.defaults.baseURL = "https://nt-devconnector.onrender.com";

document.addEventListener("DOMContentLoaded",async()=>{

        // let {data} = await axios.get(`https://nt-devconnector.onrender.com/api/auth`,localStorage.setItem("user-userToken", data.token));
        // console.log(data);

        form.addEventListener("submit", async(e)=>{
            e.preventDefault();
            let email = form[0].value;
            let password = form[1].value;
            let newUser = {
                email,
                password,
            }
        
            try{
                let {data} = await axios.post(`https://nt-devconnector.onrender.com/api/auth`, newUser);
            localStorage.setItem("userToken", data.token);
            // console.log(data);
            if(localStorage.getItem("userToken", data.token)){
                window.location.replace("./dashboard.html")
            }
            }catch(error){
                alert(error.response.data.errors[0].msg);
            }
        })
})
