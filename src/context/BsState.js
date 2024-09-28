import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) =>{

    const[movie,changeMovie] = useState('')
    const[time,ChangeTime] = useState('')
    const[noofseat,changeNoofseat] = useState({
        A1: "",
        A2: "",
        A3 : "",
        A4 : "",
        D1 : "",
        D2 : "",
    })
    const [lastBooking,setLastbooking] = useState(null)

    return (
        <BsContext.Provider value={{movie,changeMovie,time,ChangeTime,noofseat,changeNoofseat,lastBooking,setLastbooking}}>{props.children}</BsContext.Provider>
    )
}
export default BsState;