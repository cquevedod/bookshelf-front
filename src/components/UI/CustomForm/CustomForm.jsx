import React from "react";
import { Formik, Form } from "formik";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import Input from "../Input/SigninInput/Input";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomForm.scss";

function CustomForm({ initialValues, inputProps, buttonProps }) {
  const { confirmPassword } = initialValues;

  let SignupSchema;
  if (confirmPassword === "none") {
    SignupSchema = Yup.object().shape({
      password: Yup.string()
        .min(6, "The password must be at least 6 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    });
  } else {
    SignupSchema = Yup.object().shape({
      password: Yup.string()
        .min(6, "The password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(6, "The password must be at least 6 characters")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      email: Yup.string().email("Invalid email").required("Required"),
    });
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await sleep(1000);
        alert(JSON.stringify(values.email, null, 2));
      }}
    >
      {({ isSubmitting, values, isValid, dirty, errors, touched }) => (
        <Form className="form-component">
          {inputProps.map((el, index) => (
            <>
              <Input
                name={el.name}
                type={el.inputType}
                className={el.className}
                placeholder={el.placeholder}
                icon={el.icon}
                key={index}
              />
              {errors[el.name] && touched[el.name] ? (
                <div className="errors">
                  <FontAwesomeIcon
                    className="icon-error"
                    icon={faExclamationCircle}
                  />
                  {errors[el.name]}
                </div>
              ) : null}
            </>
          ))}

          <Button
            disabled={!isValid}
            className={buttonProps.className}
            type={buttonProps.type}
          >
            {buttonProps.label}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
