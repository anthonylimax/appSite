import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';


const server = express();0
let response = {};
server.use(cors());
server.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "approque"
});

server.post('/getData', ({body}, res)=>{
   console.log(body) 
})
server.post('/connect', ({body}, res)=>{
    db.query("select * from perfil", (err, resQuery, field)=>{
        response = resQuery.find(profile => profile.email == body.emailClient && profile.pass == body.passwordClient)
    db.query(`select c.numberOfItens, i.nomeItem, i.price from perfil as p join carrinho as c on p.id_carrinho = ${response.id_Carrinho} join items as i on c.id_item = i.id`, (error, resp, field)=>{
        response =  {...response, carrinho: resp}
        console.log(response)
        
        res.json(response)
   })
    })
})


server.listen(9000, ()=>{
    console.log("running")
})