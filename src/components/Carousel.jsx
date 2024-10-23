import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";



function Carousel() {

    let array = ['callOfDuty.jpeg','FIFA2025.jpeg','UFC2024.jpeg','GTA5.jpeg'];

    const [cual,setCual] = useState(0);
    
    function adelante(){
        if (cual==3) {
            setCual(0)
        }else{
            setCual(cual+1)
        }
    }

    function atras(){
        if (cual==0) {
            setCual(3)
            
        }else{
            setCual(cual -1)
        }
    }


  return (

    <section className='carousel'>

        <h2 className="carousel__titulo">Juegos populares</h2>

        <div className="carousel__contenedor">

            <button type="button" className='boton__left' onClick={atras}><FaArrowLeft /></button>

            <img src={array[cual]} className='carousel__imagenes' alt="" />

            <button type="button" className='boton__right' onClick={adelante}><FaArrowRight /> </button>
        </div>
    </section>
  )
}

export default Carousel