import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyDoWe from './components/WhyDoWe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import ConflictsAndConfusion from './components/ConflictsAndConfusion'
// import Auth from './components/Auth';
import DoNamaste from './components/WhyDoWe/DoNamaste';
import DoNotTouch from './components/WhyDoWe/DoNotTouch';
import OfferFood from './components/WhyDoWe/OfferFood';
import RingBell from './components/WhyDoWe/RingBell';
import CasteSystem from './components/ConflictsandConfusion/CasteSystem';
import IdolWorship from './components/ConflictsandConfusion/IdolWorship';
import LifeDeath from './components/ConflictsandConfusion/LifeDeath';
import DestinySelfEffort from './components/ConflictsandConfusion/DestinySelfEffort';
import Donate from './components/Donate';
import Login from  './components/Login';
import Register from './components/Register'



export default function App() {
  
    
  return (
   <>
   
      
      
      <Router>
      <Navbar/>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/whydowe" component={WhyDoWe} />
          <Route path="/donate" component={Donate} />
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/conflictandconfusion" component={ConflictsAndConfusion} />
        {/* whydo we routes */}
          <Route path="/whydowedonamaste" component={DoNamaste} />
          <Route path="/dnt" component={DoNotTouch} />
          <Route path="/offerfood" component={OfferFood} />
          <Route path="/ringbell" component={RingBell} />
{/* conflicts and confusion routes */}
          <Route path="/casteSystem" component={CasteSystem} />
          <Route path="/idolworship" component={IdolWorship} />
          <Route path="/lifeanddeath" component={LifeDeath} />
          <Route path="/destinySelfEffort" component={DestinySelfEffort} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />



            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route to="/" />
        </Switch>
      </Router>
      
     
      </>
  );
}

 
