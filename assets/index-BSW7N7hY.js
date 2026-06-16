import{r as s,a as He,L as G,R as Q,u as ee,b as Ye,c as _e,B as Ve,d as Xe,e as J,N as Se,f as Je}from"./vendor-DqlmvSdi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();var Te={exports:{}},fe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=s,Qe=Symbol.for("react.element"),Ze=Symbol.for("react.fragment"),et=Object.prototype.hasOwnProperty,tt=Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function Ee(t,r,i){var o,a={},l=null,d=null;i!==void 0&&(l=""+i),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)et.call(r,o)&&!rt.hasOwnProperty(o)&&(a[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:Qe,type:t,key:l,ref:d,props:a,_owner:tt.current}}fe.Fragment=Ze;fe.jsx=Ee;fe.jsxs=Ee;Te.exports=fe;var e=Te.exports,ve={},je=He;ve.createRoot=je.createRoot,ve.hydrateRoot=je.hydrateRoot;const Be=s.createContext(),ot=(t,r)=>{switch(r.type){case"ADD_TO_CART":return t.items.find(o=>o.id===r.payload.id)?{...t,items:t.items.map(o=>o.id===r.payload.id?{...o,quantity:o.quantity+1}:o)}:{...t,items:[...t.items,{...r.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...t,items:t.items.filter(o=>o.id!==r.payload)};case"UPDATE_QUANTITY":return{...t,items:t.items.map(o=>o.id===r.payload.id?{...o,quantity:Math.max(1,r.payload.quantity)}:o)};case"CLEAR_CART":return{...t,items:[]};default:return t}},nt=({children:t})=>{const[r,i]=s.useReducer(ot,{items:[]},()=>{const g=localStorage.getItem("luxuryCart");return g?{items:JSON.parse(g)}:{items:[]}});s.useEffect(()=>{localStorage.setItem("luxuryCart",JSON.stringify(r.items))},[r.items]);const o=g=>{i({type:"ADD_TO_CART",payload:g})},a=g=>{i({type:"REMOVE_FROM_CART",payload:g})},l=(g,j)=>{i({type:"UPDATE_QUANTITY",payload:{id:g,quantity:j}})},d=()=>{i({type:"CLEAR_CART"})},n=()=>r.items.reduce((g,j)=>g+j.price*j.quantity,0),b=()=>r.items.reduce((g,j)=>g+j.quantity,0);return e.jsx(Be.Provider,{value:{cart:r.items,addToCart:o,removeFromCart:a,updateQuantity:l,clearCart:d,getCartTotal:n,getCartCount:b},children:t})},re=()=>{const t=s.useContext(Be);if(!t)throw new Error("useCart must be used within CartProvider");return t},ze=s.createContext(null),he=()=>{const t=s.useContext(ze);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},oe=t=>typeof t=="string"?t.replace(/[<>]/g,"").trim():t,we=async t=>{const o=new TextEncoder().encode(t+"your-unique-salt-value-change-this-in-production"),a=await crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(a)).map(d=>d.toString(16).padStart(2,"0")).join("")},it=t=>{const i=new Date(t);return new Date-i<6048e5},at=t=>{try{return!(!t||!t.id||!t.email||!t.isAuthenticated)}catch{return!1}},st=({children:t})=>{const[r,i]=s.useState(null),[o,a]=s.useState(!1),[l,d]=s.useState(!0),[n,b]=s.useState(0),[g,j]=s.useState(null),[T,f]=s.useState(null);s.useEffect(()=>{(()=>{try{const m=localStorage.getItem("luxuryUser");if(!m){d(!1);return}let z;try{z=JSON.parse(m)}catch(E){console.error("Error parsing user data:",E),localStorage.removeItem("luxuryUser"),d(!1);return}if(!at(z)){console.warn("Invalid session data detected"),localStorage.removeItem("luxuryUser"),d(!1);return}if(z.isAuthenticated&&z.loginTime)if(it(z.loginTime)){i(z),a(!0);const E=new Date(z.loginTime);E.setDate(E.getDate()+7),f(E)}else console.log("Session expired"),localStorage.removeItem("luxuryUser")}catch(m){console.error("Error checking auth:",m),localStorage.removeItem("luxuryUser")}finally{d(!1)}})()},[]),s.useEffect(()=>{if(!o)return;const w=()=>{try{const E=localStorage.getItem("luxuryUser");if(E){const q=JSON.parse(E);q.lastActivity=new Date().toISOString(),localStorage.setItem("luxuryUser",JSON.stringify(q));const $=new Date;$.setDate($.getDate()+7),f($)}}catch(E){console.error("Error updating session:",E)}},m=setInterval(w,5*60*1e3),z=["click","scroll","keydown","mousemove","touchstart"];return z.forEach(E=>{document.addEventListener(E,w)}),()=>{clearInterval(m),z.forEach(E=>{document.removeEventListener(E,w)})}},[o]);const c=w=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w),M={user:r,isAuthenticated:o,loading:l,loginAttempts:n,blockedUntil:g,sessionExpiry:T,login:async(w,m)=>{try{if(g&&new Date<new Date(g)){const F=Math.ceil((new Date(g)-new Date)/1e3/60);throw new Error(`Too many failed attempts. Please try again in ${F} minutes.`)}const z=oe(w);if(!z||!c(z))throw new Error("Please enter a valid email address");if(!m||m.length<1)throw new Error("Password is required");await new Promise(F=>setTimeout(F,1e3));let E=[];try{const F=localStorage.getItem("luxuryUsers");F&&(E=JSON.parse(F))}catch(F){throw console.error("Error parsing users data:",F),new Error("System error. Please try again.")}const q=await we(m),$=E.find(F=>F.email===z&&F.password===q);if(!$){const F=n+1;if(b(F),F>=5){const p=new Date;throw p.setMinutes(p.getMinutes()+15),j(p),b(0),new Error("Too many failed attempts. Account blocked for 15 minutes.")}throw new Error("Invalid email or password")}b(0),j(null);const H={id:$.id||Date.now().toString(),email:$.email,name:$.name,isAuthenticated:!0,loginTime:new Date().toISOString(),lastActivity:new Date().toISOString()};localStorage.setItem("luxuryUser",JSON.stringify(H));const X=new Date;return X.setDate(X.getDate()+7),f(X),i(H),a(!0),H}catch(z){throw console.error("Login error:",z),z}},register:async w=>{try{const m=oe(w.name||""),z=oe(w.email||""),E=w.password||"";if(!z||!c(z))throw new Error("Please enter a valid email address");if(!E||E.length<8)throw new Error("Password must be at least 8 characters");if(!/(?=.*[A-Z])/.test(E))throw new Error("Password must contain at least one uppercase letter");if(!/(?=.*[a-z])/.test(E))throw new Error("Password must contain at least one lowercase letter");if(!/(?=.*\d)/.test(E))throw new Error("Password must contain at least one number");if(!/(?=.*[!@#$%^&*])/.test(E))throw new Error("Password must contain at least one special character (!@#$%^&*)");if(!m||m.length<2)throw new Error("Name must be at least 2 characters");if(m.length>50)throw new Error("Name must not exceed 50 characters");await new Promise(p=>setTimeout(p,1e3));let q=[];try{const p=localStorage.getItem("luxuryUsers");p&&(q=JSON.parse(p))}catch(p){throw console.error("Error parsing users data:",p),new Error("System error. Please try again.")}if(q.find(p=>p.email===z))throw new Error("An account with this email already exists");const $=await we(E),H={id:Date.now().toString(),email:z,password:$,name:m,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString()};q.push(H),localStorage.setItem("luxuryUsers",JSON.stringify(q));const X={id:H.id,email:z,name:m,isAuthenticated:!0,loginTime:new Date().toISOString(),lastActivity:new Date().toISOString()};localStorage.setItem("luxuryUser",JSON.stringify(X));const F=new Date;return F.setDate(F.getDate()+7),f(F),i(X),a(!0),X}catch(m){throw console.error("Registration error:",m),m}},logout:()=>{try{localStorage.removeItem("luxuryUser"),i(null),a(!1),b(0),j(null),f(null)}catch(w){console.error("Logout error:",w)}},updateUser:async w=>{try{if(!r)throw new Error("No user logged in");const m={};if(w.name){if(m.name=oe(w.name),m.name.length<2)throw new Error("Name must be at least 2 characters");if(m.name.length>50)throw new Error("Name must not exceed 50 characters")}if(w.email&&(m.email=oe(w.email),!c(m.email)))throw new Error("Please enter a valid email address");if(m.name||m.email)try{const E=localStorage.getItem("luxuryUsers");let q=E?JSON.parse(E):[];const $=q.findIndex(H=>H.id===r.id);$!==-1&&(q[$]={...q[$],...m},localStorage.setItem("luxuryUsers",JSON.stringify(q)))}catch(E){console.error("Error updating user in storage:",E)}const z={...r,...m};return localStorage.setItem("luxuryUser",JSON.stringify(z)),i(z),z}catch(m){throw console.error("Update user error:",m),m}},checkAuth:()=>o,getCurrentUser:()=>r,getSessionExpiry:()=>T,isSessionExpiringSoon:()=>{if(!T)return!1;const m=T-new Date;return m<24*60*60*1e3&&m>0},resetBlockedStatus:()=>{b(0),j(null)}};return e.jsx(ze.Provider,{value:M,children:t})},Pe=s.createContext(),lt=(t,r)=>{switch(r.type){case"TOGGLE_FAVORITE":return t.find(o=>o.id===r.payload.id)?t.filter(o=>o.id!==r.payload.id):[...t,r.payload];case"CLEAR_FAVORITES":return[];default:return t}},ct=({children:t})=>{const[r,i]=s.useReducer(lt,[],()=>{const d=localStorage.getItem("luxuryFavorites");return d?JSON.parse(d):[]});s.useEffect(()=>{localStorage.setItem("luxuryFavorites",JSON.stringify(r))},[r]);const o=d=>{i({type:"TOGGLE_FAVORITE",payload:d})},a=d=>r.some(n=>n.id===d),l=()=>{i({type:"CLEAR_FAVORITES"})};return e.jsx(Pe.Provider,{value:{favorites:r,toggleFavorite:o,isFavorite:a,clearFavorites:l},children:t})},ye=()=>{const t=s.useContext(Pe);if(!t)throw new Error("useFavorites must be used within FavoritesProvider");return t},dt=({isOpen:t,onClose:r})=>{const[i,o]=s.useState(!1),[a,l]=s.useState(null);let d,n=[],b=()=>{},g=()=>{},j=()=>0;try{d=re(),d&&(n=d.cart||[],b=d.removeFromCart||(()=>{}),g=d.updateQuantity||(()=>{}),j=d.getCartTotal||(()=>0))}catch(h){console.error("Cart context error:",h),l("Cart service is not available")}s.useEffect(()=>{if(t){o(!0),document.body.style.overflow="hidden";const h=k=>{k.key==="Escape"&&r()};return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}}else{document.body.style.overflow="unset";const h=setTimeout(()=>{o(!1)},300);return()=>clearTimeout(h)}},[t,r]);const T=s.useCallback(async(h,k)=>{if(k<0){l("Quantity cannot be negative"),setTimeout(()=>l(null),3e3);return}if(k>99){l("Maximum quantity is 99 items"),setTimeout(()=>l(null),3e3);return}try{await g(h,k),l(null)}catch(P){console.error("Update quantity error:",P),l("Failed to update quantity. Please try again."),setTimeout(()=>l(null),3e3)}},[g]),f=s.useCallback(async h=>{try{await b(h),l(null)}catch(k){console.error("Remove item error:",k),l("Failed to remove item. Please try again."),setTimeout(()=>l(null),3e3)}},[b]),c=s.useCallback(()=>{r()},[r]),L=typeof j=="function"?j():0,C=Array.isArray(n)?n.length:0;return a&&!t?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{...B.overlay,opacity:t?1:0,pointerEvents:t?"auto":"none",transition:"opacity 0.3s ease"},onClick:c}),e.jsxs("div",{style:{...B.drawer,transform:t?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},children:[e.jsxs("div",{style:B.header,children:[e.jsxs("div",{style:B.headerLeft,children:[e.jsx("h3",{style:B.title,children:"SHOPPING BAG"}),C>0&&e.jsxs("span",{style:B.itemCount,children:["(",C," ",C===1?"item":"items",")"]})]}),e.jsx("button",{onClick:c,style:B.closeBtn,"aria-label":"Close cart",children:"✕"})]}),a&&e.jsxs("div",{style:B.errorBanner,children:[e.jsx("span",{children:"⚠️"}),e.jsx("span",{children:a})]}),e.jsx("div",{style:B.content,children:C===0?e.jsxs("div",{style:B.empty,children:[e.jsx("div",{style:B.emptyIcon}),e.jsx("p",{style:B.emptyText,children:"Your shopping bag is empty"}),e.jsx("p",{style:B.emptySubtext,children:"Discover our latest collection"}),e.jsx(G,{to:"/products",style:B.shopBtn,onClick:c,children:"SHOP NOW"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:B.itemsList,children:n.map(h=>e.jsxs("div",{style:B.cartItem,children:[e.jsxs("div",{style:B.itemImageContainer,children:[e.jsx("img",{src:h.image||"/images/placeholder.jpg",alt:h.name||"Product",style:B.itemImage,onError:k=>{k.target.src="/images/placeholder.jpg"}}),h.discount&&e.jsxs("span",{style:B.discountBadge,children:["-",h.discount,"%"]})]}),e.jsxs("div",{style:B.itemDetails,children:[e.jsx("h4",{style:B.itemName,children:h.name||"Product"}),h.brand&&e.jsx("span",{style:B.itemBrand,children:h.brand}),e.jsxs("p",{style:B.itemPrice,children:["$",(h.price||0).toFixed(2),h.originalPrice&&h.originalPrice>h.price&&e.jsxs("span",{style:B.originalPrice,children:["$",h.originalPrice.toFixed(2)]})]}),e.jsxs("div",{style:B.quantityControls,children:[e.jsx("button",{onClick:()=>T(h.id,(h.quantity||1)-1),style:{...B.qtyBtn,opacity:(h.quantity||1)<=1?.3:1},disabled:(h.quantity||1)<=1,"aria-label":"Decrease quantity",children:"-"}),e.jsx("span",{style:B.qty,children:h.quantity||1}),e.jsx("button",{onClick:()=>T(h.id,(h.quantity||1)+1),style:{...B.qtyBtn,opacity:(h.quantity||1)>=99?.3:1},disabled:(h.quantity||1)>=99,"aria-label":"Increase quantity",children:"+"})]})]}),e.jsx("button",{onClick:()=>f(h.id),style:B.removeBtn,"aria-label":`Remove ${h.name||"item"} from cart`,children:"✕"})]},h.id||Math.random().toString()))}),e.jsxs("div",{style:B.footer,children:[e.jsxs("div",{style:B.total,children:[e.jsx("span",{style:B.totalLabel,children:"SUBTOTAL"}),e.jsxs("span",{style:B.totalAmount,children:["$",L.toFixed(2)]})]}),L>0&&L<100&&e.jsx("div",{style:B.shippingNote,children:"Free shipping on orders over $100"}),e.jsx(G,{to:"/checkout",style:B.checkoutBtn,onClick:c,children:"PROCEED TO CHECKOUT"}),e.jsx(G,{to:"/cart",style:B.viewCartBtn,onClick:c,children:"VIEW FULL CART"})]})]})})]})]})},B={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",zIndex:2e3},drawer:{position:"fixed",top:0,right:0,width:"100%",maxWidth:"450px",height:"100vh",background:"#0a0a0a",zIndex:2001,display:"flex",flexDirection:"column",boxShadow:"-5px 0 30px rgba(0,0,0,0.5)"},header:{padding:"20px 25px",borderBottom:"1px solid #2a2a2a",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0},headerLeft:{display:"flex",alignItems:"center",gap:"12px"},title:{fontSize:"18px",letterSpacing:"2px",color:"#c6a43f",fontWeight:"500"},itemCount:{fontSize:"14px",color:"#888",fontWeight:"300"},closeBtn:{background:"none",border:"none",fontSize:"24px",cursor:"pointer",color:"#fff",padding:"5px 10px",transition:"transform 0.3s ease","&:hover":{transform:"rotate(90deg)"}},errorBanner:{padding:"12px 20px",background:"rgba(255, 107, 107, 0.1)",borderBottom:"1px solid #ff6b6b",color:"#ff6b6b",display:"flex",gap:"10px",alignItems:"center",fontSize:"14px",flexShrink:0},content:{flex:1,overflowY:"auto",padding:"20px 25px",display:"flex",flexDirection:"column"},itemsList:{flex:1},empty:{textAlign:"center",marginTop:"80px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},emptyIcon:{fontSize:"64px",marginBottom:"30px",opacity:.5},emptyText:{color:"#fff",fontSize:"20px",marginBottom:"10px",letterSpacing:"2px"},emptySubtext:{color:"#888",fontSize:"14px",marginBottom:"30px"},shopBtn:{display:"inline-block",padding:"14px 40px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease","&:hover":{background:"#d4b44a",transform:"translateY(-2px)"}},cartItem:{display:"flex",gap:"15px",marginBottom:"20px",paddingBottom:"20px",borderBottom:"1px solid #2a2a2a",position:"relative"},itemImageContainer:{width:"80px",height:"100px",flexShrink:0,position:"relative",background:"#1a1a1a",overflow:"hidden"},itemImage:{width:"100%",height:"100%",objectFit:"cover"},discountBadge:{position:"absolute",top:"5px",left:"5px",background:"#ff6b6b",color:"#fff",padding:"2px 6px",fontSize:"9px",fontWeight:"bold",borderRadius:"2px"},itemDetails:{flex:1,minWidth:0},itemName:{fontSize:"14px",marginBottom:"3px",color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},itemBrand:{fontSize:"12px",color:"#888",display:"block",marginBottom:"5px"},itemPrice:{color:"#c6a43f",fontSize:"14px",marginBottom:"10px",fontWeight:"500"},originalPrice:{color:"#666",fontSize:"12px",textDecoration:"line-through",marginLeft:"8px",fontWeight:"300"},quantityControls:{display:"flex",gap:"10px",alignItems:"center"},qtyBtn:{background:"#2a2a2a",border:"none",color:"#fff",width:"28px",height:"28px",cursor:"pointer",transition:"all 0.3s ease",fontSize:"14px","&:hover":{background:"#3a3a3a"}},qty:{fontSize:"14px",minWidth:"20px",textAlign:"center",color:"#fff"},removeBtn:{background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:"16px",padding:"5px",transition:"color 0.3s ease",alignSelf:"flex-start","&:hover":{color:"#ff6b6b"}},footer:{borderTop:"1px solid #2a2a2a",paddingTop:"20px",marginTop:"10px",flexShrink:0},total:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},totalLabel:{fontSize:"16px",letterSpacing:"2px",color:"#888"},totalAmount:{fontSize:"20px",fontWeight:"bold",color:"#c6a43f"},shippingNote:{fontSize:"12px",color:"#4caf50",textAlign:"right",marginBottom:"15px"},checkoutBtn:{display:"block",textAlign:"center",padding:"14px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease",marginBottom:"10px","&:hover":{background:"#d4b44a",transform:"translateY(-2px)"}},viewCartBtn:{display:"block",textAlign:"center",padding:"12px",color:"#888",textDecoration:"none",fontSize:"13px",letterSpacing:"1px",transition:"color 0.3s ease","&:hover":{color:"#fff"}}},Ne=document.createElement("style");Ne.textContent=`
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
`;document.head.appendChild(Ne);var Le={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ce=Q.createContext&&Q.createContext(Le),pt=["attr","size","title"];function xt(t,r){if(t==null)return{};var i,o,a=ut(t,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)i=l[o],r.indexOf(i)===-1&&{}.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function ut(t,r){if(t==null)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.indexOf(o)!==-1)continue;i[o]=t[o]}return i}function ge(){return ge=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},ge.apply(null,arguments)}function ke(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,o)}return i}function me(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?ke(Object(i),!0).forEach(function(o){gt(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ke(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function gt(t,r,i){return(r=mt(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function mt(t){var r=ft(t,"string");return typeof r=="symbol"?r:r+""}function ft(t,r){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Ae(t){return t&&t.map((r,i)=>Q.createElement(r.tag,me({key:i},r.attr),Ae(r.child)))}function ht(t){return r=>Q.createElement(yt,ge({attr:me({},t.attr)},r),Ae(t.child))}function yt(t){var r=i=>{var{attr:o,size:a,title:l}=t,d=xt(t,pt),n=a||i.size||"1em",b;return i.className&&(b=i.className),t.className&&(b=(b?b+" ":"")+t.className),Q.createElement("svg",ge({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,d,{className:b,style:me(me({color:t.color||i.color},i.style),t.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),l&&Q.createElement("title",null,l),t.children)};return Ce!==void 0?Q.createElement(Ce.Consumer,null,i=>r(i)):r(Le)}function bt(t){return ht({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Shopping_Cart"},child:[{tag:"path",attr:{d:"M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"},child:[]}]}]})(t)}const vt=()=>{const t=ee(),[r,i]=s.useState(!1),[o,a]=s.useState(!1),[l,d]=s.useState(!1),[n,b]=s.useState(!1);let g,j=()=>0,T,f=[],c,L=!1,C=null,h=()=>{};try{g=re(),g&&(j=g.getCartCount||(()=>0))}catch(m){console.error("Cart context error:",m)}try{T=ye(),T&&(f=T.favorites||[])}catch(m){console.error("Favorites context error:",m)}try{c=he(),c&&(L=c.isAuthenticated||!1,C=c.user||null,h=c.logout||(()=>{}))}catch(m){console.error("Auth context error:",m)}s.useEffect(()=>{const m=()=>{b(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),s.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]),s.useEffect(()=>{const m=()=>{window.innerWidth>992&&o&&a(!1)};return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[o]),s.useEffect(()=>{const m=z=>{z.key==="Escape"&&o&&a(!1)};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[o]);const k=s.useCallback(m=>{L||(m.preventDefault(),d(!0),setTimeout(()=>d(!1),3e3))},[L]),P=s.useCallback(async()=>{try{await h(),window.dispatchEvent(new Event("auth-change")),a(!1),t("/")}catch(m){console.error("Logout error:",m);try{localStorage.removeItem("luxuryUser"),window.location.reload()}catch(z){console.error("Fallback logout error:",z)}}},[h,t]),O=s.useCallback(()=>{i(!0),document.body.style.overflow="hidden"},[]),A=s.useCallback(()=>{i(!1),document.body.style.overflow="unset"},[]),Y=s.useCallback(()=>{a(m=>!m)},[]),y=s.useCallback(()=>{a(!1)},[]),M=typeof j=="function"?j():0,w=Array.isArray(f)?f.length:0;return e.jsxs(e.Fragment,{children:[e.jsx("header",{style:{...S.header,...n&&S.headerScrolled},children:e.jsxs("div",{style:S.container,children:[e.jsxs(G,{to:"/",style:S.logo,onClick:y,children:[e.jsx("span",{style:S.logoGold,children:" Maison Doré"}),e.jsx("span",{style:S.logoSub,children:"Luxury clothing boutique"})]}),e.jsxs("nav",{className:"nav-desktop",style:S.navDesktop,"aria-label":"Main navigation",children:[e.jsx(G,{to:"/",style:S.navLink,children:"HOME"}),e.jsx(G,{to:"/products",style:S.navLink,children:"COLLECTION"}),e.jsxs(G,{to:L?"/favorites":"#",style:S.navLink,onClick:k,children:["FAVORITES",w>0&&e.jsx("span",{style:S.badge,children:w})]})]}),e.jsxs("div",{className:"header-actions",style:S.actions,children:[e.jsx("div",{className:"desktop-search",style:S.desktopSearch}),e.jsxs("div",{className:"icons-group",style:S.iconsGroup,children:[e.jsxs("div",{style:S.favoritesWrapper,children:[e.jsxs(G,{to:L?"/favorites":"#",style:S.iconBtn,"aria-label":"Favorites",onClick:k,children:[e.jsx("span",{style:S.iconHeart,children:"♥"}),w>0&&e.jsx("span",{style:S.iconBadge,children:w})]}),l&&!L&&e.jsx("div",{style:S.tooltip,children:"Please sign in to view favorites"})]}),e.jsxs("button",{onClick:O,style:S.cartBtn,"aria-label":"Open cart",children:[e.jsx(bt,{style:S.cartIcon}),M>0&&e.jsx("span",{style:S.cartCount,children:M})]}),L?e.jsxs("div",{style:S.userMenu,children:[e.jsx("span",{className:"user-name",style:S.userName,children:(C==null?void 0:C.name)||"User"}),e.jsx("button",{onClick:P,style:S.logoutBtn,"aria-label":"Logout",children:"LOGOUT"})]}):e.jsx(G,{to:"/login",style:S.loginBtn,children:"SIGN IN"}),e.jsxs("button",{className:"mobile-menu-btn",onClick:Y,style:S.mobileMenuBtn,"aria-label":o?"Close menu":"Open menu",children:[e.jsx("span",{className:"hamburger-line",style:{...S.hamburgerLine,transform:o?"rotate(45deg)":"none",top:o?"50%":"25%"}}),e.jsx("span",{className:"hamburger-line",style:{...S.hamburgerLine,opacity:o?0:1}}),e.jsx("span",{className:"hamburger-line",style:{...S.hamburgerLine,transform:o?"rotate(-45deg)":"none",bottom:o?"50%":"11%"}})]})]})]})]})}),e.jsx("div",{style:{...S.mobileOverlay,opacity:o?1:0,pointerEvents:o?"auto":"none"},onClick:y}),e.jsxs("div",{style:{...S.mobileMenu,transform:o?"translateX(0)":"translateX(100%)"},children:[e.jsxs("div",{style:S.mobileMenuHeader,children:[e.jsx("span",{style:S.mobileMenuTitle,children:"MENU"}),e.jsx("button",{onClick:y,style:S.mobileMenuClose,"aria-label":"Close menu",children:"✕"})]}),e.jsxs("nav",{style:S.mobileNav,children:[e.jsxs(G,{to:"/",style:S.mobileNavLink,onClick:y,children:[e.jsx("span",{style:S.mobileNavIcon})," HOME"]}),e.jsxs(G,{to:"/products",style:S.mobileNavLink,onClick:y,children:[e.jsx("span",{style:S.mobileNavIcon})," COLLECTION"]}),e.jsxs(G,{to:L?"/favorites":"#",style:S.mobileNavLink,onClick:m=>{L?y():(m.preventDefault(),d(!0),setTimeout(()=>d(!1),3e3))},children:[e.jsx("span",{style:S.mobileNavIcon})," FAVORITES",w>0&&e.jsx("span",{style:S.mobileBadge,children:w})]}),e.jsx("div",{style:S.mobileDivider}),L?e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:()=>{P(),y()},style:S.mobileLogoutBtn,children:[e.jsx("span",{style:S.mobileNavIcon})," LOGOUT"]})}):e.jsxs(G,{to:"/login",style:S.mobileNavLink,onClick:y,children:[e.jsx("span",{style:S.mobileNavIcon,children:"🔑"})," SIGN IN"]}),e.jsx("div",{style:S.mobileDivider}),e.jsx("div",{style:S.mobileSearch})]})]}),e.jsx(dt,{isOpen:r,onClose:A})]})},S={header:{position:"fixed",top:0,left:0,right:0,background:"rgba(10, 10, 10, 0.95)",backdropFilter:"blur(10px)",zIndex:1e3,borderBottom:"1px solid rgba(198, 164, 63, 0.15)",transition:"all 0.3s ease",height:"90px",display:"flex",alignItems:"center"},headerScrolled:{background:"rgba(10, 10, 10, 0.98)",borderBottom:"1px solid rgba(198, 164, 63, 0.3)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)"},container:{maxWidth:"1400px",margin:"0 auto",padding:"0 30px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},logo:{textDecoration:"none",display:"flex",flexDirection:"column",flexShrink:0},logoGold:{fontSize:"clamp(18px, 2vw, 34px)",fontWeight:"bold",letterSpacing:"4px",color:"#c6a43f",fontFamily:"Playfair Display, serif",lineHeight:1},logoSub:{fontSize:"11px",letterSpacing:"2px",color:"#888",marginTop:"2px"},navDesktop:{display:"flex",gap:"30px",alignItems:"center"},navLink:{color:"#fff",textDecoration:"none",fontSize:"12px",letterSpacing:"2px",fontWeight:"500",transition:"color 0.3s ease",position:"relative",padding:"5px 0",whiteSpace:"nowrap"},badge:{position:"absolute",top:"-8px",right:"-12px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"16px",height:"16px",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},actions:{display:"flex",alignItems:"center",gap:"20px",flexShrink:0},desktopSearch:{display:"block"},iconsGroup:{display:"flex",alignItems:"center",gap:"15px"},favoritesWrapper:{position:"relative",display:"inline-block"},iconBtn:{background:"none",border:"none",cursor:"pointer",fontSize:"20px",textDecoration:"none",color:"#fff",position:"relative",transition:"color 0.3s ease",padding:"5px",display:"flex",alignItems:"center"},iconHeart:{fontSize:"20px",lineHeight:1},iconBadge:{position:"absolute",top:"-4px",right:"-4px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"16px",height:"16px",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},tooltip:{position:"absolute",top:"calc(100% + 8px)",right:"-10px",background:"#1a1a1a",color:"#fff",padding:"8px 12px",fontSize:"12px",borderRadius:"4px",whiteSpace:"nowrap",border:"1px solid #c6a43f",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",zIndex:1001,animation:"fadeInUp 0.3s ease"},cartBtn:{background:"none",border:"none",cursor:"pointer",position:"relative",fontSize:"20px",padding:"5px",transition:"transform 0.3s ease",display:"flex",alignItems:"center"},cartIcon:{fontSize:"24px",color:"#c6a43f"},cartCount:{position:"absolute",top:"-4px",right:"-4px",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"18px",height:"18px",fontSize:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},userMenu:{display:"flex",alignItems:"center",gap:"10px"},userName:{color:"#888",fontSize:"12px",letterSpacing:"1px"},logoutBtn:{background:"none",border:"1px solid #c6a43f",color:"#c6a43f",padding:"5px 12px",cursor:"pointer",fontSize:"11px",fontFamily:"Montserrat, sans-serif",transition:"all 0.3s ease",letterSpacing:"1px"},loginBtn:{color:"#fff",textDecoration:"none",fontSize:"12px",letterSpacing:"2px",padding:"5px 12px",transition:"all 0.3s ease",fontFamily:"Montserrat, sans-serif"},mobileMenuBtn:{display:"none",background:"none",border:"none",cursor:"pointer",width:"30px",height:"24px",position:"relative",padding:"0"},hamburgerLine:{position:"absolute",left:0,width:"100%",height:"2px",background:"#fff",transition:"all 0.3s ease",borderRadius:"2px"},mobileOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",zIndex:999,transition:"opacity 0.3s ease"},mobileMenu:{position:"fixed",top:0,right:0,width:"85%",maxWidth:"380px",height:"100vh",background:"#0a0a0a",zIndex:1e3,padding:"30px 25px",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"-5px 0 30px rgba(0,0,0,0.5)",overflowY:"auto",display:"flex",flexDirection:"column"},mobileMenuHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"20px",borderBottom:"1px solid #2a2a2a",marginBottom:"30px"},mobileMenuTitle:{fontSize:"18px",letterSpacing:"3px",color:"#c6a43f",fontWeight:"500"},mobileMenuClose:{background:"none",border:"none",color:"#fff",fontSize:"24px",cursor:"pointer",transition:"transform 0.3s ease",padding:"5px"},mobileNav:{display:"flex",flexDirection:"column",gap:"5px",flex:1},mobileNavLink:{color:"#fff",textDecoration:"none",fontSize:"16px",letterSpacing:"2px",fontWeight:"400",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"15px",transition:"color 0.3s ease"},mobileNavIcon:{fontSize:"18px",width:"28px"},mobileBadge:{marginLeft:"auto",background:"#c6a43f",color:"#0a0a0a",borderRadius:"50%",width:"20px",height:"20px",fontSize:"11px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},mobileDivider:{height:"1px",background:"#2a2a2a",margin:"15px 0"},mobileLogoutBtn:{background:"none",border:"none",color:"#fff",padding:"14px 0",cursor:"pointer",fontSize:"16px",letterSpacing:"2px",fontWeight:"400",fontFamily:"Montserrat, sans-serif",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"15px",transition:"color 0.3s ease",textAlign:"left"},mobileSearch:{marginTop:"auto",paddingTop:"20px"}},Re=document.createElement("style");Re.textContent=`
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
`;document.head.appendChild(Re);const St=()=>e.jsx("footer",{style:K.footer,children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:K.grid,children:[e.jsxs("div",{children:[e.jsx("h3",{style:K.logo,children:"LUXURY"}),e.jsx("p",{style:K.tagline,children:"Timeless elegance since 2026"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"EXPLORE"}),e.jsxs("ul",{style:K.list,children:[e.jsx("li",{children:"New Arrivals"}),e.jsx("li",{children:"Ready to Wear"}),e.jsx("li",{children:"Footwear"}),e.jsx("li",{children:"Accessories"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"CUSTOMER SERVICE"}),e.jsxs("ul",{style:K.list,children:[e.jsx("li",{children:"Contact"}),e.jsx("li",{children:"Shipping"}),e.jsx("li",{children:"Returns"}),e.jsx("li",{children:"Size Guide"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"FOLLOW US"}),e.jsxs("ul",{style:K.list,children:[e.jsx("li",{children:"Instagram"}),e.jsx("li",{children:"Facebook"}),e.jsx("li",{children:"Twitter"}),e.jsx("li",{children:"Pinterest"})]})]})]}),e.jsx("div",{style:K.copyright,children:e.jsx("p",{children:"© 2026 LUXURY. All rights reserved."})})]})}),K={footer:{background:"#050505",padding:"60px 20px 20px",marginTop:"60px",borderTop:"1px solid #c6a43f"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"40px",marginBottom:"40px"},logo:{fontSize:"24px",color:"#c6a43f",marginBottom:"10px"},tagline:{fontSize:"12px",color:"#888"},list:{listStyle:"none",marginTop:"10px"},copyright:{textAlign:"center",paddingTop:"20px",borderTop:"1px solid #2a2a2a",fontSize:"12px",color:"#666"}},jt=""+new URL("product29.BOALRsQ4.jpg",import.meta.url).href,ne=""+new URL("product3.nkOAX_oT.jpg",import.meta.url).href,wt=""+new URL("product2.32vY8PuK.jpg",import.meta.url).href,Ct=""+new URL("product0.B2VGaqqH.jpg",import.meta.url).href,kt=""+new URL("luxury-fashion.DkVMH80p.mp4",import.meta.url).href,It=""+new URL("luxury-fashion.DoPpK4rz.webm",import.meta.url).href,Tt=()=>{const t=s.useRef(null),[r,i]=s.useState(!1),[o,a]=s.useState(!1),[l,d]=s.useState(""),[n,b]=s.useState(!1),g=s.useRef(null);s.useEffect(()=>{const f=document.createElement("style");return f.textContent=`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      .category-image {
        width: 100%;
         height: 500px;
        background-size: cover;
        background-position: center;
        margin-bottom: 20px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
      }

      .category-image::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%);
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      .category-image:hover::after {
        opacity: 1;
      }

      .category-image:hover {
        transform: scale(1.03);
        box-shadow: 0 20px 40px rgba(198, 164, 63, 0.2);
      }

      .category-card {
        text-align: center;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        cursor: pointer;
        padding: 20px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.02);
      }

      .category-card:hover {
        transform: translateY(-10px);
        background: rgba(198, 164, 63, 0.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .hero-btn {
        display: inline-block;
        padding: 15px 40px;
        background: #c6a43f;
        color: #0a0a0a;
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 14px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

      .hero-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s ease;
      }

      .hero-btn:hover {
        background: #d4b44a;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(198, 164, 63, 0.3);
      }

      .hero-btn:hover::before {
        left: 100%;
      }

      .newsletter-btn {
        padding: 15px 30px;
        background: #c6a43f;
        border: none;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 14px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        color: #0a0a0a;
      }

      .newsletter-btn:hover {
        background: #d4b44a;
        transform: translateY(-2px);
        box-shadow: 0 5px 20px rgba(198, 164, 63, 0.3);
      }

      .newsletter-input {
        flex: 1;
        min-width: 250px;
        padding: 15px 20px;
        background: #1a1a1a;
        border: 1px solid #c6a43f;
        color: #fff;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        transition: all 0.3s ease;
      }

      .newsletter-input:focus {
        border-color: #d4b44a;
        box-shadow: 0 0 20px rgba(198, 164, 63, 0.1);
        background: #222;
      }

      .newsletter-input::placeholder {
        color: #666;
      }

      .video-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0a0a0a;
        z-index: 1;
      }

      .video-loading-spinner {
        width: 60px;
        height: 60px;
        border: 3px solid rgba(198, 164, 63, 0.1);
        border-top: 3px solid #c6a43f;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .success-message {
        color: #4caf50;
        font-size: 16px;
        animation: fadeInUp 0.5s ease-out;
        padding: 10px;
        background: rgba(76, 175, 80, 0.1);
        border: 1px solid #4caf50;
        border-radius: 4px;
      }

      @media (max-width: 768px) {
        .category-image {
          height: 250px;
        }
        
        .hero-title {
          font-size: 36px !important;
        }
        
        .newsletter-form {
          flex-direction: column;
          align-items: stretch;
        }
        
        .newsletter-input {
          min-width: auto;
        }
      }
    `,document.head.appendChild(f),()=>{document.head.removeChild(f)}},[]),s.useEffect(()=>(t.current&&!r&&(async()=>{try{await t.current.play()}catch(c){console.log("Video autoplay failed:",c),a(!0)}})(),()=>{g.current&&clearTimeout(g.current)}),[t,r]);const j=f=>{if(f.preventDefault(),!l||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){alert("Пожалуйста, введите корректный email адрес");return}console.log("Email подписан:",l),b(!0),d(""),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{b(!1)},5e3)},T=()=>{console.error("Video failed to load"),i(!0),a(!1)};return e.jsxs("div",{children:[e.jsxs("section",{style:W.hero,children:[e.jsxs("div",{style:W.videoContainer,children:[!o&&!r&&e.jsx("div",{className:"video-loading",children:e.jsx("div",{className:"video-loading-spinner"})}),e.jsxs("video",{ref:t,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,style:W.video,onLoadedData:()=>{a(!0),i(!1)},onError:T,children:[e.jsx("source",{src:kt,type:"video/mp4"}),e.jsx("source",{src:It,type:"video/webm"}),e.jsx("img",{src:jt,alt:"Luxury fashion background",style:W.fallbackImage})]}),e.jsx("div",{style:W.overlay})]}),e.jsxs("div",{style:W.heroContent,children:[e.jsxs("h1",{style:W.heroTitle,children:[e.jsx("span",{style:W.goldText,children:"TIMELESS"}),e.jsx("span",{style:W.whiteText,children:"ELEGANCE"})]}),e.jsx("p",{style:W.heroSubtitle,children:"Discover the new Autumn/Winter Collection 2026"}),e.jsx(G,{to:"/products",className:"hero-btn",children:"EXPLORE COLLECTION"})]})]}),e.jsx("section",{style:W.categories,children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:W.sectionTitle,children:"BESPOKE CRAFTSMANSHIP"}),e.jsxs("div",{style:W.categoryGrid,children:[e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${Ct})`}}),e.jsx("h3",{style:W.categoryTitle,children:"READY TO WEAR"}),e.jsx("p",{style:W.categoryDesc,children:"Italian tailoring redefined"})]}),e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${ne})`}}),e.jsx("h3",{style:W.categoryTitle,children:"ARTISAN FOOTWEAR"}),e.jsx("p",{style:W.categoryDesc,children:"Handcrafted excellence"})]}),e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${wt})`}}),e.jsx("h3",{style:W.categoryTitle,children:"EVENING COUTURE"}),e.jsx("p",{style:W.categoryDesc,children:"Red carpet statement"})]})]})]})}),e.jsx("section",{style:W.newsletter,children:e.jsxs("div",{style:W.newsletterContent,children:[e.jsx("h2",{style:W.newsletterTitle,children:"THE LUXURY EDIT"}),e.jsx("p",{style:W.newsletterText,children:"Subscribe to receive exclusive offers and early access"}),n?e.jsx("div",{className:"success-message",children:"✓ Thank you for subscribing!"}):e.jsxs("form",{style:W.newsletterForm,onSubmit:j,children:[e.jsx("input",{type:"email",placeholder:"Your email address",className:"newsletter-input",value:l,onChange:f=>d(f.target.value),required:!0,"aria-label":"Email address"}),e.jsx("button",{type:"submit",className:"newsletter-btn",children:"SUBSCRIBE"})]})]})})]})},W={hero:{position:"relative",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},videoContainer:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},video:{width:"100%",height:"100%",objectFit:"cover"},fallbackImage:{width:"100%",height:"100%",objectFit:"cover"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",zIndex:1},heroContent:{position:"relative",zIndex:2,textAlign:"center",color:"#fff",padding:"20px",maxWidth:"800px",animation:"fadeInUp 1s ease-out"},heroTitle:{fontSize:"clamp(48px, 8vw, 96px)",letterSpacing:"clamp(4px, 1vw, 12px)",lineHeight:"1.3",marginBottom:"20px",fontWeight:"300",display:"flex",flexDirection:"column",gap:"10px"},goldText:{color:"#c6a43f",fontWeight:"700",textShadow:"0 2px 10px rgba(0,0,0,0.3)"},whiteText:{color:"#fff",fontWeight:"500",textShadow:"0 2px 10px rgba(0,0,0,0.3)"},heroSubtitle:{fontSize:"clamp(14px, 2vw, 18px)",marginBottom:"40px",letterSpacing:"3px",color:"#f5f5f5",fontWeight:"300"},categories:{padding:"100px 0",background:"#0a0a0a"},sectionTitle:{textAlign:"center",fontSize:"clamp(28px, 5vw, 48px)",marginBottom:"60px",letterSpacing:"4px",fontWeight:"300",color:"#fff",position:"relative",display:"inline-block",width:"100%"},categoryGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"40px",maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},categoryTitle:{fontSize:"18px",letterSpacing:"3px",marginBottom:"10px",color:"#c6a43f",fontWeight:"500"},categoryDesc:{fontSize:"14px",color:"#888",letterSpacing:"1px"},newsletter:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",padding:"100px 20px",textAlign:"center",borderTop:"1px solid rgba(198, 164, 63, 0.3)",borderBottom:"1px solid rgba(198, 164, 63, 0.3)"},newsletterContent:{maxWidth:"600px",margin:"0 auto"},newsletterTitle:{fontSize:"clamp(28px, 4vw, 32px)",marginBottom:"15px",letterSpacing:"4px",color:"#c6a43f"},newsletterText:{fontSize:"14px",color:"#aaa",marginBottom:"30px",letterSpacing:"1px"},newsletterForm:{display:"flex",gap:"15px",flexWrap:"wrap",justifyContent:"center"}},ie=""+new URL("product1.MMoKwwke.jpg",import.meta.url).href,ae=""+new URL("product7.cswSGosV.jpg",import.meta.url).href,se=""+new URL("product9.DLIoCTO1.jpg",import.meta.url).href,le=""+new URL("product16.B6ENmpZ4.jpg",import.meta.url).href,ce=""+new URL("product5.CllkH6ff.jpg",import.meta.url).href,de=""+new URL("product4.DYg0_PB2.jpg",import.meta.url).href,pe=""+new URL("product13.wszgC3bi.jpg",import.meta.url).href,xe=""+new URL("product18.BKo4l1hK.jpg",import.meta.url).href,ue=""+new URL("product22.BKkP_je3.jpg",import.meta.url).href,Oe=[{id:1,name:"Italian Wool Suit",brand:"Ermenegildo Zegna",price:1299.99,originalPrice:1599.99,discount:19,rating:4.8,reviews:127,category:"Clothing",image:ie,gallery:[ie,ie,ie],description:"Exquisite Italian wool suit crafted with the finest materials. Perfect for formal occasions and business meetings.",details:{material:"100% Virgin Wool",care:"Dry clean only",fit:"Regular fit",color:"Navy Blue"},sizes:["XS","S","M","L","XL"],availableSizes:["S","M","L"],stock:15,badge:"NEW",inStock:!0,isNew:!0},{id:2,name:"Leather Chelsea Boots",brand:"Church's",price:899.99,originalPrice:null,discount:0,rating:4.9,reviews:89,category:"Shoes",image:ae,gallery:[ae,ae,ae],description:"Handcrafted leather Chelsea boots with classic design. Made from premium Italian leather.",details:{material:"Premium Leather",care:"Leather care required",fit:"True to size",color:"Black"},sizes:["7","8","9","10","11"],availableSizes:["7","9","10"],stock:8,badge:"BEST SELLER",inStock:!0,isNew:!1},{id:3,name:"Cashmere Blend Overcoat",brand:"Brunello Cucinelli",price:2499.99,originalPrice:2999.99,discount:17,rating:4.7,reviews:56,category:"Clothing",image:se,gallery:[se,se,se],description:"Luxurious cashmere blend overcoat for ultimate warmth and style. Perfect for winter elegance.",details:{material:"90% Cashmere, 10% Wool",care:"Dry clean only",fit:"Relaxed fit",color:"Charcoal"},sizes:["S","M","L","XL"],availableSizes:["M","L"],stock:5,badge:"LUXURY",inStock:!0,isNew:!0},{id:4,name:"Italian Leather Tote",brand:"Bottega Veneta",price:1899.99,originalPrice:null,discount:0,rating:4.6,reviews:72,category:"Accessories",image:le,gallery:[le,le,le],description:"Handwoven Italian leather tote bag. Timeless design with impeccable craftsmanship.",details:{material:"Intrecciato Leather",care:"Professional cleaning",color:"Tan"},stock:12,badge:"ICONIC",inStock:!0,isNew:!1},{id:5,name:"Silk Evening Dress",brand:"Valentino",price:1899.99,originalPrice:2199.99,discount:14,rating:4.9,reviews:43,category:"Clothing",image:ne,gallery:[ne,ne,ne],description:"Exquisite silk evening gown with intricate detailing. Red carpet ready.",details:{material:"100% Silk",care:"Dry clean only",fit:"Fitted",color:"Ruby Red"},sizes:["XS","S","M","L"],availableSizes:["XS","S","M"],stock:7,badge:"NEW",inStock:!0,isNew:!0},{id:6,name:"Fine Watch",brand:"Patek Philippe",price:18999.99,originalPrice:null,discount:0,rating:5,reviews:18,category:"Accessories",image:ce,gallery:[ce,ce,ce],description:"Masterpiece of horology. Swiss made automatic movement with 18k gold case.",details:{material:"18k Gold",care:"Professional service",color:"Gold"},stock:3,badge:"LIMITED",inStock:!0,isNew:!1},{id:7,name:"Designer Sunglasses",brand:"Tom Ford",price:699.99,originalPrice:799.99,discount:13,rating:4.5,reviews:95,category:"Accessories",image:de,gallery:[de,de,de],description:"Iconic sunglasses with premium lenses. Ultimate luxury accessory.",details:{material:"Acetate",care:"Clean with microfiber",color:"Black"},stock:20,badge:null,inStock:!0,isNew:!1},{id:8,name:"Linen Summer Blazer",brand:"Canali",price:899.99,originalPrice:1099.99,discount:18,rating:4.4,reviews:64,category:"Clothing",image:pe,gallery:[pe,pe,pe],description:"Lightweight linen blazer perfect for summer. Breathable and stylish.",details:{material:"100% Linen",care:"Dry clean",fit:"Regular fit",color:"Beige"},sizes:["S","M","L","XL"],availableSizes:["S","M","XL"],stock:10,badge:"SUMMER",inStock:!0,isNew:!0},{id:9,name:"Suede Loafers",brand:"Gucci",price:799.99,originalPrice:null,discount:0,rating:4.3,reviews:54,category:"Shoes",image:xe,gallery:[xe,xe,xe],description:"Luxurious suede loafers with signature horsebit detail. Perfect for sophisticated casual wear.",details:{material:"Italian Suede",care:"Professional cleaning",fit:"True to size",color:"Brown"},sizes:["7","8","9","10","11"],availableSizes:["8","9","10"],stock:6,badge:"ICONIC",inStock:!0,isNew:!1},{id:10,name:"Leather Biker Jacket",brand:"Saint Laurent",price:1999.99,originalPrice:2399.99,discount:17,rating:4.8,reviews:38,category:"Clothing",image:ue,gallery:[ue,ue,ue],description:"Classic leather biker jacket with modern edge. A timeless piece for any wardrobe.",details:{material:"100% Lambskin Leather",care:"Professional leather care",fit:"Slim fit",color:"Black"},sizes:["S","M","L","XL"],availableSizes:["S","M","L"],stock:4,badge:"BEST SELLER",inStock:!0,isNew:!1}],Et=t=>Oe.find(r=>r.id===parseInt(t)),De=(t=500)=>new Promise(r=>setTimeout(r,t)),Bt=async(t={})=>{await De(500);let r=[...Oe];if(t.category&&t.category!=="all"&&(r=r.filter(i=>i.category===t.category)),t.search){const i=t.search.toLowerCase();r=r.filter(o=>{var a;return o.name.toLowerCase().includes(i)||((a=o.brand)==null?void 0:a.toLowerCase().includes(i))||o.category.toLowerCase().includes(i)})}if(t.sort)switch(t.sort){case"price-asc":r.sort((i,o)=>i.price-o.price);break;case"price-desc":r.sort((i,o)=>o.price-i.price);break;case"rating":r.sort((i,o)=>o.rating-i.rating);break;case"newest":r.sort((i,o)=>(i.isNew?1:0)-(o.isNew?1:0));break}return r},zt=async t=>{await De(300);const r=Et(t);if(!r)throw new Error("Product not found");return r},Pt=()=>{const[t,r]=s.useState([]),[i,o]=s.useState(!0),[a,l]=s.useState(null),[d,n]=s.useState(""),[b,g]=s.useState("all");s.useEffect(()=>{j()},[]);const j=async()=>{try{o(!0);const f=await Bt();r(f),l(null)}catch(f){l("Failed to load products"),console.error(f)}finally{o(!1)}};return{products:t.filter(f=>{const c=f.name.toLowerCase().includes(d.toLowerCase()),L=b==="all"||f.category===b;return c&&L}),allProducts:t,loading:i,error:a,searchTerm:d,setSearchTerm:n,selectedCategory:b,setSelectedCategory:g}},Nt=""+new URL("product28.Dg5lq9LH.jpg",import.meta.url).href,Fe=({product:t})=>{const{addToCart:r}=re(),{isFavorite:i,toggleFavorite:o}=ye(),a=ee(),[l,d]=s.useState(!1),[n,b]=s.useState(!1),g=Nt,j=()=>{a(`/product/${t.id}`)},T=c=>{c.stopPropagation(),o(t)},f=c=>{c.stopPropagation(),r(t)};return e.jsxs("div",{style:{...V.card,transform:n?"translateY(-5px)":"none",boxShadow:n?"0 10px 20px rgba(0,0,0,0.5)":"none"},onClick:j,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:[e.jsxs("div",{style:V.imageContainer,children:[e.jsx("img",{className:"images",src:l?g:t.image,alt:t.name,style:{...V.image,transform:n?"scale(1.05)":"scale(1)"},onError:()=>d(!0)}),e.jsx("button",{onClick:T,style:{...V.favoriteBtn,color:i(t.id)?"#c6a43f":"#fff"},children:i(t.id)?"♥":"♡"}),e.jsx("div",{style:{...V.overlay,bottom:n?0:"-100%"},children:e.jsx("button",{onClick:f,style:V.quickAdd,children:"ADD TO CART"})})]}),e.jsxs("div",{style:V.info,children:[e.jsx("h3",{style:V.name,children:t.name}),e.jsx("p",{style:V.category,children:t.category}),e.jsxs("div",{style:V.priceContainer,children:[e.jsxs("span",{style:V.price,children:["$",t.price]}),t.originalPrice&&e.jsxs("span",{style:V.originalPrice,children:["$",t.originalPrice]})]}),e.jsxs("div",{style:V.rating,children:[e.jsx("span",{style:V.stars,children:"★"}),e.jsxs("span",{children:[t.rating," (",t.reviews," reviews)"]})]})]})]})},V={card:{background:"#0a0a0a",border:"1px solid #2a2a2a",transition:"transform 0.3s ease, box-shadow 0.3s ease",cursor:"pointer",overflow:"hidden",position:"relative"},imageContainer:{position:"relative",overflow:"hidden"},image:{width:"100%",objectFit:"cover",transition:"transform 0.5s ease"},favoriteBtn:{position:"absolute",top:"15px",right:"15px",background:"rgba(0,0,0,0.6)",border:"none",fontSize:"24px",cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",zIndex:2},overlay:{position:"absolute",left:0,right:0,background:"rgba(0,0,0,0.8)",padding:"20px",textAlign:"center",transition:"bottom 0.3s ease"},quickAdd:{background:"#c6a43f",border:"none",padding:"10px 20px",cursor:"pointer",fontWeight:"bold",letterSpacing:"1px",fontFamily:"Montserrat, sans-serif"},info:{padding:"20px"},name:{fontSize:"16px",marginBottom:"8px",letterSpacing:"1px",fontFamily:"Playfair Display, serif"},category:{fontSize:"12px",color:"#888",marginBottom:"10px",textTransform:"uppercase",fontFamily:"Montserrat, sans-serif"},priceContainer:{display:"flex",gap:"10px",alignItems:"center",marginBottom:"8px"},price:{color:"#c6a43f",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat, sans-serif"},originalPrice:{color:"#666",fontSize:"14px",textDecoration:"line-through",fontFamily:"Montserrat, sans-serif"},rating:{display:"flex",alignItems:"center",gap:"5px",fontSize:"12px",color:"#888"},stars:{color:"#c6a43f"}},Lt=""+new URL("0_1.CYho86RP.jpg",import.meta.url).href,At=(t,r)=>{const[i,o]=s.useState(t);return s.useEffect(()=>{const a=setTimeout(()=>{o(t)},r);return()=>{clearTimeout(a)}},[t,r]),i},Rt=()=>{const{products:t=[],loading:r,error:i,searchTerm:o,setSearchTerm:a,selectedCategory:l,setSelectedCategory:d}=Pt(),[n]=Ye(),b=ee(),[g,j]=s.useState(o||""),T=At(g,300),f=s.useRef(!0),c=s.useRef(!1);s.useEffect(()=>{const P=document.createElement("style");return P.textContent=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      /* Анимация для карточек при появлении */
      .product-card-enter {
        opacity: 0;
        transform: translateY(20px);
      }
      
      .product-card-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.4s ease, transform 0.4s ease;
      }
      
      /* Анимация для фильтров */
      .filter-btn {
        transition: all 0.3s ease;
        position: relative;
      }
      
      .filter-btn::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 0;
        height: 2px;
        background: #c6a43f;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      
      .filter-btn:hover::after {
        width: 80%;
      }
      
      .filter-btn-active::after {
        width: 100% !important;
      }
      
      /* Анимация для сетки товаров */
      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        margin-bottom: 60px;
      }
      
      .products-grid > * {
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
      }
      
      .products-grid > *:nth-child(1) { animation-delay: 0.05s; }
      .products-grid > *:nth-child(2) { animation-delay: 0.1s; }
      .products-grid > *:nth-child(3) { animation-delay: 0.15s; }
      .products-grid > *:nth-child(4) { animation-delay: 0.2s; }
      .products-grid > *:nth-child(5) { animation-delay: 0.25s; }
      .products-grid > *:nth-child(6) { animation-delay: 0.3s; }
      .products-grid > *:nth-child(7) { animation-delay: 0.35s; }
      .products-grid > *:nth-child(8) { animation-delay: 0.4s; }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Адаптивность */
      @media (max-width: 768px) {
        .products-grid {
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important;
          gap: 20px !important;
        }
      }
      
      @media (max-width: 480px) {
        .products-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
      }
    `,document.head.appendChild(P),()=>{document.head.removeChild(P)}},[]),s.useEffect(()=>{if(!f.current)return;const P=n.get("search"),O=n.get("category");let A=!1;P&&P!==o&&(a(P),j(P),A=!0),O&&O!==l&&(d(O),A=!0),A&&(c.current=!0),f.current=!1},[n,o,l,a,d]),s.useEffect(()=>{if(c.current){c.current=!1;return}if(f.current)return;const P=new URLSearchParams;T&&P.set("search",T),l&&l!=="all"&&P.set("category",l);const O=P.toString(),A=n.toString();O!==A&&b(`?${O}`,{replace:!0})},[T,l,b,n]),s.useEffect(()=>{o!==g&&!c.current&&j(o)},[o,g]);const L=s.useCallback(P=>{j(P.target.value)},[]),C=s.useCallback(()=>{c.current=!0,j(""),a(""),d("all"),b("/products",{replace:!0})},[a,d,b]),h=s.useCallback(P=>{c.current=!0,d(P)},[d]);if(i)return e.jsx("div",{style:D.container,children:e.jsxs("div",{style:D.errorContainer,children:[e.jsx("h2",{style:D.errorTitle,children:"Error Loading Products"}),e.jsx("p",{style:D.errorMessage,children:i}),e.jsx("button",{onClick:()=>window.location.reload(),style:D.retryBtn,children:"Retry"})]})});const k=Array.isArray(t)?t.length:0;return e.jsxs("div",{style:D.container,children:[e.jsxs("div",{style:D.hero,children:[e.jsx("h1",{style:D.title,children:"THE COLLECTION"}),e.jsx("p",{style:D.subtitle,children:"Autumn/Winter 2026"})]}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:D.filters,children:[e.jsxs("div",{style:D.filterGroup,role:"group","aria-label":"Category filters",children:[e.jsx("button",{onClick:()=>h("all"),className:`filter-btn ${l==="all"?"filter-btn-active":""}`,style:{...D.filterBtn,...l==="all"&&D.filterActive},"aria-current":l==="all"?"page":void 0,"aria-label":"Show all products",children:"ALL"}),e.jsx("button",{onClick:()=>h("Clothing"),className:`filter-btn ${l==="Clothing"?"filter-btn-active":""}`,style:{...D.filterBtn,...l==="Clothing"&&D.filterActive},"aria-current":l==="Clothing"?"page":void 0,"aria-label":"Show clothing products",children:"CLOTHING"}),e.jsx("button",{onClick:()=>h("Shoes"),className:`filter-btn ${l==="Shoes"?"filter-btn-active":""}`,style:{...D.filterBtn,...l==="Shoes"&&D.filterActive},"aria-current":l==="Shoes"?"page":void 0,"aria-label":"Show footwear products",children:"FOOTWEAR"}),e.jsx("button",{onClick:()=>h("Accessories"),className:`filter-btn ${l==="Accessories"?"filter-btn-active":""}`,style:{...D.filterBtn,...l==="Accessories"&&D.filterActive},"aria-current":l==="Accessories"?"page":void 0,"aria-label":"Show accessories products",children:"ACCESSORIES"})]}),e.jsx("div",{style:D.searchSection,children:e.jsx("input",{type:"text",placeholder:"Search collection...",value:g,onChange:L,style:D.searchInput,"aria-label":"Search products"})})]}),r?e.jsxs("div",{style:D.loading,children:[e.jsx("div",{style:D.spinner}),e.jsx("p",{children:"LOADING EXCLUSIVE PIECES..."})]}):e.jsx("div",{className:"products-grid",children:k>0?t.map((P,O)=>e.jsx("div",{style:{animationDelay:`${O*.05}s`},children:e.jsx(Fe,{product:P})},P.id||P._id||Math.random().toString())):e.jsxs("div",{style:D.noResults,children:[e.jsx("p",{children:"No products found matching your criteria"}),e.jsx("button",{onClick:C,style:D.resetBtn,children:"Clear filters"})]})})]})]})},D={container:{paddingLeft:"20px",paddingRight:"20px",marginBottom:"10px",minHeight:"100vh",background:"#0a0a0a"},hero:{background:`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Lt})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"40vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"#fff"},title:{fontSize:"clamp(32px, 5vw, 48px)",letterSpacing:"6px",marginBottom:"20px",fontWeight:"300"},subtitle:{fontSize:"clamp(14px, 2vw, 16px)",letterSpacing:"3px",color:"#c6a43f"},filters:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"40px 0",flexWrap:"wrap",gap:"20px"},filterGroup:{display:"flex",gap:"10px",flexWrap:"wrap"},filterBtn:{background:"none",padding:"8px 20px",color:"#888",cursor:"pointer",transition:"all 0.3s ease",fontSize:"12px",letterSpacing:"2px",fontFamily:"Montserrat, sans-serif",border:"none",borderBottom:"2px solid transparent",position:"relative"},filterActive:{color:"#c6a43f",borderBottom:"2px solid #c6a43f"},searchSection:{flex:1,maxWidth:"300px",minWidth:"200px"},searchInput:{width:"100%",padding:"10px 15px",background:"#1a1a1a",border:"1px solid #2a2a2a",color:"#fff",fontSize:"14px",fontFamily:"Montserrat, sans-serif",transition:"border-color 0.3s ease, box-shadow 0.3s ease",outline:"none"},resetBtn:{background:"none",border:"1px solid #c6a43f",color:"#c6a43f",padding:"8px 20px",cursor:"pointer",fontSize:"12px",letterSpacing:"1px",transition:"all 0.3s ease",fontFamily:"Montserrat, sans-serif"},loading:{textAlign:"center",padding:"100px 20px",fontSize:"14px",letterSpacing:"2px",color:"#888"},spinner:{width:"40px",height:"40px",margin:"0 auto 20px",border:"3px solid rgba(198, 164, 63, 0.1)",borderTop:"3px solid #c6a43f",borderRadius:"50%",animation:"spin 1s linear infinite"},noResults:{textAlign:"center",padding:"100px 20px",fontSize:"16px",color:"#888",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",gridColumn:"1 / -1"},errorContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"28px",marginBottom:"15px"},errorMessage:{color:"#888",fontSize:"16px",marginBottom:"30px"},retryBtn:{padding:"12px 30px",background:"#c6a43f",border:"none",color:"#0a0a0a",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"}},Ot=()=>{var F;const{id:t}=_e(),r=ee();let i,o=()=>{},a,l=()=>!1,d=()=>{};try{i=re(),i&&(o=i.addToCart||(()=>{}))}catch(p){console.error("Cart context error:",p)}try{a=ye(),a&&(l=a.isFavorite||(()=>!1),d=a.toggleFavorite||(()=>{}))}catch(p){console.error("Favorites context error:",p)}const[n,b]=s.useState(null),[g,j]=s.useState(!0),[T,f]=s.useState(null),[c,L]=s.useState(0),[C,h]=s.useState(""),[k,P]=s.useState(1),[O,A]=s.useState(null),[Y,y]=s.useState(!1),M=10,w=s.useCallback(async()=>{try{j(!0),f(null);const p=await zt(t);if(!p)throw new Error("Product not found");b(p),h(""),L(0),P(1)}catch(p){console.error("Error loading product:",p),f(p.message||"Failed to load product")}finally{j(!1)}},[t]);s.useEffect(()=>{w()},[w]);const m=async()=>{if(!n){A({type:"error",message:"Product not available"});return}if(n.stock!==void 0&&n.stock<=0){A({type:"error",message:"Sorry, this product is out of stock"});return}if(["Clothing","Shoes","Accessories"].includes(n.category)&&!C){A({type:"warning",message:`Please select a ${n.category==="Clothing","size"}`});return}if(k<1){A({type:"warning",message:"Quantity must be at least 1"});return}if(k>M){A({type:"warning",message:`Maximum quantity is ${M}`});return}if(n.stock!==void 0&&k>n.stock){A({type:"error",message:`Only ${n.stock} items available in stock`});return}y(!0);try{const N={...n,quantity:k,selectedSize:C||null};await o(N),A({type:"success",message:`Added ${n.name} to cart`}),setTimeout(()=>{r("/cart")},1500)}catch(N){console.error("Error adding to cart:",N),A({type:"error",message:"Failed to add to cart. Please try again."})}finally{y(!1)}},z=async()=>{try{await d(n),A({type:"success",message:l(n.id)?"Removed from favorites":"Added to favorites"}),setTimeout(()=>A(null),2e3)}catch(p){console.error("Error toggling favorite:",p),A({type:"error",message:"Failed to update favorites"})}},E=p=>{if(!(p<1)){if(p>M){A({type:"warning",message:`Maximum ${M} items per order`}),setTimeout(()=>A(null),2e3);return}P(p)}},q=()=>n.stock===void 0?null:n.stock<=0?{label:"Out of Stock",color:"#ff6b6b"}:n.stock<=5?{label:`Only ${n.stock} left`,color:"#ffc107"}:n.stock<=10?{label:`Only ${n.stock} left`,color:"#ffc107"}:{label:"In Stock",color:"#4caf50"},$=()=>{A(null)};if(g)return e.jsxs("div",{style:u.loading,children:[e.jsx("div",{style:u.spinner}),e.jsx("p",{style:u.loadingText,children:"LOADING LUXURY EXPERIENCE..."})]});if(T||!n)return e.jsxs("div",{style:u.error,children:[e.jsx("span",{style:u.errorIcon,children:"❌"}),e.jsx("h2",{style:u.errorTitle,children:T||"Product Not Found"}),e.jsx("p",{style:u.errorText,children:"The product you're looking for doesn't exist or has been removed."}),e.jsx("button",{onClick:()=>r("/products"),style:u.backBtn,children:"BACK TO COLLECTION"})]});const H=n.gallery&&n.gallery.length>0?n.gallery:[n.image||"/images/placeholder.jpg"],X=H[c]||H[0];return e.jsx("div",{style:u.container,children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:u.breadcrumbs,children:[e.jsx("button",{onClick:()=>r("/"),style:u.breadcrumbLink,children:"Home"}),e.jsx("span",{style:u.breadcrumbSeparator,children:"/"}),e.jsx("button",{onClick:()=>r("/products"),style:u.breadcrumbLink,children:"Collection"}),e.jsx("span",{style:u.breadcrumbSeparator,children:"/"}),e.jsx("span",{style:u.breadcrumbCurrent,children:n.name})]}),O&&e.jsxs("div",{style:{...u.notification,...O.type==="success"&&u.notificationSuccess,...O.type==="warning"&&u.notificationWarning,...O.type==="error"&&u.notificationError},role:"alert","aria-live":"polite",children:[e.jsx("span",{children:O.message}),e.jsx("button",{onClick:$,style:u.notificationClose,"aria-label":"Close notification",children:"×"})]}),e.jsxs("div",{style:u.productGrid,children:[e.jsxs("div",{style:u.gallery,children:[e.jsxs("div",{style:u.mainImage,children:[e.jsx("img",{src:X,alt:n.name||"Product",onError:p=>{p.target.src="/images/placeholder.jpg"}}),n.badge&&e.jsx("span",{style:u.badge,children:n.badge}),q()&&q().label==="Out of Stock"&&e.jsx("div",{style:u.outOfStockOverlay,children:e.jsx("span",{children:"OUT OF STOCK"})})]}),H.length>1&&e.jsx("div",{style:u.thumbnails,children:H.map((p,N)=>e.jsx("div",{style:{...u.thumbnail,border:c===N?"2px solid #c6a43f":"1px solid #2a2a2a"},onClick:()=>L(N),onKeyPress:U=>{U.key==="Enter"&&L(N)},role:"button",tabIndex:0,"aria-label":`View image ${N+1}`,children:e.jsx("img",{src:p,alt:`Product view ${N+1}`,onError:U=>{U.target.src="/images/placeholder.jpg"}})},N))})]}),e.jsxs("div",{style:u.info,children:[e.jsxs("div",{style:u.infoHeader,children:[e.jsx("h1",{style:u.title,children:n.name}),n.brand&&e.jsx("p",{style:u.brand,children:n.brand})]}),e.jsxs("div",{style:u.rating,children:[e.jsxs("span",{style:u.stars,children:["★".repeat(Math.round(n.rating||0)),"☆".repeat(5-Math.round(n.rating||0))]}),e.jsxs("span",{style:u.ratingText,children:[n.rating||0," (",n.reviews||0," reviews)"]})]}),q()&&e.jsxs("div",{style:u.stockStatus,children:[e.jsx("span",{style:{...u.stockDot,background:q().color}}),e.jsx("span",{style:{color:q().color},children:q().label})]}),e.jsxs("div",{style:u.priceContainer,children:[e.jsxs("span",{style:u.price,children:["$",((F=n.price)==null?void 0:F.toFixed(2))||"0.00"]}),n.originalPrice&&n.originalPrice>n.price&&e.jsxs("span",{style:u.originalPrice,children:["$",n.originalPrice.toFixed(2)]}),n.discount&&e.jsxs("span",{style:u.discount,children:["-",n.discount,"%"]})]}),e.jsx("p",{style:u.description,children:n.description}),n.details&&e.jsxs("div",{style:u.details,children:[e.jsx("h3",{style:u.detailsTitle,children:"DETAILS"}),e.jsxs("ul",{style:u.detailsList,children:[n.details.material&&e.jsxs("li",{children:[e.jsx("strong",{children:"Material:"})," ",n.details.material]}),n.details.care&&e.jsxs("li",{children:[e.jsx("strong",{children:"Care:"})," ",n.details.care]}),n.details.fit&&e.jsxs("li",{children:[e.jsx("strong",{children:"Fit:"})," ",n.details.fit]}),n.details.color&&e.jsxs("li",{children:[e.jsx("strong",{children:"Color:"})," ",n.details.color]})]})]}),["Clothing","Shoes","Accessories"].includes(n.category)&&e.jsxs("div",{style:u.sizeSelector,children:[e.jsxs("div",{style:u.sizeHeader,children:[e.jsx("h3",{style:u.sizeTitle,children:"SELECT SIZE"}),n.sizes&&e.jsx("button",{style:u.sizeGuide,children:"Size Guide"})]}),e.jsx("div",{style:u.sizes,children:(n.sizes||["XS","S","M","L","XL"]).map(p=>{const N=n.availableSizes?n.availableSizes.includes(p):!0;return e.jsx("button",{style:{...u.sizeBtn,background:C===p?"#c6a43f":"transparent",color:C===p?"#0a0a0a":"#fff",borderColor:C===p?"#c6a43f":"#2a2a2a",opacity:N?1:.3,cursor:N?"pointer":"not-allowed"},onClick:()=>{N?h(p):(A({type:"warning",message:"This size is currently unavailable"}),setTimeout(()=>A(null),2e3))},disabled:!N,"aria-label":`Size ${p}`,children:p},p)})})]}),e.jsxs("div",{style:u.quantitySelector,children:[e.jsx("h3",{style:u.quantityTitle,children:"QUANTITY"}),e.jsxs("div",{style:u.quantityControls,children:[e.jsx("button",{onClick:()=>E(k-1),disabled:k<=1,style:{...u.quantityBtn,opacity:k<=1?.3:1},"aria-label":"Decrease quantity",children:"−"}),e.jsx("span",{style:u.quantityValue,children:k}),e.jsx("button",{onClick:()=>E(k+1),disabled:k>=M||n.stock&&k>=n.stock,style:{...u.quantityBtn,opacity:k>=M||n.stock&&k>=n.stock?.3:1},"aria-label":"Increase quantity",children:"+"})]})]}),e.jsxs("div",{style:u.actions,children:[e.jsx("button",{onClick:m,style:{...u.addToCartBtn,opacity:n.stock&&n.stock<=0||Y?.5:1},disabled:n.stock&&n.stock<=0||Y,children:Y?"ADDING...":"ADD TO CART"}),e.jsx("button",{onClick:z,style:{...u.favoriteBtn,background:l(n.id)?"#c6a43f":"transparent",color:l(n.id)?"#0a0a0a":"#c6a43f"},"aria-label":l(n.id)?"Remove from favorites":"Add to favorites",children:l(n.id)?"❤️ FAVORITE":"ADD TO FAVORITES"})]}),e.jsxs("div",{style:u.shipping,children:[e.jsxs("div",{style:u.shippingItem,children:[e.jsx("span",{style:u.shippingIcon}),e.jsx("span",{children:"Complimentary shipping & returns"})]}),e.jsxs("div",{style:u.shippingItem,children:[e.jsx("span",{style:u.shippingIcon}),e.jsx("span",{children:"Secure payment"})]}),e.jsxs("div",{style:u.shippingItem,children:[e.jsx("span",{style:u.shippingIcon}),e.jsx("span",{children:"Gift wrapping available"})]})]})]})]})]})})},u={container:{paddingTop:"100px",minHeight:"80vh",background:"#0a0a0a"},breadcrumbs:{display:"flex",gap:"10px",marginBottom:"40px",color:"#888",fontSize:"14px",flexWrap:"wrap"},breadcrumbLink:{background:"none",border:"none",color:"#888",cursor:"pointer",transition:"color 0.3s ease"},breadcrumbSeparator:{color:"#444"},breadcrumbCurrent:{color:"#fff"},productGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px"},gallery:{position:"sticky",top:"100px"},mainImage:{marginBottom:"20px",overflow:"hidden",position:"relative",background:"#1a1a1a",aspectRatio:"3/4"},badge:{position:"absolute",top:"20px",left:"20px",padding:"5px 15px",background:"#c6a43f",color:"#0a0a0a",fontSize:"12px",fontWeight:"bold",letterSpacing:"1px",zIndex:1},outOfStockOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:"#ff6b6b",letterSpacing:"4px",zIndex:1},thumbnails:{display:"flex",gap:"15px",flexWrap:"wrap"},thumbnail:{width:"80px",height:"100px",cursor:"pointer",overflow:"hidden",transition:"border-color 0.3s ease",background:"#1a1a1a"},info:{padding:"20px 0"},infoHeader:{marginBottom:"15px"},title:{fontSize:"clamp(28px, 3vw, 32px)",marginBottom:"5px",letterSpacing:"2px",color:"#fff",fontWeight:"300"},brand:{color:"#888",fontSize:"16px",letterSpacing:"1px"},rating:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},stars:{color:"#c6a43f",fontSize:"18px",letterSpacing:"2px"},ratingText:{color:"#888",fontSize:"14px"},stockStatus:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px",fontSize:"14px"},stockDot:{width:"8px",height:"8px",borderRadius:"50%",display:"inline-block"},priceContainer:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},price:{fontSize:"clamp(24px, 3vw, 28px)",color:"#c6a43f",fontWeight:"bold"},originalPrice:{fontSize:"20px",color:"#666",textDecoration:"line-through"},discount:{padding:"3px 10px",background:"#ff6b6b",color:"#fff",fontSize:"14px",borderRadius:"4px"},description:{fontSize:"16px",lineHeight:"1.8",marginBottom:"30px",color:"#ccc"},details:{marginBottom:"30px",padding:"20px",background:"#0a0a0a",border:"1px solid #2a2a2a"},detailsTitle:{color:"#fff",fontSize:"14px",letterSpacing:"2px",marginBottom:"15px"},detailsList:{listStyle:"none",padding:0,color:"#ccc",fontSize:"14px",lineHeight:"2"},sizeSelector:{marginBottom:"30px"},sizeHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},sizeTitle:{color:"#fff",fontSize:"14px",letterSpacing:"2px"},sizeGuide:{background:"none",border:"none",color:"#888",cursor:"pointer",fontSize:"12px",textDecoration:"underline"},sizes:{display:"flex",gap:"10px",flexWrap:"wrap"},sizeBtn:{width:"50px",height:"50px",border:"1px solid #2a2a2a",background:"transparent",color:"#fff",cursor:"pointer",transition:"all 0.3s ease",fontSize:"14px",fontWeight:"500"},quantitySelector:{marginBottom:"30px"},quantityTitle:{color:"#fff",fontSize:"14px",letterSpacing:"2px",marginBottom:"15px"},quantityControls:{display:"flex",gap:"15px",alignItems:"center"},quantityBtn:{width:"40px",height:"40px",background:"transparent",border:"1px solid #2a2a2a",color:"#fff",cursor:"pointer",fontSize:"20px",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center"},quantityValue:{color:"#fff",minWidth:"30px",textAlign:"center",fontSize:"18px"},actions:{display:"flex",gap:"20px",marginBottom:"30px",flexWrap:"wrap"},addToCartBtn:{flex:1,minWidth:"200px",padding:"15px",background:"#c6a43f",color:"#0a0a0a",border:"none",fontWeight:"bold",cursor:"pointer",letterSpacing:"2px",transition:"all 0.3s ease",fontSize:"14px"},favoriteBtn:{flex:1,minWidth:"200px",padding:"15px",background:"transparent",color:"#c6a43f",border:"1px solid #c6a43f",fontWeight:"bold",cursor:"pointer",letterSpacing:"2px",transition:"all 0.3s ease",fontSize:"14px"},shipping:{padding:"20px",background:"#0a0a0a",border:"1px solid #2a2a2a"},shippingItem:{display:"flex",alignItems:"center",gap:"10px",padding:"5px 0",color:"#888",fontSize:"14px"},shippingIcon:{fontSize:"18px"},loading:{minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#0a0a0a"},loadingText:{color:"#888",letterSpacing:"2px",fontSize:"14px",marginTop:"20px"},spinner:{width:"50px",height:"50px",border:"3px solid #2a2a2a",borderTopColor:"#c6a43f",borderRadius:"50%",animation:"spin 1s linear infinite"},error:{minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"20px",background:"#0a0a0a"},errorIcon:{fontSize:"48px",marginBottom:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"32px",marginBottom:"15px"},errorText:{color:"#888",fontSize:"16px",marginBottom:"30px"},backBtn:{padding:"12px 30px",background:"#c6a43f",color:"#0a0a0a",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"},notification:{padding:"15px 20px",marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",animation:"fadeInUp 0.3s ease"},notificationSuccess:{background:"rgba(76, 175, 80, 0.1)",border:"1px solid #4caf50",color:"#4caf50"},notificationWarning:{background:"rgba(255, 193, 7, 0.1)",border:"1px solid #ffc107",color:"#ffc107"},notificationError:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid #ff6b6b",color:"#ff6b6b"},notificationClose:{background:"none",border:"none",color:"inherit",fontSize:"24px",cursor:"pointer",padding:"0 5px"}},Ue=document.createElement("style");Ue.textContent=`
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;document.head.appendChild(Ue);const Dt=()=>{ee();const[t,r]=s.useState(!1),[i,o]=s.useState(null),[a,l]=s.useState(!1),[d,n]=s.useState(null),[b,g]=s.useState({});let j,T=[],f=()=>{},c=()=>{},L=()=>0,C=()=>{};try{if(j=re(),!j)throw new Error("Cart context is not available");T=j.cart||[],f=j.removeFromCart||(()=>{}),c=j.updateQuantity||(()=>{}),L=j.getCartTotal||(()=>0),C=j.clearCart||(()=>{})}catch(y){o("Failed to load cart. Please try again later."),console.error("Cart context error:",y)}if(i)return e.jsx("div",{style:v.container,children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:v.errorContainer,children:[e.jsx("span",{style:v.errorIcon,children:"⚠️"}),e.jsx("h2",{style:v.errorTitle,children:"Something went wrong"}),e.jsx("p",{style:v.errorMessage,children:i}),e.jsx("button",{onClick:()=>window.location.reload(),style:v.retryBtn,children:"Try Again"})]})})});const h=L(),k=h>100?0:15,P=h+k,O=async(y,M)=>{if(!(M<0)){if(M>99){n({type:"warning",message:"Maximum quantity is 99 items"});return}g(w=>({...w,[y]:!0})),o(null);try{await c(y,M),n({type:"success",message:"Quantity updated successfully"}),setTimeout(()=>n(null),2e3)}catch(w){o("Failed to update quantity. Please try again."),console.error("Update quantity error:",w)}finally{g(w=>({...w,[y]:!1}))}}},A=async(y,M)=>{g(w=>({...w,[y]:!0})),o(null);try{await f(y),n({type:"success",message:`${M} removed from cart`}),setTimeout(()=>n(null),2e3)}catch(w){o("Failed to remove item. Please try again."),console.error("Remove item error:",w)}finally{g(w=>({...w,[y]:!1}))}},Y=async()=>{if(!a){l(!0);return}r(!0),o(null);try{await C(),l(!1),n({type:"success",message:"Cart cleared successfully"}),setTimeout(()=>n(null),3e3)}catch(y){o("Failed to clear cart. Please try again."),console.error("Clear cart error:",y)}finally{r(!1)}};return!T||T.length===0?e.jsx("div",{style:v.emptyContainer,children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:v.emptyContent,children:[e.jsx("div",{style:v.emptyIcon,children:"🛒"}),e.jsx("h2",{style:v.emptyTitle,children:"YOUR BAG IS EMPTY"}),e.jsx("p",{style:v.emptyText,children:"Discover our latest collection"}),e.jsx(G,{to:"/products",style:v.shopBtn,children:"SHOP NOW"})]})})}):e.jsx("div",{style:v.container,children:e.jsxs("div",{className:"container",children:[d&&e.jsxs("div",{style:{...v.notification,...d.type==="success"&&v.notificationSuccess,...d.type==="warning"&&v.notificationWarning,...d.type==="error"&&v.notificationError},role:"alert","aria-live":"polite",children:[d.message,e.jsx("button",{onClick:()=>n(null),style:v.notificationClose,"aria-label":"Close notification",children:"×"})]}),i&&e.jsxs("div",{style:v.errorBanner,children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:i}),e.jsx("button",{onClick:()=>o(null),style:v.errorClose,children:"×"})]}),e.jsxs("div",{style:v.header,children:[e.jsx("h1",{style:v.title,children:"SHOPPING BAG"}),e.jsxs("span",{style:v.itemCount,children:[T.length," ",T.length===1?"item":"items"]})]}),e.jsxs("div",{style:v.cartGrid,children:[e.jsxs("div",{style:v.itemsSection,children:[T.map(y=>{var M;return e.jsxs("div",{style:v.cartItem,children:[e.jsx("div",{style:v.itemImageContainer,children:e.jsx("img",{src:y.image||"/images/placeholder.jpg",alt:y.name||"Product",style:v.itemImage,onError:w=>{w.target.src="/images/placeholder.jpg"}})}),e.jsxs("div",{style:v.itemInfo,children:[e.jsx(G,{to:`/products/${y.id}`,style:v.itemNameLink,children:e.jsx("h3",{style:v.itemName,children:y.name||"Product"})}),y.brand&&e.jsx("p",{style:v.itemBrand,children:y.brand}),e.jsxs("p",{style:v.itemPrice,children:["$",((M=y.price)==null?void 0:M.toFixed(2))||"0.00"]}),e.jsxs("div",{style:v.quantityControl,children:[e.jsx("button",{onClick:()=>O(y.id,y.quantity-1),disabled:b[y.id]||y.quantity<=1,style:{...v.quantityBtn,opacity:b[y.id]||y.quantity<=1?"0.5":"1"},"aria-label":"Decrease quantity",children:"−"}),e.jsx("span",{style:v.quantityValue,children:b[y.id]?"...":y.quantity}),e.jsx("button",{onClick:()=>O(y.id,y.quantity+1),disabled:b[y.id]||y.quantity>=99,style:{...v.quantityBtn,opacity:b[y.id]||y.quantity>=99?"0.5":"1"},"aria-label":"Increase quantity",children:"+"})]})]}),e.jsx("button",{onClick:()=>A(y.id,y.name),disabled:b[y.id],style:v.removeBtn,"aria-label":`Remove ${y.name} from cart`,children:b[y.id]?"...":"REMOVE"})]},y.id)}),e.jsx("div",{style:v.continueShopping,children:e.jsx(G,{to:"/products",style:v.continueLink,children:"← CONTINUE SHOPPING"})})]}),e.jsxs("div",{style:v.summarySection,children:[e.jsx("h3",{style:v.summaryTitle,children:"ORDER SUMMARY"}),e.jsxs("div",{style:v.summaryRow,children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("span",{children:["$",h.toFixed(2)]})]}),e.jsxs("div",{style:v.summaryRow,children:[e.jsx("span",{children:"Shipping"}),e.jsx("span",{style:k===0?v.freeShipping:{},children:k===0?"FREE":`$${k.toFixed(2)}`})]}),k>0&&e.jsx("div",{style:v.shippingNote,children:"Free shipping on orders over $100"}),e.jsxs("div",{style:{...v.summaryRow,...v.totalRow},children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:["$",P.toFixed(2)]})]}),e.jsx(G,{to:"/checkout",style:v.checkoutBtn,onClick:y=>{T.length===0&&(y.preventDefault(),n({type:"warning",message:"Your cart is empty"}))},children:"PROCEED TO CHECKOUT"}),e.jsx("button",{onClick:Y,disabled:t,style:{...v.clearBtn,opacity:t?"0.5":"1"},children:a?"CONFIRM CLEAR BAG":"CLEAR BAG"}),a&&e.jsxs("div",{style:v.confirmMessage,children:[e.jsx("p",{children:"Are you sure you want to clear your bag?"}),e.jsx("button",{onClick:()=>l(!1),style:v.cancelClearBtn,children:"Cancel"})]})]})]})]})})},v={container:{paddingTop:"100px",minHeight:"80vh",background:"#0a0a0a"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px",flexWrap:"wrap",gap:"15px"},title:{fontSize:"clamp(28px, 4vw, 36px)",letterSpacing:"4px",color:"#fff",fontWeight:"300"},itemCount:{color:"#888",fontSize:"16px",letterSpacing:"1px"},cartGrid:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"40px"},itemsSection:{borderRight:"1px solid #2a2a2a",paddingRight:"40px"},cartItem:{display:"flex",gap:"20px",marginBottom:"30px",paddingBottom:"30px",borderBottom:"1px solid #2a2a2a",transition:"opacity 0.3s ease"},itemImageContainer:{width:"120px",minWidth:"120px",height:"150px",overflow:"hidden",background:"#1a1a1a"},itemImage:{width:"100%",height:"100%",objectFit:"cover"},itemInfo:{flex:1},itemNameLink:{textDecoration:"none"},itemName:{color:"#fff",fontSize:"18px",marginBottom:"5px",transition:"color 0.3s ease"},itemBrand:{color:"#888",fontSize:"14px",marginBottom:"5px"},itemPrice:{color:"#c6a43f",fontSize:"18px",marginTop:"10px"},quantityControl:{display:"flex",gap:"15px",marginTop:"15px",alignItems:"center"},quantityBtn:{width:"30px",height:"30px",background:"transparent",border:"1px solid #2a2a2a",color:"#fff",cursor:"pointer",fontSize:"18px",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center"},quantityValue:{color:"#fff",minWidth:"30px",textAlign:"center"},removeBtn:{background:"none",border:"none",color:"#666",cursor:"pointer",height:"fit-content",transition:"color 0.3s ease",fontSize:"12px",letterSpacing:"1px"},continueShopping:{marginTop:"20px",paddingTop:"20px"},continueLink:{color:"#888",textDecoration:"none",transition:"color 0.3s ease",fontSize:"14px",letterSpacing:"1px"},summarySection:{padding:"30px",background:"#0a0a0a",border:"1px solid #2a2a2a",height:"fit-content",position:"sticky",top:"100px"},summaryTitle:{color:"#fff",fontSize:"20px",marginBottom:"20px",letterSpacing:"2px"},summaryRow:{display:"flex",justifyContent:"space-between",padding:"15px 0",borderBottom:"1px solid #2a2a2a",color:"#aaa"},totalRow:{fontSize:"clamp(18px, 2vw, 20px)",fontWeight:"bold",borderBottom:"none",marginTop:"10px",paddingTop:"20px",color:"#fff"},freeShipping:{color:"#4caf50"},shippingNote:{color:"#888",fontSize:"12px",textAlign:"right",marginTop:"-5px",marginBottom:"10px"},checkoutBtn:{display:"block",textAlign:"center",padding:"15px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",marginTop:"20px",letterSpacing:"2px",transition:"all 0.3s ease"},clearBtn:{width:"100%",padding:"12px",background:"none",border:"1px solid #c6a43f",color:"#c6a43f",cursor:"pointer",marginTop:"15px",transition:"all 0.3s ease",letterSpacing:"1px",fontSize:"12px"},confirmMessage:{marginTop:"15px",padding:"15px",background:"rgba(198, 164, 63, 0.1)",border:"1px solid #c6a43f"},cancelClearBtn:{marginTop:"10px",padding:"8px 20px",background:"transparent",border:"1px solid #888",color:"#888",cursor:"pointer",letterSpacing:"1px",fontSize:"12px"},emptyContainer:{minHeight:"70vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a"},emptyContent:{textAlign:"center",padding:"20px"},emptyIcon:{fontSize:"64px",marginBottom:"30px",opacity:"0.5"},emptyTitle:{fontSize:"clamp(28px, 4vw, 36px)",color:"#fff",marginBottom:"15px",letterSpacing:"4px",fontWeight:"300"},emptyText:{color:"#888",fontSize:"16px",marginBottom:"30px"},shopBtn:{display:"inline-block",padding:"15px 40px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",letterSpacing:"2px",fontWeight:"bold",transition:"all 0.3s ease"},notification:{padding:"15px 20px",marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",animation:"fadeInUp 0.3s ease"},notificationSuccess:{background:"rgba(76, 175, 80, 0.1)",border:"1px solid #4caf50",color:"#4caf50"},notificationWarning:{background:"rgba(255, 193, 7, 0.1)",border:"1px solid #ffc107",color:"#ffc107"},notificationError:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid #ff6b6b",color:"#ff6b6b"},notificationClose:{background:"none",border:"none",color:"inherit",fontSize:"20px",cursor:"pointer",padding:"0 5px"},errorBanner:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid #ff6b6b",color:"#ff6b6b",padding:"15px 20px",marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"},errorClose:{background:"none",border:"none",color:"inherit",fontSize:"20px",cursor:"pointer"},errorContainer:{textAlign:"center",padding:"100px 20px"},errorIcon:{fontSize:"48px",display:"block",marginBottom:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"28px",marginBottom:"15px"},errorMessage:{color:"#888",fontSize:"16px",marginBottom:"30px"},retryBtn:{padding:"12px 30px",background:"#c6a43f",border:"none",color:"#0a0a0a",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"}},We=document.createElement("style");We.textContent=`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;document.head.appendChild(We);const Ft=()=>{const{cart:t,getCartTotal:r,clearCart:i}=re(),o=ee(),[a,l]=s.useState({firstName:"",lastName:"",email:"",address:"",city:"",postalCode:"",cardNumber:"",expiryDate:"",cvv:""}),[d,n]=s.useState({}),[b,g]=s.useState(!1),j=()=>{const c={};return a.firstName||(c.firstName="Required"),a.lastName||(c.lastName="Required"),a.email?/\S+@\S+\.\S+/.test(a.email)||(c.email="Invalid email"):c.email="Required",a.address||(c.address="Required"),a.city||(c.city="Required"),a.postalCode||(c.postalCode="Required"),a.cardNumber?/^\d{16}$/.test(a.cardNumber.replace(/\s/g,""))||(c.cardNumber="Invalid card number"):c.cardNumber="Required",a.expiryDate?/^\d{2}\/\d{2}$/.test(a.expiryDate)||(c.expiryDate="MM/YY format"):c.expiryDate="Required",a.cvv?/^\d{3}$/.test(a.cvv)||(c.cvv="Invalid CVV"):c.cvv="Required",c},T=async c=>{c.preventDefault();const L=j();if(Object.keys(L).length>0){n(L);return}g(!0),setTimeout(()=>{alert("Order placed successfully! Thank you for your purchase."),i(),o("/"),g(!1)},1500)},f=c=>{l({...a,[c.target.name]:c.target.value}),d[c.target.name]&&n({...d,[c.target.name]:""})};return t.length===0?(o("/cart"),null):e.jsx("div",{style:I.container,children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:I.title,children:"CHECKOUT"}),e.jsxs("div",{style:I.checkoutGrid,children:[e.jsxs("form",{onSubmit:T,style:I.form,children:[e.jsxs("div",{style:I.section,children:[e.jsx("h3",{children:"PERSONAL INFORMATION"}),e.jsxs("div",{style:I.formRow,children:[e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",value:a.firstName,onChange:f,style:I.input}),d.firstName&&e.jsx("span",{style:I.error,children:d.firstName})]}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",value:a.lastName,onChange:f,style:I.input}),d.lastName&&e.jsx("span",{style:I.error,children:d.lastName})]})]}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:f,style:I.input}),d.email&&e.jsx("span",{style:I.error,children:d.email})]})]}),e.jsxs("div",{style:I.section,children:[e.jsx("h3",{children:"SHIPPING ADDRESS"}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"address",placeholder:"Address",value:a.address,onChange:f,style:I.input}),d.address&&e.jsx("span",{style:I.error,children:d.address})]}),e.jsxs("div",{style:I.formRow,children:[e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"city",placeholder:"City",value:a.city,onChange:f,style:I.input}),d.city&&e.jsx("span",{style:I.error,children:d.city})]}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"postalCode",placeholder:"Postal Code",value:a.postalCode,onChange:f,style:I.input}),d.postalCode&&e.jsx("span",{style:I.error,children:d.postalCode})]})]})]}),e.jsxs("div",{style:I.section,children:[e.jsx("h3",{children:"PAYMENT DETAILS"}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"cardNumber",placeholder:"Card Number",value:a.cardNumber,onChange:f,style:I.input}),d.cardNumber&&e.jsx("span",{style:I.error,children:d.cardNumber})]}),e.jsxs("div",{style:I.formRow,children:[e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"expiryDate",placeholder:"MM/YY",value:a.expiryDate,onChange:f,style:I.input}),d.expiryDate&&e.jsx("span",{style:I.error,children:d.expiryDate})]}),e.jsxs("div",{style:I.formGroup,children:[e.jsx("input",{type:"text",name:"cvv",placeholder:"CVV",value:a.cvv,onChange:f,style:I.input}),d.cvv&&e.jsx("span",{style:I.error,children:d.cvv})]})]})]}),e.jsx("button",{type:"submit",disabled:b,style:I.submitBtn,children:b?"PROCESSING...":"PLACE ORDER"})]}),e.jsxs("div",{style:I.summary,children:[e.jsx("h3",{children:"ORDER SUMMARY"}),t.map(c=>e.jsxs("div",{style:I.summaryItem,children:[e.jsxs("span",{children:[c.name," x",c.quantity]}),e.jsxs("span",{children:["$",(c.price*c.quantity).toFixed(2)]})]},c.id)),e.jsxs("div",{style:I.total,children:[e.jsx("span",{children:"TOTAL"}),e.jsxs("span",{children:["$",r().toFixed(2)]})]})]})]})]})})},I={container:{paddingTop:"100px",minHeight:"80vh"},title:{fontSize:"36px",textAlign:"center",marginBottom:"40px",letterSpacing:"4px"},checkoutGrid:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"40px"},form:{padding:"30px",background:"#0a0a0a",border:"1px solid #2a2a2a"},section:{marginBottom:"30px"},formRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"},formGroup:{marginBottom:"15px"},input:{width:"100%",padding:"12px",background:"#1a1a1a",border:"1px solid #2a2a2a",color:"#fff",fontSize:"14px"},error:{color:"#ff4444",fontSize:"12px",marginTop:"5px",display:"block"},submitBtn:{width:"100%",padding:"15px",background:"#c6a43f",border:"none",color:"#0a0a0a",fontWeight:"bold",cursor:"pointer",fontSize:"14px",letterSpacing:"2px"},summary:{padding:"30px",background:"#0a0a0a",border:"1px solid #2a2a2a",height:"fit-content"},summaryItem:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #2a2a2a"},total:{display:"flex",justifyContent:"space-between",padding:"20px 0",fontSize:"20px",fontWeight:"bold",borderTop:"2px solid #c6a43f",marginTop:"10px"}},Ut=({isModal:t=!1,onClose:r=null})=>{const i=ee(),[o,a]=s.useState(!0),[l,d]=s.useState(!1),[n,b]=s.useState(!1),[g,j]=s.useState(!1),[T,f]=s.useState(null),[c,L]=s.useState({email:"",password:"",name:"",confirmPassword:"",rememberMe:!1}),[C,h]=s.useState({}),[k,P]=s.useState({}),[O,A]=s.useState(null);let Y,y=()=>{},M=()=>{},w=!1;try{Y=he(),Y&&(y=Y.login||(()=>{}),M=Y.register||(()=>{}),w=Y.isAuthenticated||!1)}catch(p){console.error("Auth context error:",p),A("Authentication service is not available. Please try again later.")}s.useEffect(()=>{if(t){const p=N=>{N.key==="Escape"&&r&&r()};return document.addEventListener("keydown",p),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",p),document.body.style.overflow="unset"}}},[t,r]),s.useEffect(()=>{w&&(t&&r?r():i("/"))},[w,i,t,r]);const m=()=>{const p={},{email:N,password:U,name:_,confirmPassword:be}=c;return!N||N.trim()===""?p.email="Email is required":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N.trim())||(p.email="Please enter a valid email address"),U?U.length<8?p.password="Password must be at least 8 characters":/(?=.*[A-Z])/.test(U)?/(?=.*[a-z])/.test(U)?/(?=.*\d)/.test(U)?/(?=.*[!@#$%^&*])/.test(U)||(p.password="Password must contain at least one special character (!@#$%^&*)"):p.password="Password must contain at least one number":p.password="Password must contain at least one lowercase letter":p.password="Password must contain at least one uppercase letter":p.password="Password is required",o||(!_||_.trim()===""?p.name="Full name is required":_.trim().length<2?p.name="Name must be at least 2 characters":_.trim().length>50&&(p.name="Name must not exceed 50 characters"),U!==be&&(p.confirmPassword="Passwords do not match")),p},z=async p=>{if(p.preventDefault(),O){f({type:"error",message:O});return}f(null);const N=m();if(Object.keys(N).length>0){h(N);const U=Object.keys(N)[0],_=document.querySelector(`[name="${U}"]`);_&&_.focus();return}d(!0),h({});try{o?(await y(c.email.trim(),c.password),f({type:"success",message:"Welcome back! Redirecting..."}),setTimeout(()=>{t&&r?r():i("/")},1e3)):(await M({email:c.email.trim(),password:c.password,name:c.name.trim()}),f({type:"success",message:"Account created successfully! Redirecting..."}),setTimeout(()=>{t&&r?r():i("/")},1e3))}catch(U){console.error("Authentication error:",U);let _="Authentication failed. Please try again.";U.message&&(U.message.includes("already exists")?_="An account with this email already exists. Please sign in.":U.message.includes("Invalid email")?_="Invalid email or password. Please try again.":_=U.message),f({type:"error",message:_})}finally{d(!1)}},E=p=>{const{name:N,value:U,type:_,checked:be}=p.target;L({...c,[N]:_==="checkbox"?be:U}),C[N]&&h({...C,[N]:""})},q=p=>{p.target.classList.contains("modal-overlay")&&r&&r()},$=p=>{const{name:N}=p.target;if(P({...k,[N]:!0}),c[N]&&c[N].trim()!==""){const U=m();U[N]&&h({...C,...U})}},H=p=>{a(p),h({}),P({}),f(null),L({email:c.email||"",password:"",name:"",confirmPassword:"",rememberMe:!1})},X=()=>{f(null)};if(O)return e.jsx("div",{style:t?x.modalOverlay:x.container,children:e.jsx("div",{style:t?x.modalContent:x.formContainer,children:e.jsxs("div",{style:x.formWrapper,children:[t&&e.jsx("button",{onClick:r,style:x.modalCloseBtn,children:"✕"}),e.jsxs("div",{style:x.errorContainer,children:[e.jsx("span",{style:x.errorIcon,children:"⚠️"}),e.jsx("h2",{style:x.errorTitle,children:"Service Unavailable"}),e.jsx("p",{style:x.errorMessage,children:O}),e.jsx("button",{onClick:()=>window.location.reload(),style:x.retryBtn,children:"Try Again"})]})]})})});const F=e.jsxs("div",{style:t?x.modalWrapper:x.formWrapper,children:[t&&e.jsx("button",{onClick:r,style:x.modalCloseBtn,children:"✕"}),e.jsx("h1",{style:x.welcomeTitle,children:o?"WELCOME BACK":"CREATE ACCOUNT"}),e.jsx("p",{style:x.welcomeSubtitle,children:o?"Sign in to access your luxury experience":"Join the world of luxury fashion"}),T&&e.jsxs("div",{style:{...x.notification,...T.type==="success"&&x.notificationSuccess,...T.type==="error"&&x.notificationError},role:"alert","aria-live":"polite",children:[e.jsx("span",{children:T.message}),e.jsx("button",{onClick:X,style:x.notificationClose,"aria-label":"Close notification",children:"×"})]}),e.jsxs("div",{style:x.toggleButtons,role:"tablist",children:[e.jsx("button",{role:"tab","aria-selected":o,"aria-controls":"login-panel",id:"login-tab",onClick:()=>H(!0),style:{...x.toggleBtn,borderBottom:o?"2px solid #c6a43f":"2px solid transparent",color:o?"#c6a43f":"#888"},children:"SIGN IN"}),e.jsx("button",{role:"tab","aria-selected":!o,"aria-controls":"register-panel",id:"register-tab",onClick:()=>H(!1),style:{...x.toggleBtn,borderBottom:o?"2px solid transparent":"2px solid #c6a43f",color:o?"#888":"#c6a43f"},children:"REGISTER"})]}),e.jsxs("form",{onSubmit:z,style:x.form,noValidate:!0,children:[!o&&e.jsxs("div",{style:x.inputGroup,children:[e.jsx("label",{style:x.label,htmlFor:"name",children:"Full Name"}),e.jsx("input",{id:"name",type:"text",name:"name",placeholder:"Enter your full name",value:c.name,onChange:E,onBlur:$,style:{...x.input,borderColor:C.name&&k.name?"#ff6b6b":"#2a2a2a"},"aria-invalid":!!C.name,"aria-describedby":C.name?"name-error":void 0,disabled:l}),C.name&&e.jsx("span",{id:"name-error",style:x.error,children:C.name})]}),e.jsxs("div",{style:x.inputGroup,children:[e.jsx("label",{style:x.label,htmlFor:"email",children:"Email Address"}),e.jsx("input",{id:"email",type:"email",name:"email",placeholder:"Enter your email address",value:c.email,onChange:E,onBlur:$,style:{...x.input,borderColor:C.email&&k.email?"#ff6b6b":"#2a2a2a"},"aria-invalid":!!C.email,"aria-describedby":C.email?"email-error":void 0,disabled:l}),C.email&&e.jsx("span",{id:"email-error",style:x.error,children:C.email})]}),e.jsxs("div",{style:x.inputGroup,children:[e.jsx("label",{style:x.label,htmlFor:"password",children:"Password"}),e.jsxs("div",{style:x.passwordWrapper,children:[e.jsx("input",{id:"password",type:n?"text":"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:E,onBlur:$,style:{...x.input,...x.passwordInput,borderColor:C.password&&k.password?"#ff6b6b":"#2a2a2a"},"aria-invalid":!!C.password,"aria-describedby":C.password?"password-error":void 0,disabled:l}),e.jsx("button",{type:"button",onClick:()=>b(!n),style:x.passwordToggle,"aria-label":n?"Hide password":"Show password",children:" "})]}),C.password&&e.jsx("span",{id:"password-error",style:x.error,children:C.password}),!o&&!C.password&&c.password&&e.jsxs("div",{style:x.passwordStrength,children:[e.jsx("div",{style:x.strengthBar,children:e.jsx("div",{style:{...x.strengthFill,width:`${Math.min(c.password.length/20*100,100)}%`,background:Me(c.password)}})}),e.jsx("span",{style:x.strengthText,children:Wt(c.password)})]})]}),!o&&e.jsxs("div",{style:x.inputGroup,children:[e.jsx("label",{style:x.label,htmlFor:"confirmPassword",children:"Confirm Password"}),e.jsxs("div",{style:x.passwordWrapper,children:[e.jsx("input",{id:"confirmPassword",type:g?"text":"password",name:"confirmPassword",placeholder:"Confirm your password",value:c.confirmPassword,onChange:E,onBlur:$,style:{...x.input,...x.passwordInput,borderColor:C.confirmPassword&&k.confirmPassword?"#ff6b6b":"#2a2a2a"},"aria-invalid":!!C.confirmPassword,"aria-describedby":C.confirmPassword?"confirm-error":void 0,disabled:l}),e.jsx("button",{type:"button",onClick:()=>j(!g),style:x.passwordToggle,"aria-label":g?"Hide password":"Show password",children:g?" ":""})]}),C.confirmPassword&&e.jsx("span",{id:"confirm-error",style:x.error,children:C.confirmPassword})]}),o&&e.jsxs("div",{style:x.rememberMeWrapper,children:[e.jsxs("label",{style:x.rememberMe,children:[e.jsx("input",{type:"checkbox",name:"rememberMe",checked:c.rememberMe,onChange:E,style:x.checkbox}),"Remember me"]}),e.jsx(G,{to:"/forgot-password",style:x.forgotPassword,children:"Forgot password?"})]}),e.jsx("button",{type:"submit",style:{...x.submitBtn,opacity:l?.7:1},disabled:l,children:l?e.jsxs("span",{style:x.loadingText,children:[e.jsx("span",{style:x.spinnerSmall}),o?"SIGNING IN...":"CREATING ACCOUNT..."]}):o?"SIGN IN":"CREATE ACCOUNT"})]}),e.jsxs("div",{style:x.guest,children:[e.jsx("p",{style:x.guestText,children:"or continue as guest"}),e.jsx("button",{type:"button",onClick:()=>{t&&r?r():i("/products")},style:x.guestBtn,disabled:l,children:"CONTINUE SHOPPING"})]}),e.jsxs("div",{style:x.luxuryNote,children:[e.jsx("h4",{style:x.luxuryNoteTitle,children:"LUXURY CLUB BENEFITS"}),e.jsxs("ul",{style:x.luxuryNoteList,children:[e.jsx("li",{children:"✓ Early access to exclusive collections"}),e.jsx("li",{children:"✓ Complimentary shipping on all orders"}),e.jsx("li",{children:"✓ Personal shopping assistance"}),e.jsx("li",{children:"✓ VIP event invitations"})]})]})]});return t?e.jsx("div",{style:x.modalOverlay,onClick:q,children:e.jsx("div",{style:x.modalContent,onClick:p=>p.stopPropagation(),children:F})}):e.jsx("div",{style:x.container,children:e.jsx("div",{className:"container",children:e.jsx("div",{style:x.formContainer,children:F})})})},Me=t=>{let r=0;return t.length>=8&&(r+=1),t.length>=12&&(r+=1),/[A-Z]/.test(t)&&(r+=1),/[a-z]/.test(t)&&(r+=1),/\d/.test(t)&&(r+=1),/[!@#$%^&*]/.test(t)&&(r+=1),r<=2?"#ff6b6b":r<=4?"#ffc107":"#4caf50"},Wt=t=>{if(!t)return"";const r=Me(t);return r==="#ff6b6b"?"Weak":r==="#ffc107"?"Medium":"Strong"},x={container:{paddingTop:"100px",minHeight:"80vh",display:"flex",alignItems:"center",background:"#0a0a0a"},formContainer:{maxWidth:"480px",margin:"0 auto",padding:"40px 20px",width:"100%"},formWrapper:{background:"rgba(255,255,255,0.02)",border:"1px solid #2a2a2a",padding:"40px",borderRadius:"8px",position:"relative"},modalOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(10px)",zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeIn 0.3s ease",padding:"20px",className:"modal-overlay"},modalContent:{maxWidth:"480px",width:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative",animation:"slideUp 0.3s ease"},modalWrapper:{background:"rgba(10, 10, 10, 0.98)",border:"1px solid #2a2a2a",padding:"40px",borderRadius:"12px",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},modalCloseBtn:{position:"absolute",top:"15px",right:"20px",background:"none",border:"none",fontSize:"24px",color:"#888",cursor:"pointer",transition:"color 0.3s ease, transform 0.3s ease",padding:"5px 10px",zIndex:1,"&:hover":{color:"#fff",transform:"rotate(90deg)"}},welcomeTitle:{fontSize:"clamp(28px, 4vw, 36px)",color:"#fff",textAlign:"center",marginBottom:"10px",fontWeight:"300",letterSpacing:"4px"},welcomeSubtitle:{textAlign:"center",color:"#888",fontSize:"14px",marginBottom:"30px",letterSpacing:"1px"},toggleButtons:{display:"flex",gap:"30px",marginBottom:"30px",borderBottom:"1px solid #2a2a2a",justifyContent:"center"},toggleBtn:{background:"none",border:"none",padding:"12px 0",fontSize:"14px",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"Montserrat, sans-serif",letterSpacing:"2px",fontWeight:"500"},form:{marginBottom:"30px"},inputGroup:{marginBottom:"20px"},label:{display:"block",color:"#aaa",fontSize:"12px",letterSpacing:"1px",marginBottom:"8px"},input:{width:"100%",padding:"12px 15px",background:"#1a1a1a",border:"1px solid #2a2a2a",color:"#fff",fontSize:"14px",fontFamily:"Montserrat, sans-serif",transition:"border-color 0.3s ease",outline:"none",borderRadius:"4px"},passwordWrapper:{position:"relative"},passwordInput:{paddingRight:"45px"},passwordToggle:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:"18px",padding:"5px",opacity:.6,transition:"opacity 0.3s ease"},error:{color:"#ff6b6b",fontSize:"12px",marginTop:"5px",display:"block",animation:"fadeInUp 0.3s ease"},rememberMeWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},rememberMe:{color:"#888",fontSize:"14px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},checkbox:{width:"16px",height:"16px",cursor:"pointer",accentColor:"#c6a43f"},forgotPassword:{color:"#888",fontSize:"14px",textDecoration:"none",transition:"color 0.3s ease"},submitBtn:{width:"100%",padding:"14px",background:"#c6a43f",border:"none",color:"#0a0a0a",fontWeight:"bold",cursor:"pointer",letterSpacing:"2px",marginTop:"10px",transition:"all 0.3s ease",fontSize:"14px",borderRadius:"4px"},loadingText:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},spinnerSmall:{width:"16px",height:"16px",border:"2px solid rgba(10,10,10,0.3)",borderTop:"2px solid #0a0a0a",borderRadius:"50%",animation:"spin 0.8s linear infinite"},passwordStrength:{marginTop:"8px"},strengthBar:{height:"3px",background:"#2a2a2a",borderRadius:"2px",overflow:"hidden",marginBottom:"4px"},strengthFill:{height:"100%",transition:"width 0.3s ease, background 0.3s ease"},strengthText:{fontSize:"11px",color:"#888"},guest:{marginTop:"30px",textAlign:"center",borderTop:"1px solid #2a2a2a",paddingTop:"30px"},guestText:{color:"#888",fontSize:"13px",marginBottom:"10px"},guestBtn:{background:"transparent",border:"1px solid #c6a43f",padding:"12px 30px",color:"#c6a43f",cursor:"pointer",fontFamily:"Montserrat, sans-serif",fontSize:"13px",letterSpacing:"2px",transition:"all 0.3s ease",borderRadius:"4px"},luxuryNote:{marginTop:"30px",paddingTop:"20px",borderTop:"1px solid #2a2a2a"},luxuryNoteTitle:{color:"#c6a43f",fontSize:"13px",letterSpacing:"2px",marginBottom:"12px"},luxuryNoteList:{listStyle:"none",padding:0,fontSize:"13px",color:"#888",lineHeight:"2"},notification:{padding:"12px 15px",marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",animation:"fadeInUp 0.3s ease",borderRadius:"4px"},notificationSuccess:{background:"rgba(76, 175, 80, 0.1)",border:"1px solid #4caf50",color:"#4caf50"},notificationError:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid #ff6b6b",color:"#ff6b6b"},notificationClose:{background:"none",border:"none",color:"inherit",fontSize:"20px",cursor:"pointer",padding:"0 5px"},errorContainer:{textAlign:"center",padding:"40px 20px"},errorIcon:{fontSize:"48px",display:"block",marginBottom:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"28px",marginBottom:"15px"},errorMessage:{color:"#888",fontSize:"16px",marginBottom:"30px"},retryBtn:{padding:"12px 30px",background:"#c6a43f",border:"none",color:"#0a0a0a",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease",borderRadius:"4px"}},qe=document.createElement("style");qe.textContent=`
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;document.head.appendChild(qe);const Mt=()=>{const[t,r]=s.useState(!0),[i,o]=s.useState(null),[a,l]=s.useState(!1),[d,n]=s.useState(null);let b,g=[],j=()=>{};try{if(b=ye(),!b)throw new Error("Favorites context is not available");g=b.favorites||[],j=b.clearFavorites||(()=>{})}catch(c){o("Failed to load favorites. Please try again later."),console.error("Favorites context error:",c)}s.useEffect(()=>{const c=setTimeout(()=>{r(!1)},500);return()=>clearTimeout(c)},[]);const T=async()=>{if(!a){l(!0);return}try{await j(),l(!1),n({type:"success",message:"All favorites cleared successfully"}),setTimeout(()=>n(null),3e3)}catch(c){n({type:"error",message:"Failed to clear favorites. Please try again."}),console.error("Clear favorites error:",c)}},f=()=>{l(!1)};return i?e.jsx("div",{style:R.container,children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:R.errorContainer,children:[e.jsx("span",{style:R.errorIcon,children:"⚠️"}),e.jsx("h2",{style:R.errorTitle,children:"Something went wrong"}),e.jsx("p",{style:R.errorMessage,children:i}),e.jsx("button",{onClick:()=>window.location.reload(),style:R.retryBtn,children:"Try Again"})]})})}):t?e.jsx("div",{style:R.container,children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:R.loadingContainer,children:[e.jsx("div",{style:R.spinner}),e.jsx("p",{style:R.loadingText,children:"Loading your favorites..."})]})})}):e.jsx("div",{style:R.container,children:e.jsxs("div",{className:"container",children:[d&&e.jsxs("div",{style:{...R.notification,...d.type==="success"?R.notificationSuccess:R.notificationError},role:"alert","aria-live":"polite",children:[d.message,e.jsx("button",{onClick:()=>n(null),style:R.notificationClose,"aria-label":"Close notification",children:"×"})]}),e.jsxs("div",{style:R.header,children:[e.jsxs("div",{style:R.headerLeft,children:[e.jsx("h1",{style:R.title,children:"MY FAVORITES"}),g.length>0&&e.jsxs("span",{style:R.count,children:["(",g.length," ",g.length===1?"item":"items",")"]})]}),g.length>0&&e.jsx("button",{onClick:T,style:{...R.clearBtn,...a&&R.clearBtnConfirm},"aria-label":a?"Confirm clear all favorites":"Clear all favorites",children:a?"CONFIRM CLEAR ALL":"CLEAR ALL"})]}),a&&g.length>0&&e.jsxs("div",{style:R.confirmMessage,children:[e.jsx("p",{children:"Are you sure you want to remove all items from favorites?"}),e.jsx("button",{onClick:f,style:R.cancelBtn,children:"Cancel"})]}),g.length===0?e.jsxs("div",{style:R.empty,children:[e.jsx("div",{style:R.emptyIcon,children:"❤️"}),e.jsx("h2",{style:R.emptyTitle,children:"YOUR FAVORITES LIST IS EMPTY"}),e.jsx("p",{style:R.emptyText,children:"Save items you love to your favorites"}),e.jsx(G,{to:"/products",style:R.shopBtn,children:"EXPLORE COLLECTION"})]}):e.jsx("div",{style:R.productsGrid,children:g.map(c=>e.jsx(Fe,{product:c},c.id||c._id||Math.random().toString()))})]})})},R={container:{paddingTop:"100px",minHeight:"80vh",background:"#0a0a0a"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",flexWrap:"wrap",gap:"20px"},headerLeft:{display:"flex",alignItems:"center",gap:"15px"},title:{fontSize:"clamp(28px, 4vw, 36px)",letterSpacing:"4px",color:"#fff",fontWeight:"300"},count:{color:"#c6a43f",fontSize:"18px",fontWeight:"300",letterSpacing:"1px"},clearBtn:{padding:"10px 20px",background:"transparent",border:"1px solid #c6a43f",color:"#c6a43f",cursor:"pointer",transition:"all 0.3s ease",fontSize:"12px",letterSpacing:"2px",fontFamily:"Montserrat, sans-serif"},clearBtnConfirm:{background:"#c6a43f",color:"#0a0a0a",animation:"pulse 0.5s ease"},confirmMessage:{background:"rgba(198, 164, 63, 0.1)",border:"1px solid #c6a43f",padding:"15px 20px",marginBottom:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"15px"},cancelBtn:{padding:"8px 20px",background:"transparent",border:"1px solid #888",color:"#888",cursor:"pointer",transition:"all 0.3s ease",fontSize:"12px",letterSpacing:"1px"},empty:{textAlign:"center",padding:"100px 20px"},emptyIcon:{fontSize:"64px",marginBottom:"30px",opacity:"0.5"},emptyTitle:{fontSize:"clamp(24px, 3vw, 32px)",color:"#fff",marginBottom:"15px",letterSpacing:"3px",fontWeight:"300"},emptyText:{fontSize:"16px",color:"#888",marginBottom:"30px"},shopBtn:{display:"inline-block",padding:"15px 40px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",letterSpacing:"2px",fontWeight:"bold",transition:"all 0.3s ease"},productsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"30px",marginTop:"20px"},loadingContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh"},spinner:{width:"40px",height:"40px",border:"3px solid rgba(198, 164, 63, 0.1)",borderTop:"3px solid #c6a43f",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"20px"},loadingText:{color:"#888",fontSize:"14px",letterSpacing:"2px"},errorContainer:{textAlign:"center",padding:"100px 20px"},errorIcon:{fontSize:"48px",display:"block",marginBottom:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"28px",marginBottom:"15px"},errorMessage:{color:"#888",fontSize:"16px",marginBottom:"30px"},retryBtn:{padding:"12px 30px",background:"#c6a43f",border:"none",color:"#0a0a0a",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"},notification:{padding:"15px 20px",marginBottom:"20px",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center",animation:"fadeInUp 0.3s ease"},notificationSuccess:{background:"rgba(76, 175, 80, 0.1)",border:"1px solid #4caf50",color:"#4caf50"},notificationError:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid #ff6b6b",color:"#ff6b6b"},notificationClose:{background:"none",border:"none",color:"inherit",fontSize:"20px",cursor:"pointer",padding:"0 5px"}},$e=document.createElement("style");$e.textContent=`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;document.head.appendChild($e);const qt=()=>e.jsx("div",{style:te.container,children:e.jsxs("div",{style:te.content,children:[e.jsx("div",{style:te.errorCode,children:"404"}),e.jsx("h1",{style:te.title,children:"PAGE NOT FOUND"}),e.jsx("p",{style:te.description,children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),e.jsx(G,{to:"#",style:te.homeBtn,children:"BACK TO HOME"})]})}),te={container:{minHeight:"70vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 20px"},content:{textAlign:"center",maxWidth:"600px"},errorCode:{fontSize:"120px",color:"#c6a43f",fontWeight:"bold",lineHeight:1,marginBottom:"20px",fontFamily:"Playfair Display, serif"},title:{fontSize:"32px",color:"#fff",marginBottom:"20px",letterSpacing:"4px",fontWeight:"300"},description:{fontSize:"16px",color:"#888",marginBottom:"40px",lineHeight:1.8},homeBtn:{display:"inline-block",padding:"15px 40px",background:"#c6a43f",color:"#0a0a0a",textDecoration:"none",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"}},$t=()=>{const{pathname:t}=Je();return s.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),null},Ie=({children:t})=>{const{isAuthenticated:r,loading:i}=he();return i?e.jsxs("div",{style:Z.loadingContainer,children:[e.jsx("div",{style:Z.spinner}),e.jsx("p",{style:Z.loadingText,children:"Loading..."})]}):r?t:e.jsx(Se,{to:"/login",state:{from:window.location.pathname},replace:!0})},Gt=({children:t})=>{const{isAuthenticated:r,loading:i}=he();return i?e.jsxs("div",{style:Z.loadingContainer,children:[e.jsx("div",{style:Z.spinner}),e.jsx("p",{style:Z.loadingText,children:"Loading..."})]}):r?e.jsx(Se,{to:"/",replace:!0}):t};function Ht(){return e.jsx(Ve,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(st,{children:e.jsx(nt,{children:e.jsxs(ct,{children:[e.jsx($t,{}),e.jsxs("div",{style:Z.appContainer,children:[e.jsx(vt,{}),e.jsx("main",{style:Z.mainContent,children:e.jsxs(Xe,{children:[e.jsx(J,{path:"/",element:e.jsx(Tt,{})}),e.jsx(J,{path:"/products",element:e.jsx(Rt,{})}),e.jsx(J,{path:"/product/:id",element:e.jsx(Ot,{})}),e.jsx(J,{path:"/cart",element:e.jsx(Dt,{})}),e.jsx(J,{path:"/login",element:e.jsx(Gt,{children:e.jsx(Ut,{})})}),e.jsx(J,{path:"/favorites",element:e.jsx(Ie,{children:e.jsx(Mt,{})})}),e.jsx(J,{path:"/checkout",element:e.jsx(Ie,{children:e.jsx(Ft,{})})}),e.jsx(J,{path:"/404",element:e.jsx(qt,{})}),e.jsx(J,{path:"*",element:e.jsx(Se,{to:"/404",replace:!0})})]})}),e.jsx(St,{})]})]})})})})}const Z={appContainer:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"#0a0a0a"},mainContent:{flex:1,paddingTop:"80px"},loadingContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a"},spinner:{width:"50px",height:"50px",border:"3px solid rgba(198, 164, 63, 0.1)",borderTop:"3px solid #c6a43f",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"20px"},loadingText:{color:"#888",fontSize:"14px",letterSpacing:"2px"}},Ge=document.createElement("style");Ge.textContent=`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;document.head.appendChild(Ge);ve.createRoot(document.getElementById("root")).render(e.jsx(Q.StrictMode,{children:e.jsx(Ht,{})}));
