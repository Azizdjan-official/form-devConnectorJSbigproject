let hiddenDiv = document.querySelector(".socials");
const token = localStorage.getItem("userToken");
let form = document.querySelector("form");
let hasSocial = false;

(async function getUSerInfo(){
    let { data } = await axios.get("https://nt-devconnector.onrender.com/api/profile/me", {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    console.log(data);
    form[0].value = data.status;
    form[1].value = data?.company;
    form[2].value = data?.website;
    form[3].value = data?.location;
    form[4].value = data?.skills.toString();
    form[5].value = data?.githubusername;
    form[6].value = data?.bio;
    form[8].value = data?.social.twitter;
    form[9].value = data?.social.facebook;
    form[10].value = data?.social.youtube;
    form[11].value = data?.social.linkedin;
    form[12].value = data?.social.instagram;
  })();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = form[0].value;
    const company = form[1].value;
    const website = form[2].value;
    const location = form[3].value;
    const skills = form[4].value;
    const githubusername = form[5].value;
    const bio = form[6].value;
    let profile = {
      status,
      company,
      website,
      location,
      skills,
      githubusername,
      bio,
    };
    if (hasSocial) {
      profile.twitter = form[8].value;
      profile.facebook = form[9].value;
      profile.youtube = form[10].value;
      profile.linkedin = form[11].value;
      profile.instagram = form[12].value;
    }
    try {
      let { data } = await axios.post("https://nt-devconnector.onrender.com/api/profile", profile, {
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

