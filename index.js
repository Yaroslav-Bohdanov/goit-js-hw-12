import{a as E,S as M,i as v}from"./assets/vendor-h_xsmXee.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="49339894-31872ba4c3578b0a106bd0c96",B="https://pixabay.com/api/",A=15;async function h(r,t=1){try{return(await E.get(B,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:A,page:t}})).data}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images. Please try again.")}}let m;const g=({webformatURL:r,largeImageURL:t,tags:s,likes:c,views:e,comments:o,downloads:i})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${s}"
          loading="lazy"
        />
      </a>
      <ul class="description-list">
        <li class="description"><span>Likes:</span> ${c}</li>
        <li class="description"><span>Views:</span> ${e}</li>
        <li class="description"><span>Comments:</span> ${o}</li>
        <li class="description"><span>Downloads:</span> ${i}</li>
      </ul>
    </li>`,p=()=>{m?m.refresh():m=new M(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"})},a={searchForm:document.querySelector(".form"),imageGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let d="",n=1;const f=15;let u=0;const y=()=>a.loader.classList.remove("is-hidden"),L=()=>a.loader.classList.add("is-hidden"),w=()=>a.loadMoreBtn.classList.remove("is-hidden"),b=()=>a.loadMoreBtn.classList.add("is-hidden"),G=()=>a.imageGallery.innerHTML="",l=r=>{v.error({messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:r,timeout:5e3})},T=async r=>{if(r.preventDefault(),d=r.currentTarget.elements["search-text"].value.trim(),d===""){l("Please enter a search query!");return}n=1,G(),b(),y();try{const{hits:t,totalHits:s}=await h(d,n);if(u=s,t.length===0){l("No images found. Please try another search.");return}a.imageGallery.innerHTML=t.map(g).join(""),p(),u>f&&(w(),a.loadMoreBtn.addEventListener("click",P))}catch(t){l(t.message||"Something went wrong. Please try again later.")}finally{L(),a.searchForm.reset()}},P=async()=>{b(),n+=1,y();try{const{hits:r}=await h(d,n);a.imageGallery.insertAdjacentHTML("beforeend",r.map(g).join("")),p(),setTimeout(()=>{const t=a.imageGallery.lastElementChild;if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},100),n<Math.ceil(u/f)?w():(a.loadMoreBtn.removeEventListener("click",P),l("We're sorry, but you've reached the end of search results."))}catch(r){l(r.message||"Something went wrong. Please try again later.")}finally{L()}};a.searchForm.addEventListener("submit",T);
//# sourceMappingURL=index.js.map
