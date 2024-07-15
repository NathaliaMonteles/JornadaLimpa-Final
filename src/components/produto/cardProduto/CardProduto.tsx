import { Link } from "react-router-dom";
import Produto from "../../../model/Produto";
import {
  DotsThreeOutline,
  Trash,
  Pencil,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../../../context/CarrinhoContext";


interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const toggleOpcoes = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  const { adicionarItem } = useContext(CarrinhoContext);

  return (
    <div className="border mr-2 bg-cyan-600 flex flex-col rounded-lg overflow-hidden justify-between ">
      <div className="flex justify-end">
        <button
          className="cursor-pointer focus:outline-none mr-3 text-black"
          onClick={toggleOpcoes}
        >
          <DotsThreeOutline size={32} />
        </button>
      </div>

      <div className="relative">
        {mostrarOpcoes && (
          <div className="dropdown-list-c">
            <ul>
              <li>
                <Link
                  to={`/editarProduto/${produto.id}`}
                  className="flex items-center font-bold text-gray-800 hover:bg-gray-200 px-4 py-2"
                >
                  <Pencil size={16} weight="bold" /> Editar
                </Link>
              </li>
              <li>
                <Link
                  to={`/deletarProduto/${produto.id}`}
                  className="flex items-center font-bold text-red-800 hover:bg-red-200 px-4 py-2"
                >
                  <Trash size={16} weight="bold" /> Deletar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="border">
        <div className="p-4 bg-white">
          <img
            src={produto.foto}
            alt="foto do produto"
            className="max-h-[400px] rounded-md"
          />
          <h4 className="text-lg font-title font-semibold uppercase mt-2">
            {" "}
            {produto.produto}
          </h4>
          <p>COR: {produto.cor}</p>
          <p>TAMANHO - {produto.tamanho}</p>
          <p>POR APENAS R${produto.preco}</p>
          <div className="flex justify-end">
            <button
              className="bg-green-500 rounded-lg text-white flex items-center p-2 gap-2"
              onClick={() => adicionarItem(produto)}
            >
              <ShoppingCartSimple size={32} /> COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
