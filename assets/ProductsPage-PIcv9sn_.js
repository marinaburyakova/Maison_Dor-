import{j as e}from"./index-BppCIwTs.js";import{r as n,d as w,u as k}from"./vendor-DnKiH8gK.js";import{f as A}from"./api-D9G1WKDL.js";import{P as E}from"./ProductCard-BesuFFeb.js";import"./product3-DEWBbiUP.js";const P=()=>{const[i,h]=n.useState([]),[g,o]=n.useState(!0),[c,r]=n.useState(null),[l,f]=n.useState(""),[d,x]=n.useState("all");n.useEffect(()=>{m()},[]);const m=async()=>{try{o(!0);const s=await A();h(s),r(null)}catch(s){r("Failed to load products"),console.error(s)}finally{o(!1)}};return{products:i.filter(s=>{const p=s.name.toLowerCase().includes(l.toLowerCase()),C=d==="all"||s.category===d;return p&&C}),allProducts:i,loading:g,error:c,searchTerm:l,setSearchTerm:f,selectedCategory:d,setSelectedCategory:x}},L=""+new URL("0_1.CYho86RP.jpg",import.meta.url).href,R=(i,h)=>{const[g,o]=n.useState(i);return n.useEffect(()=>{const c=setTimeout(()=>{o(i)},h);return()=>{clearTimeout(c)}},[i,h]),g},U=()=>{const{products:i=[],loading:h,error:g,searchTerm:o,setSearchTerm:c,selectedCategory:r,setSelectedCategory:l}=P(),[f]=w(),d=k(),[x,m]=n.useState(o||""),b=R(x,300),s=n.useRef(!0),p=n.useRef(!1);n.useEffect(()=>{const a=document.createElement("style");return a.textContent=`
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
    `,document.head.appendChild(a),()=>{document.head.removeChild(a)}},[]),n.useEffect(()=>{if(!s.current)return;const a=f.get("search"),u=f.get("category");let y=!1;a&&a!==o&&(c(a),m(a),y=!0),u&&u!==r&&(l(u),y=!0),y&&(p.current=!0),s.current=!1},[f,o,r,c,l]),n.useEffect(()=>{if(p.current){p.current=!1;return}if(s.current)return;const a=new URLSearchParams;b&&a.set("search",b),r&&r!=="all"&&a.set("category",r);const u=a.toString(),y=f.toString();u!==y&&d(`?${u}`,{replace:!0})},[b,r,d,f]),n.useEffect(()=>{o!==x&&!p.current&&m(o)},[o,x]);const C=n.useCallback(a=>{m(a.target.value)},[]),v=n.useCallback(()=>{p.current=!0,m(""),c(""),l("all"),d("/products",{replace:!0})},[c,l,d]),S=n.useCallback(a=>{p.current=!0,l(a)},[l]);if(g)return e.jsx("div",{style:t.container,children:e.jsxs("div",{style:t.errorContainer,children:[e.jsx("h2",{style:t.errorTitle,children:"Error Loading Products"}),e.jsx("p",{style:t.errorMessage,children:g}),e.jsx("button",{onClick:()=>window.location.reload(),style:t.retryBtn,children:"Retry"})]})});const j=Array.isArray(i)?i.length:0;return e.jsxs("div",{style:t.container,children:[e.jsxs("div",{style:t.hero,children:[e.jsx("h1",{style:t.title,children:"THE COLLECTION"}),e.jsx("p",{style:t.subtitle,children:"Autumn/Winter 2026"})]}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:t.filters,children:[e.jsxs("div",{style:t.filterGroup,role:"group","aria-label":"Category filters",children:[e.jsx("button",{onClick:()=>S("all"),className:`filter-btn ${r==="all"?"filter-btn-active":""}`,style:{...t.filterBtn,...r==="all"&&t.filterActive},"aria-current":r==="all"?"page":void 0,"aria-label":"Show all products",children:"ALL"}),e.jsx("button",{onClick:()=>S("Clothing"),className:`filter-btn ${r==="Clothing"?"filter-btn-active":""}`,style:{...t.filterBtn,...r==="Clothing"&&t.filterActive},"aria-current":r==="Clothing"?"page":void 0,"aria-label":"Show clothing products",children:"CLOTHING"}),e.jsx("button",{onClick:()=>S("Shoes"),className:`filter-btn ${r==="Shoes"?"filter-btn-active":""}`,style:{...t.filterBtn,...r==="Shoes"&&t.filterActive},"aria-current":r==="Shoes"?"page":void 0,"aria-label":"Show footwear products",children:"FOOTWEAR"}),e.jsx("button",{onClick:()=>S("Accessories"),className:`filter-btn ${r==="Accessories"?"filter-btn-active":""}`,style:{...t.filterBtn,...r==="Accessories"&&t.filterActive},"aria-current":r==="Accessories"?"page":void 0,"aria-label":"Show accessories products",children:"ACCESSORIES"})]}),e.jsx("div",{style:t.searchSection,children:e.jsx("input",{type:"text",placeholder:"Search collection...",value:x,onChange:C,style:t.searchInput,"aria-label":"Search products"})})]}),h?e.jsxs("div",{style:t.loading,children:[e.jsx("div",{style:t.spinner}),e.jsx("p",{children:"LOADING EXCLUSIVE PIECES..."})]}):e.jsx("div",{className:"products-grid",children:j>0?i.map((a,u)=>e.jsx("div",{style:{animationDelay:`${u*.05}s`},children:e.jsx(E,{product:a})},a.id||a._id||Math.random().toString())):e.jsxs("div",{style:t.noResults,children:[e.jsx("p",{children:"No products found matching your criteria"}),e.jsx("button",{onClick:v,style:t.resetBtn,children:"Clear filters"})]})})]})]})},t={container:{paddingLeft:"20px",paddingRight:"20px",marginBottom:"10px",minHeight:"100vh",background:"#0a0a0a"},hero:{background:`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${L})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"40vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"#fff"},title:{fontSize:"clamp(32px, 5vw, 48px)",letterSpacing:"6px",marginBottom:"20px",fontWeight:"300"},subtitle:{fontSize:"clamp(14px, 2vw, 16px)",letterSpacing:"3px",color:"#c6a43f"},filters:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"40px 0",flexWrap:"wrap",gap:"20px"},filterGroup:{display:"flex",gap:"10px",flexWrap:"wrap"},filterBtn:{background:"none",padding:"8px 20px",color:"#888",cursor:"pointer",transition:"all 0.3s ease",fontSize:"12px",letterSpacing:"2px",fontFamily:"Montserrat, sans-serif",border:"none",borderBottom:"2px solid transparent",position:"relative"},filterActive:{color:"#c6a43f",borderBottom:"2px solid #c6a43f"},searchSection:{flex:1,maxWidth:"300px",minWidth:"200px"},searchInput:{width:"100%",padding:"10px 15px",background:"#1a1a1a",border:"1px solid #2a2a2a",color:"#fff",fontSize:"14px",fontFamily:"Montserrat, sans-serif",transition:"border-color 0.3s ease, box-shadow 0.3s ease",outline:"none"},resetBtn:{background:"none",border:"1px solid #c6a43f",color:"#c6a43f",padding:"8px 20px",cursor:"pointer",fontSize:"12px",letterSpacing:"1px",transition:"all 0.3s ease",fontFamily:"Montserrat, sans-serif"},loading:{textAlign:"center",padding:"100px 20px",fontSize:"14px",letterSpacing:"2px",color:"#888"},spinner:{width:"40px",height:"40px",margin:"0 auto 20px",border:"3px solid rgba(198, 164, 63, 0.1)",borderTop:"3px solid #c6a43f",borderRadius:"50%",animation:"spin 1s linear infinite"},noResults:{textAlign:"center",padding:"100px 20px",fontSize:"16px",color:"#888",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",gridColumn:"1 / -1"},errorContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:"20px"},errorTitle:{color:"#ff6b6b",fontSize:"28px",marginBottom:"15px"},errorMessage:{color:"#888",fontSize:"16px",marginBottom:"30px"},retryBtn:{padding:"12px 30px",background:"#c6a43f",border:"none",color:"#0a0a0a",cursor:"pointer",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px",transition:"all 0.3s ease"}};export{U as default};
