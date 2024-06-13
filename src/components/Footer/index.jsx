import styles from "./index.module.scss";
import logo from "../Assests/Icons/logo.png";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.logoMain}>
					<img
						src={logo}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
