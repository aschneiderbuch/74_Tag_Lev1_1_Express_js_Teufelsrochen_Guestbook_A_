import fs from 'fs'
import { resolve } from 'path'

// Gästebuch lesen
export const readFile = () => {
    // Promise da es später ja mit fetch asynchron geholt wird
    return new Promise((resolve, reject) => {
        fs.readFile("./gästebuch.json", (err, data) => {
            if (err) reject(err)
            else {
                resolve(JSON.parse(data.toString()))
            }
        })
    })
}

export const writeFile = (data) => {
    return new Promise((resolve, reject) => {

        // null + 2 macht leere Zeile dazwischen
        fs.writeFile("./gästebuch.json", JSON.stringify(data, null, 2), (err) => {
            if (err) reject(err)
            else {
                resolve("okay Daten erfolgreich geschrieben")
            }
        })
    })
}


// Anhängen einfügen in JSON Datei
export const appendFile = (newPostFuerGaestebuch) => {
    return new Promise((resolve, reject) => {

        readFile()
            .then(oldPost => {
                const newDataPost = [...oldPost, newPostFuerGaestebuch]

                writeFile(newDataPost)
                    .then(res => resolve(newDataPost))

                    .catch(err => reject(err))
            })
    })
}