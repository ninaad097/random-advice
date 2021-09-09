import {  Button, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import "../App.css"
export const Home = () => {
    return (
        <div className="App">
            <div className="stuff">
         
            <Typography className="text" gutterBottom variant="h1">Need a random advice?</Typography>
            <Button className="btn"><Link to="/advice" className="link" >Yes I need</Link></Button>

            </div>
        </div>
    )
}