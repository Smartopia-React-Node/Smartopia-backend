import React, { useEffect, useState } from 'react'
import "./addAdmin.css";
import Alert from '../Alert/Alert'
import { Button, FormControl } from '@mui/material'
import axios from 'axios';
function AddAdmin() {
    const [alertType, setAlertType] = useState("nothing");
    
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        phone_num: "",
        email: "",
        password: "",
        isAdmin: true,
        mainAdmin: false
    })

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
        setAlertType("nothing");
    }

    async function postData(e){
        e.preventDefault()

        if(user.fname && user.lname && user.phone_num && user.email && user.password){
            await axios.post("https://ttool-test.onrender.com/api/auth/register", user).then((res)=>{
                setUser({
                    fname: "", lname: "", phone_num: "", email: "", password: "",
                })
            }).catch((err)=>{
                setAlertType("error");
                console.log(err);
            })
            setAlertType("succes");
        }else{
            setAlertType("incomplete");
        }
    }

  return (
    <div className='add-glossary-container overlay'>
        <Alert type={alertType}/>
        <div className='header'>
        <h2 >Add New Admin</h2>
          <Button className='payment-btn' variant="contained" onClick={postData} >
            <span>Add</span>
          </Button> 
      </div>
      <div className="data-div">
                <form>              

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
                </form>
            </div>
       
    </div>
  )
}

export default AddAdmin