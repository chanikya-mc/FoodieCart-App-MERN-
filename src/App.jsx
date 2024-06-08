
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.css'; 


import Home from './screens/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './screens/Login'
function App() {


  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </Router>
    
   
     
    </>
  )
}

export default App
