import * as React from "react";
import * as ReactDOM from "react-dom/client";
import DynamicApp from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login.js';
import Loan from './loan.js';
import Chantelle from './Chantelle.js';
import ChantelleProductDetails from './Chantelleproductdetails';
import Shaal from './Shaal.js';
import Unstiched from './Unstiched.js';
import LoanproductDetails from './loanProductDetails';
import ScrollToTop from './scrollto';

import Productdetails from './unstichedProductDetails';
import  ShaalProductDetails from './shaalProductDetails.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './CartProvider'; // Import CartProvider
// import WeatherApp from './Weather-app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DynamicApp/>,
  },
 
  {
    path: "chantelle",
    element: <Chantelle/>,
  },
  {
    path: "chantelle/loan",
    element: <Loan/>,
  },{
    path: "chantelle/shaal",
    element: <Shaal/>,
  },{
    path: "chantelle/unstiched",
    element: <Unstiched/>,
  },

  {
    path: "shaal/loan",
    element: <Loan/>,
  },{
    path: "shaal/chantelle",
    element: <Chantelle/>,
  },{
    path: "shaal/unstiched",
    element: <Unstiched/>,
  },

  {
    path: "loan/shaal",
    element: <Shaal/>,
  },{
    path: "loan/chantelle",
    element: <Chantelle/>,
  },{
    path: "loan/unstiched",
    element: <Unstiched/>,
  },

  {
    path: "unstiched/shaal",
    element: <Shaal/>,
  },{
    path: "unstiched/chantelle",
    element: <Chantelle/>,
  },{
    path: "unstiched/loan",
    element: <Loan/>,
  },



  {
    path: "unstiched",
    element: <Unstiched/>,
  },
 
  {
    path: "shaal",
    element: <Shaal/>,
  },
  {
    path: "loan",
    element: <Loan/>,
  },
  {
    path: "/unstiched/unstichedProductDetails",
    element: < Productdetails/>,
  },
  {
    path: "/loan/loanProductDetails",
    element: < LoanproductDetails/>,
  },
  {
    path: "/shaal/shaalProductDetails",
    element: < ShaalProductDetails/>,
  },
  {
    path: "/chantelle/chantelleProductDetails",
    element: < ChantelleProductDetails/>,
  },
  
  {
    path: "/chantelleProductDetails/loan",
    element: < Loan/>,
  },{
    path: "/chantelleProductDetails/shaal",
    element: < Shaal/>,
  },{
    path: "/chantelleProductDetails/unstiched",
    element: < Unstiched/>,
  },
  {
    path: "/chantelleProductDetails/chantelle",
    element: < Chantelle/>,
  },
  
  {
    path: "/loanProductDetails/loan",
    element: < Loan/>,
  },{
    path: "/loanProductDetails/shaal",
    element: < Shaal/>,
  },{
    path: "/loanProductDetails/unstiched",
    element: < Unstiched/>,
  },
  {
    path: "/loanProductDetails/chantelle",
    element: < Chantelle/>,
  },
  
  {
    path: "/shaalProductDetails/loan",
    element: < Loan/>,
  },{
    path: "/shaalProductDetails/shaal",
    element: < Shaal/>,
  },{
    path: "/shaalProductDetails/unstiched",
    element: < Unstiched/>,
  },
  {
    path: "/shaalProductDetails/chantelle",
    element: < Chantelle/>,
  },
  
  {
    path: "/unstichedProductDetails/loan",
    element: < Loan/>,
  },{
    path: "/unstichedProductDetails/shaal",
    element: < Shaal/>,
  },{
    path: "/unstichedProductDetails/unstiched",
    element: < Unstiched/>,
  },
  {
    path: "/unstichedProductDetails/chantelle",
    element: < Chantelle/>,
  },
  


  {
    path: "login",
    element: < Login/>,
  },
  {
    path: "/chantelle/login",
    element: < Login/>,
  },
  {
    path: "/loan/login",
    element: < Login/>,
  },
  {
    path: "/unstiched/login",
    element: < Login/>,
  },
  {
    path: "/shaal/login",
    element: < Login/>,
  },
  {
    path: "/shaalProductDetails/login",
    element: < Login/>,
  },{
    path: "/chantelleProductDetails/login",
    element: < Login/>,
  },{
    path: "/unstichedProductDetails/login",
    element: < Login/>,
  },{
    path: "/loanProductDetails/login",
    element: < Login/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ScrollToTop/> */}
    {/* Wrap the entire app in the CartProvider */}
    <CartProvider>
    <RouterProvider router={router}>
        {/* <ScrollToTop /> */}
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>

  // <WeatherApp/>
);

console.log('hello')

reportWebVitals();
