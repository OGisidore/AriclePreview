let social = document.querySelector(".action")
let sharebtn = document.querySelector(".shareicone")
const displaySocial = ()=>{
    console.log("hello")
    social.classList.toggle("active")
    console.log(social);

}
sharebtn.onclick = displaySocial