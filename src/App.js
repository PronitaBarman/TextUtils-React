
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{ useState } from 'react';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is anable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#09233e';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
  
   <>
   {/* <Router> */}
   <Navbar title ="TextUtils" mode ={mode} toggleMode={toggleMode}/>
   <Alert alert= {alert}/>
   <div className="container my-3">
   {/* <Routes>
          <Route exact path="/about" element={ <About />}>
          </Route>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode}/>
}>     
          </Route>
    </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode}/>
    
   </div>
   {/* </Router> */}
   </>
    
  );
}

export default App;



