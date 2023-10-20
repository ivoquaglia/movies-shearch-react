import { useState } from "react";
import { Card } from "./componentes/card";
import { Form } from "./componentes/Form";


export const BuscadorPeliculas = () => {

    const urlBase = "https://api.themoviedb.org/3/search/movie";
    const key = "67524aa6618f8e7ee4975212b2572b8f";

    const [movies, setMovies] = useState([])
    const [busqueda, setBusqueda] = useState("")




    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${key}`)
            const data = await response.json()
            console.log(data)
            setMovies(data.results)
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
        console.log(busqueda)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPeliculas();
    }

    return (
        <div className="container">
            <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} busqueda={busqueda} />
            <Card movies={movies} />
        </div>
    )
}
