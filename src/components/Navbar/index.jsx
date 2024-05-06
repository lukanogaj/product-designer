import styles from "./index.module.scss";
import logo from "../Assests/Icons/logo.png";
import switchLogo from "../Assests/Icons/switchmode.png";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.logoMain}>
				<img src={logo} alt="" />
			</div>
			<div className={styles.navbarItems}>
				<div>Home</div>
				<div>Portfolio</div>
				<div>Skills</div>
				<div>About Me</div>
			</div>

			<div className={styles.controlMode}>
				<div className={styles.switchLogo}>
					<img src={switchLogo} alt="" />
				</div>
				<button className={styles.button}>Contact Me</button>
			</div>
		</div>
	);
};

export default Navbar;
