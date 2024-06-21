import styles from "./index.module.scss";
import logo from "../Assests/Icons/logo.png";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoMain}>
					<img
						src={logo}
						alt=""
					/>
				</div>
        <div className={styles.menu}>
				<ul>
					<li>Home</li>
					<li>Portfolio</li>
					<li>Skills</li>
					<li>About Me</li>
				</ul>
			</div>
			</div>
		</div>
	);
};

export default Footer;
