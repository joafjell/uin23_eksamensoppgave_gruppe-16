import { useParams } from "react-router-dom"

// Har brukt https://github.com/ackarlse/gitcollab/blob/main/src/components/RecipePage.js//

export default function GamePage(games){
    const {slug} = useParams()
    const game = games.find((rec) => rec.slug === slug)

    return (
        <section>
            <h1>{game.title}</h1>
            <ul>
                {game.ingredients.map((ingredient, index) =>(
                <li key={"ing"+index}>{ingredient}</li>
            ))}
            </ul>
            <ol>
                {game.process.map((step, index) =>(
                    <li key={"step"+index}>{step}</li>
                ))}
            </ol>
        </section>
    )
}