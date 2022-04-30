import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
      
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    // auth
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     // auth end

     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     
     if(user){
        navigate(from, { replace: true });
     }

     if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
 }

      
    const handleSubmit = event =>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)

        //auth
        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = () =>{
        navigate('/register')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');
    }


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-2'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email"  placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Book Store??? <span onClick={navigateRegister} className='text-primary'>Please Register</span></p>
            <p>Forget Password??? <span onClick={resetPassword} className='text-primary'>Reset Password</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;