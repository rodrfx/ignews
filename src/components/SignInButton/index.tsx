import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import s from "./styles.module.scss";

export function SignInButton() {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <button type="button" className={s.signInButton}>
      <FaGithub color="#04d361" />
      Rodrigo Xavier
      <FiX color="#737380" className={s.closeIcon} />
    </button>
  ) : (
    <button type="button" className={s.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
