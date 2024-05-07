import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import WorkEfficiency from "../WorkEfficiency";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<Wrapper />
			<WorkEfficiency />
		</div>
	);
};

export default Hero;
