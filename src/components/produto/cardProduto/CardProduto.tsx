import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'

interface CardProdutoProps {
	post: Produto
}

function CardProduto({post}: CardProdutoProps) {
	return (
		
		<div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>

			<div>
				<div className='p-4 '>
					<h4 className='text-lg font-semibold uppercase mb-3'>{post.produto}</h4>
					<p>Preço: R${post.preco}</p>
					<p>Cor: {post.cor}</p>
					<p>Categoria: {post.categoria?.tipo}</p>
				</div>
			</div>

			<div className="flex">
				<Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
						<button>Editar</button>
				</Link>
				<Link to={`/deletarProduto${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
						<button>Deletar</button>
				</Link>
			</div>

		</div>
	)
}

export default CardProduto;