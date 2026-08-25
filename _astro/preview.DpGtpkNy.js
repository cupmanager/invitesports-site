import{j as t}from"./jsx-runtime.DA0eVWWA.js";import{r as l}from"./index.BJDLkg6H.js";import{u as s}from"./context.D8uWTxSk.js";const r=l.createContext({lang:""}),i=`
  .atoll-partial, .atoll-partial > [class*="DropZone"] { display: contents; }

  :has(> .atoll-partial-editable) { position: relative; }
  .atoll-partial-overlay {
    position: absolute;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  /* Descendant, not child: display:contents changes layout, not the DOM tree,
     so the overlay is a grandchild of the site's element. */
  :has(> .atoll-partial-editable):hover .atoll-partial-overlay { opacity: 1; }
  .atoll-partial-overlay > span {
    background: #2563eb;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font: 500 15px/1.2 system-ui, -apple-system, "Segoe UI", sans-serif;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }
`;function d({children:e,...o}){const a=s().previewShell;return t.jsxs(r.Provider,{value:o,children:[t.jsx("style",{children:i}),a?t.jsx(a,{children:e}):e]})}export{d as P};
