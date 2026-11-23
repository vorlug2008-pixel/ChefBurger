// Замени CHEFBURGER_USERNAME на Telegram username кафе без символа @.
const TELEGRAM_USERNAME = "@RashidNasimov";
document.querySelectorAll("[data-telegram]").forEach(a=>{a.href=`https://t.me/${TELEGRAM_USERNAME}`;a.target="_blank";a.rel="noopener noreferrer";a.addEventListener("click",e=>{if(TELEGRAM_USERNAME==="CHEFBURGER_USERNAME"){e.preventDefault();alert("Укажи Telegram username кафе в файле script.js.");}})});
document.getElementById("toggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();