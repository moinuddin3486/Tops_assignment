import Counter from './Counter';
import Crud from './Crud';
import EnableDarkMode from './EnableDarkMode';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Uppercase from './Uppercase';
import { useState } from 'react';
import {BrowserRouter,Routes,Route } from "react-router-dom"




function App() {
    const [mode, setmode] = useState("light")
    const changemode = () => {
        console.log("hello called...");

        if (mode === 'light') {
            setmode("dark")
            document.body.style.backgroundColor = "#042743"
        } else {
            setmode("light")
            document.body.style.backgroundColor = "white"

        }  
    }
    return (
        <>
        <Navbar mode={mode} changemode={changemode}/>
      {/* <EnableDarkMode /> */}
         {/* <Uppercase mode={mode}  /> */}
       {/* {/* <Uppercase mode={mode}  /> */}
        
        <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/counter" element={<Counter mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/UppercaseConverter" element={<Uppercase mode={mode} />} />
            <Route path="/enabledarkmode" element={<EnableDarkMode mode={mode} />} />
            <Route path="/crud" element={<Crud mode={mode}/>} />
        </Routes>
        
        </>
//         <>
        

//             <Navbar mode={mode} changemode={changemode}/>
//                 {/* <Counter />
//   <Crud /> */}
//                 {/* <Uppercase mode={mode}  />
//   <EnableDarkMode /> */}
//     </>
    )
}

export default App;
