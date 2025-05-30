var f=Object.defineProperty;var y=(t,r,a)=>r in t?f(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;var u=(t,r,a)=>y(t,typeof r!="symbol"?r+"":r,a);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const g=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];function L(){const t=document.querySelector("#imageGalary"),r=1270,a=document.querySelector("#lightbox"),d=document.querySelector(".lightbox__content"),o=document.querySelector(".lightbox__button"),n="is-open",c=document.querySelector(".arrow-left"),S=document.querySelector(".arrow-right");let h,s=0;t.innerHTML=g.map(i=>`
	<li class="gallery__item">
		<div class="gallery__link">
			<img
				class="gallery__image"
				src="${i.preview}"
				data-source="${i.original}"
				alt="${i.description}"
			/>
		</div>
	</li>
	`).join("");const p=()=>{s<0?s=h.length-1:s>h.length-1&&(s=0),h.forEach(i=>{i.style.transform=`translateX(-${s*r}px)`})};t.addEventListener("click",i=>{i.target.nodeName==="IMG"&&(a.classList.add(n),d.innerHTML=g.map(l=>`<img class="lightbox__image" src="${l.original}" alt="${l.description}" />`).join(""),h=document.querySelectorAll(".lightbox__image"),a.addEventListener("click",l=>{l.target.nodeName!=="IMG"&&a.classList.remove(n)}),s=g.findIndex(l=>l.description===i.target.alt),p())}),o.addEventListener("click",i=>{i.stopPropagation(),a.classList.remove(n)}),c.addEventListener("click",i=>{i.stopPropagation(),s--,p()}),S.addEventListener("click",i=>{i.stopPropagation(),s++,p()}),document.addEventListener("keydown",i=>{i.key==="ArrowRight"?(s++,p()):i.key==="ArrowLeft"&&(s--,p()),i.key==="Escape"&&a.classList.remove(n)})}function v(){return requestAnimationFrame(()=>{L()}),`
		<a
			href="/"
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
	`}class x{constructor(){u(this,"HOME","/src/");u(this,"LESSONS","./lessons/");u(this,"LESSON",`${this.LESSONS}lesson`)}}const e=new x,b=[{id:1,title:"Оптимізація подій",link:`${e.LESSON}1/`},{id:2,title:"Бібліотека Lodash. Throttle і Debounce",link:`${e.LESSON}2/`},{id:3,title:"Концепція Intersection Observer (Практика)",link:`${e.LESSON}3/`},{id:4,title:"Знайомство з Node.js та Пакетний менеджер npm",link:`${e.LESSON}4/`},{id:5,title:"Бібліотеки та фреймворки",link:`${e.LESSON}5/`},{id:6,title:"Модульність коду. Бандлер JS-модулів Parcel",link:`${e.LESSON}6/`},{id:7,title:"Шаблонізація. Handlebars",link:`${e.LESSON}7/`},{id:9,title:"Формат даних JSON",link:`${e.LESSON}9/`},{id:10,title:"Веб-сховище",link:`${e.LESSON}10/`},{id:11,title:"Асинхронність",link:`${e.LESSON}11/`},{id:12,title:"Таймери",link:`${e.LESSON}12/`},{id:13,title:"Дата та час",link:`${e.LESSON}13/`},{id:14,title:"Проміси",link:`${e.LESSON}14/`},{id:15,title:"Методи класу Promise. Цикл подій",link:`${e.LESSON}15/`},{id:17,title:"HTTP запити 1. REST API",link:`${e.LESSON}17/`},{id:18,title:"HTTP-запити 2. AJAX",link:`${e.LESSON}18/`},{id:19,title:"Пагінація",link:`${e.LESSON}19/`},{id:20,title:"CRUD взаємодії з ресурсами бекенду",link:`${e.LESSON}20/`},{id:21,title:"Асинхронні функції async/await",link:`${e.LESSON}21/`},{id:22,title:"Міні-проєкт: асинхронні функції async/await",link:`${e.LESSON}22/`}];function w(){return`
	  <div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-3xl font-bold text-center">
				Це моя сторінка для здачи завданнь для школи GoIteens
			</h1>

			<ul class="flex flex-col gap-2 mt-4" id="lessonsList">
				${b.map(t=>`
					<li>
						<a
							href="${t.link}"
							class="text-lg transition-colors duration-300 hover:text-primary"
							>${t.id}. ${t.title}</a
						>
					</li>
				`).join("")}
			</ul>
		</div>
	`}const _=[{path:"/",component:w},{path:"/lessons/lesson1/",component:v}];function E(){return`
		<div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-center text-3xl font-bold">404 Not Found Page</h1>
		</div>
	`}function m(){const t=_.find(a=>a.path===window.location.pathname),r=t?t.component:E;document.querySelector("#app").innerHTML=r()}window.addEventListener("DOMContentLoaded",()=>{m(),document.body.addEventListener("click",t=>{t.target.matches("[data-link]")&&(t.preventDefault(),history.pushState(null,"",t.target.href),m())})});window.addEventListener("popstate",m);
