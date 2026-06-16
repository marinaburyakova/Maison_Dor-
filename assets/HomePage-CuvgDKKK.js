import{j as e}from"./index-BppCIwTs.js";import{r as o,L as f}from"./vendor-DnKiH8gK.js";import{p as b}from"./product3-DEWBbiUP.js";const y=""+new URL("product29.BOALRsQ4.jpg",import.meta.url).href,v=""+new URL("product2.32vY8PuK.jpg",import.meta.url).href,w=""+new URL("product0.B2VGaqqH.jpg",import.meta.url).href,j=""+new URL("luxury-fashion.DkVMH80p.mp4",import.meta.url).href,S=""+new URL("luxury-fashion.DoPpK4rz.webm",import.meta.url).href,I=()=>{const i=o.useRef(null),[s,c]=o.useState(!1),[g,l]=o.useState(!1),[n,d]=o.useState(""),[u,p]=o.useState(!1),a=o.useRef(null);o.useEffect(()=>{const r=document.createElement("style");return r.textContent=`
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
    `,document.head.appendChild(r),()=>{document.head.removeChild(r)}},[]),o.useEffect(()=>(i.current&&!s&&(async()=>{try{await i.current.play()}catch(x){console.log("Video autoplay failed:",x),l(!0)}})(),()=>{a.current&&clearTimeout(a.current)}),[i,s]);const h=r=>{if(r.preventDefault(),!n||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){alert("Пожалуйста, введите корректный email адрес");return}console.log("Email подписан:",n),p(!0),d(""),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{p(!1)},5e3)},m=()=>{console.error("Video failed to load"),c(!0),l(!1)};return e.jsxs("div",{children:[e.jsxs("section",{style:t.hero,children:[e.jsxs("div",{style:t.videoContainer,children:[!g&&!s&&e.jsx("div",{className:"video-loading",children:e.jsx("div",{className:"video-loading-spinner"})}),e.jsxs("video",{ref:i,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,style:t.video,onLoadedData:()=>{l(!0),c(!1)},onError:m,children:[e.jsx("source",{src:j,type:"video/mp4"}),e.jsx("source",{src:S,type:"video/webm"}),e.jsx("img",{src:y,alt:"Luxury fashion background",style:t.fallbackImage})]}),e.jsx("div",{style:t.overlay})]}),e.jsxs("div",{style:t.heroContent,children:[e.jsxs("h1",{style:t.heroTitle,children:[e.jsx("span",{style:t.goldText,children:"TIMELESS"}),e.jsx("span",{style:t.whiteText,children:"ELEGANCE"})]}),e.jsx("p",{style:t.heroSubtitle,children:"Discover the new Autumn/Winter Collection 2026"}),e.jsx(f,{to:"/products",className:"hero-btn",children:"EXPLORE COLLECTION"})]})]}),e.jsx("section",{style:t.categories,children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:t.sectionTitle,children:"BESPOKE CRAFTSMANSHIP"}),e.jsxs("div",{style:t.categoryGrid,children:[e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${w})`}}),e.jsx("h3",{style:t.categoryTitle,children:"READY TO WEAR"}),e.jsx("p",{style:t.categoryDesc,children:"Italian tailoring redefined"})]}),e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${b})`}}),e.jsx("h3",{style:t.categoryTitle,children:"ARTISAN FOOTWEAR"}),e.jsx("p",{style:t.categoryDesc,children:"Handcrafted excellence"})]}),e.jsxs("div",{className:"category-card",children:[e.jsx("div",{className:"category-image",style:{backgroundImage:`url(${v})`}}),e.jsx("h3",{style:t.categoryTitle,children:"EVENING COUTURE"}),e.jsx("p",{style:t.categoryDesc,children:"Red carpet statement"})]})]})]})}),e.jsx("section",{style:t.newsletter,children:e.jsxs("div",{style:t.newsletterContent,children:[e.jsx("h2",{style:t.newsletterTitle,children:"THE LUXURY EDIT"}),e.jsx("p",{style:t.newsletterText,children:"Subscribe to receive exclusive offers and early access"}),u?e.jsx("div",{className:"success-message",children:"✓ Thank you for subscribing!"}):e.jsxs("form",{style:t.newsletterForm,onSubmit:h,children:[e.jsx("input",{type:"email",placeholder:"Your email address",className:"newsletter-input",value:n,onChange:r=>d(r.target.value),required:!0,"aria-label":"Email address"}),e.jsx("button",{type:"submit",className:"newsletter-btn",children:"SUBSCRIBE"})]})]})})]})},t={hero:{position:"relative",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},videoContainer:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},video:{width:"100%",height:"100%",objectFit:"cover"},fallbackImage:{width:"100%",height:"100%",objectFit:"cover"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",zIndex:1},heroContent:{position:"relative",zIndex:2,textAlign:"center",color:"#fff",padding:"20px",maxWidth:"800px",animation:"fadeInUp 1s ease-out"},heroTitle:{fontSize:"clamp(48px, 8vw, 96px)",letterSpacing:"clamp(4px, 1vw, 12px)",lineHeight:"1.3",marginBottom:"20px",fontWeight:"300",display:"flex",flexDirection:"column",gap:"10px"},goldText:{color:"#c6a43f",fontWeight:"700",textShadow:"0 2px 10px rgba(0,0,0,0.3)"},whiteText:{color:"#fff",fontWeight:"500",textShadow:"0 2px 10px rgba(0,0,0,0.3)"},heroSubtitle:{fontSize:"clamp(14px, 2vw, 18px)",marginBottom:"40px",letterSpacing:"3px",color:"#f5f5f5",fontWeight:"300"},categories:{padding:"100px 0",background:"#0a0a0a"},sectionTitle:{textAlign:"center",fontSize:"clamp(28px, 5vw, 48px)",marginBottom:"60px",letterSpacing:"4px",fontWeight:"300",color:"#fff",position:"relative",display:"inline-block",width:"100%"},categoryGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"40px",maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},categoryTitle:{fontSize:"18px",letterSpacing:"3px",marginBottom:"10px",color:"#c6a43f",fontWeight:"500"},categoryDesc:{fontSize:"14px",color:"#888",letterSpacing:"1px"},newsletter:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",padding:"100px 20px",textAlign:"center",borderTop:"1px solid rgba(198, 164, 63, 0.3)",borderBottom:"1px solid rgba(198, 164, 63, 0.3)"},newsletterContent:{maxWidth:"600px",margin:"0 auto"},newsletterTitle:{fontSize:"clamp(28px, 4vw, 32px)",marginBottom:"15px",letterSpacing:"4px",color:"#c6a43f"},newsletterText:{fontSize:"14px",color:"#aaa",marginBottom:"30px",letterSpacing:"1px"},newsletterForm:{display:"flex",gap:"15px",flexWrap:"wrap",justifyContent:"center"}};export{I as default};
