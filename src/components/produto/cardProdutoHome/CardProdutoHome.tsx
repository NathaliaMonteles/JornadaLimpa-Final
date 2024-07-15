import Produto from '../../../model/Produto'
import { ShoppingCartSimple } from '@phosphor-icons/react';
import "./CardProdutoHome.css";

interface CardProdutoProps {
	produto: Produto
}

function CardProdutoHome({ produto }: CardProdutoProps) {

	return (

		<div className='card-produto'>
			
				<div className='produto-info'>
					<img src={produto.foto} alt="foto do produto"/>
					<h4 className='text-lg font-semibold uppercase mb-3'>{produto.produto}</h4>
					<p>COR: {produto.cor}</p>
					<p>TAMANHO - {produto.tamanho}</p>
					<p className='preco'>POR APENAS R${produto.preco}</p>
				</div>
			
			<div className='flex'>
				<button className='bg-green-700 m-4 rounded text-white flex items-center p-2 gap-2'><ShoppingCartSimple size={32} /> COMPRAR</button>
			</div>
			
		</div>
		
	)
}

export default CardProdutoHome;