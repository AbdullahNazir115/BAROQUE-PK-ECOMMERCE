import { useState,useRef,useEffect,useContext } from 'react';
import './baroque.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  {chantelle} from './CartProvider.js'
import CartContext from './CartContext'; // Import CartContext

import Slider from "react-slick";// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Chantelle() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [sidebarVisible3, setSidebarVisible3] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    let [onFront,ShowOnFront ] = useState(false);
  
    const [lim, limited] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth >700 /* Add the scroll threshold here */ ) {
        limited(true);
      } else {
        limited(false);
      }
    };
  
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  
  };
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",   zIndex: 1,opacity:'1', margin:'0 23px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  zIndex: 1 }}
        onClick={onClick}
      />
    );
  }
  
  

  const [sidebarVisible2, setSidebarVisible2] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
      if (!sidebarVisible || onFront) {
        document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
      } else if(sidebarVisible || onFront===false) {
        document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
      }
    };
    useEffect(function(){
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  
    },[])
    const toggleSidebar3 = () => {
      setSidebarVisible3(!sidebarVisible3);
      if ( !onFront) {
        document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
      } else  {
        document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
      }
    };
  
    useEffect(() => {
      // Set isActive to true after a delay (adjust the delay based on your preference)
      const delay = setTimeout(() => {
      window.scrollTo(0, 0);
  
      }, 100);
  
      // Clear the timeout to avoid side effects on unmount
      return () => clearTimeout(delay);
    }, []); // Run this effect only once on component mount
  
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const toggleSidebar2 = () => {
      setSidebarVisible2(!sidebarVisible2);
      if (!sidebarVisible2) {
        document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
      } else {
        document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
      }
    };
  
    const toggleDropdown2 = () => {
      setDropdownVisible(!dropdownVisible2);
    };
  
  
  const [isSticky, setIsSticky] = useState(false);
  const [isSticky2, setIsSticky2] = useState(false);
  // Add a scroll event listener to detect when the navbar becomes sticky
  
  
  
    const navigatee = useNavigate();
  
    const handleImageClick = (product) => {
      navigatee(`/chantelle/chantelleProductDetails?/img=${product.img}&name=${product.name}&id=${product.id}&price=${product.price}&type=${product.type}&/lineImage1=${product.lineImage1}&/lineImage2=${product.lineImage2}&/lineImage3=${product.lineImage3}&/lineImage4=${product.lineImage4}&/lineImage5=${product.lineImage5}&/lineImage6=${product.lineImage6}&size=${product.size}&clothtype=${product.clothtype}&pricelogo=${product.pricelogo}&priceunit=${product.priceunit}&pricee=${product.pricee}`);
     
    };
    const { cart,instock,instocker,setCart,addToCart, decreaseFromcart,removeFromcart,addToCart2, decreaseFromcart2 ,quantitySelector,SetQuantity,SetQuantity2,instock2,instocker2,instock3,instocker3,Find,Finder,Filter,FindShow, setFindShow,Setfilter,handleSearchInputChange,ChangePrice,unit,unitChanger} = useContext(CartContext); // Access cart and addToCart from CartContext
  
  
    let [minPrice, setMinPrice] = useState(''); // State for the minimum price input
    let [maxPrice, setMaxPrice] = useState('');
  let [bord,border]=useState(false)
  let [leftt,lefter]=useState(false)
  let [bord1,border1]=useState(false)
  let[change,changer]=useState(false)
  let[change2,changer2]=useState(false)
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);
  let [scroll,scroller]=useState(false)
  
  
  const product = cart.find((product) => product.quantity >0);
  
  function bor(){
    border(function(o){
      return !o
    })
  }
  
  function lefterr(){
    lefter(function(o){
      return !o
    })
  }
  
  function lef(){
    changer2(function(o){
      return !o
    })
  }
  
  
  
  function changee(){
    changer(function(o){
      return !o
    })
  }
  
  function bor1(){
    border1(function(o){
      return !o
    })
  }
    let [turn, turner] = useState(false);
    let [turn2, turner2] = useState(false);
    let [turn3, turner3] = useState(false);
    let [turn4, turner4] = useState(false);
  
  
    let [showInStock, setShowInStock] = useState(false);
  
    function ShowStock() {
      // Toggle the showInStock state
      setShowInStock((prev) => !prev);
  
    }
  
    function tilt() {
      turner(function (o) {
        return !o;
      });
    }
    function tilt2() {
      turner2(function (o) {
        return !o;
      });
    }
  
    function tilt3() {
      turner3(function (o) {
        return !o;
      });
    }
  
    function tilt4() {
      turner4(function (o) {
        return !o;
      });
    }
  
const [sidebarVisible5, setSidebarVisible5] = useState(false);
const toggleSidebar5 = () => {
  setSidebarVisible5(!sidebarVisible5);
  if (!sidebarVisible5 ) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else if(sidebarVisible5 ) {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};
  
  // localStorage.clear('CART')
  
    useEffect(() => {
      // Add a click event listener to the document
      const handleClickOutside = (event) => {
        // Check if the click occurred outside of the min and max input divs
        if (
          minInputRef.current &&
          !minInputRef.current.contains(event.target) &&
          maxInputRef.current &&
          !maxInputRef.current.contains(event.target)
        ) {
          // Reset the border to 1px 
          border(false);
          border1(false);
        }
      };
    
      // Attach the event listener
      document.addEventListener('click', handleClickOutside);
      localStorage.setItem('CART',JSON.stringify(cart))
    
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    
    }, []);
  
  
  
  
  
  let filterProductsByPrice= function () {
    let filteredProducts = chantelle.filter((product) => {
      const productPrice = parseFloat(product.price.replace(/,/g, '')); // Convert price to a float
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
  
      // Check if the product price is within the specified range
      return !isNaN(min) && !isNaN(max) && productPrice >= min && productPrice <= max;
    });
  
    instocker3(filteredProducts);
  }
  
  
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
const [open8, setopen8] = useState(false );


function Opener6(){
  setopen6(function(o){
return !o
  })
}

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

let [mouse,onmousee]=useState(false)
function moose(){
  onmousee(mouse=true)
}  

  
  useEffect(() => {
      localStorage.setItem('CART', JSON.stringify(cart));
    }, [cart]);
  
  function showOnFront(id){
    instock3.filter(function(o){return o.id===id })
  }
  
  



  function toggleOnFront(){
    ShowOnFront(function(o){
      return !o
    })
  
  }
  let [stop,setstop]=useState(false)

function toggleFlow(){
  setstop(!stop);
  if (!stop) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};

let [search,EnableSearch]=useState(false)

function EnableSearchh(){
  setIsSticky(function(o){
    
    return !o
  })
  EnableSearch(function(o){
    
    return !o
  })
}

  

  const [activeNote, setActiveNote] = useState(null);
      
  // Function to set the active note
  function setActive(id) {
    setActiveNote(id);
    // Move the active note to the top of the array
    
  }
  const [selectedSizes, setSelectedSizes] = useState({});
  
    // Function to handle size selection for a product
    const handleSizeSelection = (productId, size) => {
      setSelectedSizes((prevSizes) => ({
        ...prevSizes,
        [productId]: size,
      }));
    };
    const product2= cart.find((item) => item.id === activeNote );
  
  const [TypeSelection, SelectedType] = useState({});
  const handleTypeSlection = (productId, type) => {
    SelectedType((prevSizes) => ({
      ...prevSizes,
      [productId]: type,
    }));
  };
  useEffect(() => {
    handleSizeSelection(activeNote, 'XS');
  }, [activeNote]);
  
  
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
useEffect(
  function(){
    ChangePrice(1,'PKR','')
  }
,[])

const [isActive6, setIsActive6] = useState(false);


useEffect(() => {
  // Set isActive to true after a delay (adjust the delay based on your preference)
  const delay = setTimeout(() => {
    setIsActive6(true);
  }, 500);

  // Clear the timeout to avoid side effects on unmount
  return () => clearTimeout(delay);
}, []); // Run this effect only once on component mount

  const Total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const [isSticky5, setIsSticky5] = useState(false);
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
  
  let [isSticky9,setIsSticky9]=useState(false)
   

      function handleScroll10() {
        if (window.pageYOffset >850 /* Add the scroll threshold here */ ) {
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
    
  let [isSticky10,setIsSticky10]=useState(true)

    return (
      <>
      <div className={`fade-in ${isActive6 ? 'active' : 'fade-in'}`}>

        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap" rel="stylesheet" />
      </head>
      <div className="scroller" style={{display:isSticky9&&isSticky10?'flex':'none'}}>   

      <div className="sc-cross" onClick={function(){setIsSticky10(isSticky10=false)}}>
        &#x2715;
        </div>
       
        <div className="up-up" onClick={sccc}>
          <img src="/assests/up-arrow.png" alt="" width={'16px'} className='animation-20'/>
        </div>
      </div>
      <div className="cover-all">
        <div className="upper-section">
          <header>
            <p>FREE SHIPPING IN PAKISTAN</p>
          </header>
          <div className={`navbar ${isSticky ? "sticky-navbar" : "" }`} style={{background:'white'}}>
        <div className={`custom-left ${sidebarVisible ? 'custom-show' : ''}`}>
    <button id="custom-ham" className={`custom-jango ${sidebarVisible ? 'custom-hid' : ''}`} onClick={toggleSidebar} style={{background: 'transparent', border: '0' }}>
      
  <div  className="Hamburger-icon"></div>
  <div  className="Hamburger-icon"></div>
  <div className="Hamburger-icon"> </div>
    </button>
  
    <div className={`custom-sidebar ${sidebarVisible ? 'custom-show' : ''}`} >
    <div className="custom-cross">
      <p>NAVIGATION</p>
      <button className="custom-remove" onClick={toggleSidebar}>&#x2715;</button>
    </div>
    <hr style={{ color: '#00000039' }} />
    <div className="custom-joke" >
      <ul className={` ${sidebarVisible ? 'animation-4' : 'animation-3'}`}>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/' >HOME</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/chantelle/unstiched' >UNSTICHED</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/chantelle' >CHANTELLE</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/chantelle/loan' >LOAN</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li className={`${sidebarVisible ? 'animation-6' : 'animation-5'}`}><Link to='/chantelle/shaal' >SHAAL</Link></li>
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

<Link to='/chantelle/login'><img src="/assests/pngwing.com (35).png" alt=""  width={'20px'} /></Link>
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
<a  className={`${moved?'animation-10' :''}`} onClick={function(){
  setmove4()
  ChangePrice(1,'PKR','') 
e1()
  }}>PKR</a>

<a className={`${moved?'animation-10' :''}`} onClick={function(){ChangePrice(290,'USD','$') 

setmove4()
e2()

  }}>USD</a>

<a  className={`${moved?'animation-10' :''}`} onClick={function(){
  setmove4()
  ChangePrice(78.003,'AED','DHS') 
  e7()


  }}>AED</a>
<a  className={`${moved?'animation-10' :''}`} onClick={function(){
  setmove4()
  ChangePrice(347,'GBP','\u00A3') 

  e3()

  }}>GBP</a>
   <a  className={`${moved?'animation-10' :''}`} onClick={function(){
    setmove4()
    ChangePrice(182,'AUS','$') 
    e4()


  }}>AUS</a>
  <a  className={`${moved?'animation-10' :''}`} onClick={function(){
    setmove4()
    ChangePrice(209,'CAD','$') 

e5()
  }}>CAD</a>

</div>
</div>
  <div className="images">
  <Link to='/chantelle/login'><img src="/assests/pngwing.com (35).png" alt=""  width={'20px'} className='hidden'/></Link>

  <img src="/assests/pngwing.com (36).png" alt=""  width={'20px'} onClick={function(){EnableSearchh()
toggleFlow()
} }/>
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
<p className="p-3">{item.pricelogo} {(item.price*item.quantity).toFixed(2)}  {item.priceunit}</p>
<p className="p-3">{item.quantity}</p>
<p className="p-4">{item.type}</p>
<p className="p-4">{item.size}</p>



<div className="quantity-checker">
  <div className="add-minus">
    <p onClick={() => addToCart2(item,item.size,item.type)}>+</p>
    <p>{item.quantity}</p>
    <p onClick={() => decreaseFromcart2(item,item.size,item.type)}>-</p>
  </div>
<p className="p-5" onClick={function(){removeFromcart(item,item.size,item.type) }}>Remove</p>
  </div>
     </div>
     </div>
     </>
    ))}
  </ul>
{console.log(cart)}
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
          {(Total.toFixed(2))}
          <span style={{ margin: '0 7px' }}>{cart[0].priceunit}</span>
    </p>
  </div>
  )}
        </div>
        {  sidebarVisible2 &&  <div className="cover-ever">

</div>
}


<div className={`sidebar ${sidebarVisible5 ? 'show' : ''}`}>
       
       <div className="cross">
         <p>FILTER</p>
         <button className="remove" onClick={function(){ toggleSidebar5()
        console.log('yesddd')
        }}>&#x2715;</button>
       </div>
       <hr style={{color:'#00000045'}} />
       <div className="div-2" style={{position:'sticky' ,top:'0',width:'82%'}}>
<p onClick={tilt} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn ? '100px' : '20px',  margin: turn?'0 0' :'20px 0' }}>
  <span > AVAILIBILITY</span>

   <p > <i className="arrow down" style={{transform: turn?'rotate(-136deg)': 'rotate(45deg)', transform: turn ? 'rotate(-136deg)' : 'rotate(45deg)',
        transition: 'transform 0.5s ease',}}></i></p>
   
   </p>
   <div id="middle2" style={{display:turn?'flex':'none',flexDirection:'column'}} >
   <p style={{textAlign:'center',margin:'12px 0'}} > 
   <div className="div-3">
   <span>In Stock Only</span>
   <label className="toggle-container" onClick={function(){
     changee()
     ShowStock()
     lefterr()
     toggleSidebar5()

   }} style={{background:leftt?'black':'#ccc'}} >
    <div className="toggle-button" style={{transform:leftt?'translateX(37px)' :'translateX(3px)' }}
     ></div>
     
  </label>
  </div>
</p>
   </div>
<hr style={{color:'#00000045'}} />
   <p onClick={tilt2} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn2 ? '100px' : '20px',  margin: turn2?'0 0' :'20px 0' }}>
  <span > PRICE</span>
   <p> <i className="arrow down" style={{transform: turn2?'rotate(-136deg)': 'rotate(45deg)', transform: turn2 ? 'rotate(-136deg)' : 'rotate(45deg)',
        transition: 'transform 0.3s ease',}}></i></p>
   
   </p>
   <div id="flex" style={{display:turn2?'flex':'none',flexDirection:'column'}}>
    <div className="prices">

   <p  className='two-inputs'  ref={minInputRef} onClick={bor} style={{border:bord? '3px solid black' : '1px solid rgba(0, 0, 0, 0.536)'}}> <label htmlFor="i"><span>RS</span> <input type="text" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}className='two-inputs-two'  id='i'/></label></p>
   <p className="prices">TO</p>
   <p className='two-inputs' onClick={bor1}  ref={maxInputRef} style={{border:bord1? '3px solid black' : '1px solid rgba(0, 0, 0, 0.536)'}}> <label htmlFor="ii"><span>RS</span> <input type="text" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='two-inputs-two' id='ii'/> </label> </p>
   </div>
   <button onClick={function(){
    if(minPrice!=='' && maxPrice!==''){
      filterProductsByPrice()
lef()
    }

    toggleSidebar5()

   } } className='filter-button'>Filter</button>
   </div>
   <hr style={{color:'#00000045'}} /> 

   <p onClick={tilt3} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn3 ? '100px' : '20px',  margin: turn3?'0 0' :'20px 0' }}>
  <span > COLLECTION</span>
   <p> <i className="arrow down" style={{transform: turn3?'rotate(-136deg)': 'rotate(45deg)', transform: turn3 ? 'rotate(-136deg)' : 'rotate(45deg)',
        transition: 'transform 0.3s ease',}}></i></p>
   
   </p>
   <div id="middle2" style={{display:turn3?'flex':'none',flexDirection:'column'}}>
   {/* <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p> */}
   <p style={{textAlign:'center',margin:'12px 0'}}>COMING SOON</p>

   </div>
   <hr style={{color:'#00000045'}} />

   <p onClick={tilt4} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn4 ? '100px' : '20px',  margin: turn4?'0 0' :'20px 0' }}>
  <span > TYPE</span>
   <p> <i className="arrow down" style={{transform: turn4?'rotate(-136deg)': 'rotate(45deg)', transform: turn4 ? 'rotate(-136deg)' : 'rotate(45deg)',
        transition: 'transform 0.3s ease',}}></i></p>
   
   </p>
   <div id="middle2" style={{display:turn4?'flex':'none',flexDirection:'column'}}>
   {/* <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
   <p style={{textAlign:'center',margin:'12px 0'}}>A</p> */}
   <p style={{textAlign:'center',margin:'12px 0'}}>COMING SOON</p>
   </div>

</div>
      
     </div>
     {  sidebarVisible5 &&  <div className="cover-ever">

</div>
}
      </div>
        </div>
        
        </div>
        <div className={`all-search-content ${search ? 'animation-2' : 'animation-1'} ${isSticky5 ? 'top-2' : 'top-1'}`}>

<div className="search-area">
  <div className="search-area-left">
    <div className="img-search-icon">
  <img src="/assests/pngwing.com (36).png" alt=""  width={'20px'}/>
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
            }}>&#x2715;</button>
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
      <button className='add-button-3' onClick={function(){addToCart(product,TypeSelection[product.id]),toggleSidebar2(),toggleOnFront()}}>ADD TO CART</button>
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

                <p style={{ fontSize: '12px', color: 'black',fontWeight: 'bold' }} className='middle'>
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

</div>



  
        <div className='center-div'>CHANTELLE</div>
        <div className="allll-2">
      <div className='center-div-2' > <div className='products-bar'> <div className='length-1'>{chantelle.length}</div> PRODUCTS</div> <div className='new-filter' onClick={toggleSidebar5}><span>Filter</span></div></div>

        <div className="together-1">
          
  {change && <div className="box-1"><div> <button   onClick={() => {changee();     ShowStock();  lefterr()}}>&#x2715;</button> <p> In Stock Only </p></div>
  </div>
  }
  {change2 &&<div className="box-2">
   <p className='n-o'><p>PKR{minPrice } - PKR{maxPrice}</p> <button onClick={function(){
  
  
  instocker3(chantelle);
  setMaxPrice(''); // Clear maxPrice
  setMinPrice(''); // Clear minPrice
  lef()
  }} >&#x2715;</button></p>
  </div>
  }
  {
    change && change2 && <div className="box-1"><div> <button   onClick={() => {changee();     ShowStock();  lefterr()  
      setMaxPrice(''); // Clear maxPrice
      setMinPrice(''); // Clear minPrice
      instocker3(chantelle)
  
      lef()}}>&#x2715;</button><p>Clear All</p></div>
    </div>
  }
  </div>
  
        <div className="side-panel">
    <div className="div-2 hided" style={{position:'sticky' ,top:'0'}}>
  <p onClick={tilt} id='middle' style={{cursor: 'pointer',
      overflow: 'hidden',
      transition: 'max-height 0.8s ease', 
      maxHeight: turn ? '100px' : '20px',  margin: turn?'0 0' :'20px 0' }}>
    <span > AVAILIBILITY</span>
  
     <p > <i className="arrow down" style={{transform: turn?'rotate(-136deg)': 'rotate(45deg)', transform: turn ? 'rotate(-136deg)' : 'rotate(45deg)',
          transition: 'transform 0.5s ease',}}></i></p>
     
     </p>
     <div id="middle2" style={{display:turn?'flex':'none',flexDirection:'column'}}>
     <p style={{textAlign:'center',margin:'12px 0'}} > 
     <div className="div-3">
     <span>In Stock Only</span>
     <label className="toggle-container" onClick={function(){
       changee()
       ShowStock()
       lefterr()
     }} style={{background:leftt?'black':'#ccc'}} >
      <div className="toggle-button" style={{transform:leftt?'translateX(37px)' :'translateX(3px)' }}
       ></div>
       
    </label>
    </div>
  </p>
     </div>
  <hr />
     <p onClick={tilt2} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn2 ? '100px' : '20px',  margin: turn2?'0 0' :'20px 0' }}>
    <span > PRICE</span>
     <p> <i className="arrow down" style={{transform: turn2?'rotate(-136deg)': 'rotate(45deg)' ,transition: 'transform 0.5s ease'}}></i></p>
     
     </p>
     <div id="flex" style={{display:turn2?'flex':'none',flexDirection:'column'}}>
      <div className="prices">
  
     <p  className='two-inputs'  ref={minInputRef} onClick={bor} style={{border:bord? '3px solid black' : '1px solid rgba(0, 0, 0, 0.536)'}}> <label htmlFor="i"><span>RS</span> <input type="text" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}className='two-inputs-two'  id='i'/></label></p>
     <p className="prices">TO</p>
     <p className='two-inputs' onClick={bor1}  ref={maxInputRef} style={{border:bord1? '3px solid black' : '1px solid rgba(0, 0, 0, 0.536)'}}> <label htmlFor="ii"><span>RS</span> <input type="text" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='two-inputs-two' id='ii'/> </label> </p>
     </div>
     <button onClick={function(){
      if(minPrice!=='' && maxPrice!==''){
        filterProductsByPrice()
  lef()
      }
  
      
     } } className='filter-button'>Filter</button>
    
     </div>
     <hr /> 
  
     <p onClick={tilt3} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn3 ? '100px' : '20px',  margin: turn3?'0 0' :'20px 0' }}>
    <span > COLLECTION</span>
     <p> <i className="arrow down" style={{transform: turn3?'rotate(-136deg)': 'rotate(45deg)' ,transition: 'transform 0.5s ease'}}></i></p>
     
     </p>
     <div id="middle2" style={{display:turn3?'flex':'none',flexDirection:'column'}}>
     {/* <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p> */}
        <p style={{textAlign:'center',margin:'12px 0'}}>COMING SOON</p>

     </div>
     <hr />
  
     <p onClick={tilt4} id='middle' style={{cursor: 'pointer',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease', 
    maxHeight: turn4 ? '100px' : '20px',  margin: turn4?'0 0' :'20px 0' }}>
    <span > TYPE</span>
     <p> <i className="arrow down" style={{transform: turn4?'rotate(-136deg)': 'rotate(45deg)' ,transition: 'transform 0.5s ease'}}></i></p>
     
     </p>
     <div id="middle2" style={{display:turn4?'flex':'none',flexDirection:'column'}}>
     {/* <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p>
     <p style={{textAlign:'center',margin:'12px 0'}}>A</p> */}
        <p style={{textAlign:'center',margin:'12px 0'}}>COMING SOON</p>

     </div>
  
  </div>
  <div className="banner-product-1">

          <div className="banner"  >
            {instock3
            .filter((product) => (!showInStock || product.stock)).map((product) => (
  
              
              <div key={product.id} className='banner-div'>
                 <img onClick={function(){handleImageClick(product)}}
                src={mouse&&product.id===activeNote?product.coverimage:product.img}
                alt={product.name}
                style={{ cursor: 'pointer' }}
              onMouseEnter={function(){
                moose()
                setActive(product.id)

                
              }} onMouseLeave={function(){
                onmousee(mouse=false)
                setActive(product.id)

              }} className={`${mouse&&product.id===activeNote&& 'animation-24'}`}/>
                <div className="plus-icon">
              <span onClick={function(){
                setActive(product.id)
  toggleOnFront()
  toggleSidebar3()
  
              }}>+</span>
            </div>
            {
              product.id===activeNote&& onFront?
  <>
  <div className="overlay"></div>
            <div className="on-front-element">
            <div className="pop-up-5">
              <div className="remove-button-2">

              <button className="remove-3" onClick={function(){
            toggleOnFront()
            toggleSidebar3()
          }}>&#x2715;</button>
              </div>
          

      <>
      <div className="item-details-5">
      { lim?<div className="cart-image-5">
<img src={product.lineImage1} alt="" />

</div> 
:   
<div className="sharp">
<Slider {...settings}>
<div className='adjust-small' style={{display:'flex',justifyContent:'center' }}>
<img src={product.lineImage1} alt="" style={{textAlign:'center',margin:"auto",width:'60vw'}}/>
</div>

<div className='adjust-small' style={{display:'flex',justifyContent:'center' }}>
<img src={product.lineImage2} alt="" style={{textAlign:'center',margin:"auto",width:'60vw'}} />
</div>

<div className='adjust-small' style={{display:'flex',justifyContent:'center' }}>
<img src={product.lineImage3} alt="" style={{textAlign:'center',margin:"auto",width:'60vw'}} />
</div>

<div className='adjust-small' style={{display:'flex',justifyContent:'center' }}>
<img src={product.lineImage4} alt="" style={{textAlign:'center',margin:"auto",width:'60vw'}} />
</div>

<div className='adjust-small' style={{display:'flex',justifyContent:'center' }}>
<img src={product.lineImage5} alt="" style={{textAlign:'center',margin:"auto",width:'60vw'}} />
</div>



</Slider>
</div>  }
     <div className="cart-details-5">
  <p  className="p-1-5">{product.clothtype}</p>

<h5 className="p-2-5">{product.name}</h5>
<p className="p-3-5" style={{marginTop: '37px',
  marginBottom: '38px'}}>{product.pricelogo} {product.price}  {product.priceunit}</p>
<hr />

<p style={{fontSize:'17px' ,}}>COLOR: <span>MAROON</span></p>


<div className="quantity-checker-2"><button onClick={SetQuantity2} className='down-sign'>_</button><p className='quantity-1' style={{marginBottom:' 0px'}}>{quantitySelector}</p> <button onClick={SetQuantity}>+</button></div>

<div className="quantity-checker">
  <div className="add-minus-2-5" style={{margin:' 32px 0'}}>
    <button className='add-button-3-5' onClick={function(){addToCart(product,selectedSizes[product.id],TypeSelection[product.id]),toggleSidebar2(),toggleOnFront()}}>ADD TO CART</button>
    <button className='add-button-5'>BUY NOW</button>
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
                <p style={{ fontSize: '12px', color: 'black'}} className='middle'>
                  {product.name}
                </p>
                <p className='middle' style={{ fontWeight: 'bold' }}>
         {product.pricelogo} {product.price}  {product.priceunit}
              </p>
              <p className='middle'>{product.clothtype}</p>
                
              </div>
            ))}
            
          </div>
          
          </div>
          </div>

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
<img src="/assests//pngwing.com (41).png" alt="" width={'36px'}/>

</div>
  </div>
</div>




</footer>
        </div>
        </div>
      </>
    );
  }


export default Chantelle