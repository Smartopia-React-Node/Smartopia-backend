import React, { useState } from 'react'
import "../Register/register.css"
import Alert from '../../Components/Alert/Alert';
import Button from '@mui/material/Button';
import { Link, useNavigate, } from "react-router-dom";
import NavBar from '../../Components/Navbar/NavBar'
import axios from 'axios';


function login() {
    const navigate = useNavigate()
    const [alertType, setAlertType] = useState("nothing");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    async function handleLogin(e){
        e.preventDefault()

        if(user.email && user.password){
            setLoading(true)
            await axios.post("https://ttool-test.onrender.com/api/auth/login",{
                email: user.email,
                password: user.password
            }).then((res)=>{
                setLoading(false)
                setAlertType("succes");
                
                if(res.data.isAdmin)navigate(`/admin/tools`)
                else navigate(`/`)
            }).catch((err)=>{
                console.log(err);
                setLoading(false)
                setAlertType("invalid");
            })

        }else{
            setAlertType("incomplete");
        }
    }
    
    return (
        <>
        <NavBar  style={{opacity: "1"}} />
        <div className='row m-0 mar-control-other'>
            <div className='col-md-8 left-login'>
                <div className='row'>
                <h2 className='log-header'>Techi Tools</h2>
                </div>
                    <div className='row'>
                    <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/639bc4c3ba62961a34105d77_ChatGPT.jpeg' />
                            <h2>ChatGPT (OpenAI)</h2>
                           <p>ChatGPT is a variant of the GPT (Generative Pre-training Transformer) language model that has been fine-tuned for the task of conversational language modeling. </p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/63def8a8e1b44900cc5e6040_Social_Thumbnail.png' />
                            <h2>Yoodli</h2>
                           <p>Yoodli is an AI speech coaching tool that provides personalized and private feedback on visual, verbal, and vocal delivery</p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/63e0957b260986190460e768_https%253A%252F%252Fs3.amazonaws.com%252Fappforest_uf%252Ff1673980449571x222731667953549380%252FNew%252520Project%252520-%2525202023-01-04T170208.193%252520%2525281%252529%252520%2525281%252529-p-2600.jpeg' />
                            <h2>Finalle.ai</h2>
                           <p>Finalle.ai is a financial intelligence platform powered by New-Media data and Gen. AI tech.</p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/639bc4c29fbc3164ef3bcef4_enhancespeech-thumbnail-small%401x.9787c296594f24c0afc0.png' />
                            <h2>Adobe Speech Enhancer</h2>
                           <p>Remove noise from voice recordings with speech enhancement. Speech enhancement makes voice recordings sound as if they were recorded in a professional studio.</p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/639b940e6533ae338c152ce5_63931d110aa6200b7694a3ec_rokoko.com%2520homepage.jpeg' />
                            <h2>Rokoko</h2>
                           <p>Rokoko provides a variety of motion capture tools and services to enable users to create more realistic and immersive animations. The tools range from full performance capture, Smartsuit Pro II, Smartgloves and Face Capture, to the free Rokoko Video tool which allows users to animate with their webcam in minutes. Real-time tracking is also available to further enhance the animation experience.</p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className="card techiai-img p-2">
                            <img src='https://uploads-ssl.webflow.com/63994dae1033718bee6949ce/63c1ab62dee61430b7fd1030_it2Lxn3l_400x400.jpg' />
                            <h2>Godly</h2>
                           <p>Godly is a tool that makes it easy to add personalized data to GPT3 for more powerful AI experiences. It offers a setup in minutes, relevant results, instant chat bots, easy debugging, and an easy-to-use SDK. With Godly, builders can quickly integrate context to their GPT3 completions and future-proof their context. </p>
                        </div>
                        </div>
                        
                    </div>
            </div>
            <div className='col-md-4 p-0'>
            <div className="registerPage">

                

<div className="registerForm">
<h1>Welcome Back</h1>

<div className="data-div">
    <form>              
    <Alert type={alertType}/>
        <div className='input-container pl-4 pr-4'>
            <input type="email" name="email" className="email mb-3" placeholder="Email address"
                onChange={handleOnChange} value={user.email}
            />
            <input type="password" name="password" className="password mb-3" placeholder="Password"
                onChange={handleOnChange} value={user.password} autoComplete="off"
            />
        </div>
        
        <div className="btn-container">
            <button className='link-login p-2'
            onClick={handleLogin}>
                {loading? "Loading..." : "Log In"}
            </button> 
        </div> 
    </form>
</div>
</div> 
</div>
</div>
</div>
    </>
    )
}

export default login
