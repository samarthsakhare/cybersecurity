import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,

}
    from 'mdb-react-ui-kit';
import { red } from '@mui/material/colors';


function Register() {

    const [redirect, setRedirect] = useState(false);

    function onSubmit() {
        setRedirect(!redirect);
    }

    if (redirect) {
        return <Navigate to="/" />
    }

    return (
        <div className='register'>
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best offer <br />
                            <span className="text-primary">for your business</span>
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                            <MDBCardBody className='p-5'>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' type='text' />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' type='password' />

                                <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit} >sign up</MDBBtn>

                                <div className="login-buttons">
                                    <MDBBtn className='login-b1' >Sign in with Google</MDBBtn>
                                    <MDBBtn className='login-b2' >Sign in with Github</MDBBtn>
                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Register

