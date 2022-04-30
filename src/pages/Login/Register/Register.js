import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='register'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' /><br />
                <input type="email" name="" id="" placeholder='Your Email' required/><br />
                <input type="password" name="" id="" placeholder='Your Password' required/><br />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an Account??? <span onClick={navigateLogin} className='text-danger'>Please Login</span></p>
        </div>
    );
};

export default Register;