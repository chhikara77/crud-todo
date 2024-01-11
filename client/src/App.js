import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './Components/Home';
import {Login} from './Components/Login';
import { createContext, useState } from 'react';

export const MyContext = createContext("");
function App() {
const [user,setUser] = useState(sessionStorage.getItem('token'))
  return (
    <div className="wrapper">
      <MyContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      </MyContext.Provider>
     
    </div>
  );
}

export default App;
