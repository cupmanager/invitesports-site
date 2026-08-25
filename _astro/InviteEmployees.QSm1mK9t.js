const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.CWuely45.js","_astro/site-config.VuTF3Btn.js","_astro/_commonjsHelpers.CE1G-McA.js","_astro/_virtual_atoll-config.BKS6T-Zq.js","_astro/atoll.Celu_ZwS.js","_astro/jsx-runtime.DA0eVWWA.js","_astro/index.BJDLkg6H.js","_astro/InviteNav.SD2P-8fl.js","_astro/preload-helper.CVfkMyKi.js","_astro/index.B4Wv4MhB.js","_astro/index.BYo-N0RE.js","_astro/urls.zN2zm47n.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.DA0eVWWA.js";import{r as u}from"./index.BJDLkg6H.js";import{_ as x}from"./preload-helper.CVfkMyKi.js";import{i as g,h as k,c as S,m as E}from"./site-config.VuTF3Btn.js";function w(o,n){let r=o;return n?.slugs&&(r=n.slugs.split(",").map(d=>d.trim()).map(d=>r.find(c=>c.slug===d)).filter(d=>d!==void 0)),n?.group&&(r=r.filter(l=>l.data.group===n.group)),r}const C=Object.freeze(Object.defineProperty({__proto__:null,applyCollectionFilters:w},Symbol.toStringTag,{value:"Module"}));function N(o,n,r){try{const l=g.join(process.cwd(),k(S,o),n);if(!g.existsSync(l))return[];const f=g.readdirSync(l).filter(s=>s.endsWith(".mdx")).map(s=>{const m=g.readFileSync(g.join(l,s),"utf-8"),{data:t,content:a}=E(m);return{slug:s.replace(/\.mdx$/,""),data:t,body:a.trim()}});return w(f,r)}catch{return[]}}function L(o,n,r){if(o===null)return{entries:[],loading:!1,error:null};if(typeof window>"u")return{entries:N(o,n,r),loading:!1,error:null};const[l,d]=u.useState([]),[c,f]=u.useState(!0),[s,m]=u.useState(null),t=r?.slugs,a=r?.group;return u.useEffect(()=>{let i=!1;async function v(){try{f(!0),m(null);const{getCollection:p}=await x(async()=>{const{getCollection:h}=await import("./index.CWuely45.js");return{getCollection:h}},__vite__mapDeps([0,1,2,3])),{applyCollectionFilters:y}=await x(async()=>{const{applyCollectionFilters:h}=await Promise.resolve().then(()=>C);return{applyCollectionFilters:h}},void 0),{atoll:j}=await x(async()=>{const{atoll:h}=await import("./atoll.Celu_ZwS.js").then(_=>_.K);return{atoll:h}},__vite__mapDeps([4,3,5,2,6,7,8,1,9,10,11])),b=await p(j,o,n);i||d(y(b,{slugs:t,group:a}))}catch(p){i||m(p instanceof Error?p.message:`Failed to load ${o}`)}finally{i||f(!1)}}return v(),()=>{i=!0}},[o,n,t,a]),{entries:l,loading:c,error:s}}const z=({id:o,heading:n="The Team of Invite Sports",lang:r="en",people:l})=>{const{entries:d}=L(l?null:"staff",r,{}),c=[...l??d].sort((a,i)=>String(a.data.name).localeCompare(String(i.data.name))),[f,s]=u.useState(null),m=u.useCallback(a=>{s(i=>i===null?i:(i+a+c.length)%c.length)},[c.length]);u.useEffect(()=>{if(f===null)return;const a=i=>{i.key==="ArrowRight"&&m(1),i.key==="ArrowLeft"&&m(-1),i.key==="Escape"&&s(null)};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}},[f,m]);const t=f!==null?c[f]:null;return e.jsxs("div",{"data-component-id":o,className:"iv-team",children:[e.jsx("style",{children:`
        .iv-team {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center; overflow: auto;
        }
        .iv-team-grid {
          display: flex; flex-wrap: wrap; gap: 2rem;
          width: 80vw; max-width: 1000px; justify-content: center;
        }
        .iv-team-card {
          width: 120px; background: none; border: 0; cursor: pointer;
          font-size: 14px; transition: 0.15s ease; font-family: inherit;
        }
        .iv-team-card:hover {
          transform: scale(1.2) translateY(-5px);
          filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.04));
        }
        .iv-team-card img {
          width: 100px; height: 100px; object-fit: cover;
          border-radius: 100px; background: #f2f7f1;
        }
        .iv-team-card h3 { font-size: 1em; margin: 0.3rem 0 0; color: #000; }
        .iv-team-card > span { color: #888; }
        @media (max-width: 768px) {
          .iv-team-grid { width: 90vw; gap: 0.5rem; }
          .iv-team-card { width: 90px; font-size: 12px; }
          .iv-team-card img { width: 50px; height: 50px; }
          .iv-team-card .iv-lastname { display: none; }
        }
        @media (max-width: 400px) {
          .iv-team-card img { width: 40px; height: 40px; }
        }
        .iv-team-modal {
          position: fixed; inset: 0; z-index: 9000;
          background: var(--clr-invite-gradient);
          display: flex; align-items: center; justify-content: center;
          color: #fff; animation: iv-modalIn 0.2s ease-in-out;
        }
        @keyframes iv-modalIn { from { transform: translateX(-100%); opacity: 0; } }
        .iv-team-modal button {
          background: none; border: 0; color: #fff; cursor: pointer; font-family: inherit;
        }
        .iv-modal-close { position: absolute; top: 2vw; right: 2vw; font-size: 2rem; }
        .iv-modal-close:hover { transform: scale(1.1); }
        .iv-modal-arrow { position: absolute; top: 50%; transform: translateY(-50%); padding: 30px; }
        .iv-modal-arrow svg { width: 2rem; height: 2rem; }
        .iv-modal-slide { width: 50vw; display: flex; gap: 2rem; align-items: center; }
        .iv-modal-slide img {
          max-width: 400px; width: 50%; aspect-ratio: 1; object-fit: cover;
          border-radius: 100%; background: #f2f7f1;
        }
        .iv-modal-slide h2 { font-size: 1.4rem; margin: 0 0 0.2rem; }
        .iv-modal-slide .iv-role { font-weight: 700; }
        .iv-modal-slide p { max-width: 40vw; line-height: 1.4rem; }
        .iv-modal-slide a { color: #fff; }
        .iv-contact-row { font-weight: 700; display: flex; gap: 0.5rem; align-items: center; }
        @media (max-width: 1200px) { .iv-modal-slide { width: 80vw; } }
        @media (max-width: 850px) {
          .iv-modal-slide { flex-direction: column; gap: 0; }
          .iv-modal-slide p {
            display: -webkit-box; -webkit-line-clamp: 7;
            -webkit-box-orient: vertical; overflow: hidden;
          }
        }
      `}),e.jsx("h3",{children:n}),e.jsx("div",{className:"iv-team-grid",children:c.map((a,i)=>{const[v,...p]=String(a.data.name).split(" ");return e.jsxs("button",{className:"iv-team-card",onClick:()=>s(i),children:[e.jsx("img",{src:String(a.data.image),alt:""}),e.jsxs("h3",{children:[v," ",e.jsx("span",{className:"iv-lastname",children:p.join(" ")})]}),e.jsx("span",{children:String(a.data.role??"")})]},a.slug)})}),t&&e.jsxs("div",{className:"iv-team-modal",role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"iv-modal-close",onClick:()=>s(null),children:"✕ Close"}),e.jsx("button",{className:"iv-modal-arrow",style:{left:0},onClick:()=>m(-1),"aria-label":"Previous employee",children:e.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),e.jsxs("div",{className:"iv-modal-slide",children:[e.jsx("img",{src:String(t.data.image),alt:String(t.data.name)}),e.jsxs("div",{children:[e.jsx("h2",{children:String(t.data.name)}),e.jsx("div",{className:"iv-role",children:String(t.data.role??"")}),e.jsx("p",{children:t.body}),typeof t.data.email=="string"&&e.jsxs("div",{className:"iv-contact-row",children:["✉ ",e.jsx("a",{href:`mailto:${t.data.email}`,children:t.data.email})]}),typeof t.data.phone=="string"&&t.data.phone&&e.jsxs("div",{className:"iv-contact-row",children:["☏ ",t.data.phone]})]})]},t.slug),e.jsx("button",{className:"iv-modal-arrow",style:{right:0},onClick:()=>m(1),"aria-label":"Next employee",children:e.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]})]})};z.config={fields:{heading:{type:"text",label:"Heading"},lang:{type:"text",label:"Language"}},defaultProps:{heading:"The Team of Invite Sports",lang:"en"}};export{z as InviteEmployees};
