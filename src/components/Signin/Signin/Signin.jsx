import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AsideBackground from "../AsideBackground/AsideBackground";
import FormHeader from "../FormHeader/FormHeader";
import SigninForm from "../SigninForm/SigninForm";
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
  ];

  const buttonProps = {
    styleName: "submit-button",
    type: "submit",
    label: "Sign In",
  };

  return (
    <>
      <main className="container">
        <AsideBackground />
        <aside className="container__form-wrapper">
          <FormHeader title="Sign In" />
          <SigninForm
            inputProps={inputProps}
            buttonProps={buttonProps}
            initialValues={initialValues}
          />
          <div className="container__form-wrapper--forgot-link">
            <Link className="link" to="/forgotpassword">
              <strong>Forgot Password?</strong>
            </Link>
          </div>
          <div className="container__form-wrapper--signin-link">
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
