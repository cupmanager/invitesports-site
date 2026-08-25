import{j as a}from"./jsx-runtime.DA0eVWWA.js";import{r as i}from"./index.BJDLkg6H.js";const b=({id:v})=>{const[o,p]=i.useState([]),[s,l]=i.useState(""),[m,f]=i.useState(!1);i.useEffect(()=>{const t=Array.from(document.querySelectorAll("[data-iv-anchor]")),n=t.map(e=>({anchor:e.dataset.ivAnchor??"",label:e.dataset.ivLabel??"",dark:e.dataset.ivDark==="true"}));p(n),l(e=>e||n[0]?.anchor||"");const r=setTimeout(()=>f(!0),window.location.hash?800:4e3),h=new IntersectionObserver(e=>e.forEach(d=>{d.isIntersecting&&l(d.target.dataset.ivAnchor??"")}),{threshold:.5});return t.forEach(e=>h.observe(e)),()=>{clearTimeout(r),h.disconnect()}},[]);const c=o.find(t=>t.anchor===s)?.dark??!1;return a.jsxs("nav",{"data-component-id":v,className:"iv-nav",style:{"--nav-color":c?"#fff":"#2f4850","--nav-text-color":c?"#2f4850":"#fff",opacity:m?1:0},children:[a.jsx("style",{children:`
        .iv-nav {
          position: fixed; right: 0; top: 50%; transform: translateY(-50%);
          padding-right: max(3vw, 1rem); z-index: 10; display: flex;
          flex-direction: column; align-items: flex-end; font-size: 19px;
          transition: opacity 1s, top 0.5s; pointer-events: none;
        }
        .iv-nav-item {
          display: flex; align-items: center; gap: 0.3rem;
          pointer-events: auto; text-decoration: none; overflow: hidden;
        }
        .iv-nav-label {
          background: var(--nav-color); color: var(--nav-text-color);
          padding: 0.3rem 1rem; border-radius: 10px; white-space: nowrap;
          opacity: 0; transform: translateX(100%); transition: all 0.25s;
        }
        .iv-nav-item:hover .iv-nav-label { opacity: 1; transform: translateX(0); }
        .iv-nav-ring {
          width: 19px; height: 19px; border-radius: 20px; flex-shrink: 0;
          border: 2px solid var(--nav-color); box-sizing: border-box; transition: 0.25s;
        }
        .iv-nav-item:hover .iv-nav-ring, .iv-nav-item.active .iv-nav-ring {
          background: var(--nav-color);
        }
        .iv-nav-line {
          /* The connector has to touch both rings, or it reads as a third mark
             rather than a link between two.

             It cannot simply be made longer. It is a sibling of the item, not
             of the ring, and an item is taller than its ring -- the label sets
             its height -- so (item - ring)/2 of empty space sits above and below
             every ring that the connector can never reach into. The negative
             margin pulls it into exactly that space; the height is then the
             whole ring-to-ring distance rather than what is left between the
             items.

             22 rather than the 38 the old spacing worked out to: back then only
             15 of those were drawn and the rest was air, and a solid line reads
             far longer than the same distance broken. Roughly one ring diameter
             keeps the run reading as a chain. */
          width: 2px; height: 22px; background: var(--nav-color);
          /* 8.5 to the right, not 10: the ring is 19 wide, so its centre line
             sits 9.5 in from the edge, and a 2px connector needs 8.5 to land on
             it. The old value put the line 1.5px to the left of the rings. */
          margin: -9.5px 8.5px -9.5px 0; align-self: flex-end;
        }
        @media (max-width: 960px) { .iv-nav-label { display: none; } }
      `}),o.map(({label:t,anchor:n},r)=>a.jsxs("span",{style:{display:"contents"},children:[r>0&&a.jsx("span",{className:"iv-nav-line"}),a.jsxs("a",{href:`#${n}-id`,className:`iv-nav-item${s===n?" active":""}`,"aria-label":t,children:[a.jsx("span",{className:"iv-nav-label",children:t}),a.jsx("span",{className:"iv-nav-ring"})]})]},n))]})};export{b as InviteNav};
