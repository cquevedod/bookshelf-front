import { lazy } from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import AsideBookShelf from "components/Signin/AsideBookShelf/AsideBookShelf";
import FormHeader from "components/Signin/FormHeader/FormHeader";
import CustomForm from "components/UI/CustomForm/CustomForm";
import "../Signin.scss";

export default function ForgotPassword() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

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
    },
  ];

  const buttonProps = {
    className: "signin-button",
    type: "submit",
    label: "Reset Password",
  };

  return (
    <>
      <main className="container">
        <AsideBookShelf />
        <aside className="container__signin">
          <FormHeader title="Reset Password" />
          <CustomForm
            inputProps={inputProps}
            buttonProps={buttonProps}
            initialValues={initialValues}
          />

          <div className="container__signin--signin-link">
            <strong>Back to</strong>
            <Link className="link" to="/signin">
              Sign in
            </Link>
          </div>
          <div className="container__signin--signin-link">
            <strong>Need an account</strong>
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
