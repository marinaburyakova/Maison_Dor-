const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-WzanyDwH.js","./vendor-vYKS_erO.js","./product3-DEWBbiUP.js","./HomePage.-vmTAHKr.css","./ProductsPage-DRVuzaGx.js","./api-D9G1WKDL.js","./ProductCard-9l1iYT20.js","./ProductCard.BjXjBQXW.css","./ProductDetailPage-DE8JFo70.js","./CartPage-zpY0jiRL.js","./CheckoutPage-D0J4G1D-.js","./LoginPage-CToQQewD.js","./FavoritesPage-DU3Oyp69.js","./NotFoundPage-CTnaeUad.js"])))=>i.map(i=>d[i]);
import{r as l,a as xe,L as O,R as _,u as fe,B as ge,b as he,c as z,d as re,N as oe}from"./vendor-vYKS_erO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var ne={exports:{}},q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=l,be=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),we=Object.prototype.hasOwnProperty,Se=ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,je={key:!0,ref:!0,__self:!0,__source:!0};function ie(t,r,n){var o,a={},c=null,d=null;n!==void 0&&(c=""+n),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)we.call(r,o)&&!je.hasOwnProperty(o)&&(a[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:be,type:t,key:c,ref:d,props:a,_owner:Se.current}}q.Fragment=ve;q.jsx=ie;q.jsxs=ie;ne.exports=q;var e=ne.exports,V={},X=xe;V.createRoot=X.createRoot,V.hydrateRoot=X.hydrateRoot;const Ee="modulepreload",Ce=function(t,r){return new URL(t,r).href},Q={},N=function(r,n,o){let a=Promise.resolve();if(n&&n.length>0){const d=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),v=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=Promise.allSettled(n.map(m=>{if(m=Ce(m,o),m in Q)return;Q[m]=!0;const y=m.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(!!o)for(let w=d.length-1;w>=0;w--){const j=d[w];if(j.href===m&&(!y||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${k}`))return;const b=document.createElement("link");if(b.rel=y?"stylesheet":Ee,y||(b.as="script"),b.crossOrigin="",b.href=m,v&&b.setAttribute("nonce",v),document.head.appendChild(b),y)return new Promise((w,j)=>{b.addEventListener("load",w),b.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return a.then(d=>{for(const f of d||[])f.status==="rejected"&&c(f.reason);return r().catch(c)})},ae=l.createContext(),ke=(t,r)=>{switch(r.type){case"ADD_TO_CART":return t.items.find(o=>o.id===r.payload.id)?{...t,items:t.items.map(o=>o.id===r.payload.id?{...o,quantity:o.quantity+1}:o)}:{...t,items:[...t.items,{...r.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...t,items:t.items.filter(o=>o.id!==r.payload)};case"UPDATE_QUANTITY":return{...t,items:t.items.map(o=>o.id===r.payload.id?{...o,quantity:Math.max(1,r.payload.quantity)}:o)};case"CLEAR_CART":return{...t,items:[]};default:return t}},Ie=({children:t})=>{const[r,n]=l.useReducer(ke,{items:[]},()=>{const m=localStorage.getItem("luxuryCart");return m?{items:JSON.parse(m)}:{items:[]}});l.useEffect(()=>{localStorage.setItem("luxuryCart",JSON.stringify(r.items))},[r.items]);const o=m=>{n({type:"ADD_TO_CART",payload:m})},a=m=>{n({type:"REMOVE_FROM_CART",payload:m})},c=(m,y)=>{n({type:"UPDATE_QUANTITY",payload:{id:m,quantity:y}})},d=()=>{n({type:"CLEAR_CART"})},f=()=>r.items.reduce((m,y)=>m+y.price*y.quantity,0),v=()=>r.items.reduce((m,y)=>m+y.quantity,0);return e.jsx(ae.Provider,{value:{cart:r.items,addToCart:o,removeFromCart:a,updateQuantity:c,clearCart:d,getCartTotal:f,getCartCount:v},children:t})},se=()=>{const t=l.useContext(ae);if(!t)throw new Error("useCart must be used within CartProvider");return t},le=l.createContext(null),$=()=>{const t=l.useContext(le);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},U=t=>typeof t=="string"?t.replace(/[<>]/g,"").trim():t,Z=async t=>{const o=new TextEncoder().encode(t+"your-unique-salt-value-change-this-in-production"),a=await crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(a)).map(d=>d.toString(16).padStart(2,"0")).join("")},Oe=t=>{const n=new Date(t);return new Date-n<6048e5},Pe=t=>{try{return!(!t||!t.id||!t.email||!t.isAuthenticated)}catch{return!1}},Te=({children:t})=>{const[r,n]=l.useState(null),[o,a]=l.useState(!1),[c,d]=l.useState(!0),[f,v]=l.useState(0),[m,y]=l.useState(null),[k,P]=l.useState(null);l.useEffect(()=>{(()=>{try{const i=localStorage.getItem("luxuryUser");if(!i){d(!1);return}let x;try{x=JSON.parse(i)}catch(g){console.error("Error parsing user data:",g),localStorage.removeItem("luxuryUser"),d(!1);return}if(!Pe(x)){console.warn("Invalid session data detected"),localStorage.removeItem("luxuryUser"),d(!1);return}if(x.isAuthenticated&&x.loginTime)if(Oe(x.loginTime)){n(x),a(!0);const g=new Date(x.loginTime);g.setDate(g.getDate()+7),P(g)}else console.log("Session expired"),localStorage.removeItem("luxuryUser")}catch(i){console.error("Error checking auth:",i),localStorage.removeItem("luxuryUser")}finally{d(!1)}})()},[]),l.useEffect(()=>{if(!o)return;const h=()=>{try{const g=localStorage.getItem("luxuryUser");if(g){const E=JSON.parse(g);E.lastActivity=new Date().toISOString(),localStorage.setItem("luxuryUser",JSON.stringify(E));const C=new Date;C.setDate(C.getDate()+7),P(C)}}catch(g){console.error("Error updating session:",g)}},i=setInterval(h,5*60*1e3),x=["click","scroll","keydown","mousemove","touchstart"];return x.forEach(g=>{document.addEventListener(g,h)}),()=>{clearInterval(i),x.forEach(g=>{document.removeEventListener(g,h)})}},[o]);const b=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),F={user:r,isAuthenticated:o,loading:c,loginAttempts:f,blockedUntil:m,sessionExpiry:k,login:async(h,i)=>{try{if(m&&new Date<new Date(m)){const S=Math.ceil((new Date(m)-new Date)/1e3/60);throw new Error(`Too many failed attempts. Please try again in ${S} minutes.`)}const x=U(h);if(!x||!b(x))throw new Error("Please enter a valid email address");if(!i||i.length<1)throw new Error("Password is required");await new Promise(S=>setTimeout(S,1e3));let g=[];try{const S=localStorage.getItem("luxuryUsers");S&&(g=JSON.parse(S))}catch(S){throw console.error("Error parsing users data:",S),new Error("System error. Please try again.")}const E=await Z(i),C=g.find(S=>S.email===x&&S.password===E);if(!C){const S=f+1;if(v(S),S>=5){const T=new Date;throw T.setMinutes(T.getMinutes()+15),y(T),v(0),new Error("Too many failed attempts. Account blocked for 15 minutes.")}throw new Error("Invalid email or password")}v(0),y(null);const D={id:C.id||Date.now().toString(),email:C.email,name:C.name,isAuthenticated:!0,loginTime:new Date().toISOString(),lastActivity:new Date().toISOString()};localStorage.setItem("luxuryUser",JSON.stringify(D));const R=new Date;return R.setDate(R.getDate()+7),P(R),n(D),a(!0),D}catch(x){throw console.error("Login error:",x),x}},register:async h=>{try{const i=U(h.name||""),x=U(h.email||""),g=h.password||"";if(!x||!b(x))throw new Error("Please enter a valid email address");if(!g||g.length<8)throw new Error("Password must be at least 8 characters");if(!/(?=.*[A-Z])/.test(g))throw new Error("Password must contain at least one uppercase letter");if(!/(?=.*[a-z])/.test(g))throw new Error("Password must contain at least one lowercase letter");if(!/(?=.*\d)/.test(g))throw new Error("Password must contain at least one number");if(!/(?=.*[!@#$%^&*])/.test(g))throw new Error("Password must contain at least one special character (!@#$%^&*)");if(!i||i.length<2)throw new Error("Name must be at least 2 characters");if(i.length>50)throw new Error("Name must not exceed 50 characters");await new Promise(T=>setTimeout(T,1e3));let E=[];try{const T=localStorage.getItem("luxuryUsers");T&&(E=JSON.parse(T))}catch(T){throw console.error("Error parsing users data:",T),new Error("System error. Please try again.")}if(E.find(T=>T.email===x))throw new Error("An account with this email already exists");const C=await Z(g),D={id:Date.now().toString(),email:x,password:C,name:i,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString()};E.push(D),localStorage.setItem("luxuryUsers",JSON.stringify(E));const R={id:D.id,email:x,name:i,isAuthenticated:!0,loginTime:new Date().toISOString(),lastActivity:new Date().toISOString()};localStorage.setItem("luxuryUser",JSON.stringify(R));const S=new Date;return S.setDate(S.getDate()+7),P(S),n(R),a(!0),R}catch(i){throw console.error("Registration error:",i),i}},logout:()=>{try{localStorage.removeItem("luxuryUser"),n(null),a(!1),v(0),y(null),P(null)}catch(h){console.error("Logout error:",h)}},updateUser:async h=>{try{if(!r)throw new Error("No user logged in");const i={};if(h.name){if(i.name=U(h.name),i.name.length<2)throw new Error("Name must be at least 2 characters");if(i.name.length>50)throw new Error("Name must not exceed 50 characters")}if(h.email&&(i.email=U(h.email),!b(i.email)))throw new Error("Please enter a valid email address");if(i.name||i.email)try{const g=localStorage.getItem("luxuryUsers");let E=g?JSON.parse(g):[];const C=E.findIndex(D=>D.id===r.id);C!==-1&&(E[C]={...E[C],...i},localStorage.setItem("luxuryUsers",JSON.stringify(E)))}catch(g){console.error("Error updating user in storage:",g)}const x={...r,...i};return localStorage.setItem("luxuryUser",JSON.stringify(x)),n(x),x}catch(i){throw console.error("Update user error:",i),i}},checkAuth:()=>o,getCurrentUser:()=>r,getSessionExpiry:()=>k,isSessionExpiringSoon:()=>{if(!k)return!1;const i=k-new Date;return i<24*60*60*1e3&&i>0},resetBlockedStatus:()=>{v(0),y(null)}};return e.jsx(le.Provider,{value:F,children:t})},ce=l.createContext(),Ae=(t,r)=>{switch(r.type){case"TOGGLE_FAVORITE":return t.find(o=>o.id===r.payload.id)?t.filter(o=>o.id!==r.payload.id):[...t,r.payload];case"CLEAR_FAVORITES":return[];default:return t}},De=({children:t})=>{const[r,n]=l.useReducer(Ae,[],()=>{const d=localStorage.getItem("luxuryFavorites");return d?JSON.parse(d):[]});l.useEffect(()=>{localStorage.setItem("luxuryFavorites",JSON.stringify(r))},[r]);const o=d=>{n({type:"TOGGLE_FAVORITE",payload:d})},a=d=>r.some(f=>f.id===d),c=()=>{n({type:"CLEAR_FAVORITES"})};return e.jsx(ce.Provider,{value:{favorites:r,toggleFavorite:o,isFavorite:a,clearFavorites:c},children:t})},ze=()=>{const t=l.useContext(ce);if(!t)throw new Error("useFavorites must be used within FavoritesProvider");return t},Le=({isOpen:t,onClose:r})=>{const[n,o]=l.useState(!1),[a,c]=l.useState(null);let d,f=[],v=()=>{},m=()=>{},y=()=>0;try{d=se(),d&&(f=d.cart||[],v=d.removeFromCart||(()=>{}),m=d.updateQuantity||(()=>{}),y=d.getCartTotal||(()=>0))}catch(p){console.error("Cart context error:",p),c("Cart service is not available")}l.useEffect(()=>{if(t){o(!0),document.body.style.overflow="hidden";const p=I=>{I.key==="Escape"&&r()};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}}else{document.body.style.overflow="unset";const p=setTimeout(()=>{o(!1)},300);return()=>clearTimeout(p)}},[t,r]);const k=l.useCallback(async(p,I)=>{if(I<0){c("Quantity cannot be negative"),setTimeout(()=>c(null),3e3);return}if(I>99){c("Maximum quantity is 99 items"),setTimeout(()=>c(null),3e3);return}try{await m(p,I),c(null)}catch(B){console.error("Update quantity error:",B),c("Failed to update quantity. Please try again."),setTimeout(()=>c(null),3e3)}},[m]),P=l.useCallback(async p=>{try{await v(p),c(null)}catch(I){console.error("Remove item error:",I),c("Failed to remove item. Please try again."),setTimeout(()=>c(null),3e3)}},[v]),b=l.useCallback(()=>{r()},[r]),w=typeof y=="function"?y():0,j=Array.isArray(f)?f.length:0;return a&&!t?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{...u.overlay,opacity:t?1:0,pointerEvents:t?"auto":"none",transition:"opacity 0.3s ease"},onClick:b}),e.jsxs("div",{style:{...u.drawer,transform:t?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},children:[e.jsxs("div",{style:u.header,children:[e.jsxs("div",{style:u.headerLeft,children:[e.jsx("h3",{style:u.title,children:"SHOPPING BAG"}),j>0&&e.jsxs("span",{style:u.itemCount,children:["(",j," ",j===1?"item":"items",")"]})]}),e.jsx("button",{onClick:b,style:u.closeBtn,"aria-label":"Close cart",children:"✕"})]}),a&&e.jsxs("div",{style:u.errorBanner,children:[e.jsx("span",{children:"⚠️"}),e.jsx("span",{children:a})]}),e.jsx("div",{style:u.content,children:j===0?e.jsxs("div",{style:u.empty,children:[e.jsx("div",{style:u.emptyIcon}),e.jsx("p",{style:u.emptyText,children:"Your shopping bag is empty"}),e.jsx("p",{style:u.emptySubtext,children:"Discover our latest collection"}),e.jsx(O,{to:"/products",style:u.shopBtn,onClick:b,children:"SHOP NOW"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:u.itemsList,children:f.map(p=>e.jsxs("div",{style:u.cartItem,children:[e.jsxs("div",{style:u.itemImageContainer,children:[e.jsx("img",{src:p.image||"/images/placeholder.jpg",alt:p.name||"Product",style:u.itemImage,onError:I=>{I.target.src="/images/placeholder.jpg"}}),p.discount&&e.jsxs("span",{style:u.discountBadge,children:["-",p.discount,"%"]})]}),e.jsxs("div",{style:u.itemDetails,children:[e.jsx("h4",{style:u.itemName,children:p.name||"Product"}),p.brand&&e.jsx("span",{style:u.itemBrand,children:p.brand}),e.jsxs("p",{style:u.itemPrice,children:["$",(p.price||0).toFixed(2),p.originalPrice&&p.originalPrice>p.price&&e.jsxs("span",{style:u.originalPrice,children:["$",p.originalPrice.toFixed(2)]})]}),e.jsxs("div",{style:u.quantityControls,children:[e.jsx("button",{onClick:()=>k(p.id,(p.quantity||1)-1),style:{...u.qtyBtn,opacity:(p.quantity||1)<=1?.3:1},disabled:(p.quantity||1)<=1,"aria-label":"Decrease quantity",children:"-"}),e.jsx("span",{style:u.qty,children:p.quantity||1}),e.jsx("button",{onClick:()=>k(p.id,(p.quantity||1)+1),style:{...u.qtyBtn,opacity:(p.quantity||1)>=99?.3:1},disabled:(p.quantity||1)>=99,"aria-label":"Increase quantity",children:"+"})]})]}),e.jsx("button",{onClick:()=>P(p.id),style:u.removeBtn,"aria-label":`Remove ${p.name||"item"} from cart`,children:"✕"})]},p.id||Math.random().toString()))}),e.jsxs("div",{style:u.footer,children:[e.jsxs("div",{style:u.total,children:[e.jsx("span",{style:u.totalLabel,children:"SUBTOTAL"}),e.jsxs("span",{style:u.totalAmount,children:["$",w.toFixed(2)]})]}),w>0&&w<100&&e.jsx("div",{style:u.shippingNote,children:"Free shipping on orders over $100"}),e.jsx(O,{to:"/checkout",style:u.checkoutBtn,onClick:b,children:"PROCEED TO CHECKOUT"}),e.jsx(O,{to:"/cart",style:u.viewCartBtn,onClick:b,children:"VIEW FULL CART"})]})]})})]})]})},u={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",zIndex:2e3},drawer:{position:"fixed",top:0,right:0,width:"100%",maxWidth:"450px",height:"100vh",background:"#0a0a0a",zIndex:2001,display:"flex",flexDirection:"column",boxShadow:"-5px 0 30px rgba(0,0,0,0.5)"},header:{padding:"20px 25px",borderBottom:"1px solid #2a2a2a",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0},headerLeft:{display:"flex",alignItems:"center",gap:"12px"},title:{fontSize:"18px",letterSpacing:"2px",color:"#c6a43f",fontWeight:"500"},itemCount:{fontSize:"14px",color:"#888",fontWeight:"300"},closeBtn:{background:"none",border:"none",fontSize:"24px",cursor:"pointer",color:"#fff",padding:"5px 10px",transition:"transform 0.3s ease","&:hover":{transform:"rotate(90deg)"}},errorBanner:{padding:"12px 20px",background:"rgba(255, 107, 107, 0.1)",borderBottom:"1px solid #ff6b6b",color:"#ff6b6b",display:"flex",gap:"10px",alignItems:"center",fontSize:"14px",flexShrink:0},content:{flex:1,overflowY:"auto",padding:"20px 25px",display:"flex",flexDirection:"column"},itemsList:{flex:1},empty:{textAlign:"center",marginTop:"80px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},emptyIcon:{fontSize:"64px",marginBottom:"30px",opacity:.5},emptyText:{color:"#fff",fontSize:"20px",marginBottom:"10px",letterSpacing:"2px"},emptySubtext:{color:"#888",fontSize:"14px",marginBottom:"30px"},shopBtn:{display:"inline-block",padding:"14px 40px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease","&:hover":{background:"#d4b44a",transform:"translateY(-2px)"}},cartItem:{display:"flex",gap:"15px",marginBottom:"20px",paddingBottom:"20px",borderBottom:"1px solid #2a2a2a",position:"relative"},itemImageContainer:{width:"80px",height:"100px",flexShrink:0,position:"relative",background:"#1a1a1a",overflow:"hidden"},itemImage:{width:"100%",height:"100%",objectFit:"cover"},discountBadge:{position:"absolute",top:"5px",left:"5px",background:"#ff6b6b",color:"#fff",padding:"2px 6px",fontSize:"9px",fontWeight:"bold",borderRadius:"2px"},itemDetails:{flex:1,minWidth:0},itemName:{fontSize:"14px",marginBottom:"3px",color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},itemBrand:{fontSize:"12px",color:"#888",display:"block",marginBottom:"5px"},itemPrice:{color:"#c6a43f",fontSize:"14px",marginBottom:"10px",fontWeight:"500"},originalPrice:{color:"#666",fontSize:"12px",textDecoration:"line-through",marginLeft:"8px",fontWeight:"300"},quantityControls:{display:"flex",gap:"10px",alignItems:"center"},qtyBtn:{background:"#2a2a2a",border:"none",color:"#fff",width:"28px",height:"28px",cursor:"pointer",transition:"all 0.3s ease",fontSize:"14px","&:hover":{background:"#3a3a3a"}},qty:{fontSize:"14px",minWidth:"20px",textAlign:"center",color:"#fff"},removeBtn:{background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:"16px",padding:"5px",transition:"color 0.3s ease",alignSelf:"flex-start","&:hover":{color:"#ff6b6b"}},footer:{borderTop:"1px solid #2a2a2a",paddingTop:"20px",marginTop:"10px",flexShrink:0},total:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},totalLabel:{fontSize:"16px",letterSpacing:"2px",color:"#888"},totalAmount:{fontSize:"20px",fontWeight:"bold",color:"#c6a43f"},shippingNote:{fontSize:"12px",color:"#4caf50",textAlign:"right",marginBottom:"15px"},checkoutBtn:{display:"block",textAlign:"center",padding:"14px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease",marginBottom:"10px","&:hover":{background:"#d4b44a",transform:"translateY(-2px)"}},viewCartBtn:{display:"block",textAlign:"center",padding:"12px",color:"#888",textDecoration:"none",fontSize:"13px",letterSpacing:"1px",transition:"color 0.3s ease","&:hover":{color:"#fff"}}},de=document.createElement("style");de.textContent=`
  /* Анимация для появления товаров */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .cart-item {
    animation: slideIn 0.3s ease;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    .cart-drawer {
      max-width: 100% !important;
    }
    .cart-item {
      flex-wrap: wrap;
    }
    .item-image-container {
      width: 60px !important;
      height: 80px !important;
    }
  }
`;document.head.appendChild(de);var pe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K=_.createContext&&_.createContext(pe),_e=["attr","size","title"];function Ne(t,r){if(t==null)return{};var n,o,a=Re(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function Re(t,r){if(t==null)return{};var n={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.indexOf(o)!==-1)continue;n[o]=t[o]}return n}function M(){return M=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},M.apply(null,arguments)}function ee(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function W(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ee(Object(n),!0).forEach(function(o){Be(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Be(t,r,n){return(r=Ue(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Ue(t){var r=Fe(t,"string");return typeof r=="symbol"?r:r+""}function Fe(t,r){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function ue(t){return t&&t.map((r,n)=>_.createElement(r.tag,W({key:n},r.attr),ue(r.child)))}function Me(t){return r=>_.createElement(We,M({attr:W({},t.attr)},r),ue(t.child))}function We(t){var r=n=>{var{attr:o,size:a,title:c}=t,d=Ne(t,_e),f=a||n.size||"1em",v;return n.className&&(v=n.className),t.className&&(v=(v?v+" ":"")+t.className),_.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,d,{className:v,style:W(W({color:t.color||n.color},n.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&_.createElement("title",null,c),t.children)};return K!==void 0?_.createElement(K.Consumer,null,n=>r(n)):r(pe)}function qe(t){return Me({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Shopping_Cart"},child:[{tag:"path",attr:{d:"M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"},child:[]}]}]})(t)}const Ve=()=>{const t=fe(),[r,n]=l.useState(!1),[o,a]=l.useState(!1),[c,d]=l.useState(!1),[f,v]=l.useState(!1);let m,y=()=>0,k,P=[],b,w=!1,j=null,p=()=>{};try{m=se(),m&&(y=m.getCartCount||(()=>0))}catch(i){console.error("Cart context error:",i)}try{k=ze(),k&&(P=k.favorites||[])}catch(i){console.error("Favorites context error:",i)}try{b=$(),b&&(w=b.isAuthenticated||!1,j=b.user||null,p=b.logout||(()=>{}))}catch(i){console.error("Auth context error:",i)}l.useEffect(()=>{const i=()=>{v(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),l.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]),l.useEffect(()=>{const i=()=>{window.innerWidth>992&&o&&a(!1)};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[o]),l.useEffect(()=>{const i=x=>{x.key==="Escape"&&o&&a(!1)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[o]);const I=l.useCallback(i=>{w||(i.preventDefault(),d(!0),setTimeout(()=>d(!1),3e3))},[w]),B=l.useCallback(async()=>{try{await p(),window.dispatchEvent(new Event("auth-change")),a(!1),t("/")}catch(i){console.error("Logout error:",i);try{localStorage.removeItem("luxuryUser"),window.location.reload()}catch(x){console.error("Fallback logout error:",x)}}},[p,t]),J=l.useCallback(()=>{n(!0),document.body.style.overflow="hidden"},[]),H=l.useCallback(()=>{n(!1),document.body.style.overflow="unset"},[]),Y=l.useCallback(()=>{a(i=>!i)},[]),A=l.useCallback(()=>{a(!1)},[]),F=typeof y=="function"?y():0,h=Array.isArray(P)?P.length:0;return e.jsxs(e.Fragment,{children:[e.jsx("header",{style:{...s.header,...f&&s.headerScrolled},children:e.jsxs("div",{style:s.container,children:[e.jsxs(O,{to:"/",style:s.logo,onClick:A,children:[e.jsx("span",{style:s.logoGold,children:" Maison Doré"}),e.jsx("span",{style:s.logoSub,children:"Luxury clothing boutique"})]}),e.jsxs("nav",{className:"nav-desktop",style:s.navDesktop,"aria-label":"Main navigation",children:[e.jsx(O,{to:"/",style:s.navLink,children:"HOME"}),e.jsx(O,{to:"/products",style:s.navLink,children:"COLLECTION"}),e.jsxs(O,{to:w?"/favorites":"#",style:s.navLink,onClick:I,children:["FAVORITES",h>0&&e.jsx("span",{style:s.badge,children:h})]})]}),e.jsxs("div",{className:"header-actions",style:s.actions,children:[e.jsx("div",{className:"desktop-search",style:s.desktopSearch}),e.jsxs("div",{className:"icons-group",style:s.iconsGroup,children:[e.jsxs("div",{style:s.favoritesWrapper,children:[e.jsxs(O,{to:w?"/favorites":"#",style:s.iconBtn,"aria-label":"Favorites",onClick:I,children:[e.jsx("span",{style:s.iconHeart,children:"♥"}),h>0&&e.jsx("span",{style:s.iconBadge,children:h})]}),c&&!w&&e.jsx("div",{style:s.tooltip,children:"Please sign in to view favorites"})]}),e.jsxs("button",{onClick:J,style:s.cartBtn,"aria-label":"Open cart",children:[e.jsx(qe,{style:s.cartIcon}),F>0&&e.jsx("span",{style:s.cartCount,children:F})]}),w?e.jsxs("div",{style:s.userMenu,children:[e.jsx("span",{className:"user-name",style:s.userName,children:(j==null?void 0:j.name)||"User"}),e.jsx("button",{onClick:B,style:s.logoutBtn,"aria-label":"Logout",children:"LOGOUT"})]}):e.jsx(O,{to:"/login",style:s.loginBtn,children:"SIGN IN"}),e.jsxs("button",{className:"mobile-menu-btn",onClick:Y,style:s.mobileMenuBtn,"aria-label":o?"Close menu":"Open menu",children:[e.jsx("span",{className:"hamburger-line",style:{...s.hamburgerLine,transform:o?"rotate(45deg)":"none",top:o?"50%":"25%"}}),e.jsx("span",{className:"hamburger-line",style:{...s.hamburgerLine,opacity:o?0:1}}),e.jsx("span",{className:"hamburger-line",style:{...s.hamburgerLine,transform:o?"rotate(-45deg)":"none",bottom:o?"50%":"11%"}})]})]})]})]})}),e.jsx("div",{style:{...s.mobileOverlay,opacity:o?1:0,pointerEvents:o?"auto":"none"},onClick:A}),e.jsxs("div",{style:{...s.mobileMenu,transform:o?"translateX(0)":"translateX(100%)"},children:[e.jsxs("div",{style:s.mobileMenuHeader,children:[e.jsx("span",{style:s.mobileMenuTitle,children:"MENU"}),e.jsx("button",{onClick:A,style:s.mobileMenuClose,"aria-label":"Close menu",children:"✕"})]}),e.jsxs("nav",{style:s.mobileNav,children:[e.jsxs(O,{to:"/",style:s.mobileNavLink,onClick:A,children:[e.jsx("span",{style:s.mobileNavIcon})," HOME"]}),e.jsxs(O,{to:"/products",style:s.mobileNavLink,onClick:A,children:[e.jsx("span",{style:s.mobileNavIcon})," COLLECTION"]}),e.jsxs(O,{to:w?"/favorites":"#",style:s.mobileNavLink,onClick:i=>{w?A():(i.preventDefault(),d(!0),setTimeout(()=>d(!1),3e3))},children:[e.jsx("span",{style:s.mobileNavIcon})," FAVORITES",h>0&&e.jsx("span",{style:s.mobileBadge,children:h})]}),e.jsx("div",{style:s.mobileDivider}),w?e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:()=>{B(),A()},style:s.mobileLogoutBtn,children:[e.jsx("span",{style:s.mobileNavIcon})," LOGOUT"]})}):e.jsxs(O,{to:"/login",style:s.mobileNavLink,onClick:A,children:[e.jsx("span",{style:s.mobileNavIcon,children:"🔑"})," SIGN IN"]}),e.jsx("div",{style:s.mobileDivider}),e.jsx("div",{style:s.mobileSearch})]})]}),e.jsx(Le,{isOpen:r,onClose:H})]})},s={header:{position:"fixed",top:0,left:0,right:0,background:"rgba(10, 10, 10, 0.95)",backdropFilter:"blur(10px)",zIndex:1e3,borderBottom:"1px solid rgba(198, 164, 63, 0.15)",transition:"all 0.3s ease",height:"90px",display:"flex",alignItems:"center"},headerScrolled:{background:"rgba(10, 10, 10, 0.98)",borderBottom:"1px solid rgba(198, 164, 63, 0.3)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)"},container:{maxWidth:"1400px",margin:"0 auto",padding:"0 30px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},logo:{textDecoration:"none",display:"flex",flexDirection:"column",flexShrink:0},logoGold:{fontSize:"clamp(18px, 2vw, 34px)",fontWeight:"bold",letterSpacing:"4px",color:"#c6a43f",fontFamily:"Playfair Display, serif",lineHeight:1},logoSub:{fontSize:"11px",letterSpacing:"2px",color:"#888",marginTop:"2px"},navDesktop:{display:"flex",gap:"30px",alignItems:"center"},navLink:{color:"#fff",textDecoration:"none",fontSize:"12px",letterSpacing:"2px",fontWeight:"500",transition:"color 0.3s ease",position:"relative",padding:"5px 0",whiteSpace:"nowrap"},badge:{position:"absolute",top:"-8px",right:"-12px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"16px",height:"16px",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},actions:{display:"flex",alignItems:"center",gap:"20px",flexShrink:0},desktopSearch:{display:"block"},iconsGroup:{display:"flex",alignItems:"center",gap:"15px"},favoritesWrapper:{position:"relative",display:"inline-block"},iconBtn:{background:"none",border:"none",cursor:"pointer",fontSize:"20px",textDecoration:"none",color:"#fff",position:"relative",transition:"color 0.3s ease",padding:"5px",display:"flex",alignItems:"center"},iconHeart:{fontSize:"20px",lineHeight:1},iconBadge:{position:"absolute",top:"-4px",right:"-4px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"16px",height:"16px",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},tooltip:{position:"absolute",top:"calc(100% + 8px)",right:"-10px",background:"#1a1a1a",color:"#fff",padding:"8px 12px",fontSize:"12px",borderRadius:"4px",whiteSpace:"nowrap",border:"1px solid #c6a43f",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",zIndex:1001,animation:"fadeInUp 0.3s ease"},cartBtn:{background:"none",border:"none",cursor:"pointer",position:"relative",fontSize:"20px",padding:"5px",transition:"transform 0.3s ease",display:"flex",alignItems:"center"},cartIcon:{fontSize:"24px",color:"#c6a43f"},cartCount:{position:"absolute",top:"-4px",right:"-4px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"18px",height:"18px",fontSize:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},userMenu:{display:"flex",alignItems:"center",gap:"10px"},userName:{color:"#888",fontSize:"12px",letterSpacing:"1px"},logoutBtn:{background:"none",border:"1px solid #c6a43f",color:"#c6a43f",padding:"5px 12px",cursor:"pointer",fontSize:"11px",fontFamily:"Montserrat, sans-serif",transition:"all 0.3s ease",letterSpacing:"1px"},loginBtn:{color:"#fff",textDecoration:"none",fontSize:"12px",letterSpacing:"2px",padding:"5px 12px",transition:"all 0.3s ease",fontFamily:"Montserrat, sans-serif"},mobileMenuBtn:{display:"none",background:"none",border:"none",cursor:"pointer",width:"30px",height:"24px",position:"relative",padding:"0"},hamburgerLine:{position:"absolute",left:0,width:"100%",height:"2px",background:"#fff",transition:"all 0.3s ease",borderRadius:"2px"},mobileOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",zIndex:999,transition:"opacity 0.3s ease"},mobileMenu:{position:"fixed",top:0,right:0,width:"85%",maxWidth:"380px",height:"100vh",background:"#0a0a0a",zIndex:1e3,padding:"30px 25px",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"-5px 0 30px rgba(0,0,0,0.5)",overflowY:"auto",display:"flex",flexDirection:"column"},mobileMenuHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"20px",borderBottom:"1px solid #2a2a2a",marginBottom:"30px"},mobileMenuTitle:{fontSize:"18px",letterSpacing:"3px",color:"#c6a43f",fontWeight:"500"},mobileMenuClose:{background:"none",border:"none",color:"#fff",fontSize:"24px",cursor:"pointer",transition:"transform 0.3s ease",padding:"5px"},mobileNav:{display:"flex",flexDirection:"column",gap:"5px",flex:1},mobileNavLink:{color:"#fff",textDecoration:"none",fontSize:"16px",letterSpacing:"2px",fontWeight:"400",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"15px",transition:"color 0.3s ease"},mobileNavIcon:{fontSize:"18px",width:"28px"},mobileBadge:{marginLeft:"auto",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"20px",height:"20px",fontSize:"11px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},mobileDivider:{height:"1px",background:"#2a2a2a",margin:"15px 0"},mobileLogoutBtn:{background:"none",border:"none",color:"#fff",padding:"14px 0",cursor:"pointer",fontSize:"16px",letterSpacing:"2px",fontWeight:"400",fontFamily:"Montserrat, sans-serif",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"15px",transition:"color 0.3s ease",textAlign:"left"},mobileSearch:{marginTop:"auto",paddingTop:"20px"}},me=document.createElement("style");me.textContent=`
  /* Десктопная навигация - скрываем на мобильных */
  @media (max-width: 992px) {
    .nav-desktop {
      display: none !important;
    }
    .desktop-search {
      display: none !important;
    }
    .user-name {
      display: none !important;
    }
    .header-actions {
      gap: 10px !important;
    }
    .mobile-menu-btn {
      display: block !important;
    }
  }
  
  /* Планшеты */
  @media (min-width: 769px) and (max-width: 992px) {
    .container {
      padding: 0 15px !important;
    }
    .logo-gold {
      font-size: 18px !important;
    }
    .icons-group {
      gap: 8px !important;
    }
  }
  
  /* Мобильные телефоны */
  @media (max-width: 768px) {
    .container {
      padding: 0 12px !important;
    }
    .logo-gold {
      font-size: 16px !important;
      letter-spacing: 3px !important;
    }
    .logo-sub {
      font-size: 7px !important;
    }
    .icons-group {
      gap: 5px !important;
    }
    .icon-btn {
      font-size: 16px !important;
      padding: 3px !important;
    }
    .cart-btn {
      font-size: 16px !important;
      padding: 3px !important;
    }
    .login-btn {
    border: none;
      font-size: 10px !important;
      padding: 4px 10px !important;
      letter-spacing: 1px !important;
    }
    .logout-btn {
      font-size: 10px !important;
      padding: 4px 10px !important;
      letter-spacing: 1px !important;
    }
    .mobile-menu-btn {
      width: 28px !important;
      height: 22px !important;
    }
    .hamburger-line {
      height: 2px !important;
    }
    .cart-count {
      width: 16px !important;
      height: 16px !important;
      font-size: 9px !important;
    }
    .icon-badge {
      width: 14px !important;
      height: 14px !important;
      font-size: 8px !important;
    }
    .mobile-menu {
      width: 85% !important;
      padding: 25px 20px !important;
    }
    .mobile-nav-link {
      font-size: 14px !important;
      padding: 12px 0 !important;
    }
  }
  
  /* Очень маленькие экраны */
  @media (max-width: 480px) {
    .container {
      padding: 0px !important;
    }
    .logo-gold {
      font-size: 14px !important;
      letter-spacing: 2px !important;
    }
    .icons-group {
      gap: 3px !important;
    }
    .icon-btn {
      font-size: 14px !important;
      padding: 2px !important;
    }
    .cart-btn {
      font-size: 14px !important;
      padding: 2px !important;
    }
    .login-btn {
    border: none;
      font-size: 9px !important;
      padding: 3px 8px !important;
    }
    .logout-btn {
      border: none;
      font-size: 9px !important;
      padding: 3px 8px !important;
    }
    .cart-count {
      width: 14px !important;
      height: 14px !important;
      font-size: 8px !important;
      top: -2px !important;
      right: -2px !important;
    }
    .icon-badge {
      width: 12px !important;
      height: 12px !important;
      font-size: 7px !important;
      top: -2px !important;
      right: -2px !important;
    }
    .mobile-menu-btn {
      width: 24px !important;
      height: 18px !important;
    }
    .mobile-menu {
      width: 100% !important;
      max-width: none !important;
      padding: 20px 15px !important;
    }
    .mobile-nav-link {
      font-size: 13px !important;
      padding: 10px 0 !important;
    }
    .mobile-nav-icon {
      font-size: 16px !important;
      width: 24px !important;
    }
    .mobile-menu-title {
      font-size: 16px !important;
    }
  }
  
  /* Анимации */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Hover эффекты */
  .nav-link:hover {
    color: #c6a43f !important;
  }
  
  .icon-btn:hover {
    color: #c6a43f !important;
  }
  
  .cart-btn:hover {
    transform: scale(1.05) !important;
  }
  
  .logout-btn:hover {
    background: #c6a43f !important;
    color: #0a0a0a !important;
  }
  
  .login-btn:hover {
    border-color: #c6a43f !important;
    color: #c6a43f !important;
  }
  
  .mobile-nav-link:hover {
    color: #c6a43f !important;
  }
  
  .mobile-logout-btn:hover {
    color: #c6a43f !important;
  }
  
  .mobile-menu-close:hover {
    transform: rotate(90deg) !important;
  }
  
  /* Tooltip стрелка */
  .tooltip::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 15px;
    width: 10px;
    height: 10px;
    background: #1a1a1a;
    border-top: 1px solid #c6a43f;
    border-left: 1px solid #c6a43f;
    transform: rotate(45deg);
  }
`;document.head.appendChild(me);const $e=()=>e.jsx("footer",{style:L.footer,children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:L.grid,children:[e.jsxs("div",{children:[e.jsx("h3",{style:L.logo,children:"LUXURY"}),e.jsx("p",{style:L.tagline,children:"Timeless elegance since 2026"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"EXPLORE"}),e.jsxs("ul",{style:L.list,children:[e.jsx("li",{children:"New Arrivals"}),e.jsx("li",{children:"Ready to Wear"}),e.jsx("li",{children:"Footwear"}),e.jsx("li",{children:"Accessories"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"CUSTOMER SERVICE"}),e.jsxs("ul",{style:L.list,children:[e.jsx("li",{children:"Contact"}),e.jsx("li",{children:"Shipping"}),e.jsx("li",{children:"Returns"}),e.jsx("li",{children:"Size Guide"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"FOLLOW US"}),e.jsxs("ul",{style:L.list,children:[e.jsx("li",{children:"Instagram"}),e.jsx("li",{children:"Facebook"}),e.jsx("li",{children:"Twitter"}),e.jsx("li",{children:"Pinterest"})]})]})]}),e.jsx("div",{style:L.copyright,children:e.jsx("p",{children:"© 2026 LUXURY. All rights reserved."})})]})}),L={footer:{background:"#050505",padding:"60px 20px 20px",marginTop:"60px",borderTop:"1px solid #c6a43f"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"40px",marginBottom:"40px"},logo:{fontSize:"24px",color:"#c6a43f",marginBottom:"10px"},tagline:{fontSize:"12px",color:"#888"},list:{listStyle:"none",marginTop:"10px"},copyright:{textAlign:"center",paddingTop:"20px",borderTop:"1px solid #2a2a2a",fontSize:"12px",color:"#666"}},Ge=l.lazy(()=>N(()=>import("./HomePage-WzanyDwH.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),Je=l.lazy(()=>N(()=>import("./ProductsPage-DRVuzaGx.js"),__vite__mapDeps([4,1,5,2,6,7]),import.meta.url)),He=l.lazy(()=>N(()=>import("./ProductDetailPage-DE8JFo70.js"),__vite__mapDeps([8,1,5,2]),import.meta.url)),Ye=l.lazy(()=>N(()=>import("./CartPage-zpY0jiRL.js"),__vite__mapDeps([9,1]),import.meta.url)),Xe=l.lazy(()=>N(()=>import("./CheckoutPage-D0J4G1D-.js"),__vite__mapDeps([10,1]),import.meta.url)),Qe=l.lazy(()=>N(()=>import("./LoginPage-CToQQewD.js"),__vite__mapDeps([11,1]),import.meta.url)),Ze=l.lazy(()=>N(()=>import("./FavoritesPage-DU3Oyp69.js"),__vite__mapDeps([12,1,6,7]),import.meta.url)),Ke=l.lazy(()=>N(()=>import("./NotFoundPage-CTnaeUad.js"),__vite__mapDeps([13,1]),import.meta.url)),G=()=>e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{className:"loading-text",children:"Loading..."})]}),et=()=>{const{pathname:t}=re();return l.useEffect(()=>{window.scrollTo(0,0)},[t]),null},te=({children:t})=>{const{isAuthenticated:r,loading:n}=$(),o=re();return n?e.jsx(G,{}):r?t:e.jsx(oe,{to:"/login",state:{from:o.pathname},replace:!0})},tt=({children:t})=>{const{isAuthenticated:r,loading:n}=$();return n?e.jsx(G,{}):r?e.jsx(oe,{to:"/",replace:!0}):t},rt=({children:t})=>e.jsx(l.Suspense,{fallback:e.jsx(G,{}),children:t});function ot(){return e.jsx(ge,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(Te,{children:e.jsx(Ie,{children:e.jsxs(De,{children:[e.jsx(et,{}),e.jsxs("div",{className:"app-container",children:[e.jsx(Ve,{}),e.jsx("main",{className:"main-content",children:e.jsx(rt,{children:e.jsxs(he,{children:[e.jsx(z,{path:"/",element:e.jsx(Ge,{})}),e.jsx(z,{path:"/products",element:e.jsx(Je,{})}),e.jsx(z,{path:"/product/:id",element:e.jsx(He,{})}),e.jsx(z,{path:"/cart",element:e.jsx(Ye,{})}),e.jsx(z,{path:"/login",element:e.jsx(tt,{children:e.jsx(Qe,{})})}),e.jsx(z,{path:"/favorites",element:e.jsx(te,{children:e.jsx(Ze,{})})}),e.jsx(z,{path:"/checkout",element:e.jsx(te,{children:e.jsx(Xe,{})})}),e.jsx(z,{path:"*",element:e.jsx(Ke,{})})]})})}),e.jsx($e,{})]})]})})})})}V.createRoot(document.getElementById("root")).render(e.jsx(_.StrictMode,{children:e.jsx(ot,{})}));export{ze as a,$ as b,e as j,se as u};
