import React, { useState } from 'react'
import "./register.css"
import Alert from '../../Components/Alert/Alert';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import NavBar from '../../Components/Navbar/NavBar'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {registerUser} from '../../Redux/registerSlice';
function register() {
    const newUser = useSelector((state) => state);
    console.log(newUser);
    const dispatch = useDispatch();
    const [alertType, setAlertType] = useState("nothing");
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        phone_num: "",
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

    function postData(e){
        e.preventDefault()

        if(user.fname && user.lname && user.phone_num && user.email && user.password){
            
            dispatch(registerUser(user));
            
            setUser({
                fname: "", lname: "", phone_num: "", email: "", password: "",
            })
            setAlertType("succes");
        }else{
            setAlertType("error");
        }
    }
    
    return (
        <>
        <NavBar  style={{opacity: "1"}} />
        <div className="registerPage">

            

            <div className="registerForm">
            <h1>Create an account</h1>
            
            <div className="data-div main">
                <form>              
                <Alert type={alertType}/>
                    <div className='input-container'>
                        <div className='name-container'>
                            <input type="text" name="fname" className="fname"  placeholder="First name"
                            onChange={handleOnChange} value={user.fname}
                            />
                            <input type="text" name="lname" className="lname" placeholder="Last name"
                                onChange={handleOnChange} value={user.lname}
                            />
                        </div>
                        <input type="text" name="phone_num" className="phone-num" placeholder="Phone Number"
                        onChange={handleOnChange} value={user.phone_num}
                        />
                        <input type="email" name="email" className="email" placeholder="Email address"
                            onChange={handleOnChange} value={user.email}
                        />
                        <input type="text" name="password" className="password" placeholder="Set password"
                            onChange={handleOnChange} value={user.password} autoComplete="off"
                        />
                    </div>
                    <div className='login-line'>
                        <p>Already have an Thechie Tool account?
                            <Link to="/login">
                                <span className="login"> Log in</span>
                            </Link>
                        </p>
                    </div>
                    <div className="btn-container">
                        <Button className='payment-btn' variant="contained" onClick={postData}>
                            <span>Register</span>
                        </Button> 
                    </div> 
                </form>
            </div>
           </div> 
        </div>
    </>
    )
}

export default register
