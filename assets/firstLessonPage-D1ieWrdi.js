import{h as m}from"./heading-CypbXyJM.js";import"./index-OgUqpvg1.js";const l=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];function u(){const p=document.querySelector("#imageGallery"),e=document.querySelector("#lightbox"),c=document.querySelector(".lightbox__content"),d=document.querySelector(".lightbox__button"),r="is-open",g=document.querySelector(".arrow-left"),h=document.querySelector(".arrow-right");let a,s=0,o=0;p.innerHTML=l.map(t=>`
			<li class="gallery__item">
				<div class="gallery__link">
					<img
						class="gallery__image rounded-md bg-white/10"
						src="${t.preview}"
						data-source="${t.original}"
						alt="${t.description}"
						loading="lazy"
					/>
				</div>
			</li>
		`).join("");const n=()=>{o<0?o=a.length-1:o>a.length-1&&(o=0),a.forEach(t=>{t.style.transform=`translateX(-${o*s}px)`})};p.addEventListener("click",t=>{t.target.nodeName==="IMG"&&(e.classList.add(r),c.innerHTML=l.map(i=>`<img class="lightbox__image rounded-md" src="${i.original}" alt="${i.description}" />`).join(""),a=document.querySelectorAll(".lightbox__image"),s=a[0].clientWidth+30,console.log("slideWidth",s),e.addEventListener("click",i=>{i.target.nodeName!=="IMG"&&e.classList.remove(r)}),o=l.findIndex(i=>i.description===t.target.alt),n())}),d.addEventListener("click",t=>{t.stopPropagation(),e.classList.remove(r)}),g.addEventListener("click",t=>{t.stopPropagation(),o--,n()}),h.addEventListener("click",t=>{t.stopPropagation(),o++,n()}),document.addEventListener("keydown",t=>{t.key==="ArrowRight"?(o++,n()):t.key==="ArrowLeft"&&(o--,n()),t.key==="Escape"&&e.classList.remove(r)})}async function w(){return requestAnimationFrame(()=>{u()}),`
		<div class="container mx-auto min-h-screen flex items-center justify-center py-8 flex-col px-2"> 
			${m({children:"lesson-1",className:"text-center mb-4"})}

			<ul 
				class="grid w-full max-w-[1200px] grid-cols-1 auto-rows-[180px] gap-2 p-0 list-none mx-auto sm:grid-cols-2 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-3 lg:auto-rows-[220px] xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] xl:auto-rows-[240px] xl:w-[1200px] xl:gap-3" 
				id="imageGallery"
			>
			</ul>

			<div class="lightbox" id="lightbox">
				<div class="lightbox__overlay"></div>

				<div class="lightbox__content rounded-lg"></div>

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
		</div>
	`}export{w as firstLessonPage};
