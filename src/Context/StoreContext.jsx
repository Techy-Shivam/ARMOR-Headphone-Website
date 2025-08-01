import { createContext, useEffect, useState } from "react";
import {headphone_list} from "../assets/assets"
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
 
    const [cartItems,setCartItems]=useState({})

    const addtoCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1 }))
        } else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={
         headphone_list,
         cartItems,
         setCartItems,
         addtoCart,
         removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider