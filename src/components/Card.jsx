import { memo } from "react"

export default function Card({ user }) {



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
}