import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<Wrapper />
		</div>
	);
};

export default Hero;
