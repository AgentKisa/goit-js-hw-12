import{a as v,S as b,i as d}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S="44070637-4c17cd33bb35071a705149900";async function h(e,r,s,n,t){try{const{data:o}=await v.get("https://pixabay.com/api/",{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:n}});r(o)}catch(o){s(o)}}const H=new b(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".div-load"),m=document.querySelector(".load-holder");function M(){return'<div class="loader"></div>'}function f(){m.innerHTML=""}function g(){m.innerHTML=M()}function q(){d.warning({title:"Fill in the search field",position:"topRight"})}function R(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function E(){d.warning({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function $(e){return`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" class="foto" height="148" width="360">
      <div class="info" >
        <p class="icon">Likes: ${e.likes} </p>
        <p class="icon">Views: ${e.views}</p>
        <p class="icon">Comments: ${e.comments}</p>
        <p class="icon">Downloads: ${e.downloads}</p>
      </div>
    </a>`}function O(e){return e.map($).join("")}function y(){p.classList.add("load-more-hidden")}function P(){p.classList.remove("load-more-hidden")}function B(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const I=document.querySelector(".form"),l=document.querySelector(".gallery"),T=document.querySelector(".div-load"),u=15;let i,a;I.addEventListener("submit",x);T.addEventListener("click",A);function x(e){if(e.preventDefault(),a=e.target.elements.searchInput.value.trim(),a===""){q();return}i=1,l.innerHTML="",y(),g(),h(a,L,w,i,u)}function A(){i++,y(),g(),h(a,L,w,i,u)}function L(e){if(console.log("response",e),!e||e.totalHits===0){f(),R(),l.innerHTML="";return}const r=Math.ceil(e.totalHits/u),s=e.hits,n=O(s);f(),l.innerHTML+=n,r>i?P():E(),H.refresh(),i!=1&&B()}function w(e){console.log("error:",e)}
//# sourceMappingURL=commonHelpers.js.map
