import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BsPencilSquare } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";
import {
  HouseLine,
  UserCirclePlus,
  CaretDown,
  User,
  Basket
} from "@phosphor-icons/react";
import { toastAlerta } from "../../util/toastAlerta";
import "./Navbar.css";
import { CarrinhoContext } from "../../context/CarrinhoContext";



function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { listaCarrinho } = useContext(CarrinhoContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  const usuariofoto = usuario.foto;

  const calcularQntItens = (itens) => {
    return itens.reduce((acc, item) => acc + item.qtd, 0);
  };

  const somaQnt = calcularQntItens(listaCarrinho);

  return (
    <div className="w-full bg-[#292828] text-white rounded-pill">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold uppercase flex items-center"
          >
            <HouseLine size={32} className="mr-1" />
            <span>Jornada Limpa</span>
          </Link>

          <div className="relative font-title flex gap-5">
            <Link to="/categorias" className="flex items-center">
              Categoria
            </Link>
            <Link to="/produtos" className="flex items-center">
              Produto
            </Link>
            

            <div
              className="nav-item relative"
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              {/* Submenu para usuários não logados */}
              {!usuario.token && (
                <>
                  <span>
                    <UserCirclePlus size={40} />
                    <CaretDown size={16} weight="fill" />
                  </span>
                  {showSubMenu && (
                    <div className="dropdown-list">
                      <ul>
                        <li>
                          <Link to="/login" className="flex items-center">
                            <BsPencilSquare size={16} className="mr-1" /> Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/cadastro" className="flex items-center">
                            <BsPencilSquare size={16} className="mr-1" />{" "}
                            Cadastro
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* Submenu para usuários logados */}
              {usuario.token && (
                <>
                  <div className="flex items-center gap-2">
                    {usuariofoto === "" && (
                      <img
                        src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg"
                        alt=""
                        className="h-[42px] w-[42px] bg-white rounded-full"
                      />
                    )}
                    {usuariofoto && (
                      <img
                        src={usuario.foto}
                        alt=""
                        className="h-[42px] w-[42px] bg-white rounded-full"
                      />
                    )}
                    <b>Olá, {usuario.nome}</b>
                  </div>
                  {showSubMenu && (
                    <div className="dropdown-list">
                      <ul>
                        <li>
                          <Link to="/perfil" className="flex items-center">
                          <User size={16} className="mr-1" />
                            Perfil
                          </Link>
                        </li>
                        <li>
                          <span
                            onClick={logout}
                            className="flex items-center cursor-pointer"
                          >
                            <MdExitToApp size={16} className="mr-1" /> Sair
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
            <Link to="/carrinho" className="flex items-center">
              <Basket size={32} />
            </Link>
            {/* numero do lado da cesta do carrinho la pra gabi mexer, boa sorte!! */}
            {somaQnt > 0 && (<h1 className="absolute top-2 -right-3 bg-red-500 min-w-5 max-h-5 flex items-center justify-center rounded-full">{somaQnt}</h1>)}
          </div>   
        </div>
      </div>
    </div>
  );
}

export default Navbar;
