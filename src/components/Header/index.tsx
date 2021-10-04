import { SignInButton } from "../SignInButton";
import s from "./styles.module.scss";

export function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a className={s.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
