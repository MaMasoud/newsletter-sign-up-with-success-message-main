import React from 'react'
import icon from "../assets/images/icon-success.svg"

export default function Message({ email, setEmail }) {
    return (
        <div className='messege'>
            <img src={icon} alt="Success icon" />
            <h1>Thank for subscribing!</h1>
            <p>
                A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={() => setEmail('')}>Dismiss message</button>
        </div>
    )
}
