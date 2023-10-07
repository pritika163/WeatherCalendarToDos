
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Calendar from './Components/Calender';
import ToDos from './Components/ToDos';
import Menu from './Menu';
import './App.css';


const Home = () => {
    const storedValue = localStorage.getItem("input value")
    return<><div class = "bodypic"><h1 className='text-center' style={{color: "purple"}}>Event Planner</h1>
    
    <h2>Welcome to the Event Planner where you can arrange your everyday tasks  
        
    </h2>
    
    <div class = "items">
    <div class = "glass">
     <div class = "wrap">
            <img class ="calender" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbfpCbZCS7EWHGXxlp0XyDsqaOgoaAA55xgygsJPONTWZkdkXQLxSpD1GyvgUlalHAmg&usqp=CAU"></img>
            <div class = "txtbx1">
                </div>
                <div>
            <h2>Access the calendar to check the dates</h2>
        
            </div>
        </div>
        </div>
        <br></br>
    <div class = "glass">
    <div class = "card">
     <div class = "wrap2">
            <img class = "todo" src="data:image/jpeg;base64,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"></img>
            <div class = "txtbx2">
            </div>
                <div>
            <h2>Make your own to-do list for the day</h2>
            </div>
            </div>
            </div>
     </div>
     <div class = "wrap3">
        <img class = "weatherimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-YZOXo4UXyUlqZtYZCF8VueDD0s_mTTTRg&usqp=CAU"></img>
        <div class = "txtbx3">
        </div>
                <div>
        <h2>Keep track of the weather before planning out your day</h2>
        </div>
     </div>  
    </div>
    </div>
    
    </> 
    
    
  }
const App = () => {


    return (
        <>
        
        <Menu />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Calendar' element={<Calendar/>} />

        <Route exact path='/ToDos' element={<ToDos/>} />
        </Routes>
        </>
    )

};

export default App;