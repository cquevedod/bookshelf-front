import bookshelves from "assets/images/signin/bookshelves.svg";
import waveBg from "assets/images/signin/wave-bg.png";
import "./AsideBookShelf.scss";

export default function AsideBookShelf() {
  return (
    <>
      <img
        loading="lazy"
        className="background-img"
        src={waveBg}
        alt="blue-wave img"
      />
      <aside className="container__left-img">
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
