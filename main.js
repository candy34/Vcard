let VCard = document.querySelector(".wrapper");
// function myGithub(name, git, email, website, bio, img) {
  let req = new XMLHttpRequest();
  req.addEventListener("load", display);
  req.open("GET", "https://api.github.com/users/candy34");
  req.send();
  function display() {
  let data = JSON.parse(this.responseText);
  function profilePage(data){
    const myProfile = `

        <header class="header">
          <h1>${data.name}</h1>
        </header>
        <div class="container">
          <div class="basics">
            <h2>The Basics</h2>
            <ul>
              <li><span>Name: </span>${data.name}</li>
              <li><span>GitHub URL: </span>${data.html_url}</li>
              <li><span>Email: </span>${data.email}</li>
              <li><span>Company: </span>${data.company}</li>
              <li><span>Website: </span>${data.blog}</li>
            </ul>
          </div>
          <div class="bio">
            <h2>The Bio</h2>
            <p>${data.bio}Occupy mixtape waistcoat kogi aesthetic iceland. Hell of pitchfork iceland direct trade, bicycle rights pickled lo-fi health goth neutra. Succulents forage direct trade, trust fund activated charcoal yuccie photo booth yr austin mixtape. Occupy intelligentsia locavore offal letterpress selvage iPhone normcore franzen kogi tilde. Tacos williamsburg jianbing, butcher raclette beard brunch health goth cray pop-up leggings succulents microdosing neutra. Etsy 3 wolf moon tattooed cred 8-bit ramps fingerstache keytar tote bag. Marfa tattooed unicorn whatever. Taiyaki cray poke blog PBR&B. Craft beer post-ironic lyft seitan dreamcatcher, lomo retro pok pok.</p>
          </div>
          <div class="image">
            <img src=${data.avatar_url}></img>
          </div>
        </div>
      `
      return myProfile;
    }
    let allHtml = profilePage(data)


   VCard.innerHTML = allHtml;
   }
