import { Link } from "react-router-dom";

//kilde  https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MovieCards.js*/

export default function GameTile({title, released, genres, link, img}){
    return (
        <>
        <section className="game-card">
            <Link to={link} className="link-text">
            <img src={img} alt={title} className="game-image"></img>
            <h2 className="game-title">{title}</h2>
            </Link>
            <p>Genres: <span>{genres}</span></p>
            <p>Releasedate: {released}</p> 
        </section>
        </>
    )
}