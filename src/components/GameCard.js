import {store, mygames} from "./Games";

export default function GameCard({title}){
    return (
        <>
        <section className="game-card">
        <h2 classname="game-title">{title}</h2>
        </section>
        </>
    )
}