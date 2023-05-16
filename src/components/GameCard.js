import { Link } from "react-router-dom";


export default function GameCard({title, released, genres, link, img}){
    return (
        <>
        <section className="game-card">
            <Link to={link}>
            <img src={img} alt={title} classname="game-image"></img>
            <h2 className="game-title">{title}</h2>
            </Link>
            <p>Genres: <span>{genres}</span></p>
            <p>Releasedate: {released}</p>
            <Link to ={link}><button className="buy-button">Buy</button></Link> 
        </section>
        </>
    )
}