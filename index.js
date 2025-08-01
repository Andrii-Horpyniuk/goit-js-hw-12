import{a as q,S as E,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();const M="50678696-ed6f097088bf5690dd98584b9",B="https://pixabay.com/api/";async function g(t,r=1){const i={key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await q.get(B,{params:i})).data}catch(e){throw console.error("Error fetching images:",e),new Error("Failed to fetch images from Pixabay.")}}const f=document.querySelector(".gallery"),y=document.querySelector(".buttonLoadMore");let I=new E(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function p(t){function r({webformatURL:i,largeImageURL:e,tags:o,likes:n,views:w,comments:S,downloads:P}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${i}" alt="${o}"
          /></a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${n}</p>
              </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${w}</p>
                </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${S}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${P}</p>
                </div>
          </div>
        </div>
        </li>`}const d=t.map(r).join("");f.insertAdjacentHTML("beforeend",d),I.refresh()}function $(){f.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("visuallyhidden")}function b(){document.querySelector(".loader").classList.add("visuallyhidden")}function L(){y.classList.remove("visuallyhidden")}function l(){y.classList.add("visuallyhidden")}let a=1;const v=15;let s=0;l();const u=document.querySelector(".form"),H=document.querySelector('input[name="search-text"]'),x=document.querySelector(".buttonLoadMore");let m;u.reset();u.addEventListener("submit",R);async function R(t){if(t.preventDefault(),m=H.value.trim(),m===""){u.reset(),c.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}$(),h();try{a=1,s=0;let r=await g(m,a);s=r.total,s===0?(l(),c.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0})):(p(r.hits),a*v<s?L():l()),u.reset()}catch(r){c.error({title:"Error",message:r.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{b()}}x.addEventListener("click",A);async function A(){a+=1,l(),h();try{const t=await g(m,a);p(t.hits),a*v<s?L():(l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(255, 106, 0, 0.95)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0})),C()}catch(t){c.error({title:"Error",message:t.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{b(),x.blur()}}function C(){const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
