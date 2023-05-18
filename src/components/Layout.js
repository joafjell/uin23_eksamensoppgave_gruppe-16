import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="container">
            <header>
                <Link to="/">
                    <h1 className="title">Game Hub</h1>
                </Link>
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/MyGames">My games</Link>
                    </li>
                    <li>
                        <Link to="/MyFavourites">My fav</Link>
                    </li>
                    <li>  
                    <Link to="/GameShop">Game shop</Link>
                    </li> 
                </ul>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    )
}