import avatar from "assets/images/signin/avatar.svg";
import "./FormHeader.scss";

export default function FormHeader({ title = "" }) {
  return (
    <>
      <div className="container__signin--top-wrapper">
        <img
          loading="lazy"
          className="container__signin--avatar"
          src={avatar}
          alt="avatar img"
        />
        <h2 className="container__signin--title">{title}</h2>
      </div>
    </>
  );
}
