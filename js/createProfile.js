let hiddenDiv = document.querySelector(".socials");
let addSocialNetwork = document.querySelector("#addSocialNetwork");

addSocialNetwork.addEventListener("click",()=>{
    hiddenDiv.classList.toggle("hidden");
})
let form = document.querySelector("form");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let status = form[0].value;
    let company = form[1].value;
    let website = form[2].value;
    let location = form[3].value;
    let skills = form[4].value;
    let githubusername = form[5].value;
    let bio = form[6].value;
    // let twitter = form[7].value;
    // let facebook = form[8].value;
    // let youtube = form[9].value;
    // let linkedin = form[10].value;
    // let instagram = form[11].value;
    let newDatas = {status,company,website,location,skills,githubusername,bio};
    // console.log(newDatas);
    try{
        let {data} = await axios.post(`https://nt-devconnector.onrender.com/api/profile`, newDatas,
        {
            headers : {
                "x-auth-token":`${localStorage.getItem("userToken")}`
            }
        });
        window.location.replace("./dashboard.html");
        
    }catch(error){
        console.log(error);
    }
    
})

