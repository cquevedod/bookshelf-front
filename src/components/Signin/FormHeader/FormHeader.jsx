import avatar from "assets/images/signin/avatar.svg";
import "./FormHeader.scss";

export default function FormHeader({ title = "" }) {
  return (
    <>
      <div className="container__form-wrapper--top-wrapper">
        <img
          loading="lazy"
          className="top-wrapper--avatar"
          src={avatar}
          alt="avatar img"
        />
        <h2 className="top-wrapper--title">{title}</h2>
      </div>
    </>
  );
}
