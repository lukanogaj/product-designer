import styles from "./index.module.scss";
import logo from "../Assests/Icons/logo.png";
import switchLogo from "../Assests/Icons/switchmode.png";

const Navbar = () => {
	const handleDarkMode = () => {
		console.log("clicked");
	};
	return (
		<div className={styles.container}>
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
					onClick={() => handleDarkMode()}>
					<img
						src={switchLogo}
						alt=""
					/>
				</div>
				<button>
					{/* // onClick={() => handleDarkMode()} */}
					Contact Me
				</button>
			</div>
		</div>
	);
};

export default Navbar;
