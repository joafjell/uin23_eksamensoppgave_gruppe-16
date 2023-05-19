import { Link } from "react-router-dom";

/*Vi har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MovieCards.js som inspirasjon*/

export default function GameCard({title, released, genres, link, img}){
    return (
        <>
        <article className="game-card">
            <Link to={link}>
            <img src={img} alt={title} className="game-shop-image"></img>
            </Link>
            <Link className="link-text">
            <h2 className="game-title game-info">{title}</h2>
            </Link>
            
            <p className="game-info">Genres: <span>{genres}</span> 
            Releasedate: <span> {released} </span></p>
            <Link to ={link}><button className="buy-button">Buy</button></Link>
        </article>
        </>
    )
}