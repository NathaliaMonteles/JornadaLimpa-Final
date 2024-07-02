import './App.css'

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';


function App() {
 

  return (
    <>
    <AuthProvider>
   <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/Contato" element={<Contato />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
         <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
