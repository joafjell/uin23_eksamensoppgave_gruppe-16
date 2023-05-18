import GameCard from "./GameCard";
import GameTile from "./GameTile";
import {store, mygames} from "./Games";

// kilde: https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MoviesMainPage.js

export default function MyGames(){
  return (
      <>
        <section className="my-games">
            {mygames?.map((game, index) => {
              const {title, released, genres, img, link} = game;
              return  <GameTile key={index} title={title} released={released} genres={genres} img={img} link={link} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
          })}
        </section>
      </>
    );
}

   
