let VCard = document.querySelector(".wrapper");
let req = new XMLHttpRequest();
req.addEventListerner("load", display);
req.open("GET", 'https://api.github.com/users/candy34');
req.send();

function display() {
  let data = JSON.parse(this.responseText);
  function profilePage(data) {
    const myProfile = `
      <header class="header">
        <h1>${data.name}</h1>
    </header>
    <div class="container">
       <div class="basics">
         <h2>The Basics</h2>
         <ul>
           <li><span>Name:</span>${data.name}</li>
           <li><span>GitHub URL:</span>${data.html.url}</li>
        <li><span>Email:</span>${data.email}</li>
        <li><span>Company:</span>${data.company}</li>
        <li><span>Website:</span>${data.blog}</li>
      </ul>
    </div>
    <div class="bio">
    <h2>The Bio</h2> <p>${data.bio}</p>
  </div> <div class="image">
      <img src=${data.avatar_url}></img>
    </div>
  </div>
  `
    return myProfile;
  }
  let allHtml= profilePage(data)
VCard.innerHTML= allHtml;
}
