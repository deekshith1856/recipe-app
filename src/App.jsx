
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='profile' element={<UserProfile />} />
      </Routes>
    </>
  )
}

export default App
