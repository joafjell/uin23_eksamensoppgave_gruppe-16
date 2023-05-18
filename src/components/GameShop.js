import {store} from "./Games";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

//Har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MoviesMainPage.js som inspirasjon

export default function GameShop(){
    return(
        <>
        <section>
            <Link to="/GameShop"><h2>GAMESHOP</h2></Link>
            <ul>
                {store?.map((stores, index) =>{
                    const {title, released, genres, img, link} = stores
                    console.log(stores)
                    return <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={stores?.stores?.label.replace(/\s/g, "-").toLowerCase()}/>
                    
                })}            
            </ul>    
        </section>
        </>
    )
}