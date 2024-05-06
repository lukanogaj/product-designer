import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Main from "../Main";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<Main />
		</div>
	);
};

export default Hero;
