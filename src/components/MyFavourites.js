import { Link} from "react-router-dom";
import {mygames} from "./Games";
import GameTile from "./GameTile";

//Har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MoviesMainPage.js som inspirasjon

export default function MyFavourites(){

    
    const favourite = mygames?.filter((favourite) => favourite.fav === true)//her ble https://www.w3schools.com/jsref/jsref_filter.asp brukt for å forstå .filter metoden også ble .filter metoden fra https://github.com/ackarlse/news/blob/main/src/components/Main.js brukt som inspirasjon

    return(
        <>
            <section>
                <Link to="MyFavourites" className="link-text"><h2 className="favourite-title">Favourites</h2></Link>
                <ul className="ul-my-favourites">
                    {favourite?.map((favourites, index) =>{
                        const {title, released, genres, img, link} = favourites
                        return <GameTile key={index} title={title} released={released} genres={genres} img={img} link={link} slug={favourites?.favourites?.label.replace(/\s/g, "-").toLowerCase()}/>
                        
                    })}            
                </ul>    
            </section>
        </>
    )
}