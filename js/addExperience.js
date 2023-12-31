const elCurrentJobInput = document.querySelector(".current-job-input");
const elCurrentTimeInput = document.querySelector(".current-date");
const errorMessage = document.querySelector(".errors-info");
const form = document.querySelector("form");
const elLogOutBtn = document.querySelector(".logout-btn");

const token = localStorage.getItem("userToken");
if (!token) {
  window.location.replace("../login.html");
}
elLogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("../login.html");
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
  const title = form[0].value;
  const company = form[1].value;
  const location = form[2].value;
  const from = form[3].value;
  const to = form[5].value;
  const description = form[6].value;
  const experience = {
    title,
    company,
    location,
    from,
    to,
    description,
  };
  try {
    let { data } = await axios.put("/api/profile/experience", experience, {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    if (data) {
      window.location.replace("./dashboard.html");
    }
  } catch (error) {
    console.log(error);
  }
});
