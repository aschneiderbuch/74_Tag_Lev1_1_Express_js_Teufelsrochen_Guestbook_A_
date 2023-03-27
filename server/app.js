import express from 'express';
import cors from 'cors';
import {
    readFile,
    writeFile,
    appendFile
} from './funktionen.js';




const PORT = 9999
const app = express()

// Middleware
//   - Cors für Sicherheit
app.use(cors({ origin: "http://localhost:5174" }))
//    - zum Parsen von JSON    Und Head Body auslesen
app.use(express.json())


// GET abruf
app.get("/api/getPostGaestebuch", (req, res) => {
    // ruft Gästebuch Datei auf 
    readFile()
        // Daten an Client senden
        .then(data => res.json(data))

        .catch(err => console.log(err))

})


// Post schicken
app.post("/api/postPostGaestebuch", (req, res) => {
    // Head Body rausholen    express.json()
    const data = req.body

    // inhalt anhänger
    appendFile(data)
        .then (newData => res.json(newData))

        .catch ( err => console.log(err))


})





app.listen(PORT, () => {
    console.log("Sever läuft auf Port: " + PORT)
})