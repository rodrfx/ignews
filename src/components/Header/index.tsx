import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import s from "./styles.module.scss";

export function Header() {
	return (
		<header className={s.headerContainer}>
			<div className={s.headerContent}>
				<img src="/images/logo.svg" alt="ig.news" />

				<nav>
					<ActiveLink activeClassName={s.active} href="/">
						<a>Home</a>
					</ActiveLink>

					<ActiveLink activeClassName={s.active} href="/posts">
						<a>Posts</a>
					</ActiveLink>
				</nav>
				<SignInButton />
			</div>
		</header>
	);
}
