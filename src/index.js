import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Pop_Expample/Pro1';
import App from './App';
import Company from './Pop_Expample/Pro2';
import Companyy from './Pop_Expample/SpredExample';
// import DetailBox from './Pop_Expample/Pro3';
import Counterr from './Pop_Expample/Event';


const rootElement = document.getElementById('G-Demo');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
 <App />
 <Counter increment ={1}/>
<Counter  increment ={5} /> 
<Company companyName = "Mpahsis"
         employeeName="Parul"
         designation=  "RPA Developer"
         comitties="Performase"
         forums="kljiij"/>
 <Companyy companyName = "Mpahsis"
         employeeName="Parul"
         designation=  "RPA Developer"
         comitties="Performase"
         forums="kljiij"/>
         {/* <DetailBox /> */}
         <Counterr />
 </StrictMode>
);
