const elCurrentJobInput = document.querySelector(".current-job-input");
const elCurrentTimeInput = document.querySelector(".current-date");
const errorMessage = document.querySelector(".errors-info");
const form = document.querySelector("form");
const elLogOutBtn = document.querySelector(".logout-btn");

const token = localStorage.getItem("userToken");
if (!token) {
  window.location.replace("./login.html");
}
elLogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("userToken");
  window.location.replace("./login.html");
});

axios.defaults.baseURL = "https://nt-devconnector.onrender.com";

elCurrentJobInput.addEventListener("change", (e) => {
  e.preventDefault();
  if (elCurrentJobInput.checked) {
    elCurrentTimeInput.setAttribute("disabled", true);
  } else {
    elCurrentTimeInput.removeAttribute("disabled");
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const school = form[0].value;
  const degree = form[1].value;
  const fieldofstudy = form[2].value;
  const from = form[3].value;
  const to = form[5].value;
  const description = form[6].value;
  const education = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
  };
  try {
    let { data } = await axios.put("/api/profile/education", education, {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    if (data) {
      window.location.replace("./dashboard.html");
    }
  } catch (error) {
    let errors = await error.response.data.errors;
    errors.forEach((item) => {
      let p = document.createElement("p");
      p.className = "my-4 mx-4 bg-rose-400 text-xl p-2 text-white";
      p.textContent = item.msg;
      errorMessage.append(p);
    });
    setTimeout(() => {
      errorMessage.innerHTML = "";
    }, 3_000);
  }
});
