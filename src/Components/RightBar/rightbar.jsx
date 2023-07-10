import React from 'react'
import './rightbar.css'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import { Link } from 'react-router-dom';
function rightbar() {
  return (
    <div className='right-bar'>
        <div className='cname-box'>
            <BuildCircleOutlinedIcon className='clogo'/>
            <h2 className='cname'>
                TTOOL
            </h2>
        </div>
        <div className='options-container'>
            <Link to='/admin/dashboard'>
                <div className='option-box'>
                    <span className='option'>Banner</span>
                </div>
            </Link>
            <Link to='/admin/category'>
                <div className='option-box'>
                    <span className='option'>Category</span>
                </div>
            </Link>
            <Link to='/admin/submission'>
                <div className='option-box'>
                    <span className='option'>Submission</span>
                </div>
            </Link>
            <Link to='/admin/tools'>
                <div className='option-box'>
                    <span className='option'>Tools</span>
                </div>
            </Link>
            <Link to='/admin/glossary'>
                <div className='option-box'>
                    <span className='option'>Glossary</span>
                </div>
            </Link>
            <Link to='/admin/tutorials'>
                <div className='option-box'>
                    <span className='option'>Tutorials</span>
                </div>
            </Link>
            <Link to='/admin/newAdmin'>
                <div className='option-box'>
                    <span className='option'>Admins</span>
                </div>
            </Link>
            <Link to='/login'>
                <div className='option-box'>
                    <span className='option'>Log out</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default rightbar