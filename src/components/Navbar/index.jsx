import styles from "./index.module.scss";
import { useState } from "react";
import logo from "../Assests/Icons/logo.png";
import darkTheme from "../Assests/dark-them.png";
import lightTheme from "../Assests/light-them.png";
import menu from "../Assests/Icons/menu.png";
import useLocalStorage from "use-local-storage";
const Navbar = ({ switchTheme }) => {
	// const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
	const [show, setShow] = useState("");

	// Function to change the theme and icon
	const changeTheme = () => {
		// const newTheme = theme === "light" ? "dark" : "light";
		// setTheme(newTheme);
		switchTheme(show);
		setShow(!show);
		console.log("hello");
	};
	return (
		<div
			className={styles.container}
			// data-theme={theme}
		>
			{/* Right hand side logo */}
			<div className={styles.logo}>
				<img
					src={logo}
					alt=""
				/>
			</div>
			{/* Middle menu with items */}
			<div className={styles.menu}>
				<ul>
					<li>Home</li>
					<li>Portfolio</li>
					<li>Skills</li>
					<li>About Me</li>
				</ul>
			</div>
			{/* Controls for dark-light mode and contact button */}
			<div className={styles.controls}>
				<div
					className={styles.switchLogo}
					onClick={() => {
						changeTheme();
					}}>
					<img
						src={show ? lightTheme : darkTheme}
						alt=""
					/>
				</div>
				<button>Contact Me</button>
			</div>
			<div className={styles.hamburger}>
				<img
					src={menu}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Navbar;
