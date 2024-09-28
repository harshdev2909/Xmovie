import { useEffect, useState } from "react";
import BsContext from "./BsContext";
import axios from 'axios'
const BsState = (props) =>{

    const[ErrorPopup,setErrorPopup] = useState(false)
    const[ErrorMessage,setErrorMessage] = useState("")

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

    const handlePostBooking = async () =>{
        const response = await fetch(
            `http://localhost:5000/api/booking`,
            {
            method : "POST" ,
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({movie:movie,slot:time,seats:noofseat}),
        });

        const data = await response.json();

        setErrorPopup(true)
        setErrorMessage(data.message)

        if(response.status ===200){
            changeMovie("")
            ChangeTime("")

            setLastbooking(data.data)

            window.localStorage.clear()
        }
    }



    const handleGetBooking = async()=> {
        const response = await fetch(`http://localhost:5000/api/booking`,{
                method:"GET"
            }
        )
        const data = await response.json();

        setLastbooking(data.data)
    }

    useEffect(()=>{
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem('slot')
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if(movie){
            changeMovie(movie)
        }
        if(slot){
            ChangeTime(slot)
        }
        if(seats){
            changeNoofseat(seats)
        }
    },[])
    return (
        <BsContext.Provider 
        value={{movie,changeMovie,time,ChangeTime,noofseat,changeNoofseat,lastBooking,setLastbooking,handleGetBooking,handlePostBooking,ErrorMessage,setErrorMessage,setErrorPopup,ErrorPopup}}>
            {props.children}</BsContext.Provider>
    )
}
export default BsState;