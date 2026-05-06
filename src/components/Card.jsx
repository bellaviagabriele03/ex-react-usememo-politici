import { memo } from "react"
let renderCounter = 0;
const Card = memo(({ user }) => {

    renderCounter++;
    console.log("Render Counter:", renderCounter);

    


    return (
        <>
            <div className="card">
                <h2>{user.name}</h2>
                <img src={user.image} alt="immagine politico" />
                <p><span>Posizione:</span> {user.position}</p>
                <p><span>Biografia:</span> {user.biography}</p>
            </div>

        </>
    )
});

export default Card;

