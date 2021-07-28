import { lazy } from "react";
import { Link, useHistory } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import AsideBookShelf from "components/Signin/AsideBookShelf/AsideBookShelf";
import FormHeader from "components/Signin/FormHeader/FormHeader";
import CustomForm from "components/UI/CustomForm/CustomForm";
import "../Signin.scss";

export default function Signup() {
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
    label: "Sign Up",
  };

  return (
    <>
      <main className="container">
        <AsideBookShelf />
        <aside className="container__signin">
          <FormHeader title="Welcome" />
          <CustomForm
            inputProps={inputProps}
            buttonProps={buttonProps}
            initialValues={initialValues}
          />
          <div className="container__signin--signin-link">
            <strong>Already have an account?</strong>
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
