import React from "react";
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import Chat from "./components/Chat/Chat";
import SignIn from "./components/SignIn/SignIn";
import Contacts from "./components/Contacts/Contacts";


const App =() =>(
    <Router>
    <Routes>
    <Route  path="/"  exact element={<SignIn  />}/>
    <Route  path="/chat"  exact element={<Chat/>}/>
    <Route  path="/contact"  exact element={<Contacts/>}/>
 </Routes>    
    </Router>
); 
export default App;