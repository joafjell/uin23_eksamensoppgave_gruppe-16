import {store, mygames} from "./Games"
// import MyFavourites from './components/MyFavorites';

export default function MyGames(){
  return (
      <>
        <section className="my-games">
            {mygames?.map((game, index) => {
              const {title, released, genres, img, link} = game;
              return  <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
          })}
        </section>
      </>
    );
}

   // har brukt https://github.com/Nojoudb/uin23ak2_resource_layout_Banishamsa/blob/main/ressurser.js

// let menuHTML = ``;

// store.map((game) => {
   

//    let MenuBox = ``;
//    game.store.forEach((item) => {
//      MenuBox += `
//    <li><a target="_blank" href=${item.url}>${item.title}</a></li>
// `;
//    });

//    menuHTML += `
//  <seaction class="mainMenuItem">
//      <button>${game.category}</button>
//     <div class="open">
//      <p class="text">${resources .text}</p>
//      <ul>
//            ${MenuBox}
//      </ul>
//      </div>
//  </seaction>
// `;
//  })

  
//  menu.innerHTML = `
// <ul class="mainMenu">
//    ${menuHTML}
// </ul>
// `;