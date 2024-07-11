import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';
import {DotsThree } from '@phosphor-icons/react';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <div className='container columns-2 bg-indigo-800'>
        <header className='py-2 px-6  text-white font-bold text-2xl'>Categoria</header>
        <span className='text-white flex justify-end items-center px-8 '><DotsThree size={32} /></span>
        </div>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.tipo}</p>

      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
      
    </div>
  )
}

export default CardCategorias;