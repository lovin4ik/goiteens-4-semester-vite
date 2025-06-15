import{h as w}from"./heading-CypbXyJM.js";import{_ as r}from"./lodash-BNQWTVD-.js";import"./index-OgUqpvg1.js";import"./_commonjsHelpers-Cpj98o6Y.js";function g(){const e=document.querySelector(".slider__input"),a=document.querySelector(".slider__image"),s=document.querySelector(".slider__wrapper");a.src=`https://picsum.photos/400/300?random=${Math.random()}`;const d=n=>{s.style.width=`${n.target.value*4}px`};e.value=e.defaultValue,s.style.width=`${e.value*4}px`;const u=r.debounce(d,300);e.addEventListener("input",u);const t=document.querySelector(".secondLessonContainer"),o=document.querySelector(".followerDiv"),m=n=>{const l=t.getBoundingClientRect(),f=n.clientX-l.left,h=n.clientY-l.top,i=o.offsetWidth,c=o.offsetHeight,v=Math.min(Math.max(0,f-i/2),t.clientWidth-i),x=Math.min(Math.max(0,h-c/2),t.clientHeight-c);o.style.top=`${x}px`,o.style.left=`${v}px`},p=r.debounce(m,100);t.addEventListener("mousemove",p)}async function q(){return requestAnimationFrame(()=>{g()}),`
		<div class="flex flex-col justify-center items-center h-full">
			${w({children:"lesson-2",className:"text-center mb-4"})}
			
			<div class="slider mx-auto w-[400px] mt-4 h-[270px]">
				<input
					type="range"
					min="1"
					max="100"
					value="50"
					class="slider__input w-full"
				/>

				<div class="slider__wrapper max-w-screen m-[20px_auto] aspect-video">
					<img
						src=""
						class="slider__image max-w-full bg-white/60 h-full w-full"
						loading="lazy"
					/>
				</div>	
			</div>	
			
			<div
				class="secondLessonContainer mt-4 bg-cyan-900 w-[500px] h-[500px] block mx-auto relative"
			>
				<div
					class="followerDiv bg-cyan-500 w-[50px] h-[50px] absolute top-0 left-0"
				></div>
			</div>
		</div>
	`}export{q as secondLessonPage};
