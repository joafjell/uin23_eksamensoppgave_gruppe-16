import GameCard from "./GameCard";
import {mygames} from "./Games";

export default function MyFavourites(){
    return(
        <>
            <section>
                <h2>Favourites</h2>
                <ul>
                    {mygames?.map((favourites, index) =>{
                        const {title, released, genres, img, link} = favourites
                        console.log(favourites)
                        return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={favourites?.favourites?.label.replace(/\s/g, "-").toLowerCase()}/>
                        
                    })}            
                </ul>    
            </section>
        </>
    )
}