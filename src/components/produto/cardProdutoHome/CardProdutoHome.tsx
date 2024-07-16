import Produto from '../../../model/Produto'
import { ShoppingCartSimple } from '@phosphor-icons/react';
import "./CardProdutoHome.css";
import { useContext } from 'react';
import { CarrinhoContext } from '../../../context/CarrinhoContext';

interface CardProdutoProps {
	produto: Produto
}

function CardProdutoHome({ produto }: CardProdutoProps) {

	const { adicionarItem } = useContext(CarrinhoContext);

	return (

		<div className='card-produto m-5'>
			
				<div className='produto-info'>
					<img src={produto.foto} alt="foto do produto"/>
					<h4 className='text-lg font-semibold uppercase mb-1'>{produto.produto}</h4>
					<p>COR: {produto.cor}</p>
					<p>TAMANHO - {produto.tamanho}</p>
					<p className='preco'>POR APENAS R${produto.preco}</p>
				</div>
			
			<div className='flex'>
			<button
              className='btn-comprar bg-green-700 m-4 rounded text-white flex items-center'
              onClick={() => adicionarItem(produto)}
            >
              <ShoppingCartSimple size={32} /> COMPRAR
            </button>
			</div>
			
		</div>
		
	)
}

export default CardProdutoHome;