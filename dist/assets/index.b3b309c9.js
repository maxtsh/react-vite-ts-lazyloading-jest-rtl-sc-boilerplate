import{r as o,a as e,_ as s,W as d,j as c,R as i,B as p,b as l,c as m,d as u}from"./vendor.65101c09.js";const b=(t,a)=>{const r=o.exports.lazy(t);return n=>e(o.exports.Suspense,{fallback:e(a,{}),children:e(r,{...n})})},h=()=>e("div",{children:e("h1",{children:"Loading..."})});var _=b(()=>s(()=>import("./Home.247cd561.js"),["assets/Home.247cd561.js","assets/vendor.65101c09.js"]),h);const y=d`
  :root{
    --black: #000;
    --white: #fff;
  }

  *{
    box-sizing: border-box ;
  }

  html, body{
    margin: 0;
    padding:0;
  }
`,L=()=>c(i.StrictMode,{children:[e(p,{children:e(l,{children:e(m,{path:"/",element:e(_,{})})})}),e(y,{})]}),R=u(document.getElementById("app")||f());R.render(e(L,{}));function f(){const t=document.createElement("div");return t.setAttribute("id","app"),document.body.appendChild(t),t}
