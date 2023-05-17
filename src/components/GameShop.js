import {store} from "./Games";
import GameCard from "./GameCard";

//Har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MoviesMainPage.js som inspirasjon

export default function GameShop(){
    return(
        <>
        <section>
            <h2>Game Shop</h2>
            <ul>
                {store?.map((game, index) =>{
                    const {title, released, genres, img, link} = game
                    console.log(game)
                    return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
                    
                })}            
            </ul>    
        </section>
        </>
    )
}