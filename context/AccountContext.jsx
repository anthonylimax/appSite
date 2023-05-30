import { Provider, createContext, useState } from "react";

export default function AccountProvider({children}){
    const [accountLogged, setAccountLogged] = useState({});
    return(
        <AccountContext.Provider value={{accountLogged, setAccountLogged}}>{children}</AccountContext.Provider>
    )
}   
export const AccountContext = createContext()