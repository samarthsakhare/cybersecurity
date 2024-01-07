import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Login() {

    const [redirect, setRedirect] = useState(false);

    function onSubmit() {
        setRedirect(!redirect);
    }

    if (redirect) {
        return <Navigate to="/" />
    }

    return (
        <div className='login'>
            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6' className='left-container'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="404" />
                    </MDBCol>

                    <MDBCol col='4' md='5' className='right-container'>


                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />


                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" onClick={onSubmit} >Sign in</MDBBtn>

                        <div className="login-buttons">
                            <MDBBtn className='login-b1' >Sign in with Google</MDBBtn>
                            <MDBBtn className='login-b2' >Sign in with Github</MDBBtn>
                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Login

