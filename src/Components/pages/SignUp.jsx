import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css';

const SignUp = () => {
    const [userType, setUserType] = useState('visiteur'); 

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <main className='sign-up'>
            <h1>SIGN UP</h1>
            <div className='sign-up-container'>
                <form className='sign-up-form'>
                    <label>
                        <input
                            type="radio"
                            value="visiteur"
                            checked={userType === 'visiteur'}
                            onChange={handleUserTypeChange}
                        />
                        Visiteur
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="partenaire"
                            checked={userType === 'partenaire'}
                            onChange={handleUserTypeChange}
                        />
                        Partenaire
                    </label>
                    <input type='text' placeholder='Full Name' required />
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <input type='password' placeholder='Confirm Password' required />
                    <button className='sign-up-btn' type="submit">Sign Up</button>
                </form>
            </div>
        </main>
    );
}

export default SignUp;
