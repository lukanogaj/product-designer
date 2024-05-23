import styles from "./index.module.scss";
import logo from "../Assests/Icons/logo.png";
import switchLogo from "../Assests/Icons/switchmode.png";
import NavbarItems from "../NavbarItems";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.logoMain}>
				<img
					src={logo}
					alt=""
				/>
			</div>
			<NavbarItems />
			<div className={styles.controlMode}>
				<div className={styles.switchLogo}>
					<img
						src={switchLogo}
						alt=""
					/>
				</div>
				<button className={styles.button}>Contact Me</button>
			</div>
		</div>
	);
};

export default Navbar;
