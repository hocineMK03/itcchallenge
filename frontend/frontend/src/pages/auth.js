import React, { useState, useEffect } from 'react';
import '../styles/auth/auth.css';
import { Link,useNavigate } from 'react-router-dom';

const authapi=require('../services/authAPI')
const Auth = () => {
    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(false);
    const [user,setUser]=useState({
        username:'',
        password:'',
        email:''
    })
    const [error, setError] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/6e1cdb7149.js';
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {
        const signinButton = document.getElementById("SigninBtn");
        const signupButton = document.getElementById("SignupBtn");
        const UserName = document.getElementById("nameField");
        const title = document.getElementById("title");

        const handleSigninClick = () => {
            UserName.style.maxHeight = "0";
            title.innerText = "Sign In";
            signupButton.classList.add("disable");
            signinButton.classList.remove("disable");
            console.log("is signin")
            setIsSignUp(false)
            handleLogin()
        };

        const handleSignupClick = () => {
            UserName.style.maxHeight = "65px";
            title.innerText = "Sign Up";
            signupButton.classList.remove("disable");
            signinButton.classList.add("disable");
            console.log("is singup")
            setIsSignUp(true)
            handleLogin()
        };

        signinButton.addEventListener('click', handleSigninClick);
        signupButton.addEventListener('click', handleSignupClick);

        return () => {
            signinButton.removeEventListener('click', handleSigninClick);
            signupButton.removeEventListener('click', handleSignupClick);
        };
    }, [user]); // Empty dependency array ensures the effect runs only once




    useEffect(() => {
        console.log("User state updated:", user);
    }, [user]);
    



    const handleInputChange=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setUser((prevdata)=>({
            ...prevdata,
            [name]:value,
        }))
        setError('')

    }
    
    const handleLogin = async() => {
        console.log("Logging in with user:", user);
        console.log(isSignUp)
        if (isSignUp) {
            if (!user.username || !user.email || !user.password) {
                console.log("Please fill in all fields.");
                return;
            }
            const result = await authapi.register(user);
            if(result){
                console.log('registration success')
                navigate('/home');
                console.log("navigating")

            }
            else{
                console.log('registration failed')
                setError('inputs invalid')

            }
        } else {
            console.log("Logging in with email:", user.email, "and password:", user.password);
            if (!user.email || !user.password) {
                console.log("Please fill in all fields here.");
                return;
            }
            const { email, password } = user;
            const result =await  authapi.login({ email, password });
            if (result) {
                console.log('login success')
                console.log("navigating")
                navigate('/home');
            } else {
                console.log('login failed')
                setError('inputs invalid')
            }
        }
    };
    


    return (
        <div className="container">
            <div className="form-box">
                <h1 id="title">Sign Up</h1>
                <form>
                    <div className="input-group">
                        <div className="input-field" id="nameField">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="UserName" name='username' value={user.username} onChange={handleInputChange} />
                        </div>

                        <div className="input-field">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" name='email' value={user.email} onChange={handleInputChange}/>
                        </div>

                        <div className="input-field">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password" name='password' value={user.password} onChange={handleInputChange}/>
                        </div>
                        <p>Lost Password <a href="#">Click Here!</a></p>
                    </div>

                    <div className="btn-field">
                        <button type="button" id="SignupBtn">Sing Up</button>
                        <button type="button" id="SigninBtn" className="disable">
                            Sing in
                        </button>
                    </div>
                    <div className='errors'>
            <p id='errorshow'>{error}</p>
         </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
