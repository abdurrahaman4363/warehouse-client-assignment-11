import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    // auth
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      // auth end



    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }

    if(user){
        navigate('/home')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name,email,password);

        // auth
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' /><br />
                <input type="email" name="email" id="" placeholder='Your Email' required/><br />
                <input type="password" name="password" id="" placeholder='Your Password' required/><br />
                <input className='bg-dark text-white' type="submit" value="Register" />

            </form>
            <p>Already have an Account??? <span onClick={navigateLogin} className='text-danger'>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;