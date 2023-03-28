import express from 'express';
import cors from 'cors';
import {
    readFile,
    writeFile,
    appendFile
} from './funktionen.js';
import morgan from 'morgan';

// !! Validierung der Daten die kommen
import { body, validationResult } from 'express-validator'





const PORT = 9999
const app = express()

/* morgan.token('user-type', (req,res) => {
    return req.headers['user-type']
}) */

// Middleware
// logger   muss als erster use sein
  app.use(morgan('dev'))
  
//   - Cors für Sicherheit
app.use(cors({ origin: "http://localhost:5173" }))
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
app.post("/api/postPostGaestebuch", 
// !! Validierung der Daten die kommen
body('getVorname').notEmpty().isString().not().isNumeric().bail(),
body('getNachricht').notEmpty().isLength({min:2, max:10}).bail(),
body('getEmail').notEmpty().isEmail(),
(req, res) => {
    // !! Validierung der Daten die kommen
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(499).json( { error: errors.array() } )
    }
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