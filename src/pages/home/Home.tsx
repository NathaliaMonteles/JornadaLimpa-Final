import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Home.css';
import { ShoppingCart} from '@phosphor-icons/react'
import Img1 from "../../assets/camisa1.png"
import Img2 from "../../assets/rename2.png"
import ImgMain from "../../assets/imagemmain.jpg"
import Img3 from "../../assets/xicara1.png"
import Img4 from "../../assets/xicara2.png"
import { motion } from 'framer-motion';

const images = [Img1, Img2, Img3, Img4]

function Home() {
    const carrousel = useRef();
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
    }, []);

    const showSlide = (index) => {
        if (index >= images.length+2) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    const nextSlide = () => {
        showSlide(currentIndex + images.length);
    };

    const prevSlide = () => {
        showSlide(currentIndex - images.length);
    };
    
    return (
        <>
        <div className="bg-indigo-900 ">
            <div className='principal grid grid-cols-2 text-white bg-blue-900 h-96 '>

                <div className="flex flex-col gap-4 items-center justify-center py-4 bg-indigo-950 w-full">
                    <h2 className='text-5xl font-bold'>wellcome</h2>
                    <p className='text-xl indent-0.5'>4 por 99R$</p>
    
                    <div className="flex justify-around gap-4">
                
                        <button className='shop rounded bg-white text-indigo-800 py-2 px-4 flex gap-2 justify-center'>
                        <ShoppingCart size={32} />
                        <h1 className='text-xl '>Shopping</h1>
                        </button>

                    </div>
                </div>
    
                <div className="bg-indigo-950 overflow-hidden object-right">
                    <img src={ImgMain} alt="" className='img' />
                </div>

            </div>

            <div className="">
                <div className='categoria w-full items-center flex flex-col '>

                    <div>
                        <h2 className='text-4xl font-bold text-blue-800 text-white py-11'>categorias</h2>
                    </div>
    
                    <div className='carrossel'>
                            <div className="">
                                <button className="bg-white text-black p-2" onClick={prevSlide}>&#10094;</button>
                            </div>

                        <motion.div ref={carrousel} className="carrousel">
                            <motion.div className="inner" animate={{ x: -currentIndex * (width / images.length) }}
                                    transition={{ duration: 0.5 }}>

                                {images.map(image =>(
                                    <motion.div className='item' key={image}>
                                        <img src={image} alt="texto alt" />
                                    </motion.div>
                                ))}

                            </motion.div>
                        </motion.div>

                        
                            <div className="">
                                <button className="bg-white text-black p-2" onClick={nextSlide}>&#10095;</button>
                            </div>
                        
                    </div>
                            
                    
                </div>
                
                <div className='bg-indigo-950 text-white'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda doloremque suscipit dolorem neque excepturi rem est ut quo quaerat, repudiandae numquam nobis non voluptate dolorum nostrum optio aspernatur omnis.</p>

                </div>
            </div>

        </div>
      
      </>
    );
}

export default Home;