import { Link } from "react-router-dom";
import {store} from "./Games";

export default function GameShop({title, released, genres, img}){
    return(
        <>
        <section>
            <h1>Game Shop</h1>
            <ul>
                {store?.map((game, index) =>{
                    const {Title, Released, Genres, Img} = game
                    return (title={Title} released={Released})

                })}            
            </ul>    
        </section>
        </>
    )
}