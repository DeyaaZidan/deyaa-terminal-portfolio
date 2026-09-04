const commands=["sudo build-infrastructure","ping gateway.local","systemctl status network","ssh admin@server"];
let ci=0,li=0,del=false;
const out=document.getElementById("typing");
function type(){const w=commands[ci];if(!del){out.textContent=w.slice(0,++li);if(li===w.length){del=true;return setTimeout(type,1500)}}else{out.textContent=w.slice(0,--li);if(li===0){del=false;ci=(ci+1)%commands.length}}setTimeout(type,del?45:80)}
type();

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const modal=document.getElementById("certModal");
const modalImage=document.getElementById("modalImage");
const closeModal=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");modalImage.src=""};
document.querySelectorAll(".cert-view,.cert-image").forEach(el=>el.addEventListener("click",()=>{const image=el.dataset.image||el.querySelector("img")?.src;if(!image)return;modalImage.src=image;modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
