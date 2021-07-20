import { lazy } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import waveBg from '../../../assets/images/signin/wave-bg.png'
import bookshelves from '../../../assets/images/signin/bookshelves.svg'
import avatar from '../../../assets/images/signin/avatar.svg'
import './Signup.scss'

const CustomForm = lazy(() => import('../../UI/CustomForm/CustomForm'))

export default function Signup() {

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const inputProps = [
        {
            name: "email",
            className: "email-container",
            placeholder: "Email",
            inputType: "email",
            icon: faUser,
        },
        {
            name: "password",
            className: "password-container",
            placeholder: "Password",
            inputType: "password",
            icon: faLock,
        },
        {
            name: "confirmPassword",
            className: "password-container__confirm",
            placeholder: "Confirm Password",
            inputType: "password",
            icon: faLock,
        }
    ]

    const buttonProps = {
        className: 'signup-button',
        type: 'submit',
        label: 'Sign Up'
    }

    return (
        <>
            <img loading='lazy' className="background-img" src={waveBg} alt="blue-wave img" />
            <main className="container">
                <aside className="container__left-img">
                    <img loading='lazy' className="bookshelves-img" src={bookshelves} alt="bookshelves img" />
                </aside>
                <aside className="container__signup">
                    <div className="container__signup--top-wrapper">
                        <img loading='lazy' className="container__signup--avatar" src={avatar} alt="avatar img" />
                        <h2 className="container__signup--title">Welcome</h2>
                    </div>

                    <CustomForm
                        inputProps={inputProps}
                        buttonProps={buttonProps}
                        initialValues={initialValues}
                    />
                    <div className="container__signup--signin-link">
                        <strong>Already have an account?</strong> <Link className="link" to="/login">Sign In</Link>
                    </div>
                </aside>
            </main>
        </>
    )
};
