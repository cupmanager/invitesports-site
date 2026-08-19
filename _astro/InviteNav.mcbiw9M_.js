import{g as j,r as u}from"./index.ZbXXA13o.js";function y(s,o){for(var i=0;i<o.length;i++){const r=o[i];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in s)){const t=Object.getOwnPropertyDescriptor(r,e);t&&Object.defineProperty(s,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},p={};var g;function k(){if(g)return p;g=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(r,e,t){var d=null;if(t!==void 0&&(d=""+t),e.key!==void 0&&(d=""+e.key),"key"in e){t={};for(var v in e)v!=="key"&&(t[v]=e[v])}else t=e;return e=t.ref,{$$typeof:s,type:r,key:d,ref:e!==void 0?e:null,props:t}}return p.Fragment=o,p.jsx=i,p.jsxs=i,p}var b;function R(){return b||(b=1,f.exports=k()),f.exports}var a=R();const E=j(a),_=y({__proto__:null,default:E},[a]),A=({id:s})=>{const[o,i]=u.useState([]),[r,e]=u.useState(""),[t,d]=u.useState(!1);u.useEffect(()=>{const l=Array.from(document.querySelectorAll("[data-iv-anchor]")),c=l.map(n=>({anchor:n.dataset.ivAnchor??"",label:n.dataset.ivLabel??"",dark:n.dataset.ivDark==="true"}));i(c),e(n=>n||c[0]?.anchor||"");const x=setTimeout(()=>d(!0),window.location.hash?800:4e3),m=new IntersectionObserver(n=>n.forEach(h=>{h.isIntersecting&&e(h.target.dataset.ivAnchor??"")}),{threshold:.5});return l.forEach(n=>m.observe(n)),()=>{clearTimeout(x),m.disconnect()}},[]);const v=o.find(l=>l.anchor===r)?.dark??!1;return a.jsxs("nav",{"data-component-id":s,className:"iv-nav",style:{"--nav-color":v?"#fff":"#2f4850","--nav-text-color":v?"#2f4850":"#fff",opacity:t?1:0},children:[a.jsx("style",{children:`
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
          width: 2px; height: 15px; background: var(--nav-color);
          margin: 2px 10px 2px 0; align-self: flex-end;
        }
        @media (max-width: 960px) { .iv-nav-label { display: none; } }
      `}),o.map(({label:l,anchor:c},x)=>a.jsxs("span",{style:{display:"contents"},children:[x>0&&a.jsx("span",{className:"iv-nav-line"}),a.jsxs("a",{href:`#${c}-id`,className:`iv-nav-item${r===c?" active":""}`,"aria-label":l,children:[a.jsx("span",{className:"iv-nav-label",children:l}),a.jsx("span",{className:"iv-nav-ring"})]})]},c))]})};export{A as I,a as j,_ as r};
