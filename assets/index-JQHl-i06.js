var f=Object.defineProperty;var y=(o,n,a)=>n in o?f(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a;var g=(o,n,a)=>y(o,typeof n!="symbol"?n+"":n,a);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();class L{constructor(){g(this,"HOME","#/");g(this,"LESSONS",`${this.HOME}lessons/`);g(this,"LESSON",`${this.LESSONS}lesson/`)}}const t=new L,u=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];function x(){const o=document.querySelector("#imageGalary"),n=1270,a=document.querySelector("#lightbox"),l=document.querySelector(".lightbox__content"),i=document.querySelector(".lightbox__button"),r="is-open",p=document.querySelector(".arrow-left"),S=document.querySelector(".arrow-right");let h,s=0;o.innerHTML=u.map(e=>`
	<li class="gallery__item">
		<div class="gallery__link">
			<img
				class="gallery__image"
				src="${e.preview}"
				data-source="${e.original}"
				alt="${e.description}"
			/>
		</div>
	</li>
	`).join("");const d=()=>{s<0?s=h.length-1:s>h.length-1&&(s=0),h.forEach(e=>{e.style.transform=`translateX(-${s*n}px)`})};o.addEventListener("click",e=>{e.target.nodeName==="IMG"&&(a.classList.add(r),l.innerHTML=u.map(c=>`<img class="lightbox__image" src="${c.original}" alt="${c.description}" />`).join(""),h=document.querySelectorAll(".lightbox__image"),a.addEventListener("click",c=>{c.target.nodeName!=="IMG"&&a.classList.remove(r)}),s=u.findIndex(c=>c.description===e.target.alt),d())}),i.addEventListener("click",e=>{e.stopPropagation(),a.classList.remove(r)}),p.addEventListener("click",e=>{e.stopPropagation(),s--,d()}),S.addEventListener("click",e=>{e.stopPropagation(),s++,d()}),document.addEventListener("keydown",e=>{e.key==="ArrowRight"?(s++,d()):e.key==="ArrowLeft"&&(s--,d()),e.key==="Escape"&&a.classList.remove(r)})}function v(){return requestAnimationFrame(()=>{x()}),`
		<a
			href="${t.HOME}"
			class="text-lg m-4 transition-colors duration-300 ease-in-out hover:text-primary"
			>home</a
		>

		<ul class="gallery mx-auto mt-12 block" id="imageGalary"></ul>




		<div class="lightbox" id="lightbox">
			<div class="lightbox__overlay"></div>

			<div class="lightbox__content"></div>

			<div class="arrow-left absolute left-4 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
					class="fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
				>
					<path
						d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
					></path>
				</svg>
			</div>
			<div class="arrow-right absolute right-4 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
					class="text-9xl fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
				>
					<path
						d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
					></path>
				</svg>
			</div>
			<button
				type="button"
				class="lightbox__button"
				data-action="close-lightbox"
			></button>
		</div>
	`}const b=[{id:1,title:"Оптимізація подій",link:`${t.LESSON}1/`},{id:2,title:"Бібліотека Lodash. Throttle і Debounce",link:`${t.LESSON}2/`},{id:3,title:"Концепція Intersection Observer (Практика)",link:`${t.LESSON}3/`},{id:4,title:"Знайомство з Node.js та Пакетний менеджер npm",link:`${t.LESSON}4/`},{id:5,title:"Бібліотеки та фреймворки",link:`${t.LESSON}5/`},{id:6,title:"Модульність коду. Бандлер JS-модулів Parcel",link:`${t.LESSON}6/`},{id:7,title:"Шаблонізація. Handlebars",link:`${t.LESSON}7/`},{id:9,title:"Формат даних JSON",link:`${t.LESSON}9/`},{id:10,title:"Веб-сховище",link:`${t.LESSON}10/`},{id:11,title:"Асинхронність",link:`${t.LESSON}11/`},{id:12,title:"Таймери",link:`${t.LESSON}12/`},{id:13,title:"Дата та час",link:`${t.LESSON}13/`},{id:14,title:"Проміси",link:`${t.LESSON}14/`},{id:15,title:"Методи класу Promise. Цикл подій",link:`${t.LESSON}15/`},{id:17,title:"HTTP запити 1. REST API",link:`${t.LESSON}17/`},{id:18,title:"HTTP-запити 2. AJAX",link:`${t.LESSON}18/`},{id:19,title:"Пагінація",link:`${t.LESSON}19/`},{id:20,title:"CRUD взаємодії з ресурсами бекенду",link:`${t.LESSON}20/`},{id:21,title:"Асинхронні функції async/await",link:`${t.LESSON}21/`},{id:22,title:"Міні-проєкт: асинхронні функції async/await",link:`${t.LESSON}22/`}];function w(){return`
	  <div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-3xl font-bold text-center">
				Це моя сторінка для здачи завданнь для школи GoIteens
			</h1>

			<ul class="flex flex-col gap-2 mt-4" id="lessonsList">
				${b.map(o=>`
					<li>
						<a
							href="${o.link}"
							class="text-lg transition-colors duration-300 hover:text-primary"
							>${o.id}. ${o.title}</a
						>
					</li>
				`).join("")}
			</ul>
		</div>
	`}const _=[{path:`${t.HOME}`,component:w},{path:`${t.LESSON}1/`,component:v}];function E(){return`
		<div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-center text-3xl font-bold">404 Not Found Page</h1>
		</div>
	`}function m(){const o=window.location.hash||"#/",n=_.find(l=>l.path===o),a=n?n.component:E;document.querySelector("#app").innerHTML=a()}window.addEventListener("DOMContentLoaded",()=>{m()});window.addEventListener("hashchange",()=>{m()});
