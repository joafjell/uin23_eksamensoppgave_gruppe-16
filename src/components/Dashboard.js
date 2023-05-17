import GameShop from "./GameShop";
import {store, mygames} from "./Games";
import MyFavourites from "./MyFavourites";

export default function Dashboard(){

    return ( 
        <>
            <GameShop/>
            <MyFavourites/>
        </>
    )
}