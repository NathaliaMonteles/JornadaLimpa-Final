import React from 'react';
import { HouseLine } from '@phosphor-icons/react';
import './Navbar.css';

function Navbar() {
  const handleButtonClick = (url) => {
    window.open(url, '_blank'); // Abre a URL em uma nova aba do navegador
  };

  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        <button className="nav-item" onClick={() => handleButtonClick('http://localhost:5173/home')} style={{ display: 'flex', alignItems: 'center' }}>
          <HouseLine size={32} />
          <div className='text-2xl font-bold uppercase ml-2'>Jornada Limpa</div>
        </button>
        <div className='flex gap-4'>
          <button className='nav-item' onClick={() => handleButtonClick('https://www.linkedin.com/in/Jornada-limpa-170435313')}>Postagens</button>
          <button className='nav-item' onClick={() => handleButtonClick('hhttps://linktr.ee/jornadalimpa')}>Temas</button>
          <button className='nav-item' onClick={() => handleButtonClick('https://github.com/Jornada-Limpa')}>Cadastrar tema</button>
          <button className='nav-item' onClick={() => handleButtonClick('http://localhost:5173/perfil')}>Perfil</button>
          <button className='nav-item' onClick={() => handleButtonClick('http://localhost:5173/sair')}>Sair</button>
          <button className='nav-item' onClick={() => handleButtonClick('http://localhost:5173/sobre')}>Sobre</button>
          
        
        
  </div>
      </div>
    </div>
  );
}

export default Navbar;