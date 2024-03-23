
import './App.css';
//import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar';
import Form from './components/Form.js';
import React,{useState} from 'react'
//import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState("light");
  const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>
  {
setalert(null);
  },2000)
  }
  const togglemode=()=>{
    if(mode=="light")
    {
      setmode("dark");
      document.body.style.backgroundColor="black";
      showalert("DarkMode has been enabled","success")
      document.title="TextUtils-DarkMode"
    }else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("LightMode has been enabled","success")
      document.title="TextUtils-LightMode"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="AboutMe" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Form
                  showAlert={showalert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
  {/* <BrowserRouter>
   
  
<Routes>
  <Route path="/about" element={<About showAlert={showalert} mode={mode}/>}></Route>
  <Route path="/"element={
                
            }
            ></Route>      
            
            </Routes>
         
    
  
   
          </BrowserRouter>*/}
  </div>
  </>
 
    
    
  );
}

export default App;
