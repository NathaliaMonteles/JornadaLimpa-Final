import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { HouseLine} from '@phosphor-icons/react'
import "./Navbar.css"

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase flex gap-3'><HouseLine size={32} />Jornada Limpa</Link>

            <div className='flex gap-4'>
          
              <Link to='/cadastro' className='nav-item'>Cadastro</Link>
              <Link to='/login' className='nav-item'>Login</Link>
              <Link to='/sobre' className='nav-item'>Sobre</Link>
              <Link to='' onClick={logout} className='nav-item'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar