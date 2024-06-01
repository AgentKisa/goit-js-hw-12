import{a as y,S as L,i as u}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const w="44070637-4c17cd33bb35071a705149900";async function f(e,t=1,n=15){const{data:s}=await y.get("https://pixabay.com/api/?",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:n,page:t}});return s}const v=new L(".gallery a",{captionsData:"alt",captionDelay:250});function b(){return'<div class="loader"></div>'}function q(){u.warning({title:"Fill in the search field",position:"topRight"})}function m(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function H(e){return`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" class="foto" height="148" width="360">
      <div class="info" >
        <p class="icon">Likes: ${e.likes} </p>
        <p class="icon">Views: ${e.views}</p>
        <p class="icon">Comments: ${e.comments}</p>
        <p class="icon">Downloads: ${e.downloads}</p>
      </div>
    </a>`}function M(e){return e.map(t=>H(t)).join("")}function S(){const e=document.createElement("p");e.textContent="We're sorry, but you've reached the end of search results.",e.style.textAlign="center",e.style.marginTop="20px",document.body.appendChild(e)}const p=document.querySelector(".form"),a=document.querySelector(".gallery"),i=document.querySelector(".div-load");let l=1;const h=15;p.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.searchInput.value.trim();if(t===""){q();return}a.innerHTML=b(),l=1,i.classList.add("load-more-hidden");try{const n=await f(t,l,h);g(n)}catch(n){console.error("Ошибка в обработчике события submit:",n),m()}});function g(e,t=!1){if(!e||e.total===0){m(),a.innerHTML="",i.classList.add("load-more-hidden");return}const n=e.hits;console.log("response",e);const s=M(n);t?a.innerHTML+=s:a.innerHTML=s,a.children.length<e.totalHits?i.classList.remove("load-more-hidden"):(i.classList.add("load-more-hidden"),S()),v.refresh()}i.addEventListener("click",x);async function x(){l+=1;const e=p.elements.searchInput.value.trim();d();try{const t=await f(e,l,h);g(t,!0),R()}catch(t){console.error("Ошибка при загрузке дополнительных изображений:",t)}finally{d()}}function d(){i.classList.toggle("hidden")}function R(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map