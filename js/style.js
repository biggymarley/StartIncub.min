const obj=document.querySelector(".header"),contain=document.querySelector(".navbar-collapse"),btn=document.querySelector(".navbar-toggler"),home=document.querySelector("#show"),gback=document.querySelector(".gback"),contatcus=document.querySelector("#contatcus"),comingSoon=document.querySelector("#comingSoon"),navLink=document.querySelectorAll(".nav-link"),wlc=document.querySelector(".home-wlc");function vhToPixels(e){return Math.round(window.innerHeight/(100/e))}0===window.scrollY&&"true"!==btn.attributes.getNamedItem("aria-expanded").value?(obj.classList.remove("tophead"),contain.classList.remove("tophead"),wlc.classList.remove("wlc-fade"),navLink.forEach(e=>{e.classList.add("active")})):(obj.classList.add("tophead"),contain.classList.add("tophead"),wlc.classList.add("wlc-fade"),navLink.forEach(e=>{e.classList.remove("active")})),window.addEventListener("scroll",()=>{0===window.scrollY&&"true"!==btn.attributes.getNamedItem("aria-expanded").value?(obj.classList.remove("tophead"),contain.classList.remove("tophead"),wlc.classList.remove("wlc-fade"),navLink.forEach(e=>{e.classList.add("active")})):(obj.classList.add("tophead"),contain.classList.add("tophead"),wlc.classList.contains("wlc-fade")||wlc.classList.add("wlc-fade"),navLink.forEach(e=>{e.classList.remove("active")}))}),btn.addEventListener("click",()=>{0===window.scrollY&&("true"==btn.attributes.getNamedItem("aria-expanded").value?(obj.classList.add("tophead"),contain.classList.add("tophead"),navLink.forEach(e=>{e.classList.remove("active")})):(obj.classList.remove("tophead"),contain.classList.remove("tophead"),navLink.forEach(e=>{e.classList.add("active")})))}),gback.addEventListener("click",()=>{comingSoon.classList.remove("opacity"),contatcus.classList.remove("hide")}),home.addEventListener("click",()=>{comingSoon.classList.add("opacity"),contatcus.classList.add("hide")});