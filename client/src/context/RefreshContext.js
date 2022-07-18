import React , {useState , createContext, useContext } from 'react'

const RefreshContext = createContext(null)


const RefreshContextWarper = ({children}) =>{
    const [refreshTs, setRefreshTs] = useState(Date.now())

    const shouldRefresh = () => {
        setRefreshTs(Date.now())
    }

    return (
        <RefreshContext.Provider value={{refreshTs, shouldRefresh}}>
            {children}
        </RefreshContext.Provider>
    )

}

export const useRefresh = ()=>{
    const refresh = useContext(RefreshContext)
    return refresh
}



export default RefreshContextWarper