import{h as m}from"./heading-CypbXyJM.js";import{m as l}from"./mainBtn-ChWgzhUD.js";import"./index-OgUqpvg1.js";function d(){//! imports and exports
const i=document.getElementById("imagesList"),a=document.getElementById("beginBtn");let n;const o=t=>Array.from({length:t},(s,e)=>`
			<li>
				<img
					data-src="https://picsum.photos/400/300?random=${Math.random()}"
					src=""
					alt="image-${e+1}"
					id="imagesListElement"
					class="w-[400px] h-[300px] bg-white/15 rounded-xl transition-[transform, opacity] duration-300"
				/>
			</li>
		`).join("");i.innerHTML=o(100),n=document.querySelectorAll("#imagesListElement");const r=new IntersectionObserver(t=>{t.forEach(s=>{if(s.isIntersecting){const e=s.target;e.src=e.dataset.src,e.style.transform="translateY(0)",e.style.opacity="1",r.unobserve(e)}else{const e=s.target;e.style.transform="translateY(100px)",e.style.opacity="0.2"}},{threshold:.3})}),c=()=>{n.forEach(t=>{r.observe(t)})};a.addEventListener("click",c)}async function h(){return requestAnimationFrame(()=>{d()}),`
		<div class="flex flex-col justify-center items-center">
			${m({children:"lesson-3",className:"text-center mb-4"})}
			
			${l({children:"Запустити",id:"beginBtn",className:"mb-4"})}

			<ul
				class="flex gap-8 flex-col justify-center items-center mb-4"
				id="imagesList"
			></ul>
		</div>
	`}export{h as thirdLessonPage};
