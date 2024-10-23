import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function BotonSubir() {


    function subir (){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })


    }

    function miraScroll(){

        if (document.body.srcollTop > 20 ) {
            document.getElementById('botonSubir').style.display = 'block'
            
        }


    }

    window.onscroll = miraScroll;



  return (
    <>
    <button type="button" className='botonArriba' onClick={subir} id='botonSubir'><FaArrowUp /></button>
    </>
  )
}

export default BotonSubir