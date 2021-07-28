import { lazy } from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import AsideBookShelf from "components/Signin/AsideBookShelf/AsideBookShelf";
import FormHeader from "components/Signin/FormHeader/FormHeader";
import CustomForm from "components/UI/CustomForm/CustomForm";
import "../Signin.scss";

export default function Signin() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "none",
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
  ];

  const buttonProps = {
    className: "signin-button",
    type: "submit",
    label: "Sign In",
  };

  return (
    <>
      <main className="container">
        <AsideBookShelf />
        <aside className="container__signin">
          <FormHeader title="Sign In" />
          <CustomForm
            inputProps={inputProps}
            buttonProps={buttonProps}
            initialValues={initialValues}
          />
          <div className="container__signin--forgot-link">
            <Link className="link" to="/forgotpassword">
              <strong>Forgot Password?</strong>
            </Link>
          </div>
          <div className="container__signin--signin-link">
            <strong>Need an account?</strong>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
