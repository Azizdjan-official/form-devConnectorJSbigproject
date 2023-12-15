document.addEventListener("DOMContentLoaded",async()=>{
    let {data} = await axios.get(`https://nt-devconnector.onrender.com/api/profile`);
    console.log(data);
    let main =document.querySelector("main");
    data.forEach(element =>
    {
        // console.log(element);
        let infoDiv = document.createElement("div");
        infoDiv.classList.add("infos", "flex", "justtify-between","items-center",  "w-full", "p-4", "bg-slate-100");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("img",  "w-96", "flex", "items-center", "justify-center");
        let img = document.createElement("img");
        img.classList.add("rounded-full")
        img.setAttribute("src", element.user.avatar);
        let namesDiv = document.createElement("div");
        namesDiv.classList.add("names" , "w-full", "ml-12",  "flex", "flex-col", "justify-between", "gap-3", "p-3");
        let elUsername = document.createElement("h3");
        elUsername.innerHTML =`<h3 class="font-bold text-2xl">${element.user.name}</h3>`;
        let elCompany = document.createElement("h3");
        elCompany.innerHTML =`<h2 class="text-xl">${element.company}</h2>`;
        let elLocation = document.createElement("h3");
        elLocation.innerHTML =`<h3 class="text-xl">${element.location}</h3>`;
        let viewBtn = document.createElement("button");
        viewBtn.classList.add("bg-cyan-300", "px-3", "py-2", "w-32");
        viewBtn.innerText = "View Profile";
        let skillDiv = document.createElement("div");
        skillDiv.innerHTML = `<div class="skills flex justify-center items-center  w-52 min-h-max ">
                    <h3>${element.skills}</h3>
                </div>`;
        viewBtn.addEventListener("click",()=>{
            localStorage.setItem("profileId", element.user._id);
            // console.log(element);
            window.location.replace("./profileId.html");

        })
        
        imgDiv.append(img);
        namesDiv.append(elUsername,elCompany,elLocation,viewBtn);
        infoDiv.append(imgDiv,namesDiv,skillDiv)
        main.append(infoDiv);

        
    });
    
})


// infoDiv.innerHTML = `<div class="infos flex justtify-between  w-full p-4 bg-slate-100">
                    
//                     <div class="names  w-full flex flex-col justify-between gap-3 p-3 ">
//                         <h3 class="font-bold text-2xl">${element.user.name}</h3>
//                         <h2 class="text-xl">${element.company}</h2>
//                         <h3 class="text-xl">${element.location}</h3>
//                         <button id="viewBtn" class="bg-cyan-300 px-3 py-2 w-32">View Profile</button>
//                     </div>
//                     <div class="skills  w-96 flex flex-col justify-center items-center ">
//                         <h3>${element.skills}</h3>
                        
//                     </div>
//                 </div>`;