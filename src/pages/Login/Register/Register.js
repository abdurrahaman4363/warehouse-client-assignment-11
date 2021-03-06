import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';


const Register = () => {

    const [agree, setAgree]=useState(false);
    // auth
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user)
    // auth end

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home')
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
            // auth
         await createUserWithEmailAndPassword(email, password);

         await updateProfile({ displayName:name});
        //   alert('Updated profile');
          navigate('/home')
        


    }
    return (
        <div className='register'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' /><br />
                <input type="email" name="email" id="" placeholder='Your Email' required /><br />
                <input type="password" name="password" id="" placeholder='Your Password' required /><br />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={ `ps-2 ${agree ? '': 'text-danger'}`} htmlFor="terms">Accept Book Store Conditions</label>
                <input
                disabled={!agree}
                 className='bg-dark text-white w-50 mx-auto my-3' 
                 type="submit" 
                 value="Register" />

            </form>
            <p>Already have an Account??? <span onClick={navigateLogin} className='text-primary'>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;