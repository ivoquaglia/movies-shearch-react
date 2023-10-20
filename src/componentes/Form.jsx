import { useState } from "react"


export const Form = ({handleInputChange, handleSubmit, busqueda}) => {


  return (
    <>
      <h1 className="title">Buscador de Peliculas</h1>

      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Escribi una pelicula"
          value={busqueda}
          onChange={handleInputChange} />
        <button
          type="submit"
          className="search-button">Buscar
        </button>
      </form>
    </>
  )
}
