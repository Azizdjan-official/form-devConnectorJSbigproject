document.addEventListener("DOMContentLoaded", async()=>{
    const token = localStorage.getItem("userToken");
    const profileId = localStorage.getItem("profileId");
    let {data:user} = await axios.get(`https://nt-devconnector.onrender.com/api/auth`,{
        headers:{
            "x-auth-token":`${token}`
        }
    })
    
    try {
        let data = await axios.get(`https://nt-devconnector.onrender.com/api/profile/user/${profileId}`)
        // console.log(data);
        let main = document.querySelector("main");
        let a = document.querySelector("#backTo");
        
            console.log(data.data);
            let infoDiv = document.createElement("div");
            infoDiv.classList.add("infos", "w-full", "bg-cyan-500", "text-white", "h-[75vh]", "gap-4", "flex", "flex-col", "items-center", "justify-center");
            let img = document.createElement("img");
            img.classList.add("rounded-full");
            img.setAttribute("src", data.data.user.avatar);
            let name = document.createElement("h1");
            let company = document.createElement("h1");
            let location = document.createElement("h1");
            name.classList.add("text-6xl");
            company.classList.add("text-3xl");
            location.classList.add("text-2xl");
            name.innerText = data.data.user.name;
            company.innerText = data.data.company;
            location.innerText = data.data.location;
            infoDiv.append(img,name,company,location);
            let lastPage = document.createElement("div")
            lastPage.innerHTML = `<div class="lastPage">
            <div class="flex flex-col items-center justify-center gap-4 bg-slate-200 p-12">
                <h1 class="text-cyan-400 my-2 text-4xl font-[600]">Nos Bio</h1>
                <h1>${data.data.bio}</h1>
                <h1 class="text-cyan-400 my-2 text-4xl font-[600]">Skill Set</h1>
                <h1>${data.data.skills}</h1>
            </div>
            <div class="w-full my-6 border flex gap-3 items-center justify-center">
                <div class="border p-4 w-[48%]">
                    <h1 class="text-cyan-400 my-4 text-4xl font-[600]">Experience</h1>
                    <h1>${data.data.experience}</h1>
                </div>
                <div class="border my-6 p-4 w-[48%]">
                    <h1 class="text-cyan-400 my-4 text-4xl font-[600]">Education</h1>
                    <h1>${data.data.education}</h1>
                </div>
            </div>
            <div>
                <h1 class="text-cyan-400 text-4xl font-[600]">Github Repos</h1>
                <h1>${data.data.githubusername}</h1>
            </div>
        </div>`;
        main.append(a,infoDiv,lastPage);
        
    } catch (error) {
        console.log(error);
    }
})