import React from 'react';
import { HouseLine } from '@phosphor-icons/react';
import './Navbar.css';

function Navbar() {
  const handlePostagensClick = () => {  
    const url = 'https://github.com/Jornada-Limpa/Jornada-Limpa-Site/blob/footer/src/components/footer/Footer.tsx'; //*link teste
    window.open(url, '_blank'); // Abre a URL em uma nova aba do navegador
  };
  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        <div className='flex items-center gap-2'>
          <HouseLine size={32} />
          <div className='text-2xl font-bold uppercase'>Jornada Limpa</div>
        </div>

        <div className='flex gap-4'>
        <button className='nav-item' onClick={handlePostagensClick}>Postangens</button>
          <button className='nav-item'onClick={handlePostagensClick}>Temas</button>
          <button className='nav-item'onClick={handlePostagensClick}>Cadastrar tema</button>
          <button className='nav-item'onClick={handlePostagensClick}>Perfil</button>
          <button className='nav-item'onClick={handlePostagensClick}>Sair</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
