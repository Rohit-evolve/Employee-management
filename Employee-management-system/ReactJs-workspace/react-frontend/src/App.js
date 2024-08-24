import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent.js'
import HeaderComponent from './components/HeaderComponent.js'
import FooterComponent from './components/FooterComponent.js'
import CreateEmployee from './components/CreateEmployee.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent.js'
import './App.css'

export default function App() {
  return (
    <div>
      <HeaderComponent/>
      
      <BrowserRouter>
       <div className='container'>
         <Routes>
         <Route exact path = '/' element = {<ListEmployeeComponent/>}></Route>
         <Route path = '/employee' element = {<ListEmployeeComponent/>}></Route>
         <Route path = '/add-employee' element = {<CreateEmployee/>}/>
         <Route path = '/update-employee/:id' element = {<UpdateEmployeeComponent/>}/>
        </Routes>
       </div>
      </BrowserRouter>

    

    <FooterComponent/>
   </div> 
  )
}
