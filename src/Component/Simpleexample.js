
import { createContext } from 'react';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './About';
import ComA from './ComA';
import Home from './Home';
import HomePage from './HomePage';

const firstname = createContext();
const lastname = createContext();

export const UserContext = createContext(null);

function Simpleexample() {

  const [fname, setfname] = useState();
  const [lname, setlname] = useState();

  const [user, setUser] = useState();


  return (
    <div className="App">
    {/* <firstname.Provider value={fname}>
      <lastname.Provider value={lname}>
        <ComA />
      </lastname.Provider>
    </firstname.Provider>

      <input type='text' onChange={e => setfname(e.target.value)} />
      <input type='text' onChange={e => setlname(e.target.value)} /> */}

      {/* <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/' >Home</Link>
              </li>
              <li>
                <Link to='/about' >About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <UserContext.Provider value={{user,setUser}}>
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
       
        </Routes>
        </UserContext.Provider>
      </BrowserRouter> */}

    </div>
  );
}

export default Simpleexample;
export { firstname, lastname };
