
// import About from './about.js';
// import Contact from './contact.js';
import './baroque.css'
import './b-3.css'
import Stiched from './Chantelle.js';
// import Loan from '../src/loan.js';
import Shaal from './Shaal.js';
import Unstiched from './Unstiched.js';
import Login from './login.js';
import { useState,useRef,useEffect,useContext } from 'react';
import './baroque.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  {chantelle} from './CartProvider.js'
import CartContext from './CartContext'; // Import CartContext
import Slider from "react-slick";// Import slick-carousel styles

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
function BarouqeProject(){
  useEffect(function(){
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    // document.body.style.transition = 'all 2s ease-in-out'; // Enable scrolling when the sidebar is closed

  },[])
// let products=[
  
// {
//   img:'barouqe-img-1.png',
//   name:'Unstiched',
//   id:1
// }
// ,
// {
//   img:'barouqe-img-2.png',
//   name:'Unstiched Loan',
//   id:2
// }
// ,
// {
//   img:'barouqe-img-3.png',
//   name:'Stiched',
//   id:3
// }
// ,
// {
//   img:'barouqe-img-4.png',
//   name:'Shaals',
//   id:4
// }


// ]

const navigatee = useNavigate();
  
    const handleImageClick = (product) => {
     
      navigatee(`/chantelle/chantelleProductDetails?/img=${product.img}&name=${product.name}&id=${product.id}&price=${product.price}&type=${product.type}&/lineImage1=${product.lineImage1}&/lineImage2=${product.lineImage2}&/lineImage3=${product.lineImage3}&/lineImage4=${product.lineImage4}&/lineImage5=${product.lineImage5}&/lineImage6=${product.lineImage6}&size=${product.size}`);
    };

const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let [search,EnableSearch]=useState(false)
  let [imgc,imgchanger]=useState(false)
  let [opc1,opchanger1]=useState(false)
  let [opc2,opchanger2]=useState(false)
  let [noarrow,nar]=useState(false)
  let [carded,cardedup]=useState(false)
  let [carded2,cardedup2]=useState(false)

  
  function opcc2(){
    imgchanger(function(o){
      return o=true
    })
  }
  
  
const [sidebarVisible2, setSidebarVisible2] = useState(false);
const [dropdownVisible2, setDropdownVisible2] = useState(false);
let [noov,nooov] = useState(false);

function toggleFlow4(){
  nooov(noov=true)
  if (noov===true&&window.innerWidth < 1000) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else if(noov=true&&window.innerWidth < 1000) {

    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};
function toggleFlow5(){
  nooov(noov=false&&window.innerWidth < 1000)
  if (noov===true) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else if(noov=true&&window.innerWidth < 1000) {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};



  function  toggleSidebar () {
    setSidebarVisible(!sidebarVisible);
    if (!sidebarVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };

  function  toggleDropdown () {
    setDropdownVisible(!dropdownVisible);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  
  };

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth >1000 /* Add the scroll threshold here */ ) {
        nar(false)
      } else {
        nar(true)
        
      }
    };
  
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:noarrow?'none' :'block', opacity:'1',  zIndex: 1, margin:'0 23px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:noarrow?'none' :'block',  zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  function  toggleSidebar2 () {
    setSidebarVisible2(!sidebarVisible2);
    if (!sidebarVisible2) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };

  function toggleDropdown2 () {
    setDropdownVisible(!dropdownVisible2);
  };

let [stop,setstop]=useState(false)

function toggleFlow(){
  setstop(!stop);
  if (!stop) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};

const [isSticky, setIsSticky] = useState(false);
const [isSticky2, setIsSticky2] = useState(false);
const [isSticky5, setIsSticky5] = useState(false);
const { cart,instock ,addToCart,decreaseFromcart,Find,Finder,Filter,FindShow, setFindShow,Setfilter,handleSearchInputChange,removeFromcart,ChangePrice} = useContext(CartContext); 
// Add a scroll event listener to detect when the navbar becomes sticky

const product = cart.find((product) => product.quantity >0);

useEffect(() => {
  function handleScroll() {
    if (window.pageYOffset >50 ) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


useEffect(() => {
  function handleScroll() {
    if (window.pageYOffset >20 /* Add the scroll threshold here */ ) {
      setIsSticky5(true);
    } else {
      setIsSticky5(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const [activeNote, setActiveNote] = useState(null);
      
// Function to set the active note
function setActive(id) {
  setActiveNote(id);
  // Move the active note to the top of the array
  
}
console.log(window.pageYOffset)

function se(){
  setIsSticky2(function(o){
    return !o
  })
}


function EnableSearchh(){
  setIsSticky(function(o){
    
    return !o
  })
  EnableSearch(function(o){
    
    return !o
  })
}


// function changer() {
//   console.log("Changer function called"); // Add this line for debugging
//   setmove((prevState) => !prevState);
// }

// Use the useEffect hook to call the changer function when the window width changes





  // Rest of your component code...

 


// ... rest of your code ...

let [currency,setCurrency]=useState('')

function changeCurrency (curr){
  setCurrency(curr)
}
const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

let [showDown,setShowDown]=useState(false)

useEffect(function(){

  const screenWidth = window.innerWidth;

  // Define your threshold size (e.g., 784 pixels)
  const thresholdSize = 784;

  // Check if the screen size crosses the threshold
  const isSmallerThanThreshold = screenWidth < thresholdSize;

  function ShowDown(){
    const screenWidth = window.innerWidth;

    // Define your threshold size (e.g., 784 pixels)
    const thresholdSize = 784;

    // Check if the screen size crosses the threshold
    const isSmallerThanThreshold = screenWidth < thresholdSize;

    // Trigger the function only if the screen size crosses the threshold
    if (isSmallerThanThreshold !== showDown) {
     setShowDown(isSmallerThanThreshold);
    }
  }
  


window.addEventListener('resize', ShowDown);

// Clean up the event listener when the component unmounts
return () => {
  window.removeEventListener('resize', ShowDown);
};
},[showDown])

const [open6, setopen6] = useState(false );
const [open7, setopen7] = useState(false );
const [open10, setopen10] = useState(false);
const [open11, setopen11] = useState(false);
const [open8, setopen8] = useState(false );


function Opener6(){
  setopen6(function(o){
return !o
  })
}
function Opener10(){
 
  setopen10(function(o){
return !o
  })

}

function Opener11(){
 
  setopen11(function(o){
return !o
  })

}

useEffect(() => {
  // Set isActive to true after a delay (adjust the delay based on your preference)
  const delay = setTimeout(() => {
  window.scrollTo(0, 0);

  }, 100);

  // Clear the timeout to avoid side effects on unmount
  return () => clearTimeout(delay);
}, []); // Run this effect only once on component mount


function Opener7(){
  setopen7(function(o){
return !o
  })
}

function Opener8(){
  setopen8(function(o){
return !o
  })
}

let[moved,setmovee]=useState(false)

function setmove4(){

  setmovee(function(o){
    return !o
  })

}

let[movedd,setmoveee]=useState(false)

function setmove5(){

  setmoveee(function(o){
    return !o
  })

}
const [isActive6, setIsActive6] = useState(false);


  useEffect(() => {
    // Set isActive to true after a delay (adjust the delay based on your preference)
    const delay = setTimeout(() => {
      setIsActive6(true);
    }, 500);

    // Clear the timeout to avoid side effects on unmount
    return () => clearTimeout(delay);
  }, []); // Run this effect only once on component mount

let [isSticky9,setIsSticky9]=useState(false)
let [isSticky10,setIsSticky10]=useState(true)
   

      function handleScroll10() {
        if (window.pageYOffset >1150 /* Add the scroll threshold here */ ) {
          setIsSticky9(true);
        } else {
          setIsSticky9(false);
        }
      };

      window.addEventListener("scroll", handleScroll10);
    
      // Clean up the event listener when the component unmounts
      
function sccc(){
  window.scrollTo(0, 0);

}
    
const [element1Content, setElement1Content] = useState('');
const [element2Content, setElement2Content] = useState('PKR');
const [element3Content, setElement3Content] = useState('USD');
const [element7Content, setElement7Content] = useState('AED');
const [element4Content, setElement4Content] = useState('GBP');
const [element5Content, setElement5Content] = useState('AUS');
const [element6Content, setElement6Content] = useState('CAD');

   function e1(){
    setElement1Content(element2Content)
   }
   function e2(){
    setElement1Content(element3Content)
   }
   function e3(){
    setElement1Content(element4Content)
   }
   function e4(){
    setElement1Content(element5Content)
   }
   function e7(){
    setElement1Content(element7Content)
   }
   function e5(){
    setElement1Content(element6Content)
   }


   useEffect(() => {
    // Set isActive to true after a delay (adjust the delay based on your preference)
    const delay = setTimeout(() => {
e1()  
// ChangePrice(1,'PKR','')

    }, 100);
  
    // Clear the timeout to avoid side effects on unmount
    return () => clearTimeout(delay);
  }, []); // Run this effect only once on component mount
  
   
   
  return(
    <>
<div className={`fade-in ${isActive6 ? 'active' : 'fade-in'}`}>
      
    
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap" rel="stylesheet" />
        <title>BAROQUE</title>
      </head>
      <div className="scroller" style={{display:isSticky9&&isSticky10?'flex':'none'}}>   
     <div className="sc-cross" onClick={function(){setIsSticky10(isSticky10=false)}}>
        &#x2715;
        </div>
        <div className="up-up" onClick={sccc}>
          <img src="/assests/up-arrow.png" alt="" width={'16px'} className='animation-20'/>
        </div>
      </div>
    <div className="no">
    <header>
      <p>FREE SHIPPING IN PAKISTAN</p>
    </header>
      <div className={`navbar ${isSticky ? "sticky-navbar" : "" }`} >
      <div className={`custom-left ${sidebarVisible ? 'custom-show' : ''}`}>
  <button id="custom-ham" className={`custom-jango ${sidebarVisible ? 'custom-hid' : ''}`} onClick={function(){toggleSidebar()
  // Opener11()
  }} style={{background: 'transparent', border: '0'}}>
    
<div  className="Hamburger-icon"></div>
<div  className="Hamburger-icon"></div>
<div className="Hamburger-icon"> </div>
  </button>

  <div className={`custom-sidebar ${sidebarVisible ? 'custom-show' : ''}`} >
    <div className="custom-cross">
      <p>NAVIAGTION</p>
      <button className="custom-remove" onClick={toggleSidebar}>&#x2715;</button>
    </div>
    <hr style={{ color: '#00000039' }} />
    <div className="custom-joke" >
      <ul className={` ${sidebarVisible ? 'animation-4' : 'animation-3'}`}>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/' >HOME</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='unstiched' >UNSTICHED</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='chantelle' >CHANTELLE</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='loan' >LOAN</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='shaal' >SHAAL</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>

      </ul>
      <div className="together-7">
      <button className="dropbtn"  onClick={setmove5}><div className="triangle-down"><p>{element1Content}</p></div></button>
      <div className={`dropdown-content ${movedd ? 'animation-8' : 'animation-7'}`} style={{position:'relative'}} >
  <a href="#" className={`${movedd?'animation-10' :''}`} onClick={function(){
    setmove5()
    ChangePrice(1,'PKR','') 
  e1()
    }}>PKR</a>

  <a className={`${movedd?'animation-10' :''}`} onClick={function(){ChangePrice(290,'USD','$') 
  
  setmove5()
  e2()
    }}>USD</a>

  <a href="#" className={`${movedd?'animation-10' :''}`} onClick={function(){
    setmove5()
    ChangePrice(78.003,'AED','DHS') 
  
  e7()
    }}>AED</a>
  <a href="#" className={`${movedd?'animation-10' :''}`} onClick={function(){
    setmove5()
    ChangePrice(347,'GBP','\u00A3') 
  
  e3()
    }}>GBP</a>
     <a href="#" className={`${movedd?'animation-10' :''}`} onClick={function(){
      setmove5()
      ChangePrice(182,'AUS','$') 
  
  e4()
    }}>AUS</a>
    <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
      setmove5()
      ChangePrice(209,'CAD','$') 
  
  e5()
    }}>CAD</a>

  </div>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)',margin:'20px 0'}}/>

<Link to='/loan/login'><img src="/assests/pngwing.com (35).png" alt=""  width={'20px'} /></Link>
  </div>
    </div>
  </div>
  {  sidebarVisible &&  <div className="cover-ever">

</div>
}
</div>



  



        <div className="baroque-logo">
<Link to='/' style={{textDecoration:'none',color:'Black',fontSize:'22px'}}><img src='/assests/LOGO_PNG_V01_2.png' width={'126px'} style={{marginBottom:'-9px'}}/></Link>
  
</div>
<div className="left-section">
<div className="dropdown">

  <button className="dropbtn hidden"  onClick={setmove4}><div className="triangle-down"></div><p>{element1Content}</p></button>
  <div className={`dropdown-content ${moved ? 'animation-8' : 'animation-7'}`} >
  <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
    setmove4()
    ChangePrice(1,'PKR','') 
  e1()
    }}>PKR</a>

  <a className={`${moved?'animation-10' :''}`} onClick={function(){ChangePrice(290,'USD','$') 
  
  setmove4()
  e2()
  
    }}>USD</a>

  <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
    setmove4()
    ChangePrice(78.003,'AED','DHS') 
    e7()
  
  
    }}>AED</a>
  <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
    setmove4()
    ChangePrice(347,'GBP','\u00A3') 
  
    e3()

    }}>GBP</a>
     <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
      setmove4()
      ChangePrice(182,'AUS','$') 
      e4()
  
  
    }}>AUS</a>
    <a href="#" className={`${moved?'animation-10' :''}`} onClick={function(){
      setmove4()
      ChangePrice(209,'CAD','$') 
  
  e5()
    }}>CAD</a>

  </div>
</div>
<div className="images">
<Link to="/login"> <img src="/assests/pngwing.com (35).png" alt=""  width={'20px'} className='hidden'/></Link>
<img src="/assests/pngwing.com (36).png" alt=""  width={'20px'} onClick={function(){
  EnableSearchh()
toggleFlow()
Opener10()
} }style={{cursor:'pointer'}}/>
</div>
<div className={`left ${sidebarVisible2 ? 'show' : ''}`}>
   

      <button id="ham" className={`jango ${sidebarVisible2 ? 'hid' : ''}`} onClick={toggleSidebar2} style={{background: 'transparent',
  border:'0',margin:'0 10px' }}>
<img src="/assests/pngwing.com (37).png" alt=""  width={'20px'} /> 

      </button>
      { product ?<div className='dot'><img src='/assests/pngwing.com (38).png' width={'14px'}/></div>  : <span></span> }

      <div className={`sidebar ${sidebarVisible2 ? 'show' : ''}`}>
       
        <div className="cross">
          <p>CART</p>
          <button className="remove" onClick={toggleSidebar2}>&#x2715;</button>
        </div>
        <hr  style={{color:'#00000039'}}/>
        <div className="joke">
        <ul>
        {cart.map((item) => (
      <>
      <div className="item-details">
     <div className="cart-image">
        <img src={item.img} alt="" width={'120px'} />

     </div>
     <div className="cart-details">
<p  className="p-1">{item.clothtype}</p>
<h5 className="p-2">{item.name}</h5>
<p className="p-3">{item.pricelogo}{item.price}{item.priceunit}</p>
<p className="p-3">{item.quantity}</p>
<p className="p-4">{item.type}</p>
<p className="p-4">{item.size}</p>

<div className="quantity-checker">
  <div className="add-minus">
    <p onClick={function(){addToCart(item,item.size,item.type)}}>+</p>
    <p>{item.quantity}</p>
    <p onClick={function(){decreaseFromcart(item,item.size,item.type)}}>-</p>
  </div>
<p className="p-5" onClick={function(){removeFromcart(item,item.size,item.type) }}>Remove</p>
  </div>
     </div>
     </div>
    
     </>
    ))}
  </ul>

        </div>
        {cart.length > 0 && (
  <div className="checkout-button">
    <p className='taxes-para'>Taxes and shipping calculated at checkout</p>
    <p className="p-5-5">
      <div className='one-sided'>
        <span className='checkout-name'>CHECKOUT <span style={{marginLeft: '11px'}}>|</span></span>
        <div></div>
      </div>
      <span>{cart[0].pricelogo}</span>
          {(totalPrice.toFixed(2))}
          <span style={{ margin: '0 7px' }}>{cart[0].priceunit}</span>
    </p>
  </div>
  )}
      </div>
      {  sidebarVisible2 &&  <div className="cover-ever">

</div>
}
{console.log('is:'+isSticky5)}
    </div>
      </div>
      
      </div>
      <div className={`all-search-content ${search ? 'animation-2' : 'animation-1'} ${isSticky5 ? 'top-2' : 'top-1'}`}>
<div className="search-area">
  <div className="search-area-left">
    <div className="img-search-icon">
  <img src="/assests/pngwing.com (36).png" alt=""  width={'20px'} />
  </div>
<input type="text" placeholder="SEARCH FOR..." value={Find}  onChange={function(o){Finder(o.target.value)
Filter()

}} />




  </div>
  <div className="search-area-right">
    <button  onClick={function(){EnableSearchh()
toggleFlow()
} }>&#x2715;</button>
    </div>
</div>
<div className="suggest-3">
  <div className="left-suggest">
<p className='left-suggest-p2' >SUGGESTIONS</p>
<hr className='left-hr'/>

<div className="left-show">

{Find==='' ?'': FindShow.map(function(product){
  return <>
  <div className="lef">
  <span onClick={function(){handleImageClick(product)}}>{product.name}</span>

</div>
  </>

})}
</div>
</div>

<div className="right-suggest">
<p className='right-suggest-p3'>PRODUCTS</p>
<div className="hr-control">
<hr className='right-hr'/>
</div>
<div className="right-show">
  {Find==='' ?'': FindShow.map(function(product){
  return <>
  <div className="all-items">

 <div key={product.id} style={{margin: '19px 6px'}} className='contains-all'>
                <img  onClick={function(){handleImageClick(product)}}
                  src={product.img}
                  alt={product.name}
                    style={{ cursor: 'pointer', }}
                />
               
            {
              product.id===activeNote&& onFront?
  <>
  <div className="overlay"></div>
            <div className="on-front-element">
              <div className="pop-up">
              {/* <img onClick={function(){handleImageClick(product)}}
                  src={product.img}
                  alt={product.name}
                  style={{ cursor: 'pointer' }}
                /> */}
                <div className="remove-button-2">
  
                <button className="remove-3" onClick={function(){
              toggleOnFront()
              toggleSidebar3()
            }}>X</button>
                </div>
            
  
        <>
        <div className="item-details">
       <div className="cart-image">
          <img src={product.img} alt=""  />
  
       </div>
       <div className="cart-details-2">
  <h5 className="p-2">{product.name}</h5>
  <p className="p-3" style={{marginTop: '37px',
    marginBottom: '38px'}}>{product.pricelogo} {product.price}  {product.priceunit}</p>
  <hr />
  
  <p style={{fontSize:'17px' ,}}>COLOR: <span>MAROON</span></p>
  
  
  <div className="quantity-checker-2"><button onClick={SetQuantity2} className='down-sign'>_</button><p>{quantitySelector}</p> <button onClick={SetQuantity}>+</button></div>
  
  <div className="quantity-checker">
    <div className="add-minus-2" style={{margin:' 32px 0'}}>
      <button className='add-button-3' onClick={function(){addToCart(product,selectedSizes[product.id],TypeSelection[product.id])}}>ADD TO CART</button>
      <button className='add-button'>BUY NOW</button>
      <div className="buy-now">
        
      </div>
      <p>{product.quantity}</p>
    </div>
    </div>
       </div>
       </div>
       </>
  
              </div>
            </div>
            </>
              :''
  
  }
                <div className="down-content">

                <p style={{ fontSize: '12px', color: 'black' }} className='middle'>
                  {product.name}
                  <p className='middle' style={{ fontWeight: 'bold' }}>
                 {product.pricelogo} {product.price} {product.priceunit}
                </p>
  
                </p>
                </div>
                
              </div>
              </div>
  </>
  })}
  </div>
</div>
</div>
<div className="search-showing-area">
  


</div>
</div>
     {/* upper Section */}
    <div className="upper-section">
   <div className="square-button-parent">
<Link to='unstiched'><button className="square-button-2 animation-21" >SHOP NOW</button></Link>
</div>
    <div className="main-banner">
    
      <div className="fg">
<img src="/assests/web_Banner.png" alt="" />
</div>
      </div>
      </div>


{/* MID SECTION */}

 <div className="mid-products-section">
<div className="div">
<Link to='unstiched' ><img src="/assests/banner-img-4.png" alt="" width={'600px'}/></Link>
<div className="bottom-section">
<h1 style={{color:'white'}}>UNSTICHED</h1>
<Link to='unstiched' ><button className="square-button">SHOP NOW</button></Link>
</div>

</div>
<div className="div">
<Link to='chantelle'><img src="/assests/barouqe-img-2.png" alt="" width={'600px'}/></Link>

<div className="bottom-section">
<h1 style={{color:'white'}}>CHANTELLE</h1>
<Link to='chantelle' ><button className="square-button">SHOP NOW</button></Link>

</div>

</div>
<div className="div">
<Link to='loan'><img src="/assests/banner-img-5.png" alt="" width={'600px'}/></Link>

<div className="bottom-section">
<h1 style={{color:'white'}}>LOANN</h1>
<Link to='loan'><button className="square-button">SHOP NOW</button></Link>

</div>

</div>
<div className="div">
<Link to='shaal'><img src="/assests/02_Banner4.png" alt="" width={'600px'}/></Link>

<div className="bottom-section">
<h1 style={{color:'white'}}>SHAAL</h1>
<Link to='shaal' ><button className="square-button">SHOP NOW</button></Link>

</div>
</div>
</div> 

<div className="shop-the-look">
  <div className="shop-look">
    <div className="shop-both">
<h1 className='shop-header'>SHOP THE LOOK </h1>
<hr style={{color:'black',border:'1px solid black'}} className='speci'/>
</div>
  <Slider {...settings}>
  
  <div className='' style={{display:'flex'}}>
  <div className='two-sided' >
  <img src='/assests/Shop_The_Look14.jpg' alt="" className='new-slider-img'/>
  <div className="dots">
    <div className="new-dot-1 animation-13" onClick={
function(){
  imgchanger(function(o){
    return o=false
  })
 
  opchanger2(function(o){
    return o=true
  })
  opchanger1(function(o){
    return o=false
  })
  cardedup(function(o){
    return o=true
  })

  toggleFlow4()
  
}

    }>
    <div className="dot-2 margin-1" onClick={function(){
   
    console.log('opc1'+opc1)
  }}></div>
  
  </div>
  <div className="new-dot-2 margin-2 animation-14" onClick={
function(){
  imgchanger(function(o){
    return o=true
  })
  opchanger1(function(o){
    return o=true
  })
  
  opchanger2(function(o){
    return o=false
  })
  cardedup(function(o){
    return o=true
  })
toggleFlow4()

}

  }>

    <div className="dot-2" ></div>
  </div>

  </div>
  

  <div className="cuntor hide-10">
  
<Link to='unstiched'>  <img src={imgc?'/assests/73_741f7832-090f-4b72-8a08-0c32cdc40b23 (1).jpg' :'/assests/81_59e894e5-7062-4d15-a5ec-41a3a0a76c66.jpg'}alt="" className={`new-slider-img-2 ${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`}/>
</Link>
<div className="lost">
<Link to='unstiched'><p className='same-size-2'>DIGITAL PRINTED SLUB KHADDAR UF-491</p></Link>

    <p className='same-size-2'>PKR 4,990.00</p>
    <Link to='unstiched'>  <p className='product-button'>VIEW PRODUCT</p></Link>

    </div>


</div>

  </div>
  <Link to='unstiched' className='after-10'>  <p className='product-button new-wid'>VIEW PRODUCT</p></Link>

  </div>
  
  <div className='' style={{display:'flex'}}>
  <div className='two-sided' >
  <img src='/assests/Shop_The_Look15.jpg' alt="" className='new-slider-img'/>
  <div className="dots">
    <div className="new-dot-1 animation-13" onClick={function(){
    imgchanger(function(o){
      return o=false
    })
   
    opchanger2(function(o){
      return o=true
    })
    opchanger1(function(o){
      return o=false
    })
    cardedup2(function(o){
      return o=true
    })

    toggleFlow4()
    
    console.log('opc1'+opc1)
  }}>
    <div className="dot-2 margin-1" ></div>
  </div>
  <div className="new-dot-2 margin-2 animation-14"   onClick={function(){
    imgchanger(function(o){
      return o=true
    })
    opchanger1(function(o){
      return o=true
    })
    
    opchanger2(function(o){
      return o=false
    })
    cardedup2(function(o){
      return o=true
    })
  toggleFlow4()

  }}>

    <div className="dot-2"></div>
  </div>
  </div>
  <div className="cuntor hide-10">
  
  <Link to='unstiched'><img src={imgc?'/assests/117_da977669-dd7c-49e1-9a9f-352c42c856af.jpg' :'/assests/128_ac3031b1-e283-4cfd-b3a5-8c06c56bcd76.jpg'}alt="" className={`new-slider-img-2 ${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`} width={'150px'}/>
  </Link>
  <div className="lost">
  <Link to='unstiched'> <p className='same-size-2'>DIGITAL PRINTED SLUB KHADDAR UF-492</p></Link>
  
      <p className='same-size-2'>PKR 4,990.00</p>
      <Link to='unstiched'>   <p className='product-button'>VIEW PRODUCT</p></Link>
  
      </div>
  
  
  </div>
  </div>
  <Link to='unstiched' className='after-10'>  <p className='product-button new-wid'>VIEW PRODUCT</p></Link>

  </div>
  
  
  
  
  
  </Slider> 
  </div>
</div>
{console.log('oo'+ nar)}
<div className="pop-upp" style={{display:noarrow?'block ':'none'}}>
  <div className={`content-pop ${carded? 'animation-new': 'content-pop'}`}>


    <div className="new-remove">
<span style={{fontSize:'25px'}} onClick={ function(){
   cardedup(function(o){
    return o=false
  })
  toggleFlow5()

}}>&#x2715;</span>



</div>
<Slider {...settings}>
<div>
  <Link to='unstiched'>
<div className="centered-items">
  
  <div className="img">
  <img src={imgc?'/assests/73_741f7832-090f-4b72-8a08-0c32cdc40b23 (1).jpg' :'/assests/81_59e894e5-7062-4d15-a5ec-41a3a0a76c66.jpg'}alt="" className={`img${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`} width={'150px'}/>

  </div>
  <div className="name-centered">
    <p className='same-size'>{imgc? 'DIGITAL PRINTED SLUB KHADDAR UF-491': 'DIGITAL PRINTED SLUB KHADDAR UF-492'}</p>
    <p className='same-size'>PKR 4,990.00</p>
    <p className='diff-size'>WINTER</p>
    </div>


</div>
</Link>
</div>

<div>
<Link to='unstiched'>

<div className="centered-items">
  
  <div className="img">
  <img src={imgc? '/assests/81_59e894e5-7062-4d15-a5ec-41a3a0a76c66.jpg': '/assests/73_741f7832-090f-4b72-8a08-0c32cdc40b23 (1).jpg'}alt="" className={`img${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`} width={'150px'}/>

  </div>
  <div className="name-centered">
    <p className='same-size'>{imgc? 'DIGITAL PRINTED SLUB KHADDAR UF-491': 'DIGITAL PRINTED SLUB KHADDAR UF-492'}</p>
    <p className='same-size'>PKR 4,990.00</p>
    <p className='diff-size'>WINTER</p>
    </div>


</div>
</Link>
</div>
</Slider> 

  </div>
</div>

<div className="pop-upp" style={{display:noarrow?'block ':'none'}}>
  <div className={`content-pop ${carded2? 'animation-new': 'content-pop'}`}>


    <div className="new-remove">
<span style={{fontSize:'25px'}} onClick={ function(){
   cardedup2(function(o){
    return o=false
  })
  toggleFlow5()

}}>&#x2715;</span>



</div>

<Slider {...settings}>
<div>
<Link to='unstiched'>

<div className="centered-items">
  
  <div className="img">
  <img src={imgc?'/assests/117_da977669-dd7c-49e1-9a9f-352c42c856af.jpg' :'/assests/128_ac3031b1-e283-4cfd-b3a5-8c06c56bcd76.jpg'}alt="" className={`img ${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`} width={'150px'}/>

  </div>
  <div className="name-centered">
    <p className='same-size'>{imgc? 'DIGITAL PRINTED SLUB KHADDAR UF-491': 'DIGITAL PRINTED SLUB KHADDAR UF-492'}</p>
    <p className='same-size'>PKR 4,990.00</p>
    <p className='diff-size'>WINTER</p>
    </div>


</div>
</Link>
</div>

<div>
  <Link to='unstiched'>
<div className="centered-items">
  
  <div className="img">
  <img src={imgc?'/assests/128_ac3031b1-e283-4cfd-b3a5-8c06c56bcd76.jpg':'/assests/117_da977669-dd7c-49e1-9a9f-352c42c856af.jpg' }alt="" className={`img${opc1 && 'animation-11'} ${opc2 && 'animation-12'}`} width={'150px'}/>

  </div>
  <div className="name-centered">
    <p className='same-size'>{imgc? 'DIGITAL PRINTED SLUB KHADDAR UF-491': 'DIGITAL PRINTED SLUB KHADDAR UF-492'}</p>
    <p className='same-size'>PKR 4,990.00</p>
    <p className='diff-size'>WINTER</p>
    </div>


</div>
</Link>
</div>
</Slider>
  </div>
</div>
<footer>
  <div className="starting-footer-hr">
    <hr />
  </div>

<div className="bottom-content">
 <div className="close-open">
<div className="bottom-1">
  <h3>ABOUT</h3>
  <p>     Who We Are  

  </p>
  <p>
  Our Responsibility


  </p>
  <p>
  Service We Provide

  </p>
  <p>
  Careers

  </p>
  <p>
  Legal

  </p>
</div>
<div className="bottom-2">

<h3>CUSTOMER SERVICE</h3>
  <p>     Contact Us
     </p>
    <p>
    Order Tracking

    </p>
    <p>
    Order & Delivery

    </p>
    <p>
    Exchange Information

    </p>
    <p>
    Email: info@baroque.pk

    </p>
    <p>
    Call: +92 325 700 1111

    </p>
    <p>WhatsApp: +92 325 7001111</p>
</div>
<div className="bottom-3">

<h3>POLICIES</h3>
  <p>     Privacy Policy  

  </p>
  <p>
  Refund Policy
  </p>
  <p>
Shipping Policy
  </p>
  <p>
  Terms of Service
  </p>
</div>
</div>

<>
<div className="tab-down">
<hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener6}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>ABOUT</h3> </div>  

        </div>

        <div  className={`open ${open6 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open6 ? 'opened' : ''}`} >
      <div className="bottom-1">
  <p>     Who We Are  

  </p>
  <p>
  Our Responsibility


  </p>
  <p>
  Service We Provide

  </p>
  <p>
  Careers

  </p>
  <p>
  Legal

  </p>
</div>
        </div>
      </div>
      <hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener7}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>CUSTOMER SERVICE</h3> </div>  

        </div>

        <div  className={`open ${open7 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open7 ? 'opened' : ''}`} >
      <div className="bottom-2">

  <p>     Contact Us
     </p>
    <p>
    Order Tracking

    </p>
    <p>
    Order & Delivery

    </p>
    <p>
    Exchange Information

    </p>
    <p>
    Email: info@baroque.pk

    </p>
    <p>
    Call: +92 325 700 1111

    </p>
    <p>WhatsApp: +92 325 7001111</p>
</div>
        </div>
      </div>

      <hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener8}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>POLICIES</h3> </div>  

        </div>

        <div  className={`open ${open8 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open8 ? 'opened' : ''}`} >
      <div className="bottom-3">

  <p>     Privacy Policy  

  </p>
  <p>
  Refund Policy
  </p>
  <p>
Shipping Policy
  </p>
  <p>
  Terms of Service
  </p>
</div>
        </div>
      </div>
      <hr className='open-hr-2'style={{margin:'20px 20px'}} />
      </div>
      </>
</div>
<div className="copyright">
  <div className="in" style={{display:'flex',alignItems:showDown?'center' :'baseline'}}>
  
    <p>© 2023 - BAROQUE</p>
    <div className="adjust-in">
<div className="borders">

<img src="/assests//pngwing.com (39).png" alt="" width={'24px'}/>

</div>
<img src="/assests//pngwing.com (40).png" alt="" width={'34px'}/>
<img src="/assests//pngwing.com (41).png" alt="" width={'36px'} onClick={Opener10} />

</div>
  </div>
</div>




</footer>
</div>


</div>
    </>

  )
}

export default BarouqeProject



{/* <div className="component">
  <div className="top">
  <div className="img-1">
<img src="/assests/Xyph6dvBi9oydZYwPdcP4C.png" alt="" />
  </div>
  <div className="down-content">
    <div className="h1">
      <p style={{fontSize:'14px',color:'#7a7a7a'}}>Action</p>
      <h1>Star  Field</h1>
    </div>
<div className="button">
  <button>buy</button>
</div>
  </div>
  </div>
</div> */}