import { createContext, useContext, useState } from "react";

const newContext = createContext()

const AppProvider = ({children})=>{
    const [sidebar, setSidebar] = useState(false)

    const openSidebar = ()=>{
        setSidebar(true)
        
    }
    const closeSidebar = ()=>{
        setSidebar(false)
    }
    return (
        <newContext.Provider value={{sidebar, openSidebar, closeSidebar}}>{children}</newContext.Provider>
    )
}
export const useCustom = ()=>{
    return useContext(newContext)
}
export default AppProvider