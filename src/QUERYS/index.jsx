import axios from "axios";
const connection = axios.create({
    baseURL: "http://localhost:9000"
})

export function LoginIsCorrectly(accountLogged){
    let account;
    connection.post('/connect', accountLogged)
    .then(result => account = result.data)
    .catch(error => account = false)
    return account;
}