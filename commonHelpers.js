import{a as w,S as b,i as f}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S="44070637-4c17cd33bb35071a705149900";async function h(e,r,s,n,t){try{const{data:o}=await w.get("https://pixabay.com/api/",{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:n}});r(o)}catch(o){s(o)}}const H=new b(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".div-load"),p=document.querySelector(".load-holder");function M(){return'<div class="loader"></div>'}function u(){p.innerHTML=""}function g(){p.innerHTML=M()}function q(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function R(){f.warning({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function $(e){return`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" class="foto" height="148" width="360">
      <div class="info" >
        <p class="icon">Likes: ${e.likes} </p>
        <p class="icon">Views: ${e.views}</p>
        <p class="icon">Comments: ${e.comments}</p>
        <p class="icon">Downloads: ${e.downloads}</p>
      </div>
    </a>`}function E(e){return e.map($).join("")}function y(){m.classList.add("load-more-hidden")}function O(){m.classList.remove("load-more-hidden")}function P(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const B=document.querySelector(".form"),l=document.querySelector(".gallery"),T=document.querySelector(".div-load"),d=15;let i,a;B.addEventListener("submit",x);T.addEventListener("click",I);function x(e){if(e.preventDefault(),a=e.target.elements.searchInput.value.trim(),a===""){(void 0)();return}i=1,l.innerHTML="",y(),g(),h(a,L,v,i,d)}function I(){i++,y(),g(),h(a,L,v,i,d)}function L(e){if(console.log("response",e),!e||e.totalHits===0){u(),q(),l.innerHTML="";return}const r=Math.ceil(e.totalHits/d),s=e.hits,n=E(s);u(),l.innerHTML+=n,r>i?O():R(),H.refresh(),i!=1&&P()}function v(e){console.log("error:",e)}
//# sourceMappingURL=commonHelpers.js.map
