import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import imgMobile from "../assets/images/illustration-sign-up-mobile.svg";


export default function SignUp({ setEmail }) {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        onSubmit: values => {
            setEmail(values.email);
        },
    });

    return (
        <div className='sign-up'>
            <div className='sign-up_container'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <form onSubmit={formik.handleSubmit}>
                    <div className="info">
                        <label htmlFor='email'>Email address</label>
                        {formik.touched.email && formik.errors.email ? (
                            <span id='Error'>{formik.errors.email}</span>
                        ) : null}
                    </div>
                    <input
                        className={formik.touched.email && formik.errors.email ? 'error' : ''}
                        type="text"
                        placeholder="email@company.com"
                        name='email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoFocus
                    />
                    <button type="submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
            <div className="img-container">
                <picture>
                    <source media="(max-width: 768px)" srcSet={imgMobile} />
                    <img src={imgDesktop} alt="Illustration" />
                </picture>
            </div>
        </div>
    );
}
