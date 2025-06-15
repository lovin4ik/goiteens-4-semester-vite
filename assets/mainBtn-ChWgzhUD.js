import{t as a}from"./index-OgUqpvg1.js";function c({children:r,id:t="",className:e="",attrs:i={}}){const s=Object.entries(i).map(([o,n])=>n===!0?o:`${o}="${n}"`).join(" ");return`
    <button
      class="${a(`
        bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font-medium cursor-pointer disabled:opacity-60 ${e}
      `)}"
      ${t?`id="${t}"`:""}
      ${s}
    >
      ${r}
    </button>
  `}export{c as m};
