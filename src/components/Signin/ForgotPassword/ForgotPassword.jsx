import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AsideBackground from "../AsideBackground/AsideBackground";
import FormHeader from "../FormHeader/FormHeader";
import SigninForm from "../SigninForm/SigninForm";
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
      styleName: "email-container",
      placeholder: "Email",
      inputType: "email",
      icon: faUser,
    },
    {
      name: "password",
      styleName: "password-container",
      placeholder: "Password",
      inputType: "password",
      icon: faLock,
    },
    {
      name: "confirmPassword",
      styleName: "password-container__confirm",
      placeholder: "Confirm Password",
      inputType: "password",
      icon: faLock,
    },
  ];

  const buttonProps = {
    styleName: "submit-button",
    type: "submit",
    label: "Reset Password",
  };

  return (
    <>
      <main className="container">
        <AsideBackground />
        <aside className="container__form-wrapper">
          <FormHeader title="Reset Password" />
          <SigninForm
            inputProps={inputProps}
            buttonProps={buttonProps}
            initialValues={initialValues}
          />

          <div className="container__form-wrapper--signin-link">
            <strong>Back to</strong>
            <Link className="link" to="/signin">
              Sign in
            </Link>
          </div>
          <div className="container__form-wrapper--signup-link">
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
