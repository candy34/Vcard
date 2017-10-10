const url = 'https://api.github.com/useres/candy34'
let htmlBod = document.querySelector("body");
function myGithub(name, git,email,website, bio, img){
   let profile =
   <header>
       <h1>$(name</h1>
</header>
   <main class="wrapper">
       <section id= "left">
           <h2>The Basics</h2>
           <ul>
               <li>$(name)</li>
               <li><a href="#">$(git)</a></li>
               <li><p>$(email) </p></li>
               <li><a href="#">$(website)</a></li>
            </ul>
        </section>
        <section id= "middle">
            <h2>Story</h2>
            <p>$(bio)</p>
        </section>
        <section id= "right">
            $(img)
        </section>
</main>;
    return (profile);
}
fetch('https://api.github.com/users/candy34')
    .then (function (res) {
        return url.json ();
    })
    .then (funtion (Vcard) {
        console.log(Vcard)
     }) catch. (function ( err) {
       console.log (data)
     } )
