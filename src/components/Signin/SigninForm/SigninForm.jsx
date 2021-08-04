import React, { useState } from "react";
import { Formik, Form } from "formik";
import { signin } from '../../../services/auth';
import { useHistory } from "react-router-dom"
import * as Yup from "yup";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

function SigninForm({ initialValues, inputProps, buttonProps, request }) {

  const [error, setError] = useState("")
  const history = useHistory()
  const { confirmPassword } = initialValues;

  let SignupSchema;
  if (confirmPassword === "none") {
    SignupSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required")
    });
  } else {
    SignupSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
    });
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values) => {
        // await sleep(1000);
        // alert(JSON.stringify(values.email, null, 2));
        if (request === 'signin') {
          signin(values)
            .then(response => {
              localStorage.setItem('userAuthenticated', JSON.stringify(response.data));
            })
            .catch(error => {
              setError(error.response.data.message); //error could be shown with swal
            })
          history.push("/");
        }
      }}
    >
      {({
        isSubmitting,
        values,
        isValid,
        dirty,
        errors,
        touched,
        setErrors,
        handleChange
      }) => (
        <Form className="form-component">
          {inputProps.map(({ name, inputType, styleName, placeholder, icon }, index) => (
            <>
              <Input
                name={name}
                type={inputType}
                styleName={styleName}
                placeholder={placeholder}
                icon={icon}
                setErrors={setErrors}
                key={index}
              />
            </>
          ))}

          <Button
            disabled={isSubmitting}
            styleName={buttonProps.styleName}
            type={buttonProps.type}
          >
            {buttonProps.label}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SigninForm;
