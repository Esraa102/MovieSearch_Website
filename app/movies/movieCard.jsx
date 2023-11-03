/* eslint-disable @next/next/no-img-element */
function MovieCard ({movie}) {
    return (
        <div className="movieName" >
        <span className="year">{movie.Year}</span>

        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt=""
        />
        <span className="type">{movie.Type}</span>
        <h4 className="title">{movie.Title}</h4>
      </div>
    )
}
export default MovieCard;