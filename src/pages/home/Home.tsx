import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Home.css";
import {
  ShoppingCart,
  ArrowFatLeft,
  ArrowFatRight,
  CreditCard,
  Lock,
  Package,
} from "@phosphor-icons/react";
import Img1 from "../../assets/camisa1.png";
import Img2 from "../../assets/rename2.png";
import ImgMain from "../../assets/final3203902938290289.png";
import Img3 from "../../assets/xicara1.png";
import Img4 from "../../assets/xicara2.png";
import { motion } from "framer-motion";
import ModalProduto from "../../components/produto/modalProduto/ModalProduto";
import ListaProdutosHome from "../../components/produto/listaProdutoHome/ListaProdutosHome";
import { Link } from "react-router-dom";

const images = [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4];

function Home() {
  const carrousel = useRef();
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
  }, []);

  const showSlide = (index) => {
    if (index >= images.length + 2) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + images.length / 2);
  };

  const prevSlide = () => {
    showSlide(currentIndex - images.length / 2);
  };

  return (
    <>
      <div className="body">
        <div className="principal h-96 relative">
          <div className="banner absolute inset-0 z-0">
            <img src={ImgMain} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="detalhes home flex flex-col gap-2 py-12 text-white">
            <h2 className="text-5xl font-bold flex">Promoção</h2>
            <p className="text-xl indent-0.5">2 por R$100,00</p>
            <div className="gap-4">
              <Link to="/produtos">
                <button className="shop rounded bg-white py-2 px-4 flex gap-2">
                  <ShoppingCart size={32} />
                  <h1 className="text-xl">Shopping</h1>
                </button>
              </Link>
            </div>
            <div className="mt-2">
              <ModalProduto />
            </div>
          </div>
        </div>

        <div className="qualidades flex gap-4 justify-center">
          <div className="texto gap-1 inline-flex m-5">
            <div className="p-1 border-2 border-amber-950 border-dashed rounded-full">
              <CreditCard size={32} />
            </div>
            <div>
              <h3 className="font-bold mb-0">Facilidade</h3>
              <p>parcele sem juros</p>
            </div>
          </div>

          <div className="texto gap-1 inline-flex m-5">
            <div className="p-1 border-2 border-amber-950 border-dashed rounded-full ">
              <Lock size={32} />
            </div>
            <div>
              <h3 className="font-bold mb-0 ">Segurança</h3>
              <p>seus dados seguros</p>
            </div>
          </div>

          <div className="texto gap-1 inline-flex m-5">
            <div className="p-1 border-2 border-amber-950 border-dashed rounded-full">
              <Package size={32} />
            </div>
            <div>
              <h3 className="font-bold mb-0">Agilidade</h3>
              <p>entrega rápida</p>
            </div>
          </div>
        </div>

        <div className="titulo">
          <div className="categoria w-full items-center flex flex-col ">
            <div className="border-b-2 border-yellow-950">
              <h2 className="text-4xl font-bold mt-5 mb-1">Categorias</h2>
            </div>

            <div className="carrossel">
              <div className="">
                <button className="botaoSeta rounded p-2 " onClick={prevSlide}>
                  <ArrowFatLeft size={32} />
                </button>
              </div>

              <motion.div ref={carrousel} className="carrousel">
                <motion.div
                  className="inner"
                  animate={{ x: -currentIndex * (width / images.length) }}
                  transition={{ duration: 0.5 }}
                >
                  {images.map((image) => (
                    <motion.div className="item" key={image}>
                      <img src={image} alt="texto alt" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="">
                <button className="botaoSeta rounded p-2" onClick={nextSlide}>
                  <ArrowFatRight size={32} />
                </button>
              </div>
            </div>
            <ListaProdutosHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
