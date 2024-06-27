import React from 'react';
import './Home.css';
import { ShoppingCart } from '@phosphor-icons/react'
import Img1 from "../../assets/camisa1.png"
import Img2 from "../../assets/rename2.png"

function Home() {
    return (
        <>
        <div className="bg-lime-700 flex flex-col items-center h-screen">
            <div className='container grid grid-cols-2 text-white bg-blue-900'>
                <div className="flex flex-col gap-4 items-center justify-center py-4 bg-green-900">
                <h2 className='text-5xl font-bold'>wellcome</h2>
                <p className='text-xl indent-0.5'>4 por 99R$</p>
    
                    <div className="flex justify-around gap-4">
                
                        <button className='rounded bg-white text-blue-800 py-2 px-4 flex gap-2 justify-center'>
                        <ShoppingCart size={32} />
                        <h1 className='text-xl '>Shopping</h1>
                        </button>
                    </div>
                </div>
    
                <div className="flex justify-center bg-blue-900">
                    
                </div>

                

            </div>

            <div className="container">
                <div className='categoriw-full items-center justify-center flex flex-col gap-5'>

                    <div>
                        <h2 className='text-4xl font-bold text-blue-800'>categorias</h2>
                    </div>

                    <div className='flex gap-5'>
                     <img src={Img1} alt="" className='imagem h-40'/>
                    
                     <img src={Img2} alt="" className='imagem h-40'/>

                     <img src={Img1} alt="" className='imagem h-40'/>
                    </div>

                    
                </div>
                

                <div className='bg-yellow-900 w-full'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda doloremque suscipit dolorem neque excepturi rem est ut quo quaerat, repudiandae numquam nobis non voluptate dolorum nostrum optio aspernatur omnis.</p>

                </div>
            </div>

        </div>
      
      </>
    );
}

export default Home;