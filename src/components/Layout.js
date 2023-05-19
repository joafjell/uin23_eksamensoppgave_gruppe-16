import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="container">
            <header>
            <Link to="/" className="link-text">
                <h1 className="title">MACs Gamehub</h1>
            </Link>
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="/" className="link-text">Home</Link>
                    </li>
                    <li>
                        <Link to="/MyGames" className="link-text">My games</Link>
                    </li>
                    <li>
                        <Link to="/MyFavourites" className="link-text">My fav</Link>
                    </li>
                    <li>  
                        <Link to="/GameShop" className="link-text">Game shop</Link>
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