import bookshelves from "assets/images/signin/bookshelves.svg";
import waveBg from "assets/images/signin/wave-bg.png";
import "./AsideBackground.scss";

export default function AsideBackground() {
  return (
    <>
      <img
        loading="lazy"
        className="container__background-img"
        src={waveBg}
        alt="blue-wave img"
      />
      <aside className="container__img-over-background">
        <img
          loading="lazy"
          className="bookshelves-img"
          src={bookshelves}
          alt="bookshelves img"
        />
      </aside>
    </>
  );
}
