import React, { lazy } from 'react'
import { Formik, Form } from 'formik'
const Input = lazy(() => import('../Input/SigninInput/Input'))
const Button = lazy(() => import('../Button/Button'))


function CustomForm({ initialValues, inputProps, buttonProps }) {

    function isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    }

    //Just a temporal validation
    function checkForm({ email, password, confirmPassword }) {
        let isValid = false
        if (email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
            if ((password === confirmPassword) && isValidEmail(email)) {
                isValid = true
            }
        }
        return isValid
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async values => {
                await sleep(1000);
                alert(JSON.stringify(values.email, null, 2));
            }}
        >
            {({ isSubmitting, values, isValid, dirty }) => (

                <Form className="form-component">
                    {inputProps.map((el, index) => (
                        <Input
                            name={el.name}
                            type={el.inputType}
                            className={el.className}
                            placeholder={el.placeholder}
                            icon={el.icon}
                            key={index}
                        />
                    ))}
                    <Button disabled={!(isValid && dirty && checkForm(values)) || isSubmitting} className={buttonProps.className} type={buttonProps.type}>{buttonProps.label}</Button>
                </Form>
            )}
        </Formik>
    )
};

export default CustomForm