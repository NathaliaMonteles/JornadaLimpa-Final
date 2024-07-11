import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'

interface CardProdutoProps {
	produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
	return (
		
		<div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>

			<div>
				<div className='p-4 '>
					<h4 className='text-lg font-semibold uppercase mb-3'>{produto.produto}</h4>
					<p>Preço: R${produto.preco}</p>
					<p>Cor: {produto.cor}</p>
					<p>Categoria: {produto.categoria?.tipo}</p>
				</div>
			</div>

			<div className="flex">
				<Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
						<button>Editar</button>
				</Link>
				<Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
						<button>Deletar</button>
				</Link>
			</div>

		</div>
	)
}

export default CardProduto;