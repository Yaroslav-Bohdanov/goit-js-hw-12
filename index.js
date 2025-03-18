import{a as P,S as E,i as M}from"./assets/vendor-8qRJBGGt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v="49339894-31872ba4c3578b0a106bd0c96",S="https://pixabay.com/api/",A=15;async function h(e,o=1){try{return(await P.get(S,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:A,page:o}})).data}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images. Please try again.")}}let m;const B=({webformatURL:e,largeImageURL:o,tags:s,likes:c,views:t,comments:r,downloads:i})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${e}"
          alt="${s}"
          loading="lazy"
        />
      </a>
      <ul class="description-list">
        <li class="description"><span>Likes:</span> ${c}</li>
        <li class="description"><span>Views:</span> ${t}</li>
        <li class="description"><span>Comments:</span> ${r}</li>
        <li class="description"><span>Downloads:</span> ${i}</li>
      </ul>
    </li>`,I=()=>{m?m.refresh():m=new E(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"})},a={searchForm:document.querySelector(".form"),imageGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let d="",n=1;const f=15;let u=0;const g=()=>a.loader.classList.remove("is-hidden"),p=()=>a.loader.classList.add("is-hidden"),y=()=>a.loadMoreBtn.classList.remove("is-hidden"),L=()=>a.loadMoreBtn.classList.add("is-hidden"),l=e=>{M.error({messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:e,timeout:5e3})},b=e=>{a.imageGallery.insertAdjacentHTML("beforeend",e.map(B).join("")),I()},G=()=>{const e=a.imageGallery.lastElementChild;e&&e.scrollIntoView({behavior:"smooth",block:"end"})},_=async e=>{if(e.preventDefault(),d=e.currentTarget.elements["search-text"].value.trim(),d===""){l("Please enter a search query!");return}n=1,a.imageGallery.innerHTML="",L(),g();try{const{hits:o,totalHits:s}=await h(d,n);if(u=s,o.length===0){l("No images found. Please try another search.");return}b(o),u>f&&(y(),a.loadMoreBtn.addEventListener("click",w))}catch(o){l(o.message||"Something went wrong. Please try again later.")}finally{p(),a.searchForm.reset()}},w=async()=>{L(),n+=1,g();try{const{hits:e}=await h(d,n);b(e),G(),n<Math.ceil(u/f)?y():(a.loadMoreBtn.removeEventListener("click",w),l("We're sorry, but you've reached the end of search results."))}catch(e){l(e.message||"Something went wrong. Please try again later.")}finally{p()}};a.searchForm.addEventListener("submit",_);
//# sourceMappingURL=index.js.map
