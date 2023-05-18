import GameShop from "./GameShop";
// import {store, mygames} from "./games";
import GamePage from "./GamePage";
import MyGames from "./MyGames";
import { store, mygames } from './components/Games';



export default function Dashboard(){
    return ( 
        <>
            <GameShop/>
            <GamePage/>
            <MyGames/>

            
        </>
    )
}