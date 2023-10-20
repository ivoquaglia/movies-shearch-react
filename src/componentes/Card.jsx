
export const Card = ( { movies }) => {
    return (
        <div className="movie-list">
        {movies.map(pelicula => (
            <div key={pelicula.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
                <h2>{pelicula.title}</h2>
            </div>
        ))}
    </div>
    )
}
