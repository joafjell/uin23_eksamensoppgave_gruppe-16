import {store} from "./Games";
import GameCard from "./GameCard";

export default function GameShop(){
    return(
        <>
        <section>
            <h2>Game Shop</h2>
            <ul>
                {store?.map((game, index) =>{
                    const {Title, Released, Genres, Img} = game
                    console.log(game)
                    return <GameCard key={index} title={Title} released={Released} genres={Genres} img={Img} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
                    
                })}            
            </ul>    
        </section>
        </>
    )
}