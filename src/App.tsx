import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contato from './pages/contato/Contato';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Entrega from './pages/entrega/Entrega';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarTema/DeletarCategoria';
import EditarCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaProdutos from './components/produto/listaProduto/ListaProdutos';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import Perfil from './pages/perfil/Perfil';
import Carrinho from './components/carrinho/Carrinho';


function App() {
  return (
    <>
      <AuthProvider>
        <CarrinhoProvider>
        <BrowserRouter>
        <ToastContainer/>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/contato" element={<Contato />} />
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/entrega" element={<Entrega />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/editarCategoria/:id" element={<EditarCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </CarrinhoProvider>
      </AuthProvider>
    </>
  );
}

export default App;
