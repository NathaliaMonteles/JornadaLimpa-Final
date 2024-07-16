import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../model/Produto';
import { buscar } from '../../../service/Service';
import CardProduto from '../cardProduto/CardProduto';
import { DNA } from 'react-loader-spinner';
import { toastAlerta } from '../../../util/toastAlerta';
import ModalProduto from '../modalProduto/ModalProduto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPrecoMin, setFiltroPrecoMin] = useState<number | ''>('');
  const [filtroPrecoMax, setFiltroPrecoMax] = useState<number | ''>('');
  const [filtroTamanho, setFiltroTamanho] = useState('');

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/login');
    } else {
      buscarProdutos();
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos/all', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    setProdutosFiltrados(produtos);
  }, [produtos]);

  const filtrarProdutos = () => {
    
    

    let produtosFiltradosTemp = produtos.filter((produto) => {
      if (filtroNome && !produto.produto.toLowerCase().includes(filtroNome.toLowerCase())) {
        return false;
      }
      if (filtroPrecoMin !== '' && produto.preco < parseFloat(filtroPrecoMin.toString())) {
        return false;
      }
      if (filtroPrecoMax !== '' && produto.preco > parseFloat(filtroPrecoMax.toString())) {
        return false;
      }
      if (filtroTamanho && produto.tamanho !== filtroTamanho) {
        return false;
      }
      return true;
    });

    setProdutosFiltrados(produtosFiltradosTemp);
  };

  const limparFiltros = () => {
    setFiltroNome('');
    setFiltroPrecoMin('');
    setFiltroPrecoMax('');
    setFiltroTamanho('');
    setProdutosFiltrados(produtos);
  };

  return (
    <>
      <div className='container mx-auto my-4'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-title text-black font-bold'>LISTA DE PRODUTOS</h2>
          <div className='flex gap-4'>
            <input
              type='text'
              placeholder='Nome do Produto'
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className='border p-2 rounded'
            />
            <input
              type='number'
              placeholder='Preço Mínimo'
              value={filtroPrecoMin}
              onChange={(e) => setFiltroPrecoMin(e.target.value === '' ? '' : parseFloat(e.target.value))}
              className='border p-2 rounded'
            />
            <input
              type='number'
              placeholder='Preço Máximo'
              value={filtroPrecoMax}
              onChange={(e) => setFiltroPrecoMax(e.target.value === '' ? '' : parseFloat(e.target.value))}
              className='border p-2 rounded'
            />
            <input
              type='text'
              placeholder='Tamanho'
              value={filtroTamanho}
              onChange={(e) => setFiltroTamanho(e.target.value)}
              className='border p-2 rounded'
            />
            <button className='bg-cyan-600 text-white px-4 py-2 rounded' onClick={filtrarProdutos}>
              Filtrar
            </button>
            <button className='bg-cyan-600 text-white px-4 py-2 rounded' onClick={limparFiltros}>
              Limpar Filtro
            </button>
          </div>
        </div>

        {produtos.length === 0 && (
          <DNA
            visible={true}
            height='200'
            width='200'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper mx-auto'
          />
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtosFiltrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
        
      </div>
    </>
  );
}

export default ListaProdutos;
