import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsPencilSquare } from 'react-icons/bs'; // Importar o ícone BsPencilSquare
import { IoInformationCircleOutline } from 'react-icons/io5'; // Importar o ícone IoInformationCircleOutline
import { MdExitToApp } from 'react-icons/md'; // Importar o ícone MdExitToApp
import { HouseLine, UserCirclePlus } from '@phosphor-icons/react'; // Importar o ícone HouseLine
import "./Navbar.css";

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [showSubMenu, setShowSubMenu] = useState(false);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  return (
    <div className='w-full bg-indigo-900 text-white'>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to='/' className='text-2xl font-bold uppercase flex items-center'>
            <HouseLine size={32}className="mr-1" />
            <span>Jornada Limpa</span>
          </Link>

          

          <div className='relative flex'>
            <Link to='/categorias' className="flex items-center">
              Categoria
            </Link>
            <div 
              className='nav-item relative'
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              
                <span><UserCirclePlus size={40} /></span>
              
              {showSubMenu && (
                <div className="dropdown-list">
                  <ul>
                    <li>
                      <Link to='/cadastro' className="flex items-center">
                        <BsPencilSquare size={16} className="mr-1" /> Cadastro
                      </Link>
                    </li>
                    <li>
                      <Link to='/login' className="flex items-center">
                        <BsPencilSquare size={16} className="mr-1" /> Login
                      </Link>
                    </li>
                    <li>
                      <Link to='/sobre' className="flex items-center">
                        <IoInformationCircleOutline size={16} className="mr-1" /> Sobre
                      </Link>
                    </li>
                    <li>
                      <span onClick={logout} className="flex items-center cursor-pointer">
                        <MdExitToApp size={16} className="mr-1" /> Sair
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Navbar;