import{a as B,S as M,i as S}from"./assets/vendor-8qRJBGGt.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const E="49339894-31872ba4c3578b0a106bd0c96",v="https://pixabay.com/api/",A=15;async function h(r,t=1){try{const a=await B.get(v,{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:A,page:t,lang:"en"}});if(a.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.data}catch(a){throw console.error("Error fetching images:",a),a}}let m;const g=({webformatURL:r,largeImageURL:t,tags:a,likes:l,views:e,comments:o,downloads:i})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${a}"
          loading="lazy"
        />
      </a>
      <ul class="description-list">
        <li class="description"><span>Likes:</span> ${l}</li>
        <li class="description"><span>Views:</span> ${e}</li>
        <li class="description"><span>Comments:</span> ${o}</li>
        <li class="description"><span>Downloads:</span> ${i}</li>
      </ul>
    </li>`,p=()=>{m?m.refresh():m=new M(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"})},s={searchForm:document.querySelector(".form"),imageGallery:document.querySelector(".gallery"),loaderBackdrop:document.querySelector(".backdrop"),loadMoreBtn:document.querySelector(".load-more-btn")};let c="",n=1;const y=15;let u=0;const f=()=>s.loaderBackdrop.classList.remove("is-hidden"),L=()=>s.loaderBackdrop.classList.add("is-hidden"),w=()=>s.loadMoreBtn.classList.remove("is-hidden"),b=()=>s.loadMoreBtn.classList.add("is-hidden"),d=r=>{S.error({messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:r,timeout:5e3})},q=async r=>{if(r.preventDefault(),c=r.currentTarget.elements["search-text"].value.trim(),c===""){d("Please enter a search query!");return}n=1,s.imageGallery.innerHTML="",b(),f();try{const{hits:t,totalHits:a}=await h(c,n);u=a,s.imageGallery.innerHTML=t.map(g).join(""),p(),u>y&&(w(),s.loadMoreBtn.addEventListener("click",P))}catch(t){d(t.message||"Something went wrong. Please try again later.")}finally{L(),s.searchForm.reset()}},P=async()=>{b(),n+=1,f();try{const{hits:r}=await h(c,n);s.imageGallery.insertAdjacentHTML("beforeend",r.map(g).join("")),p();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),n<Math.ceil(u/y)?w():(s.loadMoreBtn.removeEventListener("click",P),d("We're sorry, but you've reached the end of search results."))}catch(r){d(r.message||"Something went wrong. Please try again later.")}finally{L()}};s.searchForm.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
