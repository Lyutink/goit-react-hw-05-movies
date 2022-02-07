
export default function CardMovie({ movieDetails }) {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title} width="50px" langht='50px' />
            <h2>{movieDetails.original_title}</h2>
            <p>User Score: { }</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4>Genres</h4>
            <ul>
                {movieDetails.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>))}
            </ul>
                    
                </>
    )
}