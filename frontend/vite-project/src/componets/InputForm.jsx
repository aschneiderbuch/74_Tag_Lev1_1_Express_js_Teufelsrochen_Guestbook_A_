


import React from 'react'
import { useState } from 'react'

// rafc
// schreibt automatische den Dateinamen und den import
export const InputForm = ({ setPosts }) => {
    const [getVorname, setVorname] = useState()
    const [getNachname, setNachname] = useState()
    const [getEmail, setEmail] = useState()
    const [getNachricht, setNachricht] = useState()

    const handleSubmitButton = (e) => {
        e.preventDefault()  /* damit eingabe nicht gelöscht wird */
        const newPostFuersGaestebuch = {
            getVorname,
            getNachname,
            getEmail,
            getNachricht
        }


        // fetch zum Posten an Server
        fetch("http://localhost:9999/api/postPostGaestebuch", {
            /* Objekt damit es vom Body Parser beim Server gelesen werden kann */
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPostFuersGaestebuch)
        })
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })

    }


    return (
        <>
            <div>InputForm</div>

            <input type="text" placeholder="Vorname" onChange={(e) => setVorname(e.target.value)} ></input>
            <input type="text" placeholder="Nachname" onChange={(e) => setNachname(e.target.value)}></input>
            <input type="text" placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)} ></input>
            <input type="text" placeholder='Nachricht' onChange={(e) => setNachricht(e.target.value)}></input>

            <button onClick={handleSubmitButton}>Absenden</button>
        </>
    )
}
