import React, { lazy, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import waveBg from '../../../assets/images/signin/wave-bg.png'
import bookshelves from '../../../assets/images/signin/bookshelves.svg'
import avatar from '../../../assets/images/signin/avatar.svg'
import './Signup.scss'

const Input = lazy(() => import('../../UI/Input/SigninInput/Input'))

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.log("Passwords do not match")
        }
        console.log('Do something')
    }

    return (
        <>
            <img loading='lazy' className="blue-wave-img" src={waveBg} alt="blue-wave img" />
            <main className="container">
                <aside className="container-img">
                    <img loading='lazy' className="bookshelves-img" src={bookshelves} alt="bookshelves img" />
                </aside>
                <aside className="container__signup">
                    <form onSubmit={handleSubmit}>
                        <img loading='lazy' className="avatar-img" src={avatar} alt="avatar img" />
                        <h2 className="signup-title">Welcome</h2>
                        <Input
                            containerClass={"email-container"}
                            placeholder={"Email"}
                            inputType={"email"}
                            icon={faUser}
                            ref={emailRef}
                        />
                        <Input
                            containerClass={"password-container"}
                            placeholder={"Password"}
                            inputType={"password"}
                            icon={faLock}
                            ref={passwordRef}
                        />

                        <Input
                            containerClass={"password-container__confirm"}
                            placeholder={"Confirm Password"}
                            inputType={"password"}
                            icon={faLock}
                            ref={passwordConfirmRef}
                        />
                        <button className="signup-button" type="submit">Sign Up</button>
                    </form>
                    <div className="signin-link">
                        <strong>Already have an account?</strong> <Link to="/login" className="link">Sign In</Link>
                    </div>
                </aside>
            </main>
        </>
    )
};
