import styles from "./index.module.scss";

const NavbarItems = () => {
	return (
		<ul className={styles.navbarItems}>
			<li>Home</li>
			<li>Portfolio</li>
			<li>Skills</li>
			<li>About Me</li>
		</ul>
	);
};

export default NavbarItems;
