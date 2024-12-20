import { createContext, useState } from "react";


export const InfoContext = createContext();

export const InfoProvider=({children})=>{

    const [info,setInfo]=useState({details:"hari",role:"Admin"})
    return (
        <>
     <InfoContext.Provider value={{info,setInfo}}>
     {children}

     </InfoContext.Provider>
     </>
    )
}