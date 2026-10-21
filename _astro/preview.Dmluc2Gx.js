import{j as e}from"./jsx-runtime.DA0eVWWA.js";import{r as i}from"./index.tM8dBz2K.js";import{u as a}from"./context.R0BECfQz.js";const s=i.createContext({lang:""}),p=`
  .plinto-partial, .plinto-partial > [class*="DropZone"] { display: contents; }

  .plinto-partial-overlay {
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  /* The overlay lies over the partial, so it is what the pointer is on. */
  .plinto-partial-overlay:hover { opacity: 1; }
  .plinto-partial-overlay > span {
    background: #2563eb;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font: 500 15px/1.2 system-ui, -apple-system, "Segoe UI", sans-serif;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }
`;function c({children:t,...r}){const o=a().previewShell;return e.jsxs(s.Provider,{value:r,children:[e.jsx("style",{children:p}),o?e.jsx(o,{children:t}):t]})}export{c as P};
