document.addEventListener("DOMContentLoaded",async()=>{
    let main = document.querySelector("main");
    let {data} = await axios.get(`https://nt-devconnector.onrender.com/api/auth`,
    {
        headers : {
            "x-auth-token":`${localStorage.getItem("userToken")}`
        }
    });
    
    let h2 = document.querySelector("h2");
    h2.innerHTML = `<i class="fa-solid fa-user"></i>  Welcome ${data.name}`
    let h3 = document.querySelector("h3");
    let a = document.querySelector("#createA");
    let editBtn = document.querySelector("#editBtn");
    let addExperience = document.querySelector("#addExperience");
    let addEducation = document.querySelector("#addEducation");
    let deleteBtn = document.querySelector("#deleteBtn");

    try{
        let { data: profile } = await axios.get(`https://nt-devconnector.onrender.com/api/profile/me`,
        {
            headers : {
                "x-auth-token":`${localStorage.getItem("userToken")}`
            }
        })
        
        console.log(profile);
        if({data:profile}){
            h3.style.display = "none";
            a.style.display = "none"; 
            let hiddenProfile = document.querySelector(".hid-profile");
            hiddenProfile.classList.remove("hidden");
            editBtn.addEventListener("click", async ()=>{
                window.location.replace("./createProfile.html");
            })
            addExperience.addEventListener("click", async ()=>{
                window.location.replace("./addExperience.html");
            })
            addEducation.addEventListener("click", async ()=>{
                window.location.replace("./addEducation.html");
            })
            deleteBtn.addEventListener("click", async ()=>{
                if(alert("Are you sure ? This can not be undone after deleted")){
                    localStorage.removeItem("userToken", data);
                }
            })
        }
    }catch(error){
        alert(error.response.data.msg);
    }
   
})



//     let editProfile = document.createElement("div");
        //     let editCompany = document.createElement("div");
        //     let editSchool = document.createElement("div");
        //     let experienceText = document.createElement("h3");
        //     let educationText = document.createElement("h3");
        //     let deleteAccount = document.createElement("button");

        //     editProfile.innerHTML = `<div class="btns flex gap-4 my-4 mt-12">
        //     <button class="bg-slate-200 px-3 py-2"><i class="fa-regular fa-user  text-cyan-400"></i> Edit Profile</button>
        //     <button class="bg-slate-200 px-3 py-2"><i class="fa-solid fa-user-tie text-cyan-400"></i> Add Experience</button>
        //     <button class="bg-slate-200 px-3 py-2"><i class="fa-solid fa-user-graduate text-cyan-400"></i> Add Education</button>
        // </div>`;
        //     experienceText.innerHTML = `<h4 class="text-3xl my-4 mt-12 font-medium  text-black">Experience Credentials</h4>`;
        //     educationText.innerHTML = `<h4 class="text-3xl  my-4 mt-12 font-medium text-black">Education Credentials</h4>`;
        //     editCompany.innerHTML = `<div class="btns flex gap-4 my-4 mt-8 ">
        //     <button class="bg-slate-200 px-3 py-2">Company</button>
        //     <button class="bg-slate-200 px-3 py-2">Title</button>
        //     <button class="bg-slate-200 px-3 py-2">Years</button>
        // </div>`;
        // editSchool.innerHTML = `<div class="btns flex gap-4 my-3">
        // <button class="bg-slate-200 px-3 py-2">School</button>
        // <button class="bg-slate-200 px-3 py-2">Degree</button>
        // <button class="bg-slate-200 px-3 py-2">Years</button>
        // </div>;`
        //     deleteAccount.innerHTML = `<button class="bg-red-500 mt-4 hover:bg-red-600 px-3 py-2 text-white"><i class="fa-solid fa-user-minus"></i> Delete my account</button>`;
        //     main.append(editProfile,experienceText,editCompany,educationText,deleteAccount);




        // console.log(data.name);
    // let h1 = document.createElement("h1");
    // h1.classList.add("text-6xl","font-[600]","text-cyan-600", "my-4");
    // h1.innerText = "Dashboard";
    // let h2 = document.createElement("h2");
    // h2.innerHTML = `<h3 class="text-3xl text-black flex items-center my-4 gap-2"> <i class="fa-solid fa-user"></i> Welcome ${data.name}</h3>`;
    // let h3 = document.createElement("h3");
    // h3.innerHTML = `<h3 class="text-base text-black flex items-center my-4 gap-2"> You have not yet setup a profile, please add some info</h3>
    // `;
    // let a = document.createElement("a");
    // a.innerHTML = `<a href="createProfile.html" class="bg-cyan-500 text-white hover:bg-cyan-400 text-lg px-4 py-1 placeholder:text-lg placeholder:text-slate-600 ">Create Profile</a>
    // `
    // main.append(h1,h2,h3,a);