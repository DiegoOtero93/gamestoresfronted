import React from 'react'

function QuienesSomosLocal() {
  return (
    <section className="team">
      <div className="team__card">
        <img
          src="QuienesSomos.jpg"
          className="team__imagen"
          alt="Trabajadores de la empresa"
        />

        <div className="team__contenedorTexto">
          <h2 className="team__titulo">Nuestro Equipo</h2>

          <p className="team__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae,
            deleniti quos corrupti, magni at consequatur adipisci repellendus
            distinctio eius nam! Ab eveniet sint eligendi in porro voluptatem
            cum assumenda.
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomosLocal