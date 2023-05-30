import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const server = express();
server.use(cors());
server.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "approque"
});

server.post('/connect', ({body}, res)=>{
    db.query("SELECT * FROM PERFIL", async (err, result, field)=>{
        const resultado = await result.filter(element => element.email === body.emailClient)
        console.log(resultado)    
        res.send(resultado != [] ? body : new Error("Email ou senha incorretos"))
    })
})


server.listen(9000, ()=>{
    console.log("running")
})