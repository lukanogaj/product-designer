import styles from "./index.module.scss";
import useLocalStorage from "use-local-storage";
import logo from "../Assests/Icons/logo.png";
import switchLogo from "../Assests/Icons/switchmode.png";
import NavbarItems from "../NavbarItems";

const Navbar = () => {
	const handleDarkMode = () => {
		console.log("clicked");
	};
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
				<div
					className={styles.switchLogo}
					onClick={() => handleDarkMode()}>
					<img
						src={switchLogo}
						alt=""
					/>
				</div>
				<button className={styles.btnNavbar}>
					{/* // onClick={() => handleDarkMode()} */}
					Contact Me
				</button>
			</div>
		</div>
	);
};

export default Navbar;
