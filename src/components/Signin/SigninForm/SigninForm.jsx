import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

function SigninForm({ initialValues, inputProps, buttonProps }) {
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
        await sleep(1000);
        alert(JSON.stringify(values.email, null, 2));
      }}
    >
      {({
        isSubmitting,
        values,
        isValid,
        dirty,
        errors,
        touched,
        setErrors
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
