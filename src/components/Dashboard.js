import { Link } from "react-router-dom";
import {store, mygames} from "./Games";
import GameCard from "./GameCard";
import GameTile from "./GameTile";

export default function Dashboard(){ 
    const randomGames = store.sort(() => 0.5 - Math.random()) //Brukte koden på denne siden https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj som inspirasjon
    const shortGameList = randomGames.slice(0, 3) //Bruke en kode på denne siden https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array som inspirasjon
    
    const favourite = mygames?.filter((favourite) => favourite.fav === true)//her ble https://www.w3schools.com/jsref/jsref_filter.asp brukt for å forstå .filter metoden også ble .filter metoden fra https://github.com/ackarlse/news/blob/main/src/components/Main.js brukt som inspirasjon
    const shortenedFavourites = favourite.slice(0, 2) //Bruke en kode på denne siden https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array som inspirasjon

    const libraryGames = mygames.slice(0, 4) //Bruke en kode på denne siden https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array som inspirasjon

    return ( 
        <>
            <section className="dashboard-shop">
            <Link to="/GameShop" className="link-text"><h2 className="dashboard-shop-title">GAMESHOP</h2></Link>
            <Link to="/Gameshop" className="link-text"><button className="shop-button">Visit Shop</button></Link>
            <ul className="ul-shop">
                {shortGameList?.map((randomGamesForSale, index) =>{
                    const {title, released, genres, img, link} = randomGamesForSale
                    return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={randomGamesForSale?.randomGamesForSale?.label.replace(/\s/g, "-").toLowerCase()}/>
                })}            
            </ul>    
        </section>
            <section className="dashboard-library">
            <Link to="/MyGames" className="link-text"><h2 className="library-title">MY GAMES-LIBRARY</h2></Link>
            <ul className="ul-library">
                {libraryGames?.map((libraryGame, index) =>{
                    const {title, released, genres, img, link} = libraryGame
                    return <GameTile key={index} title={title} released={released} genres={genres} img={img} link={link} slug={libraryGame?.libraryGame?.label.replace(/\s/g, "-").toLowerCase()}/>                       
                })}            
            </ul>
            <Link to="/MyFavourites"><button>My Favourites</button></Link>     
        </section>  
        <section className="dashboard-favourite">
            <Link to="MyFavourites"className="link-text"><h2 className="favourite-title">My Favourites</h2></Link>
            <ul className="ul-library">
                {shortenedFavourites?.map((shortenedFavourite, index) =>{
                    const {title, released, genres, img, link} = shortenedFavourite
                    return <GameTile key={index} title={title} released={released} genres={genres} img={img} link={link} slug={shortenedFavourite?.shortenedFavourite?.label.replace(/\s/g, "-").toLowerCase()}/>
                })}            
            </ul>
            <Link to="/MyGames"><button>My Games</button></Link>    
        </section>
 
    </>
    )
}