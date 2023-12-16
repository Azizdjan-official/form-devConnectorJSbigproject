document.addEventListener("DOMContentLoaded",async()=>{
    let form = document.querySelector("form");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
        let text = form[0].value;
        let {data : id} = await axios.post(`https://nt-devconnector.onrender.com/api/posts`,{text},
        {
            headers : {
                "x-auth-token":`${localStorage.getItem("userToken")}`
            }
        });
        form.reset()
        location.reload();


        
    })
    let {data : profile} = await axios.get(`https://nt-devconnector.onrender.com/api/posts`,
        {
            headers : {
                "x-auth-token":`${localStorage.getItem("userToken")}`
            }
        });
        let section = document.querySelector("section");
        
        profile.forEach(element => {
            let card = document.createElement("div");
            card.classList.add("card" ,"w-full", "flex","my-5", "p-3", "border");
            let forImg = document.createElement("div");
            let outside = document.createElement("div");
            let inside = document.createElement("div");
            forImg.classList.add("w-[25%]", "flex","items-center","flex-col-reverse", "justify-center",  "break-words");
            outside.classList.add("w-[75%]", "ml-3", "gap-3",  "flex", "flex-col", "items-left", "break-words", "py-8", "pl-6")
            inside.classList.add("flex", "items-center", "gap-3")
            let img = document.createElement("img");
            img.setAttribute("src", element.avatar);
            img.classList.add("rounded-full");
            let elName = document.createElement("h1");
            elName.textContent = element.name;
            let outsideText = document.createElement("h1");
            let outsideText2 = document.createElement("h1");
            outsideText.classList.add("text-lg");
            outsideText2.classList.add("text-slate-400", "text-sm");
            outsideText.textContent =  element.text;
            outsideText2.textContent = "Posted on " + element.date.slice(0,10);
            let likeBtn = document.createElement("i");
            likeBtn.classList.add("fa-solid", "text-lg", "bg-slate-100", "px-4", "py-2", "cursor-pointer", "fa-thumbs-up");
            let dislikeBtn = document.createElement("i");
            dislikeBtn.classList.add("fa-solid", "text-lg", "bg-slate-100", "px-4", "py-2", "cursor-pointer", "fa-thumbs-down");
            let disCussionBtn = document.createElement("button");
            disCussionBtn.classList.add("bg-cyan-500", "hover:bg-cyan-600", "px-3", "py-2", "text-white");
            disCussionBtn.textContent = "Discussion";
            forImg.append(elName,img)
            inside.append(likeBtn,dislikeBtn,disCussionBtn)
            outside.append(outsideText,outsideText2,inside)
            card.append(forImg,outside)
            section.append(card)
        });
})