(this["webpackJsonpisb-conecta_ui"]=this["webpackJsonpisb-conecta_ui"]||[]).push([[0],{84:function(n,e,t){"use strict";t.r(e);var i,r,c,a=t(0),o=t.n(a),s=t(16),d=t.n(s),l=(t(60),t(6)),u=t(7),b=Object(u.a)(i||(i=Object(l.a)(["\n  :root {\n    --white: #ffffff;\n\n    --red: #e52e4d;\n    --green: #33cc95;\n    --blue: #5429cc;\n\n    --blue-light: #6933ff;\n\n    --cyan-light: #F7F8FC;\n    --cyan-dark: #005D73;\n\n    --gray-light: #C4C4C4;\n\n    --gray-300: #F0F0F0;\n    --gray-400: #9F9F9F;\n\n    --text-title: var(--cyan-dark);\n    --text-body: #969cb3;\n    --error-color: #E44132;\n\n    --background: var(--cyan-light);\n    --shape: #fff;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media(max-width: 1080px){\n      font-size: 93.75%\n    }\n\n    @media(max-width: 720px){\n      font-size: 87.5%\n    }\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font: 400 1rem 'Roboto', sans-serif;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 300;\n    padding-bottom: 1rem;\n    color: var(--text-title);\n  }\n\n  strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n    border: 0;\n  }\n\n  [disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"]))),j=t(54),h=t(2),f=t(55),x=u.b.header(r||(r=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 2rem;\n\n    background: var(--cyan-dark);\n    color: var(--white);\n\n    padding-bottom: 4rem;\n    position: relative;\n    &::after {\n        content: '';\n        height: 2rem;\n        border-radius: 100px 100px 0 0;\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        background: var(--background);\n    }\n\n    .menu {\n        width: 100%;\n        margin: 0 1rem;\n    }\n\n    .burger-aberto {\n        display: flex;\n        list-style: none;\n        justify-content: space-between;\n\n        align-items: center;\n\n        .usuario-pequeno {\n            display: flex;\n            flex-direction: column;\n        }\n    }\n"]))),m=t(1);function O(){return Object(m.jsx)(x,{})}var g,p=u.b.footer(c||(c=Object(l.a)(["\n    margin: 4rem;\n    text-align: center;\n\n    ul {\n        display: inline-flex;\n        justify-content: space-evenly;\n    }\n\n    li {\n        list-style: none;\n        color: var(--gray-light);\n    }\n\n    li + li {\n        margin-left: 1rem;\n    }\n"])));function y(){return Object(m.jsx)(p,{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Ajuda"}),Object(m.jsx)("li",{children:"Privacidade"}),Object(m.jsx)("li",{children:"Termos"})]})})}var v=u.b.main(g||(g=Object(l.a)(["\n    padding: 4rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    & > div {\n        width: 100%;\n        max-width: 1100px;\n    }\n\n    h1 strong {\n        text-transform: uppercase;\n        display: block;\n    }\n"])));function w(n){var e=n.children;return Object(m.jsx)(v,{children:Object(m.jsx)("div",{children:e})})}var _,k=t(9),F=t(13),E=t.n(F);function S(){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,i){E.a.get(n,e).then((function(n){t(n.data)})).catch((function(n){console.log("deu erro aq"),i(n)}))}))}("/api/consulta/futuras")}function C(){var n=Object(a.useState)([]),e=Object(k.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)((function(){S().then((function(n){i(n.data)})).catch((function(n){console.log({err:n})}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{"aria-label":"Pr\xf3ximas consultas",children:t.map((function(n){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/consulta/".concat(n.id),children:n.paciente.nome})},n.id)}))})})}var P=u.b.main(_||(_=Object(l.a)(["\n  padding: 4rem;\n\n  h1 {\n    text-transform: uppercase;\n  }\n"])));function T(){return Object(m.jsx)(P,{children:Object(m.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"})})}function A(){return Object(m.jsxs)(j.a,{basename:"/conceitorio_ui",children:[Object(m.jsx)(f.a,{}),Object(m.jsx)(O,{}),Object(m.jsx)(w,{children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(C,{})}),Object(m.jsx)(h.a,{path:"/404",element:Object(m.jsx)(T,{})}),Object(m.jsx)(h.a,{path:"*",element:Object(m.jsx)(T,{})})]})}),Object(m.jsx)(y,{})]})}function R(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{}),Object(m.jsx)(b,{})]})}var D=t(53);(function(){if(Object({NODE_ENV:"production",PUBLIC_URL:"/conceitorio_ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CY)return!1;return!0})()&&Object(D.a)({routes:function(){this.get("/api/consulta/futuras",(function(n,e){return{data:[{id:1,paciente:{id:1,nome:"Jos\xe9"},confirmado:!0},{id:3,paciente:{id:11,nome:"Adriana"},confirmado:!0}]}}))}}),d.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.f2a1e129.chunk.js.map