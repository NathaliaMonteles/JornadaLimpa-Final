import React, { useContext, useEffect, useState, ChangeEvent } from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../model/Produto';
import { buscar } from '../../../service/Service'
import CardProdutoHome from '../cardProdutoHome/CardProdutoHome';
import { Dna, MagnifyingGlass } from '@phosphor-icons/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './ListaProdutosHome.css';

function ListaProdutosHome() {
  const [produto, setProduto] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<Produto[]>([]);
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      navigate('/');
    }
  }, [token, navigate]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos/all', setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produto.length]);
  
  const filtredList = produto.filter((elements) => {
    if (filtro.toLocaleString() === '') {
      return elements
    } else {
      return elements.produto.toLowerCase().includes(filtro.toLocaleString()) || elements.categoria?.tipo.toLowerCase().includes(filtro.toLocaleString()) 
    }
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <label className="flex justify-center mb-4 ">
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFiltro(event.target.value)
        }} 
          className='border rounded-md p-2 pr-40 border-black bg-gray-100'
          type='text'
          placeholder="Buscar"
        />
        <MagnifyingGlass size={32} className='ml-2 mt-2 text-black cursor-pointer'/>
      </label>

      {produto.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4'>
        <Slider {...settings}>
          {filtredList.map((produto) => (
            <div key={produto.id} className='px-2'>
              <CardProdutoHome produto={produto} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ListaProdutosHome;