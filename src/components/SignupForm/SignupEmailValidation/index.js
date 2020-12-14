import React from 'react';
import './style.scss';

const SignupEmailValidation = ()=>{
    return (
        <div class="signupEmailValidation">
            <div class="signupEmailValidation-Message">
                <p  >Votre compte est en attente de validation. <br />
                Il vous suffit de cliquer sur le lien reçu par email. </p>
            </div>
        </div>
    )
};

export default SignupEmailValidation;