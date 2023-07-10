import React from 'react'
import './Alert.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Alert({type}) {
    if(type === "error"){
        return (
            <div className="alert" style={{backgroundColor: "rgb(253, 237, 237)"}}>
                    <ErrorOutlineIcon className="alertIcon" style={{color:" #ef5350"}}/>
                    <p style={{color: "rgb(95, 33, 32)"}}>Error! somthing went wrong...</p> 
            </div>
        )
    }
    if(type === "succes"){
        return (
            <div className="alert" style={{backgroundColor: "rgb(237, 247, 237)"}}>
                    <CheckCircleOutlineIcon className="alertIcon" style={{color:"#4caf50"}} />
                    <p style={{color: "rgb(30, 70, 32)"}}>Uploaded Successfully...</p> 
            </div>
        )
    }
    if(type === "invalid"){
        return (
            <div className="alert" style={{backgroundColor: "rgb(253, 237, 237)"}}>
                    <ErrorOutlineIcon className="alertIcon" style={{color:" #ef5350"}}/>
                    <p style={{color: "rgb(95, 33, 32)"}}>Invalid userID or password !</p> 
            </div>
        )
    }
    if(type === "incomplete"){
        return (
            <div className="alert" style={{backgroundColor: "rgb(253, 237, 237)"}}>
                    <ErrorOutlineIcon className="alertIcon" style={{color:" #ef5350"}}/>
                    <p style={{color: "rgb(95, 33, 32)"}}>Please fill all the Fields!</p> 
            </div>
        )
    }
    if(type === "nothing"){
        return (
            <div className="nothing"></div>
        )
    }
}

export default Alert
