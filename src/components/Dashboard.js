import { Link } from "react-router-dom";
import GameShop from "./GameShop";
import {store, mygames} from "./Games";
import MyFavourites from "./MyFavourites";
import GameCard from "./GameCard";

export default function Dashboard(){ 
    const randomGames = store.sort(() => 0.5 - Math.random()) //Brukte koden på denne siden https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj som inspirasjon
    const shortGameList = randomGames.slice(0, 3) //Bruke en kode på denne siden https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array som inspirasjon
    
    const favourite = mygames?.filter((favourite) => favourite.fav === true)//her ble https://www.w3schools.com/jsref/jsref_filter.asp brukt for å forstå .filter metoden også ble .filter metoden fra https://github.com/ackarlse/news/blob/main/src/components/Main.js brukt som inspirasjon
    const shortenedFavourites = favourite.slice(0, 2) //Bruke en kode på denne siden https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array som inspirasjon

    return ( 
        <>
        
            <section>
            <Link to="/GameShop"><h2>GAMESHOP</h2></Link>
            <ul>
                {shortGameList?.map((randomGamesForSale, index) =>{
                    const {title, released, genres, img, link} = randomGamesForSale
                    return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={randomGamesForSale?.randomGamesForSale?.label.replace(/\s/g, "-").toLowerCase()}/>
                })}            
            </ul>    
        </section>
        <section>
                <Link to="MyFavourites"><h2>Favourites</h2></Link>
                <ul>
                    {shortenedFavourites?.map((shortenedFavourite, index) =>{
                        const {title, released, genres, img, link} = shortenedFavourite
                        return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={shortenedFavourite?.shortenedFavourite?.label.replace(/\s/g, "-").toLowerCase()}/>
                        
                    })}            
                </ul>    
            </section>
            
            
        </>
    )
}