import { Paper, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import "../App.css"
import axios from "axios"

export const Advice = () => {
    const [ad , setAd] = useState(null)

    useEffect(() => {
     axios.get('https://api.adviceslip.com/advice')
     .then((res) => {
         setAd(res.data)
         console.log(res.data)
     
     })
     .catch((error) => {
         console.log(error);
     })
    } , [])
    return (
    
            <div>
           <Paper className="paper">
               <Typography className="text" variant="h2">Uk what...</Typography>
               <Typography className="advice" variant="h2" align="center" >{ ad && ad.slip.advice}</Typography>
           </Paper>
        </div>
    
    )
}
