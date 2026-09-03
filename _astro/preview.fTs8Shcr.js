import{j as t}from"./jsx-runtime.DA0eVWWA.js";import{r as i}from"./index.iOwzSLZd.js";import{u as s}from"./context.CgmQRqBz.js";const r=i.createContext({lang:""}),l=`
  .plinto-partial, .plinto-partial > [class*="DropZone"] { display: contents; }

  :has(> .plinto-partial-editable) { position: relative; }
  .plinto-partial-overlay {
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
  :has(> .plinto-partial-editable):hover .plinto-partial-overlay { opacity: 1; }
  .plinto-partial-overlay > span {
    background: #2563eb;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font: 500 15px/1.2 system-ui, -apple-system, "Segoe UI", sans-serif;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }
`;function d({children:e,...a}){const o=s().previewShell;return t.jsxs(r.Provider,{value:a,children:[t.jsx("style",{children:l}),o?t.jsx(o,{children:e}):e]})}export{d as P};
