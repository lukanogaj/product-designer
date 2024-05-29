import styles from "./index.module.scss";
import NavbarItems from "../NavbarItems";
import logo from "../Assests/Icons/logo.png";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div>
					<div className={styles.logoMain}>
						<img
							src={logo}
							alt=""
						/>
					</div>
				</div>
				<NavbarItems />
			</div>
		</div>
	);
};

export default Footer;
